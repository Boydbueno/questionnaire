# Questionnaire Game

## Introduction

For a school assignment we have to create 'something' with some more advanced Javascript stuff.
I'm going to create a fairly simple questionnaire game where a player chooses a category and difficulty, gets a corresponding question along with four possible answers. 
For this project I will be using [Angular](https://angularjs.org/), supported by tests written with [Jasmine](http://jasmine.github.io/).

## Mechanics

This aim is to give this game some fairly simple mechanics while making it as modular as possible so that mechanics can easily be changed and new mechanics can be added.

### Players

My aim is to make this a two player game where players take turns alternately. It will be a offline game, where both players play in the same browser.

### Turns

When it's a players turn, he/she can choose between a number of difficulties. When a difficulty is picked the player will be given a couple of random categories to pick from.
When the category is selected a question will be shown with 4 possible answers.
If the player answers the question correctly, it'll gain points depending on the chosen difficulty. If it answers wrongly, it'll lose these points.
A player can also decide to pass, in this case points will stay as they are.

#### Turn order

- Pick difficulty
- Choose category
- Answer question or pass
- Modify points accordingly
- Pass turn to other player

### Difficulties

- Easy
- Normal
- Hard

### Categories

To be decided
