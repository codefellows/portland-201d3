# BusMall [DRAFT VERSION]

## New week, new project!

You're hired by startup company *BusMall*, whose product is like the &quot;SkyMall&quot; catalog found in airplane seatback pockets, a catalog of assorted high-markup products provided to a captive audience. But BusMall catalogs are placed on Portland buses.

To control its printing costs, BusMall will print a small percentage of the products it offers; it will print only items that are likely to sell well. To determine which products to print, BusMall will use your web app to estimate the level of consumer interest in each product.

BusMall wants a web app that shows potential products to users, showing three randomly selected products at a time. For each set of 3 images shown, the users will click the image of the product they'd most likely purchase, then repeat the procedure for a total of 16 selections ("votes").

BusMall wants your app to show three images side-by-side in a single row, so you'll need to manage the size and aspect ratio of the images, and may need to edit them a bit by cropping them (alternatively, you can set images' CSS background-size to "cover" or "contain").

To keep the marketing analysis unbiased, do not show voting results before all 16 votes have been cast; even after 16 votes, do not automatically show the results; instead, BusMall wants you to show two buttons on the page: one to show voting results, the other to let the user vote 8 more times then show results automatically after the 8th additional vote.<br>
[**Tue**: hide/show the two buttons, but implement the callback only for the "show results" button]<br>
[**Wed**: Implement the "8 more votes" button's callback.]

To show results, your app should show product votes as a histogram.<br>
[**Tue**: Draw the histogram using text characters, DOM elements (e.g., empty rectangles with a solid background color, whose size is proportional to the number of votes for its associated product), or a dynamically generated HTML table.]<br>
[**Wed**: Draw the histogram using a &lt;canvas&gt; element and a graphics library.]

BusMall is interested not only in the total number of votes, but also the percentage of times that an item was clicked when it was shown. Thus your app must also track of how many times each image has been displayed regardless of whether it was ever selected.

**Breaking News** BusMall's marketing department received negative feedback from users who want to save their voting progress such that when they refresh the page or restart the browser, they can resume voting, ... [**Due Thurs**: ...so make your app persistent by saving app state in local storage. See details in the "Thursday" section below.]

BusMall wants a great looking app, and wants you to use great styling, layout, and **CSS animations** to make their site visually "pop", ... [**Due Sun nite**: ...so make your app look great with CSS layout and styling and CSS animations. See details in the "Sunday" section below.]

# User Stories

**DO THIS STEP FIRST**  Part of your assignment is to write your own user stories. Consider the multiple roles involved: marketing research team, developer, focus group user. The commit logs in your repo will have a few initial commits for the scaffolding process (LICENSE, README.md) but next, you should have a 'user stories' commit in place *before* you write any web app code.

## Steps/features due at the end of Tuesday
- Create a new repo or folder for this weekly project called *bus-mall*.
- Scaffold your repo with the usual README.md and LICENSE. Clone your repo and add an *img/* folder to your local workspace to hold product images.
- Write the purpose of your app in README.md, then add your user stories, then git **a-c-p**. Use good Markdown style to make README.md look nice; use the Markdown Preview feature in Atom to help you in this task.
- Populate your img/ folder with at least seven (7) images, then **a-c-p**.
- Write code that randomly selects three images from img/, then display them "side by side by side" in the browser window. [**+1 Extra Credit** if you make your site responsive, such that the images are shown in a column when the browser viewport is narrow.]
- Handle mouse clicks on displayed images, and track clicks and the "times displayed" count for each image.
- When an image is clicked, show three new random images. Images can repeat -- the random selection process should pick randomly from the full set of images each time.
- Write a constructor that creates an object associated with each image, and has these properties:
 - Filename
 - Product Name
 - Number of times shown
 - Number of times clicked
- Include two hidden buttons, one to display votes, one to allow 8 more votes, and make the buttons visible after the 16th vote.
- Implement the callback for the "display votes" button, which is a function that plots vote results.

## Steps/features due at the end of Wednesday

- To display the histogram, use a &lt;canvas&gt; element(s) and a JS graphics library. Show a histogram of votes as a bar chart. Plot percentage values on the same chart (also as bars, or as text labels like "12%"), or plot them in a bar chart in a separate &lt;canvas&gt; element, whichever is easier. The size and look of your chart(s) is up to you, just be sure to put the chart in an area beneath the three images.
- Hide the "show results" and "8 more votes" buttons immediately after the user clicks "show results", then draw the histogram. You should toggle the "visibility" CSS attribute of buttons, not the "display" attribute when showing/hiding buttons. This prevents contents below the buttons (say, a footer, or paragraph that you might place there) from "jumping" vertically on each hide/show action.
- After the histogram is drawn, show (i.e., make visible) a button that lets the user start another round of votes (call this the "restart" button).
- In the restart button's callback, reset enough app state such that the user will have the same experience in the subsequent voting round (the same number of votes should be required to see results, the same buttons should be shown/hidden, etc).
- Implement a callback for the "8 more votes" button. It should hide all buttons first, then allow 8 more votes. After the 8th extra vote, automatically plot the vote histogram and show the "restart" button.
- [**+1 Extra Credit**: *The following feature is required for Thursday's lab that uses the localStorage API, but if you implement this feature by end of Wed, you earn extra credit.* Accumulate long term statistics -- keep a "since this web page was loaded" set of statistics, including the total clicks per image and total views per image. For example, if a user goes through three 16-vote rounds, your histogram should show a total of 48 votes split between all images, and percentages should also be cumulative.]
- [**+1 Extra Credit**: For any given vote, don't show an image in more than one &lt;img&gt; element.]

## Steps/features due at the end of Thursday
Persist the following data across page reloads and browser restart (a shutdown/launch cycle):
- "Image displayed" and "image clicked" *counts*. Continue to acculumate these across "Vote again" and reloads/restarts.
- Data that represents which three images are currently *visible*
- All other data that your app needs to load to make it behave the same as if there was not a page reload or browser restart.

In other words, load the saved data when your app starts up, so that your app "continues where it left off".

Resume features/cases

|User's exit point|Mode to recreate|States to track|
|---|---|---|
|Round's clicks<16|Continue voting|# of clicks so far, "normal vote" flag|
|2 buttons shown|Show buttons|"buttons shown" flag|
|"8 more", clicks<8|Continue 8more voting|# clicks, "8more" flag|
|Chart shown|Show chart, "Vote again" button|"chart shown" mode|

## Steps/features due at the end of Sunday April 3

*NOTE: You are* **strongly** *encouraged to submit this lab before Sunday so you can focus on the 301 Entrance Exam and your Week 4 group project in the coming week.*

- Use a custom font(s), color palette, layout, and semantic HTML. Optionally, you may want to use flexbox, Unsemantic, Bootstrap, Skeleton, or another layout system. Choose aesthetically appealing style settings such as font size and weight, padding, borders, margins, etc.
- Add instructions for users who don't know how to use the app. You can put the instructions on a separate page, or the same page as the voting page.

For animation, use mostly CSS and a small amount of HTML (and **no** JS) to implement the following requirements:
- R1. Use at least 3 types of CSS animations (such as transitions, fade in/out the page or a section(s), slide the page or a section(s) in/out, rotate elements in 2-D, rotate elements in 3-D, etc.) Using the same animation type on three DOM elements doesn't count - the animations must be of different types.
- R2. For at least one of your animations, use at least three @keyframe "points" to repeat an animation, and use "alternate" as the animation direction.
- R3. Make at least one of your animationn repeat an "infinite" number of times.

**+2 E.C.** Implement an "Easter Egg" in JS where the user can press the 'C' key to toggle the visibility of a &lt;span&gt; in the footer of your page; the span must initially be invisible and stay invisible until it is toggled to be visible; the span should show a dynamically updated count of the number of times the "inifinite" animation loop has repeated. Update frequency: The count must update every time the animation repeats. *Hints: Add an event listener for a keypress and in that callback, filter the event for the 'C' key's keycode. Add an event listener for the* **end** *of an animation event.*

**+1 E.C.** Make the span always appear in the lower right corner of the browser viewport no matter where the user scrolls on the page, and regardless of the browser window size.

**Up to +4 E.C.** Due by the end of the course on Fri April 8:
- Revisit your Week 1 and Week 2 web apps (Guessing Game and Pizza Shop) and add CSS animations that meet the above three CSS animation requirements R1 thru R3. You'll earn +2 points for each app that you "upgrade" with animations.

# Submitting

Use https://canvas.instructure.com/courses/1012436/assignments/4488793 for the Tue lab.

Use https://canvas.instructure.com/courses/1012436/assignments/4488786 for the Wed lab.

Use https://canvas.instructure.com/courses/1012436/assignments/4488789 for the Thr lab.

Use https://canvas.instructure.com/courses/1012436/assignments/4488792 for the Fri lab due Sun 4/3.

For each day's lab:
- Submit the GitHub URL for your commit hash.
- In a comment in this Canvas submission with answers to the following questions:
 - How long did you take to do this lab?
 - How did this go for you, overall?
 - What observations or questions do you have on what you've learned so far?
