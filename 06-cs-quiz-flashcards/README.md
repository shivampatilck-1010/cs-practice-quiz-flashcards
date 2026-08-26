# CS Practice and Technical Revision Studio

A developer practice platform inspired by LeetCode and NeetCode, featuring high-yield interview questions across Data Structures and Algorithms, Modern C++, Python, DBMS, Operating Systems, and Computer Networks.

---

## Executive Summary and Description

The CS Practice and Technical Revision Studio is an assessment tool designed for computer science students and engineers preparing for technical interviews. It features a curated bank of multiple-choice questions with in-depth conceptual explanations.

The platform provides dual study modes: Timed Quiz Mode (with a 15-second countdown timer, live score tracking, and automated question advancement) and Interactive Flashcards Mode (with 3D card-flip animations for active recall revision). It also includes keyboard shortcuts and an automated "Review Missed Questions" workflow.

---

## System Architecture and Workflow

```
[Embedded Question Bank: 30+ Core CS Questions]
                      |
                      v
[Domain Filter: All Topics | DSA | C++ | Python | DBMS | OS and Networks]
                      |
                      v
[Study Mode Router: switchMode('quiz' | 'flashcard')]
       |                                     |
       +-------------------------------------+
       |                                     |
       v                                     v
[Timed Quiz Engine]                 [Active Recall Flashcard Engine]
- 15s Linear Countdown Bar           - 3D Card-Flip State
- Score Multiplier (+10 pts)         - One-Click / Spacebar Toggle
- Concept Explanation Card           - Previous / Next Navigation
- Missed Question Collector          - Concept Breakdown View
       |
       v
[Assessment Results Panel]
- Total Score and Accuracy %
- "Review Missed Questions" Mode
- "Restart Full Session" Action
```

---

## Key Features

- Dual Learning Modes:
  - Timed Quiz Mode: 15-second countdown timer bar, live score tally, and structured architectural rationales.
  - Flashcards Mode: Clickable 3D cards with flip animations to test active recall before technical interviews.
- "Review Missed Questions" Feature: Isolates incorrect responses during a quiz session, allowing users to re-test only the questions they missed.
- Developer Keyboard Shortcuts:
  - Select Options: A, B, C, D or 1, 2, 3, 4
  - Advance: Enter
  - Flashcard Navigation: Space to flip, Left / Right arrow keys to navigate
- Comprehensive Question Bank: Deep coverage across DSA, C++17, Python, DBMS Normalization, Operating System Deadlocks, and Network Handshakes.
- 100% Offline Immunity: Embedded question bank eliminating browser file protocol restrictions.

---

## Tech Stack and Prerequisites

- Frontend: Semantic HTML5, CSS3
- Scripting: Vanilla JavaScript (ES6+ State Machine and Keyboard Listeners)
- Prerequisites: Any modern web browser (Chrome, Edge, Firefox, Safari).

---

## Installation and Quickstart Guide

### 1. Navigate to Directory
```bash
cd "C:\Users\shiva\OneDrive\Documents\projects\06-cs-quiz-flashcards"
```

### 2. Launch the Application
Double-click index.html to run in your default web browser, or serve via Python:
```bash
python -m http.server 8000
```
Then visit http://localhost:8000.

---

## Usage Instructions and Examples

| Shortcut Key | Action in Quiz Mode | Action in Flashcard Mode |
| :---: | :--- | :--- |
| A / 1 | Select Option A | - |
| B / 2 | Select Option B | - |
| C / 3 | Select Option C | - |
| D / 4 | Select Option D | - |
| Enter | Proceed to Next Question | Flip Flashcard |
| Space | - | Flip Flashcard to Reveal Solution |
| Left / Right Arrows | - | Navigate Previous / Next Flashcard |

---

## Author and Attribution

- Developer: Shivam Patil
- Designation: Aspiring Software Engineer | CSE Undergraduate
- Portfolio: https://shivam.dev

---

## License and Copyright

Copyright (c) 2026 Shivam Patil (shivam.dev). All rights reserved.
