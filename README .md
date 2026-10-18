# IT313 – Student Roster Card Renderer

## Problem
The IT313 registrar provided a list of enrolled students. This Expo (React Native)
app renders each student as a reusable card showing name, course, and units, with a
"Full Load" label that appears only for students where `isFullLoad` is true. A header
shows the total number of students, computed from the array.

## Component Structure
- **`App.js`** – App entry file. Renders `StudentRoster`.
- **`components/StudentRoster.js`** – Parent component. Holds the students array,
  shows the header (`students.length`), and uses `.map()` to render one
  `StudentCard` per student with `key={student.id}`. Returns a single root `View`.
  Includes a "Reverse Order" button used for the key experiment.
- **`components/StudentCard.js`** – Reusable child component. Receives `name`,
  `course`, `units`, `isFullLoad` through destructured props and conditionally shows
  "Full Load" using `{isFullLoad && ...}`.
- **`data/students.js`** – Starter student data.

## Key Experiment
Using the array index as `key` and reversing the list caused each card's local
"star" state to stay in its position instead of following the student. Using
`student.id` fixes this because React can correctly identify each item.

## How to Run
1. `npm install`
2. `npx expo start`
3. Scan the QR code with Expo Go, or press `a` (Android emulator) / `i` (iOS simulator).

## Author
Zoe H. Lampadio - BSIT-IT3R2