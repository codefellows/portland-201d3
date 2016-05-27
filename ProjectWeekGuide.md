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
The team portion of your Project grade depends partially on git commits and other git history that shows consistent effort, and an effective, collaborative development process. Please follow the steps outlined below for each project day.

### Day 1: Launch
Build a basic scaffold from scratch as a team.
- Elect a "Launch Driver" to "Drive" (type on a keyboard) during the creation of the initial repo and scaffold code, who will own the following tasks:
  - Create a new repo in the driver's GitHub account.
  - In the repo's README.md, include a placeholder for the deployment URL.
  - User's Guide that contains instructions on how to use the site.
  - In the scaffold code (e.g., in &quot;index.html&quot;), include the repo's GitHub URL.
  - Add other team members as collaborators.
  - Set up GitHub Issues and enter initial "TO DO" items as Issues.
- While the Launch Driver is driving, other team members should navigate to create initial content in the scaffold code and define the initial set of GitHub Issues. They should stay ahead of the Launch Driver by researching unfamiliar technology such as 3rd party libraries that would provide features needed by the app.

An example scaffold:
- /

  (This is the root folder of repo.)
  - LICENSE (choose MIT, GPL, etc.)
  - README.md
  - UserGuide.md
  - index.html
  - about.html

  Other HTML files should also be at this level.

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

## Day 2 thru Day 5: Develop

Once your project has launched, organize the development efforts of your team:
- Use GitHub Issues to manage and divide up the work between your team members.
  - Create new issues that'll take approximately 1 to 2 hours to complete.
  - Use labels and milestones as your team sees fit, but leave all newly created issues unassigned.
  - Assign an issue to yourself when you commit to working on it.
  - Once assigned, create a branch using the following naming scheme. For example:
    - Suppose issue #1 is titled "Add an about.html page".
    - The branch name would be 1_add_about_page.
    - Push the commits on your branch to GitHub regularly.
    - When you have solved the issue, use a commit message such as "fix #1". This will close the issue once the branch is merged into master.
  - Create a Pull Request for your branch even if you're unsure if it'll be merged into master.
  - Ask someone else on your team to review the code in your Pull Request.
  - If changes are required, make them on your branch and push them to GitHub for another review.
  - Once satisfied, let the **reviewer** merge your Pull Request. Don't merge your own Pull Request.

...


## Technical Requirements
[Details will be finalized in this section on Friday May 27, 2016.]

Your project grade depends in part on how well you integrate/apply concepts covered in this course, which include the following tasks.

- Create at least three interlinked pages with clear navigation
- At least two pages accept and process user input.
- Your web site's state must persist between page reloads.

- HTML content
  - Semantic tags
  - Lists
  - &lt;a&gt; that link to external sites
  - &lt;img&gt;
  - &lt;video&gt; with at least two &lt;source&gt; child elements and video content. Alternatively, you may use an &lt;iframe&gt; and embed an external video source such as YouTube, but if so, you must create the video content yourself and upload it to that external source, and in your app's README.md, describe how you uploaded the video. In either case, describe the purpose of your video in your app's README.md

- Layout/styling (almost identical to Lab 9's requirements)
  - Create and use a CSS file for all styling. Avoid using style tags or inline styling in your HTML code.
  - Change the position, margin, padding, color, background-color, and opacity of at least one element.
  - Render at least one visible border and set its color, thickness, and border-radius.
  - Change at least one element whose default display type is "block", and make its display type "inline" and put it next to at least one other element.
  - Change at least one element whose default display type is "inline", and make its display type "block".
  - Use at least one font from a CDN (such as a Google font).
  - Use colors from a color theme, such as one of the themes shown HERE or HERE (or come up with your own theme), and color at least half of your elements using colors from the theme. You can also use colors not included in the theme.

- OOP
  - Encapsulate all vars/functions in objects, with few exceptions (e.g., code that initializes objects on app load).
  - Semantic objects design -- objects are appropriately defined to represent distinct models and features ("Group together stuff that belongs together in a way that makes sense").

- Add at least one &lt;canvas&gt; element, and render data in the canvas. You can use a charting library, or write your own drawing routines.
- CSS animations, based on Lab 14
  - At least 3 DOM elements must have CSS animations (such as transitions, fade in/out the page or a section(s), slide the page or a section(s) in/out, rotate elements in 2-D, rotate elements in 3-D, etc.), and each animation must be of a different type (e.g., each animation must affect a different CSS property).
  - For at least one of your animations, use three or more @keyframe "points" to repeat an animation, and use "alternate" as the animation direction.
  - Make at least one of your animations repeat an "infinite" number of times.

#### Extra Credit
- [+3 points] Do mobile-first and responsive design.

---
---
# Content below is work-in-progress
---
---

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

## Presentation

On the last day of project week, present your project as a team in front of the class. Your level of participation and your presentation quality will contribute to your grade.
- Explain your project's problem domain and your team's solution.
- Explain the challenges that arose during project week and how your team overcame them.

### Submit
Please submit this Canvas assignment with answers to the following questions after your team's presentation.
- Describe your individual contributions to the team and project.
- Share links to commits or Pull Requests that demonstrate your contributions.
- Answers to these questions:
  - What are you most proud of?
  - What would have done differently?
  - What lessons did you learn from this experience?

---
---
From 301 Guide
---
---

## Day 2 through Day 5: Develop
### GitHub Issues
Your team and individual grade will depend in part on your consistent and effective use of GitHub Issues.
- Break down user stories and other major tasks into Issues, and scope each Issue to take about 2 hours to complete.
- When applicable, use a git commit message to close an Issue.
- Keep Issues updated as your make progress in your project.

### Git Workflow
Your team and individual grade depends in part on your consistent and effective use of git, including the following aspects:
- Spread the code development workload evenly between team members in JS, HTML, and CSS. Share driving/nagivating, and make sure a fair share of git commits are under each member's github username for all three languages (JS, HTML, CSS). JS code carries the most weight.
- Consistently use development branches, PRs, and merges.
- Use concise, meaningful git commit messages.
- Keep sandbox code organized and under version control.

### General Workflow Advice
- Communicate often with your team members.
- Develop only on branches; master should contain only working versions of your app.
- Deploy at least once per day, and verify the deployed site.
- Test frequently.

### Documentation
- Your website and repo should refer to each other. In your repo's main README.md, add the URL of your live site. In your app, such as an "About this app" page or a footer link, add the URL of your repo.
- As your develop your app, its features will begin to stabilize. Create a "User's Guide" in parallel with your code. The "User's Guide" is for users to learn about your app and how to use it. Start with a copy of your user stories, then expand the document as you develop your code. Include the guide's content in your web app (perhaps in an "About" page).

### Coding Usage and Style Requirements
#### General Coding Requirements
- Works as expected with no bugs
- Code comments: use concise comments throughout, and explain the high-level (conceptual) purpose of each file and the purpose of each block of code (e.g., functions and objects in JS, DOM sub-structures in HTML, and property blocks or groups of property blocks in CSS).
- In your final version, remove these components:
  - Unused code (e.g. functions that are never called, unused variables, CSS rules not applied anywhere, etc.)
  - Commented out code
  - Code comments that are obsolete/irrelevant
  - Documentation files, images, etc. that are obsolete/irrelevant

#### HTML Requirements
- Semantic: Use meaningful HTML tags. If a tag's name is not descriptive (e.g., "div"), but is important semantically and isn't self-explanatory, use a `class`, `id`, or write an HTML comment that explains the tag's purpose.
- Readable: Good indentation, good organization in DOM's stucture
- Efficient: Remove redundacy -- repeated DOM structures should be templated and/or programmatically created using JS.

#### CSS Requirements
- Clear and readable: Use semantically meaningful class names and id names. Use proper indentation. Fix syntax errors.
- Well-organized file structure: use SMACCS principals.
- Efficient: minimize redundancy of CSS properties. Pull common properties into shared CSS code blocks or separate classes.
- Good layout across various screen sizes such as mobile and desktop. Use containers and percentages, a fluid grid, flexbox, and/or media queries to acheive responsivenss.

#### JS Requirements
- Clear, readable: Must pass the course's standard .eslintrc and use semantically meaningful variable and function names.
- Efficient
  - Remove source code redundancy using techniques such as FP, OOP, and/or middleware. Apply DRY principles.
    - Remove computational redundacy, i.e., cache computed results if results are re-used. This is to reduce the overall compute effort of your app. Example: If a DOM query always finds the same DOM element(s), make sure the query runs only once, then store the result in a variable, and use only the variable from that point onward.

### Individual Contribution and Grade
Your individual grade depends on your effort in these areas:
- General "app level" non-JS contributions: CSS and HTML code, and effort in one or more of the following areas:
  - Ideas for app features
  - User stories
  - User's Guide
  - Test documents
  - README.md files
  - App architecture
  - Explore live data sources, APIs, libraries, frameworks, and new coding language features.
  - UI/UX design
  - Artwork/media file creation/processing
  - Data pre-processing
  - Server features needed by your app
  - Contributions in JS code for domain modeling, flow control, logic, and computation
- Overall team collaboration. Ways to show this:
  - Show up on campus and work productively with other team members.
  - Use well-named git branches and meaningful git commit messages.
  - Test frequently and make frequent git a-c-p's, PRs, and merges to reduce merge conflict problems.
  - Write and run automated tests for at least parts of your app.
  - Refactor code and add code comments for code written by other team members.
  - Debug code not writen by you.
  - Share final presentation tasks.
  - Do project/team management.
  - Create, configure, and/or enhance tools that increase your team's productivity.

**IMPORTANT NOTE**: If you spend most of your time just navigating, you won't have a fair share of git commits under *your* github username, and will lose a **significant** percentage of points on your individual grade. Make sure you have a fair share of commits for all three languages (HTML, CSS, and JS).

### Technical Requirements

- OOP: Encapsulate all data and functions (exceptions are possible, but get buy-in from an instructor first), and use object constructors and prototypical inheritance where appropriate.
- Use AJAX to retrieve JSON or XML data. Write a higher order function (HOF) that makes the AJAX call. To use the HOF, pass a "next" function to it. The HOF should make the AJAX request and specify `next(data)` as the AJAX callback. `next()` should process `data`. You might have your `next` function call a VIEW function to display the data. The HOF itself deals with data, so it should be in a MODEL JavaScript file.
- Functional-programming: Use array methods, higher-order functions, and at least one closure.
- Persist your app's state using WebSQL or other database (if you do the extra credit item where you persist data in a server-side database, you don't need to use a local database). Write middleware that handles CRUD operations on your database.
- Build a single page app and use client-side routing for at least two routes. Use RESTful routes and route handling.
  - Test: Every time the URL string in the browser's URL bar changes to a new route in your app, your app should correctly render the corresponding page. This should happen for any of the following events that cause the URL to change:
      - User event in the viewport (e.g., mouse click or [return] keypress on a nav bar item that has a route for its `href`).
          - User loads a bookmarked URL or types a URL in the URL bar then hits [return]. <-- **OFTEN OVERLOOKED**  Test this case with every route, then debug if needed, before submitting your final app.
          - Use MVC components that are loosely coupled, semantically named/labelled, and are well-documented as MVC in code comments.
          - Deploy to a public web server, including a server-side app that authenticates to a 3rd party server (such as FB, Yelp, or GitHub). You must use a 3rd party server that is significantly relevant to your project.  You can use a server such as a weather information server, Yelp, Google (e.g., maps or streetview), Facebook, etc.

### Extra Credit
You can earn extra credit in your project by adding one or more of the following features to your project's code. Each item is worth +1 unless otherwise noted.
- Persist at least some of your app's data in two or more WebSQL tables and make SQLite queries that use joins/relations to filter data.
- Use a finite state machine that explicitly models the FSM using named inputs (events) and named states.
- Include an &lt;audio&gt; element and use .mp3 format for your media file. See the [&lt;audio&gt; manual page](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio).
- Use JavaScript's built-in .bind() and .apply() methods, and answer these questions in your submission:
  - The methods belong to what kind of object? Does each object have its own copy of the method, or are the methods on the prototype for that object?
    - How does .apply() differ from .call()?
    - Let users register on your website with a username and password, and require registered users to log in to access some of your site's data. Use client-side authentication as proof-of-concept [0.25 points], or use server-side authentication [2 points].
    - [2 points] Persist at least part of your app's state on a server such as Heroku or Firebase.

## Day 5, 1:30 pm: Present
All team members must contribute to the presentation/live demo of your app on Day 5. Your **individual** portion of your project grade depends on your participation as a presenter.
- Plan ahead and decide which team member will cover which aspects of the app.
- Choose one person to introduce the app: Describe its purpose, user stories, and how the app addresses the user stories.
- Each team member must help present the live demo.
- Each team member must help present the app's code.

Please prepare for a 30-minute session for you team -- 15 to 20 minutes for your presentation, and the remainder of the half hour for questions from your audience.

## Day 5, 11:59 pm: Submit
In Canvas, you'll find an assignment that corresponds to the team portion of your project grade, and an assignment for your individual portion. Below are lists of items to submit for each of those assignments:

### Team Portion
- URLs
  - User Guide
  - Deployed app
  - GitHub Issues
  - Final PR
- Description of the biggest challenges faced by your team and how you dealt with them as a team.

### Individual Portion
- URLs
  - Your GitHub PRs
  - Your git commits
  - Answers to these questions:
    - Roughly how many hours total did you spend on this project?
    - What were the biggest challenges you faced as an individual, and how did you dealt with them?
    - What technical skills did you gain or improve significantly?
    - What non-technical things did you learn (e.g., teamwork, project management)?
    - What was most enjoyable/rewarding?
              