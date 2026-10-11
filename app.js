const scenarios = {
  occluded: {
    title: "Hold — road ahead unknown",
    copy: "The truck blocks the forward view. The unseen section remains unknown; available evidence cannot establish that the opposing lane is clear.",
    state: "UNKNOWN", confidence: "INSUFFICIENT", action: "WAIT", quality: "Limited", bar: 28, color: "#ffbf69",
    icon: "?", zone: true, oncoming: false, parked: false, truck: true
  },
  oncoming: {
    title: "Do not overtake — traffic detected",
    copy: "A vehicle is represented in the opposing lane. The scenario flags a potential conflict; the interface does not infer a safe passing window.",
    state: "OCCUPIED", confidence: "DETECTED", action: "DO NOT PASS", quality: "High detection", bar: 88, color: "#ff777e",
    icon: "×", zone: false, oncoming: true, parked: false, truck: true
  },
  degraded: {
    title: "Hold — sensor evidence conflicts",
    copy: "Camera and radar observations are treated as unreliable or inconsistent in this scenario. RUNWAY preserves uncertainty instead of presenting a confident clearance.",
    state: "UNKNOWN", confidence: "LOW / CONFLICT", action: "WAIT", quality: "Degraded", bar: 16, color: "#ffbf69",
    icon: "?", zone: true, oncoming: false, parked: false, truck: true
  },
  parked: {
    title: "Hazard candidate — stationary vehicle",
    copy: "A stationary vehicle is represented ahead. The system should distinguish a vehicle from benign roadside objects, while keeping the occluded region unknown.",
    state: "OCCUPIED", confidence: "CANDIDATE", action: "ASSESS", quality: "Partial evidence", bar: 54, color: "#ffbf69",
    icon: "!", zone: true, oncoming: false, parked: true, truck: false
  }
};

const buttons = document.querySelectorAll(".scenario-button");
const statusIcon = document.getElementById("statusIcon");
const statusTitle = document.getElementById("statusTitle");
const statusCopy = document.getElementById("statusCopy");
const metricState = document.getElementById("metricState");
const metricConfidence = document.getElementById("metricConfidence");
const metricAction = document.getElementById("metricAction");
const qualityLabel = document.getElementById("qualityLabel");
const qualityBar = document.getElementById("qualityBar");
const unknownZone = document.getElementById("unknownZone");
const oncomingCar = document.getElementById("oncomingCar");
const parkedCar = document.getElementById("parkedCar");
const screenTruck = document.getElementById("screenTruck");

function setScenario(key) {
  const s = scenarios[key];
  if (!s) return;
  buttons.forEach(button => {
    const selected = button.dataset.scenario === key;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  statusIcon.textContent = s.icon;
  statusIcon.style.color = s.color;
  statusIcon.style.borderColor = `${s.color}88`;
  statusIcon.style.background = `${s.color}10`;
  statusTitle.textContent = s.title;
  statusCopy.textContent = s.copy;
  metricState.textContent = s.state;
  metricConfidence.textContent = s.confidence;
  metricAction.textContent = s.action;
  [metricState, metricConfidence, metricAction].forEach(el => el.style.color = s.color);
  qualityLabel.textContent = s.quality;
  qualityBar.style.width = `${s.bar}%`;
  qualityBar.style.background = s.color;
  unknownZone.style.display = s.zone ? "flex" : "none";
  oncomingCar.style.display = s.oncoming ? "block" : "none";
  parkedCar.style.display = s.parked ? "block" : "none";
  screenTruck.style.display = s.truck ? "block" : "none";
}

buttons.forEach(button => {
  button.setAttribute("aria-pressed", String(button.classList.contains("active")));
  button.addEventListener("click", () => setScenario(button.dataset.scenario));
});

// Respect reduced-motion preferences for browser-native scrolling and animations.
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.documentElement.style.scrollBehavior = "auto";
}
