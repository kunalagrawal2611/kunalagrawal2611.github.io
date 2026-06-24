============================================================
resume-evaluator
# Resume Evaluator

A browser-friendly wrapper around **[HackerRank's Hiring Agent](https://github.com/interviewstreet/hiring-agent)** — an open-source resume-to-score pipeline originally built by [HackerRank](https://www.hackerrank.com/).

> **Attribution:** We did not build the core evaluation system. The scoring engine, prompts, PDF extraction, GitHub enrichment, and rubric come from [interviewstreet/hiring-agent](https://github.com/interviewstreet/hiring-agent) (MIT © HackerRank). This repository adds a **web UI** and small integration layer so you can upload a PDF and view results in the browser without using the CLI.

---

## What this repo adds

| Component | Description |
|-----------|-------------|
| [`web_app.py`](web_app.py) | FastAPI server with PDF upload endpoint |
| [`pipeline.py`](pipeline.py) | Wraps the upstream scoring pipeline for the web API |
| [`static/`](static/) | Simple drag-and-drop web interface |

Everything else (`score.py`, `evaluator.py`, `pdf.py`, `prompts/`, etc.) is from the upstream Hiring Agent project.

---

## How to use (Web UI)

### 1. Prerequisites

- **Python 3.11+**
- **An LLM backend** — either:
  - [Ollama](https://ollama.com/) (local, free) — run `ollama serve` and pull a model, e.g. `ollama pull gemma3:4b`
  - **Google Gemini** (cloud) — get an API key from [Google AI Studio](https://aistudio.google.com/apikey)

### 2. Install

```bash
git clone https://github.com/kunalagrawal2611/resume-evaluator.git
cd resume-evaluator

python -m venv .venv
# Windows
.venv\Scripts\activate
# macOS / Linux
source .venv/bin/activate

pip install -r requirements.txt
```

### 3. Configure

```bash
cp .env.example .env
```

Edit `.env`:

```env
# Ollama (local)
LLM_PROVIDER=ollama
DEFAULT_MODEL=gemma3:4b

# Or Gemini (cloud)
# LLM_PROVIDER=gemini
# DEFAULT_MODEL=gemini-2.0-flash
# GEMINI_API_KEY=your_key_here
```

Optional: set `GITHUB_TOKEN` to avoid GitHub API rate limits when your resume includes a GitHub profile.

### 4. Start the web
============================================================
ollama-dashboard
# Ollama Dashboard

A self-hosted, Claude-Code-style coding assistant UI powered by your local [Ollama](https://ollama.com) models. Chat with a local LLM that can read/write files, run shell commands, query git, and fetch web pages — all through a sleek dark-themed web interface.

## Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [Ollama](https://ollama.com/) installed and running
- At least one model pulled (e.g., `ollama pull qwen2.5`)

## Setup

```bash
# Install frontend dependencies
npm install

# Install server dependencies
cd server
npm install
cd ..
```

## Running

You need **two terminals**:

```bash
# Terminal 1 — Backend (Hono server on port 3001)
cd server
npm run dev

# Terminal 2 — Frontend (Next.js on port 3000)
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Configuration

| Variable | Default | Description |
|----------|---------|-------------|
| `OLLAMA_BASE_URL` | `http://localhost:11434` | Ollama API endpoint |
| `PORT` | `3001` | Backend server port |

Set these in `.env.local` or as environment variables.

## Features

- 💬 Streaming chat with local Ollama models
- 🛠️ Agentic tool-use loop (up to 10 turns)
- 📂 File read/write/list
- ⌘ Shell command execution
- 🔀 Git operations (status, diff, log, add, commit)
- 🌐 Web page fetching
- 📁 Visual file explorer with breadcrumbs
- 🎨 Dark-themed UI with markdown rendering

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 15 + React 19 + Tailwind CSS 3 |
| Backend | Hono + Node.js |
| Language | TypeScript |
| LLM | Ollama (local) |

============================================================
timesheet-tracker
# Timesheet Tracker (Android)

A simple and efficient Android application to track your working hours and manage project-based timesheets.

## Features

- **Project Management**: Create and manage multiple projects.
- **Time Tracking**: Easily clock in and out of tasks.
- **Manual Entries**: Add or edit timesheet entries manually.
- **History & Reports**: View your daily working entries and overall history.

## Download APK

You can download the latest version of the app as an APK file from the project directory:
- [Download Release APK](app/build/outputs/apk/release/app-release.apk) (Signed)

## Run Locally

**Prerequisites:** [Android Studio](https://developer.android.com/studio)

1. **Clone the repository**:
   ```bash
   git clone https://github.com/kunalagrawal2611/timesheet-tracker.git
   ```
2. **Open in Android Studio**: Select **Open** and choose the directory containing this project.
3. **Build and Run**:
   - Allow Android Studio to sync Gradle and download dependencies.
   - Run the app on an emulator or a physical device.

## Building the APK

To build a release APK, run the following command in the terminal:
```bash
./gradlew :app:assembleRelease
```
The generated APK will be located at `app/build/outputs/apk/release/app-release-unsigned.apk`.

---
*Note: This project uses a conditional signing configuration. If no keystore file is provided, the build will produce an unsigned APK.*

============================================================
SALOCON
# SALOCON Image Dataset

Welcome to the **SALOCON** dataset repository. This repository hosts a curated collection of 3,000 images along with their corresponding binary ground-truth masks. The dataset is structured for ease of use in computer vision tasks, specifically for Salient Object Detection (SOD) and Dichotomous Image Segmentation (DIS) benchmarking and research.

## Directory Structure

The repository is organized into two main directories:

- **`images/`**: Contains the 3,000 RGB images in standard formats (e.g., `.jpg`).
- **`masks/`**: Contains the 3,000 binary ground-truth masks (e.g., `.png`) matching the exact filenames of their respective images.

## Usage

You can safely clone this repository and directly point your dataloader to the respective `images` and `masks` directories:

```bash
git clone https://github.com/kunalagrawal2611/SALOCON.git
```

For benchmarking, simply load the input images from the `images/` directory and calculate your accuracy metrics by referencing the paired `.png` masks in the `masks/` directory.

---
*Created and maintained by Kunal Agrawal.* 

============================================================
Healthy_Heart
# Healthy_Heart

This project will help people to calm their heart rate or to find the nearby hospitals in case of elivated heart rates.

This project is created by Kunal Agrawal studying at University of Dayton, Ohio, USA.

============================================================
Chronic-Disease-Prediction
In this project a deep learning model is trained to determine if a person is having a chronic disease or not. A UI is also created for easy understanding of the output.

============================================================
Fake-News-Detection
This project contains a trained deep learning model to detect fake news. The code for training is not added in this repository. The model was trained back in 2020 so the results might differ for current news input.

============================================================
Dental-Insurance-Claim-Automation
In this Project, I created Spring Boot APIs to automate some verification steps in claiming Dental Insurance. The created APIs are then integrated into a web application that is hosted using AWS Services.
The data containing the file Bool1.xlxs has testing data and all original data ahs been omitted for security purposes.

============================================================
Motion-Illusion-in-Static-Scene--MISS-
The dataset is divided into 2 sections: 1) Color 2) Grayscale

Each dataset is further divided into training, testing, and validation each containing image data for both Motion and Non-Motion.

============================================================
Motorcycle-Helmet-Detection-Dataset--MHDD-
Please find the Motorcycle Helmet Detection Dataset (MHDD) structure as follows:

The dataset is divided into 2 sections: 1) Color 2) Grayscale

Both the datasets have 4 sub-folders for 4 different categories: a) Original images b) Fog added c) Rain added d) Snow added

Each dataset is divided into training, testing, and validation each containing image data and labels in txt (YOLO) format.
