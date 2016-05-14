Week 1, Class 2 (Tuesday)

# Lab Assignment Overview 

As discussed in class today, you'll create an "About Me" document in HTML, and have that page also provide the user with a guessing game about you.

Use three personalized guessing game questions about you (example: "Did I grow up in South Dakota?"). Your end product will look very much like what we finished with in class today, just extended and customized.

Note that as we progress through the week, new user stories will be added.

# User Stories (MVP)

("MVP" = "Minimum Viable Product" which is the most basic successful functionality of our project. Extensions, added features, and other enhancements fall under the category of "Stretch Goals.")

This is our first exposure to user stories. This is a device commonly used in software development to identify the functionality and design of a product. A product that satisfies user stories when the developer gives priority to the interests and motivations of people who have various needs/wants.

User stories typically take the form of, "As X, I want Y, so that Z" but do not necessarily need that structure.

- As a student, I want to create an About Me page as a demonstration of my skills with HTML.
- As an eventual jobseeker, I want to get practice in creating a portfolio page so that I can make myself appealing to potential employers.
- As an eventual jobseeker, I would like for potential employers to quickly learn a few things about me, such as a short bio, my education, an overview of my job experience, and my goals.
- As a fun-loving human being, I want to give the visitors to my profile page a guessing game that shows how fun-loving and interesting I am, and maybe include things about myself that would not ordinarily appear in a portfolio page.
- As a developer, I want to use markup to structure my index.html page, so the layout is in the order of assembly I prefer, with effective use of the markup possibilities offered by HTML.
- As a developer, I want to carefully design my scripts, so I can understand how to organize and write my code to achieve my goals in interactivity.
- As a developer, I want to create a simple script for my index.html page using JavaScript, so that I can use the browser to send a response to the user
- As a developer, I want to receive and use the user's name, so that the program is personalized to their experience.
- As a developer, I want to provide three (3) questions to the user, so that they can guess the answers and get to know me.
- As a developer, I want to notify the user after each question, so they are aware whether they were correct or not in their answers.
- As a developer, I want to be able to debug my code by using well structured console messages.
- As a developer, I want to manage my code through an online version control system, so I have the ability to work with others, manage my revisions, and keep a thorough record of my progress.

# Technical Requirements

- Create a new branch (call it 'day2' or 'about-me' or some other meaningful name) in the repo you created for labwork.
- Write clean HTML and JavaScript -- use correct indentation and syntax.
- Make sure your one of your three guessing game questions accept user input that is either y/n or yes/no, with either .toUpperCase() or .toLowerCase() used to validate user input.
- Useful and descriptive console.log messages are well written and correctly displaying to the browser console for each question of the guessing game.
- Add, Commit, Push process is being followed; evident in GitHub that commits are made regularly, and with good commit messages.

# User Stories (Stretch; any may be attempted in any order).

+1 point extra credit for each of the four items below, for a maximum of 4 total points extra credit:

- As a developer, I want to add a 4th question to my guessing game that takes numeric input, and indicates to the user whether the guess is 'too high' or 'too low', and gives the user multiple opportunities to get the correct answer.
- As a developer, I want to add a 5th question that accepts multiple possible correct answers that are stored in an array.
- As a developer, I want to refactor my JS code to make it more D.R.Y.
- As a developer, I want to keep a tally of correct answers given by the user, and at the end of the game, tell them how well they did, e.g. "You got 4 out of 5 questions correct! Good job!"

# Supporting Information

### Git

- Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

### Git Commands

- git status              Provides a detailed description of current state in working directory

- git add <file>          Include file in staged/tracked status of working directory

- git commit -m ''        Snapshot the tracked changes in current working directory; with message

- git push                Push local commits to GitHub

- git pull                Pull GitHub commits to your laptop

### Development Cycle
- In Atom and Chrome: edit, test, debug
- In git: add, commit, push (a-c-p)

# Development Tools Setup
- Setup check-list. Please get help if you don't have these set up:
  - [ ] Add "file safety" aliases to shell startup script
  - [ ] Set up global git config (user email/pass)
  - [ ] Set up node/npm and live-server
  - [ ] Set up JavaScript linter
    - `apm install linter-eslint`
    - Open new tab in Terminal; cd to home directory
    - `atom .eslintrc` in home dir.; copy-and-paste contents of .eslintrc, then in Atom's package settings, be sure linter-eslint has the right path for .eslintrc
