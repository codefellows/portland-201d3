# Project Week Guide

For your final project, put together all the concepts you've learned and coding skills you've gained during this course.
Work with a team to build a new multi-page web application that simulates a real-world product, service, or game.

---
## Overview

### General Requirements
- Team size: three or four students, with one possible exception where a team may have two members with instructor approval
- During project week, work on campus so we can help whenever your team is stuck.
- Each team member must exhibit strong teamwork skills - good collaboration on project-level topics and on code development, including effective use of git and GitHub.
- Each team member must make meaningful contributions in HTML, CSS, and JavaScript, and in the final presentation.
- Your web site must be deployed **live** on the Internet every day of Project Week except for Day 1.

### Timeline
- Day 1 (Fri May 27)
  - Form teams for Project Week and choose a topic.
  - Brainstorm user stories, draw wireframes, & write and submit a formal proposal.
  - Initialize repo and GitHub Issues.
- Day 1: Online final exam link emailed to students
- Day 2 to 5 (Tue to Fri): Develop your web application. Deploy each day.
- Day 5: Present project at **1:30 pm, Fri June 3**.
- Day 5: Submit team and solo Canvas items.
- Day 5: Online final exam due

### Canvas
#### Point Allocations
Your "Project Week" grade is worth 30% of your overall grade. The 30% is broken down as follows in terms of maximum possible points.
- Online Final Exam: 100 points
- Team Project (i.e., &quot;Project&quot;): 170 points, broken down as follows:
  - Individual contribution: 75 points
  - Daily status reports (&quot;quizzes&quot; in Canvas) graded on a per-student basis: 5 days x 4 points = 20 points
  - Teamwork: 75 points, further broken down as follows:
    - Project proposal: 7.5 points (10% of 75)
    - Project source code &amp; team presentation: 67.5 points (90% of 75)

Project Week points sum to 270, so every set of 9 points is worth 1% of your overall grade.
Extra credit points will be available for the Project, and can potentially raise your Project Week grade above 30%.

#### Assignments
Four Canvas assignments correspond to the work mentioned above, as shown here:.

|Canvas Item|Deadline|
|---|---|
|Final Exam|8:00 am Day 5 (6/3)|
|Project Proposal|11:59 pm Day 1 (5/27)|
|Project Teamwork|11:59 pm Day 5 (6/3)|
|Individual Contribution|11:59 pm Day 5 (6/3)|

Requirements for each assignment are detailed below.

---
## Final Exam

As part of the wrap-up of this course, you will take an online exam that serves both as a Code 201 final exam and as a Code 301 entrance exam. On Friday May 27, 2016, you should receive an email containing a URL you can click to start the exam on a 3rd party website (EdRepublic). This exam is not related to the Team Project, and can be taken at any time between the time you receive the link and the due date.

### Exam Info

- The exam is open book/open laptop and self-administered (you can take the exam on campus or at home, etc.), but you should do the exam on your own.
- No re-takes of the exam or of any specific exam questions are allowed, so please double-check each answer before you submit it.
- While you take the exam, be careful not to click "back" in the browser window; doing so will reduce the maximum possible score for the exam question you just answered.
- The exam taken by recent 201 students had 27 multiple choice questions, and students reported 60 to 80 minutes to complete the exam, generally.
- Graders will convert your raw score from the exam website into a percentage here in Canvas, with each percentage point worth one point, for a maximum of 100 points in Canvas.

### Submit
You have approximately one week to take the exam and submit a text comment in Canvas that contains the following information:
- Raw score from the exam website
- How much time you spent on the exam, total
- Exam level (-5 = way too easy, 0 = just right, 5 = way too hard)
- Comments on exam content/questions
- Comments on the testing process in general, from receiving the email to seeing your score in EdRepublic

---
## Project Proposal
Write your project proposal in electronic format. Your proposal may contain photos of hand-drawn content. You can publish your proposal as a README.md in your repo, create a Google doc, submit it as an attachment in Canvas, etc.

Your proposal should contain the following content:
- Team name
- Team members' names
- Project pitch: Write several sentences that answer these questions:
  - What problem does your app solve?
  - Who benefits from using your app?
  - How do users benefit?
- At least three user stories and three developer stories
- Several sketches of your app's pages as wireframes with **callouts**
- Diagram(s) of your project's **domain model**

Suggestion: For your diagrams and wireframes, sketch on sheets of paper or a whiteboard, then take photos of your sketches and submit the photos in Canvas along with the other items (listed above) required for your proposal.

Optionally, you can use [**this site**](https://www.bidsketch.com/proposal-resources/proposal-templates/web-design-proposal-template) as a reference, or even as a tool to create your proposal.

### Submit
Designate one person on your team to submit your team's proposal in Canvas. That person can submit the proposal document itself or a URL for the document.

**Other team members**: In Canvas, submit a comment stating your project's name, team name, and the name of the person who actually submitted the proposal.

Proposals will be reviewed by the instruction team for approval, with possible adjustments and suggestions.

All team members will receive the same grade for this submission.

---
## Project Teamwork
The team portion of your Project grade depends partially on git commits and other git history that shows an efficient collaborative development process. Please follow the steps outlined below for each project day.

### Day 1 - Launch
Build a basic scaffold from scratch as a team.
- Elect a "Launch Driver" to own the following tasks:
  - "Drive" (type) during the creation of the initial repo and scaffold code.
  - Create a new repo in the driver's GitHub account.
  - In the repo's README.md, include a placeholder for the deployment URL.
  - In the scaffold code (e.g., in &quot;index.html&quot;), include the repo's GitHub URL.
  - Add other team members as collaborators.
  - Set up GitHub Issues and enter initial "TO DO" items as Issues.
- While the Launch Driver is driving, other team members should navigate to create initial content in the scaffold code and define the initial set of GitHub Issues. They should stay ahead of the Launch Driver by researching unfamiliar technology such as 3rd party libraries that would provide features needed by the app.

An example scaffold:
- Root of repo:
  - LICENSE (choose MIT, GPL, etc.)
  - README.md
  - index.html
  - about.html

  Other HTML files should also be at this level
- css/
  - reset.css
  - base.css
  - layout.css
  - modules.css
  - theme.css
- js/
  - home-view.js
  - home-data.js
  - about-view.js
  - about-data.js

---
---
# Content below is work-in-progress
---
---

## Development Phase

Now that your project is launched, here's how to organize the development efforts of your team:
- Use GitHub Issues (Links to an external site.) to manage and divide up the work between your team members.
- Create new issues that'll take approximately 30 minutes to 2 hours to complete.
- Use labels and milestones as your team sees fit, but leave all newly created issues unassigned.
- Assign an issue to yourself when you commit to working on it.
- Once assigned, create a branch using the following naming scheme. For example:
- Suppose issue #1 is titled "Add an about.html page".
- The branch name would be 1_add_about_page.
- Push the commits on your branch to GitHub regularly.
- Close GitHub Issues using commit messages (e.g., "fix #1")
- Create a Pull Request for your branch even if you're unsure if it'll be merged into master.
- Ask someone else on your team to review the code in your Pull Request.
- If changes are required, make them on your branch and push them to GitHub for another review.
- Once satisfied, let the reviewer merge your Pull Request. Don't merge your own Pull Request.

### Submit
Please submit this Canvas assignment with answers to the following questions after your team's presentation.
- Describe your individual contributions to the team and project.
- Share links to commits or Pull Requests that demonstrate your contributions.
- What are you most proud of?
- What would have done differently?
- What lessons did you learn from this experience?

## Technical Requirements

General requirements: For each major concept required for labwork, implement at least one feature in your app. Details will be published in this section by Friday May 27, 2016.

- Your web site must have at least 3 interlinked pages and clear navigation.
- Your web site must have at least 2 pages that accept and process user input.
- Your web site's state must persist between page reloads.
- Add at least one &lt;canvas&gt; element to at least one of your pages, and show data in it.
- Add at least one &lt;video&gt; element and show a video in it. Alternatively, you may use an &lt;iframe&gt; and embed an external video source such as YouTube, but if so, you must create the video yourself and upload it to that external source, and in your app's README.md, describe how you uploaded the video. In either case, describe the purpose of your video in your app's README.md
Process

### Grading
Your grade is based on your individual effort and your project's technical merit.

Individual effort is graded based on links to commits and Pull Requests that demonstrate your contributions.

#### General Technical Merit
- Proper use of HTML
  - Clear, readable, and efficient structure
  - Uses semantic markup whenever possible
- Proper use of CSS
  - Clear, readable, and efficient styles
  - Responsive layout on various screen sizes like desktop and mobile
- Proper use of JavaScript
  - Clear, readable, and efficient code
  - Uses domain models to encapsulate data and behavior -- OOP is required !
  - Contains no unnecessary code
- Generally useful and functional
  - Works as expected with no bugs
  - Has at least 3 interlinked pages with a clear navigation
  - Has at least two pages that accept and process user input
  - State is persisted between page reloads
  - Deployed live on the Internet

#### 201-specific
- HTML content
  - Semantic tags
  - Lists
  - &lt;a&gt; that link to external sites
  - &lt;img&gt;
  - &lt;video&gt; with at least two &lt;source&gt; child elements and video content

- Layout/styling (copied almost verbatim from Lab 09
  - Create and use a CSS file for all styling. Avoid using style tags or inline styling in your HTML code.
  - Change the position, margin, padding, color, background-color, and opacity of at least one element.
  - Render at least one visible border and set its color, thickness, and border-radius.
  - Change at least one element whose default display type is "block", and make its display type "inline" and put it next to at least one other element.
  - Change at least one element whose default display type is "inline", and make its display type "block".
  - Use at least one font from a CDN (such as a Google font).
  - Use colors from a color theme, such as one of the themes shown HERE or HERE (or come up with your own theme), and color at least half of your elements using colors from the theme. You can also use colors not included in the theme.

- OOP
[ - Encapsulate all vars/functions in objects, with few exceptions (e.g., code that initializes objects on app load).]
  - Semantic objects design -- objects are appropriately defined to represent distinct models and features ("Group together stuff that belongs together in a way that makes sense").

- At least one event listener
- At least one chart that uses &lt;canvas&gt; and a third party library
- CSS animations. From Lab 14:
  - At least 3 DOM elements must have CSS animations (such as transitions, fade in/out the page or a section(s), slide the page or a section(s) in/out, rotate elements in 2-D, rotate elements in 3-D, etc.), and each animation must be of a different type (e.g., each animation must affect a different CSS property).
  - For at least one of your animations, use three or more @keyframe "points" to repeat an animation, and use "alternate" as the animation direction.
  - Make at least one of your animations repeat an "infinite" number of times.

## Presentation

On the last day of project week, present your project as a team in front of the class. Your level of participation and your presentation quality will contribute to your grade.
- Explain your project's problem domain and your team's solution.
- Explain the challenges that arose during project week and how your team overcame them.
