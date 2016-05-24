# Plan Class 12 (Week 3, Tue)

## Key Objectives
- Learn how to use the &lt;canvas&gt; element.
- Learn how to use a charting library.

- Older Objectives (Stacked Learning)
  - Accumulate data and display data in a chart in a web app.
  - Combine user event handling with general JS flow control/logic to generate a response shown to the user.
  - Use OOP to make web development easier and a web app easier to extend.

---
## Announcements
- Week 2 topics review
- Retrospective: You've learned a lot!
- "Final project proposal" Canvas item (preview)
- "Written quiz" scores in Canvas

---
## Code Challenge

### Challenge # 1
- Create a web app that shows the user a checkbox labeled "blocked" and a &lt;button&gt;.
- By default, leave the checkbox *unchecked*.
- When the user clicks the &lt;button&gt;, toggle the visibility of an element that says "Hello!".
- When the checkbox is *checked*, disable the behavior of the &lt;button&gt; -- i.e., don't let that buton toggle the text element.

### Challenge # 2 (moved from Class 11's README.md)
Do as many of the following items as you can before 8:15 am:
- Write a web app that uses setInterval() to repeatly trigger a callback that prints "Hello" every second.
- Add a counter that starts at zero on app load, then increments the counter each second and prints the counter value.
- Render the counter value to the DOM and update the DOM each second.
- Render a button that says, "Click me if you can", and use Math.random() and setInterval to change the button's 2-D position in the viewport every 0.5 seconds.
- Add a callback that triggers when the user clicks the "hopping" button, and increment a "score", and render the score in the upper left corner of the viewport.
- Change the button to an image, or give the button a background image.
- Uss CSS to change the mouse cursor to use an image, with x,y coordinates to offset the cursor's "click point"
- Uss CSS to change the mouse cursor to use a different image (w.r.t. the previous requirement) when the cursor's click point is actually hovering over the button.

---
## Code Review

### Code review objectives
1. Review &lt;img&gt; and/or background-image
- Event handlers, basic data processing
- OOP, arrays

### Paired Review
BusMall Lab 11

## Lecture
- Review &lt;canvas&gt; concepts from readings
- Charting libraries: motivation and concepts
- Chart.js overview

---
## Lab Prep
- Review Tue lab (Lab 12)
- Mob coding
  - Add &lt;canvas&gt;, &lt;script&gt; for chart.js
  - Initialize Chart object
  - Event handler: get random data, store in array
  - Put data in Chart object
  - Show data in Chart/canvas
  - Add labels
  - Overlay 2nd set of data
  - Time permitting, code the solution to Challenge #1 above.

---
## Lab
- BusMall app
