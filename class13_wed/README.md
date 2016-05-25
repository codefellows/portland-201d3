# Plan Class 13 (Week 3, Wed)

## Key Objectives
Learn how to:
- Write JS to use the built-in localStorage API.
- Write JS that persists (saves &amp; restores) application state.
  - Determine which JS states to persist.
  - Determine which DOM states to persist.

Connection to older objectives (stacked learning). Ordered by "restore" execution flow:
- Persist state related to user actions.
- Persist objects in localStorage.
- Persist accumulated data.
- "Persist" (reconstruct, specifically) a chart drawn with &lt;canvas&gt; and a charting library.

---
## Announcements
- Thanks for sharing lecture time!
- Past 201 final project demos
- Recent code challenges moved to code_challenges/JavaScript.md

---
## Code Review

### Code review objectives
1. Chart.js &amp
2. Logic, including callback for "More Votes"

### Paired Review
BusMall Lab 12

---
## Lecture
- localStorage purpose, benefits
- Review: Dev tools -> Resources -> localStorage -> domain

---
## Lab Prep
- Wed (lab 13) instructions
- Mob coding
  - Start w/ Class 11's "mob_bus/".
  - Download a new image.
  - Add a "New Round" button and &lt;img&gt;, both invisible. Set the img src to load the new image.
  - Track the total # of clicks.
  - Show live stats in-browser: click and show counts for every image
  - Store live stats in localStorage; update it every time stats change.
  - After every 5 clicks, show the "New Round" button and the new img, and block (or ignore) voting clicks. Consider using ideas from Class 12's "mob_checkbox/".
  - Add a callback for the "New Round" button clicks; the callback should make the "New Round" button and new &lt;img&gt; invisible, and enable/unblock voting clicks.
  - Create state variable(s) to "bookmark" where we are in the voting process.
  - Restore vote counts on app load.
  - Tougher feature: restore state on app load at any point.

  - Time permitting, code part of the solution to JS-17.

---
## Lab
- BusMall app: persist state using localStorage
