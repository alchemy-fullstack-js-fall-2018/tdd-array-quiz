# Quiz: TDD and Functional Array Methods

* Use **standard lab submission procedure** that you have used for past 9 weeks: fork, clone, work, push, PR!

## Instructions: "Don't Ask Why"

Write a **tested** (jest unit tested) library function (a single `function` exported from a module/file)
that takes an array of words (strings, _you can assume valid input_) and returns a new array that:

* Has removed any words than contain the letter `Y` or `y`. (HINT: See [`includes`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes))
* Has modified the original word to be a phrase of the format: "Is it &lt;word&gt;?"

Test Case:

Input | Output
---|---
['sky', 'hot', 'Yeti', 'green'] | ['Is it hot?', 'Is it green?']

**NOTE: You are _not_ being asked to implement the array methods like we did on the second lab. You are using normal, built-in array methods and combining them to achieve a specific purpose!**

## Repo

Included files:

* `README.md` (this file)
* `.travis.yml`
* `.gitignore`
* `.eslintrc`
* `package.json`

You will need to:

* Install dependencies via `npm i`
* `npm scripts` are already included, see `package.json`. You can
use `npm start` to start testing in watch mode
* Organize project (`lib` and `test`)

Quiz is open book, internet, etc...

**Goal is have PR with passing travis by end of allotted time.**

## Rules

1. **Make an initial commit when you start your work** (HINT: Open your PR!)
1. You have **30 minutes** to complete what you can. You may not finish everything or get things exactly right (and you don't need to do so to get a passing score). Do focus on quality of what you complete and demonstrating familiarity with the development setup and process we have been using.
1. You must complete this work on your own within the allotted time
    * Keep a good commit history to show progression of work.
    * You **need to manage your time** to have PR and last commit before deadline (remember, you can
    open PR and take advantage of travis checking your commits by pushing frequently).
1. You may use normal resources that a software developer uses on the job (docs, google, your prior work)
1. Use general best practices and common sense:
    * **Highly** recommended to implement what is needed, no more no less
    * Blind boilerplate or copying-in chunks of code will **not** be helpful and will likely create more work. Seriously, this is the one of the best ways to fail the quiz as you risk wasting your time trying to getting copious amounts of code (that never worked on this project) to work.
    * **Focus effort on requirements of the lab**. Seriously, read the [Instructions] section _more than once_ paying attention to detail.
1. Total possible points are 40. You will be graded out of 30 points
1. Demonstrate what you can accomplish by having **passing travis ci** and showing working code!
