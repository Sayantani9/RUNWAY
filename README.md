# RUNWAY V3 | MoRTH Real-Life Overtaking & Simulation Lab

**An Interactive Indian Road Safety, Overtaking Decision & Multi-Sensor Simulation Platform**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Explore%20RUNWAY-00C853?style=for-the-badge)](https://runway-nine-green.vercel.app/)
![Version](https://img.shields.io/badge/Version-3.0-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Research%20Prototype-orange?style=for-the-badge)
![Platform](https://img.shields.io/badge/Platform-Web%20Based-black?style=for-the-badge)

**Live Application:** https://runway-nine-green.vercel.app/

---

## 1. Overview

RUNWAY V3 is a browser-based Indian road safety simulation laboratory designed to explore intelligent overtaking decisions, driver awareness, multi-sensor visualization, and hazard identification under dynamic road conditions.

Inspired by Indian highway environments and vehicle classifications, RUNWAY recreates challenging driving situations where visibility, road geometry, vehicle movement, and incomplete sensor observations influence overtaking decisions.

The platform allows users to take control of a simulated vehicle, navigate different road environments, switch between camera perspectives, experiment with daylight and infrared night-vision modes, and evaluate different hazard scenarios.

Its central philosophy is:

> **The road ahead isn't always visible. Don't guess. Make the unknown visible.**

RUNWAY emphasizes a critical principle in intelligent transportation systems: when available evidence is insufficient to establish that a road segment is safe, the system should preserve an UNKNOWN state rather than incorrectly declaring it clear.

## 2. Problem Statement

Overtaking on Indian highways can be particularly challenging because of:

- Large vehicles obstructing visibility of the opposing lane.
- Unexpected oncoming traffic.
- Poor illumination and adverse visibility conditions.
- Stationary vehicles and roadside obstacles.
- Inconsistent or conflicting sensor observations.
- Human reaction time and incorrect judgment of available overtaking space.

Conventional visual judgment can be unreliable when the road ahead is partially or completely occluded.

RUNWAY explores how a multi-layer road-state representation and scenario-based simulation can help investigate these challenges.

## 3. Objectives

1. Simulate realistic Indian highway and ghat-road driving conditions.
2. Demonstrate different vehicle categories and driving perspectives.
3. Explore overtaking decisions under partial visibility and uncertainty.
4. Visualize camera, radar-like ranging, and lane-state information.
5. Demonstrate sensor-fusion-inspired hazard assessment.
6. Examine how conflicting observations should influence safety advisories.
7. Provide configurable scenarios for testing different road conditions.
8. Establish a foundation for future real-time sensor integration and intelligent driver assistance research.

## 4. Key Features

### A. Interactive Driver Simulation

- Browser-based driving simulation.
- NH-48 expressway and ghat-road environments.
- Multiple vehicle classes.
- Real-time simulation controls.
- Acceleration, braking, steering, and overtaking inputs.
- Start, pause, and reset functionality.

### B. Six Camera Perspectives

| Camera | Perspective |
|---|---|
| Cockpit POV | Driver's perspective |
| Chase Cam | Rear-following perspective |
| Bonnet Cam | Front vehicle perspective |
| Aerial UAV | Elevated road overview |
| Left Blindspot | Left-side visibility |
| Rearward ADAS | Rearward observation |

### C. Day and Night Vision

- Daylight driving simulation.
- Infrared-inspired night-vision mode.
- Visibility-quality configuration.
- Exploration of degraded visual conditions.

### D. Multi-Sensor Visualization

RUNWAY presents four conceptual observation layers:

**1. Camera Layer**
- Road edges.
- Vehicle candidates.
- Parked-object cues.
- Occlusion boundaries.

**2. Radar / Range Layer**
- Relative-motion candidates.
- Distance and range cues.
- Synthetic signal markers.

**3. Lane Model**
- Lane-aligned road-state representation.
- Observed free regions.
- Occupied regions.
- Unknown regions.

**4. Sensor Fusion Layer**
- Conflicting observation handling.
- Confidence degradation.
- Unknown-state preservation.

### E. Scenario-Based Testing

The platform provides four primary scenario profiles:

| Scenario | Description |
|---|---|
| Truck Blind Zone | Large vehicle obstructs the opposing lane |
| Oncoming Traffic | Approaching vehicle creates an overtaking conflict |
| Degraded Sensing | Low visibility and inconsistent observations |
| Stationary Hazard | Distinguishes stationary vehicles from roadside objects |

### F. Configurable Simulation Parameters

Users can experiment with:

- Oncoming traffic intensity.
- Visibility quality.
- Driver reaction time.
- Vehicle selection.
- Environmental conditions.
- Scenario configuration.

### G. Validation & Testing Framework

RUNWAY introduces a conceptual validation framework covering:

- Hazard detection.
- False indications.
- Unknown-state handling.
- Baseline road conditions.
- Relative vehicle motion.
- Adverse illumination.
- Object classification.
- Conflicting observations.
- Sensor failure and recovery.

Performance indicators displayed in the current prototype are illustrative placeholders, not experimentally validated benchmarks.

## 5. System Architecture

RUNWAY follows a conceptual multi-layer observation and decision-support architecture.

```text
          INDIAN ROAD ENVIRONMENT
                    |
                    v
          SIMULATED VEHICLE INPUT
                    |
                    v
           DRIVER SIMULATION
                    |
          +---------+---------+
          |         |         |
          v         v         v
       CAMERA     RADAR    ROAD MODEL
       LAYER      LAYER      LAYER
          |         |         |
          +---------+---------+
                    |
                    v
            SENSOR FUSION
                    |
                    v
          CONFIDENCE ASSESSMENT
                    |
          +---------+---------+
          |         |         |
          v         v         v
         FREE    OCCUPIED   UNKNOWN
          |         |         |
          +---------+---------+
                    |
                    v
           SAFETY ADVISORY
                    |
                    v
          DRIVER DECISION SUPPORT
```

**Core design principle:** Incomplete or contradictory evidence must not be interpreted as proof of a clear road.

## 6. Technology & Standards Context

The application references the following technology and regulatory contexts:

- **MoRTH:** Ministry of Road Transport and Highways vehicle and transportation context.
- **VAHAN / SARATHI:** Simulated registry and dataset references.
- **AIS-140:** Indian intelligent transportation systems standard context.
- **IRC:SP:84-2019:** Expressway design reference.
- **GIS Telemetry:** Conceptual road and location telemetry context.
- **Sensor Fusion:** Multi-source observation and uncertainty handling concepts.
- **ADAS:** Advanced Driver Assistance Systems research context.

These references provide the conceptual framework for the simulation. Their presence does not imply official government integration, certification, or access to live registry and sensor feeds.

## 7. Getting Started

### Live Demo

No installation is required.

Visit:

https://runway-nine-green.vercel.app/

### Running Locally

To run the application locally, clone the source repository and install its dependencies.

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd <PROJECT_DIRECTORY>
```

Install dependencies using the package manager configured by the project.

```bash
npm install
```

Start the development server using the script defined in `package.json`.

```bash
npm run dev
```

Open the local development URL displayed in your terminal.

**Note:** The exact framework, dependency versions, and available scripts should be documented from the project's source repository and `package.json`.

## 8. How to Use

1. Open the RUNWAY V3 application.
2. Enter the driver simulation.
3. Select a vehicle from the available vehicle categories.
4. Choose the road scenario.
5. Select one of the six camera perspectives.
6. Toggle between daylight and night IR modes.
7. Configure visibility, traffic intensity, and reaction time.
8. Start the simulation.
9. Observe the camera, radar-like, and fused road-state representations.
10. Experiment with acceleration, braking, steering, and overtaking.
11. Compare system responses across different scenarios.
12. Reset or export the simulation run summary.

### Keyboard Controls

| Key | Action |
|---|---|
| W / ↑ | Accelerate |
| S / ↓ | Brake |
| A / ← | Steer left |
| D / → | Steer right |
| SPACE | Pause |
| O | Overtake |

## 9. Validation Philosophy

A safety-oriented system should not be evaluated solely on how frequently it detects hazards.

It should also be evaluated on whether it:

- Avoids false safety indications.
- Preserves uncertainty when observations are incomplete.
- Identifies conflicts between observations.
- Responds appropriately to degraded visibility.
- Recognizes stationary hazards.
- Handles sensor failure and recovery.

Future validation should use reproducible datasets, ground-truth annotations, scenario coverage, and quantitative performance measurements.

## 10. Future Scope

Potential development directions include:

- Integration of actual camera feeds.
- Real radar and LiDAR sensor connectivity.
- Computer vision-based vehicle detection.
- Machine-learning-powered road-object classification.
- Real-time sensor fusion.
- Geospatial highway mapping.
- Time-to-collision estimation.
- Safe overtaking gap estimation.
- Vehicle-to-vehicle communication.
- Hardware-in-the-loop testing.
- Integration with driving simulators and ADAS research environments.
- Quantitative benchmarking against annotated road datasets.

## 11. Limitations & Disclaimer

RUNWAY V3 is an experimental browser-based simulation and research proof of concept.

- Vehicle visuals and road observations are synthetic.
- Radar-like ranging markers are illustrative.
- AIS-140 and VAHAN references do not represent active government API connections.
- No live vehicle sensors are connected.
- No real-time traffic intelligence is being received.
- Displayed validation metrics are illustrative placeholders.
- The simulation is not certified for deployment in real vehicles.

**Do not use this prototype to make actual driving, overtaking, or road-safety decisions.**

## 12. Contribution

Contributions toward improving the simulation, scenario coverage, visualization, road-state modeling, and validation methodology are welcome.

Suggested contribution workflow:

1. Fork the repository.
2. Create a feature branch.
3. Implement and test your changes.
4. Submit a pull request with a clear description of the improvement.

## 13. Project Information

| Attribute | Details |
|---|---|
| Project | RUNWAY V3 |
| Domain | Automotive Technology / Road Safety |
| Focus | Intelligent Overtaking & Driver Assistance |
| Platform | Web-based Simulation |
| Build | Research Prototype |
| Version | 3.0 |
| Deployment | Vercel |
| Application | https://runway-nine-green.vercel.app/ |

---

**RUNWAY V3**

*The road ahead isn't always visible. Don't guess. Make the unknown visible.*
