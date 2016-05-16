# Week 2 Project: pizza3001

### It's 3001: A Cheese Odyssey... from the Future!

In lecture we learned how to model an entity in JavaScript using objects. Now it's your turn to build an app that models the *problem domain* below. You'll also apply more specific style and design concepts in this week's labs.

* Before coding, create a new folder (with a README.md) called "pizza" and develop this week's app in that folder. Each day this week, you'll work in separate branches, and at the end of each day's lab, create a GitHub PR from your branch into master, and accept the request so that each day's work is merged into master. This way your app will continue to improve throughout this week..

* For today's lab, create and switch to a new branch. Branch names can be whatever you want, but we suggest that you use a consistent naming scheme such as 'dayX-[feature]' for the branch name, e.g., day05-dataModel, day06-objects, etc.

## Problem Domain

Jenny owns a chain of pizza stores. Her pizza company, &quot;pizza3001&quot;, is expanding. With increased business, Jenny knows she needs a better system to help manage expenses and supplies.

One of her problems is to keep track of which times delivery drivers are needed at each location. To stay competitive, pizza3001 needs to keep all deliveries under 30 minutes. To satisfy that goal in a cost-effective way, each driver is expected to make **3 deliveries per hour**. Driver schedules are determined by expected demand for pizza delivery. Also, she needs to know how many total pizzas she's selling so that she can order the right amount of supplies/ingredients.

Jenny knows you've been studying web development, and asked you to improve her website. She wants two pages: a public-facing page (index.html) that visitors see, and an internal page (sales-data.html) to manage her business. The internal page has higher priority, so please build that first.

## Day 06 Lab

### Requirements on sales-data.html
Display delivery info at various store locations. Jenny's market analysis has established the expected minimum and maximum number of pizzas and deliveries per hour.  Based on that market analysis data, here are the projected numbers for each location that your app will use to calculate results and present them on the data page:

| Time  | Min Pizza/hr  | Max Pizza/hr | Min Delivery/hr | Max Delivery/hr  |
|---|---|---|---|---|
| 8am-11am  | 0  | 4  | 0 | 4 |
| 11am-2pm  | 0  | 7  | 0 | 4 |
| 2pm-5pm  | 2  | 15  | 1 | 4 |
| 5pm-8pm  | 15  | 35  | 3 | 8 |
| 8pm-11pm  | 12  | 31  | 5 | 12 |
| 11pm-2am  | 5  | 20  | 5 | 11 |   

Create a prototype of the webpage with randomly generated data, constrainied within the boundary values in the table above (e.g., with a min, max of 0 and 4, respectively, the random number can be 0, 1, 2, 3, or 4).

Jenny plans to have stores in Hillsboro, Pearl, DowntownPDX, Buckman, PDXairport, and Clackamas. Obviously the number of delivery runs must be less than or equal to the number of pizzas sold (e.g., it would not make sense to deliver a total of 3 pizzas to 10 locations).

For each *location*, render the location name followed by one line of output for *each hour* of operation, similar to the example below. Note: your numbers will not be the same as the numbers in the table below since your numbers will be randomly generated.

Hillsboro
-  8:00am 0 pizzas, 0 deliveries -- [ driver not recommended ]
-  9:00am 2 pizzas, 2 deliveries -- [ drivers recommended: 1 ]
- 10:00am 2 pizzas, 1 delivery -- [ drivers recommended:   1 ]
- 11:00am 5 pizzas, 4 deliveries -- [ drivers recommended: 2 ]
- 12 noon, etc., same kind of thing calculated for each hour
- 1:00pm
- 2:00pm
- 3:00pm
- 4:00pm
- ...
- 1:00am

### Requirements on index.html
- Shows at least one image of a pizza.
- Lists store locations and hours (e.g., "8:00am to 2:00am, Tue - Sun, closed Mon")
- Eye-catching line of text that says &quot;NN happy Pizza Odysseys this week!&quot;, where NN is the total number of pizzas sold that week, and the total is geneated by the same code that generates the total shown on the data page.
- Color palette that provides a futuristic theme/visual web page appearance
- Custom font(s) from Google Fonts

### User Stories (MVP)
- As a user, I want a webpage that displays individual store data for pizza3001, so that I can be informed about how to run my business
- As a developer, I want to use OOP to build this site, so that the site will be more effective and the code will be easier to read and understand. I want to use object literals to initialize my objects.
- As a user, I want a functional, well organized webpage that displays my data in a user-friendly fashion;
- As a user, I want my data broken out in a logical fashion so that I can make more informed decision about my inventory supply;
- As a user, I want my data compiled so that I can see my product needs as business as a whole.

### Technical Requirements
- New folder in repo with scaffold and README; repo cloned to local machine
- All work is done on a non-master branch, with a regular commit history and meaningful commit messages.
- Good use of *object literals*, one object per store model, with properties and methods correctly initialized
- Main page meets requirements of problem domain.
- Stores correctly renders using lists in the &quot;data&quot; page.

### Extra Credit

#### User Story (stretch)
 - As a developer, I want to present the store data in a table format on the webpage, so each store's data is easier to represent and understand.

#### Test-driven Development
For 2 points extra credit, write tests that verify at least three functions in your web app, and write at least two tests for each function -- one test that passes when the function works as expected, and one test that passes when your function avoids incorrect behavior. For example, suppose you have a function that concatentates two strings and returns the result as one string. One test can send 'hello' and ' world' to it, and expects 'hello world' to be returned. Another test can verify that the return value is not an array of strings.

If you submit your work without tests, you may add tests to your repo and re-submit this assignment up to one week later for a chance to earn the extra credit points.

## Submit

Please submit the following items in Canvas:

1. GitHub URL for your git commit hash

2. Answers to the following questions:

  . How much time did you spend on this assignment?

  . How did this go, overall?

  . What aspect(s) of this lab was most challenging for you?

  . What aspect(s) of this lab was most rewarding for you?
