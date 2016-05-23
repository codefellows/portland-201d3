# BusMall [DRAFT VERSION]

## New week, new project!

You're hired by startup company *BusMall*, whose product is like the &quot;SkyMall&quot; catalog found in airplane seatback pockets, a catalog of assorted high-markup products provided to a captive audience. But BusMall catalogs will be placed on Portland buses.

To limit printing costs, BusMall will print a small percentage of the products it offers; it will print only items that are likely to sell well. To determine which products to print, BusMall will use your web app to estimate the level of consumer interest in each product.

BusMall wants a web app that shows potential products to users, showing three randomly selected products at a time. For each set of 3 images shown, the users will click the image of the product they'd most likely purchase, then repeat the procedure for a total of 16 selections ("votes").

BusMall wants your app to show three images side-by-side in a single row, so you'll need to manage the size and aspect ratio of the images, and may need to edit them a bit by cropping them (alternatively, you can set images' CSS background-size to "cover" or "contain"). But in any case, product image files should each havea file size under 250 KB.

To keep the marketing analysis unbiased, do not show voting results before all 16 votes have been cast; even after 16 votes, do not automatically show the results; instead, BusMall wants you to make two buttons visible on the page once 16 votes are cast: one button that, when clicked, shows voting results, the other button that lets the user decide to vote 8 more times, then show results automatically after the 8th additional vote.<br>
[**Mon Lab**: Write logic that shows/hides the buttons at the right timess, but implement the callback only for the **"Show Results" button**]<br>
[**Tue Lab**: Implement the callback for the "8 More Votes" button.]

To show results, your app should render product votes in a 2-D histogram, with the product name on one axis, and number of votes on the other axis.<br>
[**Mon Lab**: Render the histogram using one of the following methods (your choice):
- Text characters (think "Draw a bar chart using ASCII art.")
- DOM elements that look like bars in a bar chart. Each element's size is proportional to the number of votes (e.g., use a block element that has a solid background color).
- Dynamically generated HTML table.]

[**Tue Lab**: Replace the method used in Mon Lab with code that uses a &lt;canvas&gt; element and a graphics library such as chart.js, highcharts.js, or D3.js.]

BusMall is interested not only in the total number of votes, but also the percentage of times that an item was clicked when it was shown. Thus your app must also track of how many times each image has been displayed regardless of whether it was ever selected. Render those percentages separately, or combine percentages and vote counts into one plot.<br>
[**Mon Lab**: Given the rendering method you chose above, add percentage info to your vote count plot, or draw a seprate "percentage vs product name" plot using the same method.]<br>
[**Tue Lab**: Add percentage info to your vote count plot, as a combined plot. Choose a 3rd party library, such as the libraries mentioned above, that lets you combine multiple datasets into one chart.]

**Time machine - peer into the future!:** On Wednesday a.m., BusMall's marketing department wil receive negative feedback from users who want to save their voting progress such that when they refresh the page or restart the browser, they can resume voting, ...<br>
[**Wed lab**: ...so make your app persistent by saving app state in local storage. See details in the "Wednesday" section below.]

**Time machine - peer even further into the future!:** BusMall is impressed with your app's logic, but wants your app to look good too, with awesome styling, layout, and **CSS animations**...<br>
[**Thr lab**: ...so add styling, layout, and CSS animations. See details in the "Thr Lab" section below.]

## Steps for each day's lab

### Daily Step 1: User Stories
Worth 2 points (10% of each lab's grade). After Monday's scaffolding, at the start of each lab, work on a User Stories document first (e.g., &quot;userStories.md&quot;). Write your own list of user stories at the start of each day's lab. Consider the multiple roles involved: marketing research team, developer, focus group user. The commit logs in your repo will have a few initial commits for the scaffolding process (LICENSE, README.md) but next, you should have a 'user stories' commit in place *before* you write any web app code.

Example user story (which you don't need to follow exactly - this is *only* an example):
- As a marketing guru, I want an app that contains 1000 images, and show the focus group user 3 images at a time, drawn randomly from the 1000-image pool..

### **Daily Step 2**: Tests
Worth 2 points (10% of each lab's grade). Write tests as a document. Focus on tests that verify logic flow and the user experience (i.e., When someone uses your app to vote on products, do they experience what you intend them to experience?) You can write automated tests where applicable, and do manual testing where applicable.

An example of a non-automated test:
- Load the web app, then vote 16 times. During the voting process, verify these items:
  - The two buttons, "Show Results" and "8 More Votes" are not visible during the first 15 votes.
  - After the 16th vote, the two buttons become visible.

## Monday-specific Steps
1. Create a new folder or repo for this week's project called something like *bus-mall*.
- Scaffold your repo/folder with the usual README.md. Add an *img/* folder to hold product images.
- Write the purpose of your app in a README.md, then git **a-c-p**. Use good Markdown style to make README.md look nice; use the &quot;Markdown Preview&quot; feature in Atom to help you in this task.

The following items are ordered in a suggested sequence. You don't need to follow this specific order, but it is provided in case you find yourself asking, "Where should I start?" or "What feature shoud I work on next?".

4. Populate your img/ folder with at least ten (10) images, and use an image management application (Preview (OS X), Photo Viewer (Windows), Gimp (multi-platform), etc.) to make sure each image is less than 250 KB in size, then **a-c-p**.
- Do &quot;Daily Steps&quot; 1 and 2 above. You can add user stories to README.md, but create a new file such as tests.md to hold your test descriptions.
- Create an HTML file(s). Include title(s), instructions, buttons, images. Give each image a "product name" text label visible to the user.
- Write and use a constructor that creates an object associated with each **image**, and give each image at least these properties:
 - Filename
 - Product Name
 - Number of times shown
 - Number of times clicked
- Write code that randomly selects three images from img/, then display them "side by side by side" in the browser window. [**+1 Extra Credit** if you make your site responsive, such that the images are shown in a column when the browser viewport is narrow.]
- Handle mouse clicks on displayed images, and track clicks and the "times displayed" count for each image.
- Include two hidden buttons, one to display votes, one to allow 8 more votes, and make the buttons visible after the 16th vote.
- Add an event listener for the "display votes" button; that function should plots vote results.
- Hide both buttons immediately after the user clicks "Show Results", then render the histogram. Use the "visibility" CSS attribute of buttons, and not the "display" attribute, when showing/hiding buttons. This prevents contents below the buttons (say, a footer, or paragraph that you might place there) from "jumping" vertically on each hide/show action.
- After the histogram is drawn, show (i.e., make visible) a button that lets the user start another round of votes (call this the "New Round" button).
- When an image is clicked, show three new random images. Images can repeat -- the random selection process can pick randomly from the full set of images each time. [**+2 Extra Credit**: For any given vote, don't show an image in more than one &lt;img&gt; element, and don't repeat shown images in subsequent voting rounds unless all images have been shown. A simple, but inefficient way to implement these "non-repeat" features is to keep generating random numbers, throwing away numbers that repeat, whereas efficient methods don't discard any randomly generated values; you get another **+2 Extra Credit** points for using an efficient method with one random value per image rendered.]

## Tuesday-specific Steps

1. Write the New Round button's callback. In that function, reset enough app state such that the user will have the same experience in the subsequent voting round (the same number of votes should be required to see results, the same buttons should be shown/hidden, etc).
- Display the vote histogram using a &lt;canvas&gt; element(s) and a charting library. Show a histogram of votes as a bar chart. Plot percentage values on the same chart (also as bars, or as text labels like "12%"), or plot them in a bar chart in a separate &lt;canvas&gt; element, whichever is easier for you. The size and look of your chart(s) is up to you, just be sure to put the chart in an area beneath the three images.
- Implement a callback for the "8 More Votes" button; the callback should hide all buttons, then allow 8 more votes. After the 8th extra vote, hide buttons, plot the vote histogram and show the "New Round" button.
- [**+2 Extra Credit**: *The following feature is required for Wed lab that uses the localStorage API, but if you implement this feature by 8am Thr, you get extra credit.* Accumulate long term statistics -- keep "since this web app was run for the first time" stats, including total clicks and total views per image. For example, if a user goes through three 16-vote rounds, your histogram should show a total of 48 votes (split between all images); percentages should also be based on cumulative stats.]

## Thursday-specific steps
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

**+2 E.C.** Make the span always appear in the lower right corner of the browser viewport no matter where the user scrolls on the page, and regardless of the browser window size.

**Up to +4 E.C.** Due by the last day of the course
- Revisit your Week 1 and Week 2 web apps (Guessing Game and Pizza Shop) and add CSS animations that meet the above three CSS animation requirements R1 thru R3. You'll earn +2 points for each app that you "upgrade" with animations.

## Submit
For each day's lab:
- Submit the URL of your final GitHub PR for that lab.
- Submit in canvas answers to the following questions:
  - How long did you take to do this lab?
  - How did this go for you, overall?
  - What observations or questions do you have on what you've learned so far?
