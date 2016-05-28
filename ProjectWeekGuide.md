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
- Day 1 (Fri 5/27)
  - Form teams for Project Week and choose a topic.
  - Brainstorm user stories, draw wireframes, & write and submit a formal proposal.
  - Initialize repo and GitHub Issues.
  - Submit "Project Status Report #1" in Canvas, due **11:59 pm**
- Day 2 (Tue): Online final exam, due **8 am**
- Day 2 to 5 (Tue to Fri):
  - Develop your web application; deploy every day.
  - Submit Project Status Reports in Canvas, due **11:59 pm every day**
- Day 5 (Fri 6/3)
  - Present project at **1:30 pm**
  - Submit "Teamwork" and "Individual Contribution" Canvas items.

### Canvas
#### Point Allocations and Grading
Your "Project Week" grade is worth 30% of your overall grade. The 30% is broken down as follows in terms of maximum possible points.
- Online Final Exam: 100 points
- Team Project (i.e., &quot;Project&quot;): 170 points, broken down as follows:
  - Daily status reports (&quot;quizzes&quot; in Canvas) graded on a per-student basis: 5 days x 4 points = 20 points
  - Individual contribution: 75 points<br>
    Grading basis:
    - Links to your git commits and GitHub Pull Requests (PRs) that show your contributions
    - Your daily presence on campus to collaborate with teammates
    - Your participation in presenting your project

  - Teamwork: 75 points, further broken down as follows:
    - Project proposal: 7.5 points (10% of 75)
    - Project team effort: 67.5 points (90% of 75)<br>
      Grading basis:
      - Project-level activity: documentation, effective use of GitHub Issues, branches, PRs, and merges
      - Technical merit: Web app's functionality, usability/UI design, architecture, code quality

Project Week points sum to 270; every 9 points is worth 1% of your overall grade.

Extra credit points will be available for the Project, and can potentially raise your Project Week grade above 30%.
#### Assignments
Four Canvas assignments correspond to the work mentioned above, as shown here:

|Canvas Item|Deadline|
|---|---|
|Project Proposal|11:59 pm Day 1 (5/27)|
|Final Exam|8:00 am Day 2 (5/31)|
|Project Teamwork|11:59 pm Day 5 (6/3)|
|Individual Contribution|11:59 pm Day 5 (6/3)|

Requirements for each of these assignments are detailed below.

---
## Final Exam

As part of the wrap-up of this course, you will take an online exam that serves both as a Code 201 final exam and as a Code 301 entrance exam. In Canvas you'll find a link  you can click to start the exam on a 3rd party website (EdRepublic).

### Exam Info
- The exam is not direclty related to the Team Project, and can be taken at any time before its deadline on Day 2.
- The exam is open book/open laptop and self-administered (you can take the exam on campus or at home, etc.), but you should do the exam on your own.
- No re-takes of the exam or of any specific exam questions are allowed, so please double-check each answer before you submit it.
- While you take the exam, be careful not to click "back" in the browser window; doing so will reduce the maximum possible score for the exam question you just answered.
- The exam taken by recent 201 students had 27 multiple choice questions, and students reported 60 to 80 minutes to complete the exam, generally.
- Graders will convert your raw score from the exam website into a percentage here in Canvas, with each percentage point worth one point, for a maximum of 100 points in Canvas.

### Submit
Submit a text comment in Canvas that contains the following information:
- How much time you spent on the exam, total
- Exam level (-5 = way too easy, 0 = just right, 5 = way too hard)
- Any feedback you may have on exam content/questions
- Any feedback you may have on the testing process in general

---
## Project Proposal
Write your project proposal in electronic format. Your proposal may contain photos of hand-drawn content. You can publish your proposal as a README.md in your repo, create a Google doc, convert your doc to a PDF and submit it as an attachment in Canvas, etc.

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
Designate one person on your team to submit your team's proposal in Canvas. That person can submit the proposal document itself or a link to the document.

**Other team members**: In Canvas, submit a comment stating your project's name, team name, and the name of the person who actually submitted the proposal.

Proposals will be reviewed by the instruction team for approval, with possible adjustments and suggestions.

All team members will receive the same grade for this submission.

---
## Project Teamwork
The team portion of your Project grade depends partially on git commits and other git history that shows consistent effort, and an effective, collaborative development process. Please follow the steps outlined below for each project day.

### Day 1: Launch
Build a basic scaffold from scratch as a team.
- Elect a "Launch Driver" to "Drive" (type on a keyboard) during the creation of the initial repo and scaffold code, who will own/create the following items:
  - New team project repo in the driver's GitHub account.
  - New README.md that includes a placeholder for the deployment URL.
  - User's Guide that contains instructions on how to use the site.
  - Scaffold code that includes a file (e.g., in &quot;index.html&quot;) that contains the GitHub URL of the driver's team project repo.
  - Other team members as collaborators in the same repo.
  - GitHub Issues for the repo, and initial "TO DO" items as Issues.
- While the Launch Driver is driving, other team members should navigate to create initial content in the scaffold code and define the initial set of GitHub Issues. They should stay ahead of the Launch Driver by researching unfamiliar technology such as 3rd party libraries that could provide features needed by the app.

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
  - home-controller.js
  - home-model.js
  - about-view.js
  - about-controller.js
  - about-model.js

### Day 2 thru Day 5: Develop

Once your project has launched, organize the development efforts of your team.

#### GitHub, GitHub Issues, and git
Both team and individual portions of your Project grade depend (partially) on your consistent and effective use of git, GitHub, and GitHub Issues.

- GitHub Issues
  - Break down user stories and other major tasks into Issues, and scope each new Issue to take about 1 to 2 hours to complete.
  - Use labels and milestones as your team sees fit, but leave all newly created issues unassigned.
  - Use Issues to divide work between team members and to track task status. Spread the code development workload evenly between team members in JS, HTML, and CSS. Share driving/nagivating, and make sure a fair share of git commits are under each member's github username for all three languages (JS, HTML, CSS). **JS code** carries the most weight in determining your grade.
- Assign an Issue to yourself when you make a commitment to own the Issue.
- Using git with Issues:
  - Once assigned, create a branch using the following naming scheme. For example:
    - Assume Issue #1 is titled "Add an about.html page".
    - The branch name could be 1_add_about_page.
  - Regularly a-c-p on your branch.
  - When you have solved the Issue, use a commit message such as "Fix #1". This will close the Issue once the branch is merged into master.
  - Create a PR for your branch even if you're not sure whether it'll be merged into master.
  - Ask someone else on your team to review the code in your PR.
  - If changes are required, make them on your branch and push them to GitHub for another review.
  - Once satisfied, let the **reviewer** merge your PR. Don't merge your own PR.
  - Keep Issues updated as your make progress in your project.
- Develop only on branches; master should contain only working versions of your app. Consistently use development branches, PRs, and merges.
- Use concise, meaningful git commit messages.
- Keep sandbox code organized and under version control as well. **+2 extra credit** for doing this well.
- Develop the "User's Guide." Start with a copy of your user stories, then expand the document as you develop your code. Include the guide's main *contents* in your web app (perhaps in an "About" page).

General workflow advice:
- Communicate often with your team members.
- Test frequently.

### Technical Requirements
Your Project grade depends on how well your app integrates and applies concepts covered in this course, and on the extent to which it meets or exceeds the following requirements.

#### General Coding Requirements
- App works as expected, with no bugs.
- Three interlinked pages with clear navigation between them.
- At least two pages accept and process user input.
- Deployed live on the Internet
- Deployed app and your repo refer to each other: your repo's main README.md includes a link to your live site. Your live site has a page or footer that contains a link to your repo.
- Code comments: concise comments throughout; explain high-level (conceptual) purpose of each file and each block of code (e.g., objects, methods, global data in JS, DOM sub-structures in HTML, and property blocks or groups of property blocks in CSS).
- In your final version, remove these items from your web app:
  - Files that are irrelevant
  - "Commented out" code
  - Code comments that are irrelevant
  - Unused code (e.g. functions that are never called, unused variables, CSS rules not applied anywhere, etc.)
- Persist app state between page loads.

#### JavaScript
- Clear &amp; readable: Must pass the course's standard .eslintrc and use semantically meaningful variable names and function names.
- Efficient
  - Remove source code redundancy using techniques such as OOP. Apply DRY principles.
  - Remove computational redundacy. Cache computed results if the results are re-used; e.g., If a DOM query always finds the same DOM element(s), run the query only once and store the result in a variable, and use the variable from that point onward.
- Encapsulate all data (i.e., variables) and functions in objects, with rare exceptions (e.g., code that initializes objects on app load).
- Semantic object design: objects are appropriately defined to represent distinct models and features ("Group together stuff that belongs together, and in a way that makes sense").

#### HTML
- Readable: good indentation, good organization exhibited in DOM stucture.
- Semantic (meaningful) tags. If a tag's name is not descriptive (e.g., &lt;div&gt;) but is important semantically, use a `class`, `id`, or write an HTML comment that explains the tag's purpose.
- Contains lists
- At least one &lt;a&gt; that links to an external site
- At least one &lt;img&gt; or background-image
- At least one &lt;video&gt; with at least two &lt;source&gt; child elements, and video content. Alternatively, you may use an &lt;iframe&gt; and embed an external video source such as YouTube, but if so, you must create the video content yourself and upload it to that external source, and in your app's README.md, describe how you uploaded the video. In either case, describe the purpose of your video in your app's README.md
- At least one &lt;canvas&gt; element, with data rendered in the canvas. Uses a charting library or your own drawing routines.

#### CSS
- Clear &amp; readable: semantically meaningful class names and id names. Proper indentation. No syntax errors.
- Layout / styling (borrowed from Lab 9):
  - Create and use a CSS file for all styling. Avoid using style tags or inline styling in your HTML code.
  - Change the position, margin, padding, color, background-color, and opacity of at least one element.
  - Render at least one visible border and set its color, thickness, and border-radius.
  - Change at least one element whose default display type is "block", and make its display type "inline" and put it next to at least one other element.
  - Change at least one element whose default display type is "inline", and make its display type "block".
  - Use at least one font from a CDN (such as a Google font).
  - Use colors from a color theme, such as one of the themes shown HERE or HERE (or come up with your own theme), and color at least half of your elements using colors from the theme. You can also use colors not included in the theme.
- CSS animations (borrowed from Lab 14)
  - At least 3 DOM elements must have CSS animations (such as transitions, fade in/out the page or a section(s), slide the page or a section(s) in/out, rotate elements in 2-D, rotate elements in 3-D, etc.), and each animation must be of a different type (e.g., each animation must affect a different CSS property).
  - For at least one of your animations, use three or more @keyframe "points" to repeat an animation, and use "alternate" as the animation direction.
  - Make at least one of your animations repeat an "infinite" number of times.

#### Extra Credit
The following items are for extra credit in the team portion of your Project grade, and worth 2 points each, unless otherwise specified:
- Research and apply mobile-first and responsive design to your web app.
- Include an &lt;audio&gt; element and use the .mp3 format for your media file. See the [&lt;audio&gt; manual page](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio).
- Use JavaScript's built-in .bind() to let an object's method work correctly as a callback for a user event.
- Let users register on your website with a username and password, and require registered users to log in to access "restricted" content in your site. Use client-side authentication.
- Persist at least part of your app's state on a server such as Heroku or Firebase.

### Presentation
On the final day of Project Week, present your project as a team in front of the class; each team member must participate.
- Plan ahead and decide which team member will cover which aspects of the app.
- Choose one person to introduce the app: Describe its purpose, user stories, and how the app addresses the user stories.
- Each team member must help present the live (web browser) demo. Show how your app is generally useful and functional.
- Explain challenges that arose during Project Week and how your team overcame them.
- Each team member must help describe the app's code.
- Please prepare for a 30-minute session for you team -- 15 to 20 minutes for your presentation, and the remainder of the half hour for questions from your audience.

### Submit
Please submit the following items in Canvas:
- URLs
  - Final PR
  - GitHub Issues
  - User's Guide
  - Deployed app
- Description of the biggest challenges faced by your team and how you dealt with them as a team.

---

## Individual Contribution
Your individual grade depends on your effort in three major areas:

### Collaboration
Overall team collaboration. Ways you can show this (not all are required, but the more you do, the better):
- Show up on campus and work productively with other team members.
- Do project/team management.
- Find or create tools that increase your team's productivity. E.g., task management, communication tools, text editors, testing tools, features in Chrome Developer Tools, etc.
- Use well-named git branches and meaningful git commit messages.
- Write and run manual or automated tests for key parts of your app.
- Test frequently and make frequent git a-c-p's, PRs, and merges to reduce merge conflict problems.
- Debug code not writen by you.
- Refactor code and add code comments for code written by other team members.
- Share final presentation tasks. Though your project presentation will be a team effort and will affect your team grade, there is also an *individual* component that is determined by your participation as a presenter.

### Project-level contributions
Effort in one or more of the following areas (again, not all are required; the following lists are just for you to see which ways you can contribute to the team, outside of developing code):
- Test documents
- Ideas for app features
- User stories
- User's Guide
- README.md files
- App architecture
- Explore live data sources, APIs, libraries, frameworks, and new coding language features.
- UI/UX design
- Artwork/media file creation/processing
- Data pre-processing
- Server features needed by your app (if you do the extra credit)

### Coding
**IMPORTANT NOTE**: If you spend most of your time just navigating, you won't have a fair share of git commits under *your* github username, and will lose a **significant** percentage of points from your Individual Contribution grade. Be sure to make significant contributions and commits in all three languages (HTML, CSS, JS).

### Submit
- Share links to commits and PRs that show your individual effort.
- Answers to these questions:
  - Roughly how many hours total did you spend on this project?
  - What were the biggest challenges you faced as an individual, and how did you dealt with them?
  - What non-technical things did you learn (e.g., teamwork, project management)?
  - What technical skills did you gain or improve significantly?
  - What was most enjoyable/rewarding?
  - What are you most proud of?
  - What would you have done differently (what were the "lessons learned")?
