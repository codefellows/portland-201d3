# Day 3 Lab

Today you'll add a few things to the work you've done so far. Use the User Stories to plan your app development. Assume all user stories from the previous lab **carry over**, except for the ones that are modified or are superseded here.

## User Stories (MVP... what you must do as a minimum)

- As a developer, to keep my work organized, I want to make a new Git branch for today's work (say, 'day03'), make code changes, and git a-c-p. Then I want to create a new branch and add one "user interaction" question, then merge that branch into my 'day03' branch, and repeat this process for each question.
- As a developer, I want to use thoughtful and descriptive `console.log()` throughout my code to help test and debug my work.
- As a developer, I want to convert some of my appropriate biographical elements into unordered lists, such as my education summary and/or work experience.
- As a prospective job seeker, I want to make myself more personable by adding a Top Ten list to the bottom of my "About Me" page with an ordered list in HTML, e.g., my "Top Ten Favorite Movies" or my "Top Ten Places I Want to Visit", etc.
- As a developer, I want to add a 4th question to my guessing game that takes numeric input, and indicates to the user whether the guess is 'too high' or 'too low', and gives the user exactly four opportunities to get the correct answer. I will use the `isNaN()` function to ensure that the user is providing valid numeric input.
- As a developer, I want to add a 5th question to my guessing game that accepts multiple possible correct answers that are stored in an array, for instance, "Can you guess a state that I have lived in besides Washington?"
- As a developer, I want to keep a tally of the total number of correct answers given by the user, and at the end of the game, tell them how well they did with a personalized, custom message that includes the number of correct answers and also addresses the user by name, e.g. "You got 4 out of 5 questions correct, Bobbi! You can do even better next time."
- As a developer, I want to use CSS to add some color to my "About Me" page, by changing the background color of the page to something besides white, then making all the header elements one color, all paragraph elements a different color, and all lists yet a different color.
- As a prospective jobseeker, I want to use a tasteful color scheme that demonstrates my sensibility toward design plus provides readable contrast between the text and the background.

### Stretch goals for extra credit, Up to +2 points:

- As a developer, I want to make my code more DRY by putting all of the questions, answers, and responses to my guessing game into arrays (or even one huge multi-dimensional array), and modifying the game logic such that a `for` loop will control the flow from question to question. This will take some planning... here's a hint on how to approach it:
```javascript
for (var i = 0; i < numberOfQuestions; i++) {
  var answer = prompt(questions[i]);
  if (answer === correctAns[i]) {
    alert(response[i][0] + userName + response[i][1]);
  } else...
```

# Submit
- Submit the URL for your GitHub pull request.
- Add a comment to this Canvas submission with answers to the following questions:
  - How did this go, overall?
- What observations or questions do you have about what you've learned so far?
