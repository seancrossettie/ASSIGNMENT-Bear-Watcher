# Bear Watcher
## Introduction
Each year between July and September brown bears in the Katmai National Park congregate along the Brooks River.  This river is one of the main rivers that Sockeye Salmon swim up to spawn.  The brown bears wait in the shallows of the river and catch the salmon as they jump over rocks.  Want to see it in [ACTION](https://explore.org/livecams/brown-bears/brown-bear-salmon-cam-brooks-falls)?

You have been tasked with creating a site scientists and park ranger can use to track these bears.

## Get Started

1. Clone this repo
```
$ git clone github-url
$ cd repo-name
```
2. Follow the instructions from the ["Starting the Project" Instructions](https://github.com/nss-nightclass-projects/webpack-template/blob/master/README.md#starting-the-project) to ensure you make all the updates to get the project started.

3. Install Packages

```
$ sudo npm install
$ npm start
```

## Planning Requirements
* Create a github project on this repo
* Create feature tickets for this assignment
* Create wireframes for this project and attach them to the appropriate project ticket.

## Technical Requirements
* You must use [Boostrap](https://getbootstrap.com/) to style your page components.
* Your JS file should be comprised of functions, no actions should happen in your code outside of a function
* Your HTML and JS should all have proper indentations
* You should be have Modular Code
* Your JS code should be eslint error and warning free

## User stories
* As a user, when the page loads, I should see a bootstrap form that allows me to enter in a bear name and image url for a new bear.
* As a user, when I click the submit button on the new bear form a bear should be added to the page.
* As a user, when there are bears that are being tracked (ie after I have added one), I should see all their information displayed on a card.

## Dev Notes
* Your project should have 2 modules - bearForm and river.
  * bearForm - should be the form
  * river - should display all the bears

## Bonus #1: Tracking Fishing
* As a user, I should be able to click something on each bear to indicate it has just tried to catch a fish.
* As a user, I should be able to click something on each bear to indicate it has just successfully caught a fish.
* As a user, looking at a bear card I should see time stamps and statuses for each time a bear caught a fish or attempted to catch a fish
* As a user, looking at a bear card, I should see a total number of fish caught tally.

## Bonus #2: Fattest Bear Award
Each year in early september one bear is awarded the Fattest Bear award.  This award goes to the bear who gains the most weight between July and September.  Create an awards section on your application and award GOLD to the bear who has eaten the most fish, SILVER to the bear with the second most eaten fish, and BRONZE to the bear with the third most eaten fish.  Where applicable your application should show two winners for an award if the number of fish is tied.
