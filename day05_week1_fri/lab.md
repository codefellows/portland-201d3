# Day 5 Lab

Today you'll pair-code to solve several small coding problems. Do your work in a new folder in your repo (e.g., "/lab-day05").

* Write tests **first** in test.js and verify that all tests **fail** because you haven't coded the features that are being tested. Commit your modified test.js and compute.js to **prove you wrote your tests first!**. Write index.html and include test.js and compute.js.
* Write your code as functions in compute.js, solving the problems below.
* Write app.js to connect compute.js to the DOM. Include app.js in index.html and test/debug your web app.
* Create a README.md in your new folder, and write it using markdown (search on "github markdown syntax"). Use formatting to make it look good. Describe what your app does.
* Create a **new branch** for each code problem (problems 1 thru 6 below). For each branch, write tests first, verify the tests fail, then write the app's function, then verify your function. Use a PR to merge the branch to *master*, then remember to `git pull` the new master branch from GitHub into your *local* master branch, then `git checkout [branch name]`.

---
#### Problem 1
*(Create a new branch!)* Write a function called **sum()** that takes in two numbers as arguments and then returns the sum of those numbers. Have it console.log() the numbers and the sum with a message that exactly follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console, and when it is finished, add-commit-push (**a-c-p**) your work to your repo, merge it to master, and then pull the new master branch from GitHub into your local master branch.

**a-c-p** (Do this often, esp. for each coded Problem.)

---
#### Problem 2
*(Create a new branch! Use a new branch for each problem)* Write a function called **multiply()** that takes in two numbers as arguments and then returns the product of those numbers. Have it console.log() the numbers and the product with a message that exactly follows this example and uses the values that were input into the function:

"The product of 4 and 7 is 28."

---
#### Problem 3
Write a function called **sumAndMultiply()** that takes in THREE numbers as arguments and then returns two values in an array: the sum of those numbers and the product of those numbers. Use your existing sum() and product() functions to do these calculations, and be sure to turn off their console.log()s by commenting them out. Have this function do a console.log() of the numbers, the sum, and the product with two separate messages that exactly follows the examples below and uses the values that were input into the function:

"4 and 7 and 5 sum to 16."

"The numbers 4 and 7 and 5 have a product of 140."

---
#### Problem 4
Write a function called **sumArray()** that takes in an array of numbers as a single argument and then returns the sum of those numbers. Have app.js console.table() the array and console.log() the sum with a message that exactly follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

Test this function by hand in the console (remember, to do this you'll need to create an array first), and when it is finished, add-commit-push (**a-c-p**) your work to your repo, merge it to master, and then pull the new master branch on GitHub into your local master branch.

---
#### Problem 5
Write a function called **multiplyArray()** that takes in an array of numbers as a single argument and then returns the product of those numbers. Have app.js console.table() the array and console.log() the product with a message that exactly follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 20."

**a-c-p**, yadda yadda...

---
#### Render
We're now going to put all of this output into the browser window. First, do these things to get the page structure ready:

* In the HTML file, create \<p> elements with element IDs such as 'question-1', 'answer-1', 'question-2', 'answer-2', and so on, one pair of IDs per problem above.
* In app.js, create variables that represent those \<p> elements, e.g., `var pQ1 = document.getElementById('question-1');`, etc.
* Have app.js call functions in compute.js and store functions' results in variables, then use the .textContent property fill in the "question" \<p>'s with the first sentence in each of the five problems above, respectively, using this format: "Problem 1: Write a function called sum() that takes in two numbers as arguments and then returns the sum of those numbers.", etc.
* Have app.js use the .textContent property fill in the "answer" \<p>'s with the stored function call results.

---
## Pair Programming
- Work on just one repo. Both coders will submit the same PR URL in the end.

- Add your coding partner as a collaborator. In your repo on GitHub, go to Settings -> Add Collaborators, and add your partner's GitHub username. Ask for help during lab if you need it.

- Swap driver/navigator roles every 20 minutes. Use a cell phone timer or web-based timer app to remind you.

# Submitting Your Work

Please Submit

1. GitHub URL of the final *PR* you made to merge your code into master.
- How long did this lab take?
- What was the most difficult part of the assignment today?
- What was the easiest part of the assignment today?
