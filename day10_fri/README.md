# Paired lab: Mon. 2016.Mar.28

## Create a webpage from a design comprehensive

**Main Goal**: Build a static webpage based on the design comprehensive ("design comp") shown in https://github.com/codefellows/portland-201d2/blob/master/week-3/1-mon-lab/lab-assets/_0_PREVIEW.jpg.

This lab focuses on HTML and CSS. You may choose to do this project with no JS at all, or add some as a finishing touch. You can earn extra credit points by coding CSS animations; see details below.

---

In this paired project you may choose to do all of your team's work on one person's laptop. You can use the other laptop however you want: a reference to look up information, or as a second laptop to do coding. Whatever you decide, spend time with your partner to **plan** your workflow. You are not obligated to use the driver/navigator model of pair programming, since for this lab you and your partner will submit a GitHub URL for the same commit hash.

If you want to do simultaneous coding on both computers, you can use one of the following two methods:

1. "Fork/PR": Have one person set up a GitHub repo, and then the other person can fork (on GitHub) and clone (using the terminal on a laptop) that repo. This is the way open source is often developed, where a repo's owner decides which features get merged into his/her app. Use pull requests to merge changes into the main repo.
- Or, as an alternative, "Collaborate": Have one person set up a repo, then add the partner as a collaborator (use the 'Settings' tab in GitHub to add a collaborator). In this setup, each person has equal privileges to push and merge and manage that repo.  This is the way teams in the course will work during Project Week, so this alternative is a good way to start getting comfortable working together as collaborators.

If you choose one of these two alternatives, be sure to do frequent merges so that you and your partner don't &quot;drift&quot; too far apart in your local versions of the app's code. In #1, make frequent pull requests and merges. In #2, do pull-merge-resolve-push cycles frequently. To avoid merge conflicts, do your best to not work on the same lines of code in the same file(s) at the same time; do good planning and re-planning, and use frequent and timely communication!

**GitHub Repository & Project Setup**

Create a new repo. Decide whether you'll use the Nav/Driver, Fork/PR, or Collaborate method.

**Assignment Overview**

The assets (files such as images) are in **lab-assets** sub-folder. Copy all of the assets **except** "\_0\_PREVIEW.jpg" to your workspace. But print or open "\_0\_PREVIEW.jpg" so you can use it as a reference for what your page should finally look like. You may want to print a hard copy of the comp and write notes on it to identify image asset filenames and layout locations, elements you need to code in HTML, and styles you need to code in CSS.

NOTE: The full-width gray bar near the top of the page contains a pattern. For this assignment, you can just implement a solid gray bar, but if you implement a visually similar pattern, you'll get extra credit (see below for two options).

Suggestion: Set up your work directory like this:
* index.html
* style.css
* app.js *(if you choose to use JS)*
* img/   *(folder that contains all of your image assets)*

Rename any image files if you'd like.

**Requirements**

Use good HTML structure to scaffold this site. Up to this point, your sites have not required container elements to manage the structure, and ultimately the style. Container elements (a box outside of your content box that might contain multiple content boxes) are very useful in managing layout. You need to think about the relationship between parent and child/descendant elements, as well as the order in which you define them in your HTML. Remember you can use *display: inline* in CSS to force block elements (which would ordinarily stack), to sit side-by-side, the same way that words in a paragraph behave.

Use semantic HTML. Use &lt;section&gt;, &lt;footer&gt; &lt;aside&gt;, and/or other tags such that you don't get lots in a "sea of &lt;div&gt; elements" when working with your HTML file.

Use CSS to style the page to replicate every visual feature shown in the comp image. Some of the features may be new to you so work with your partner to be resourceful. When coding in CSS, you may discover that there are many ways to achieve the same visual effect; some of those ways are easier to code that others, so explore a bit before committing to a complex solution for any given feature; there may be a simpler, more compact way to code it.

Test your page using Chrome, and at least one other browser (Safari, Firefox, IE, or other) and make sure your page looks the same. Check http://caniuse.com to see if particular CSS features are widely supported.

OPTIONAL: Add some JS functionality! Get creative, but make sure all your CSS and HTML code is done before adding JS.

[**+1 point extra credit per item below**] Use CSS only to implement the following features.

1. Use a PNG file as a border image to replicate the patterned gray bar near the top of the page.
- Use an SVG file to replicate the patterned gray bar near the top of the page (see https://bocoup.com/weblog/using-svg-patterns-as-fills as a possible method).
- Fade in the page when it is first loaded.
- Slide in the footer.
- Highlight at least one section of the page based on the mouse-over (hover) event.
- On mouse hover on any of the social media icons, make the icon 50% larger.
- Extend #4 such that the social media icon grows smoothly to its larger size using CSS transitions.
- Extend #4 such that each icon rotates 360 degrees on mouse hover.

[**+1 Extra Credit per item below**] Use JS without using any CSS transitions:
- Slide in the set of social media icons. Hint: Use setInterval() to set a DOM element attribute(s) such as margin.
- Include a &lt;video&gt; element that plays a video file, and verify the video plays OK in Chrome, another browser, and a mobile browser.

---

## Submit

1. GitHub PR for the final version of your app..
- Name(s) of the other member(s) of your team.
- Comments in Canvas that answer the following questions:
 - Overall, how did the pair/group component of this project go?
 - How long did this lab take?
 - To what parts of the project did you contribute the most?
 - What did you learn from your partner? What were you able to teach?
 - What observations or questions do you have about what you've learned?
