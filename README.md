# Donut Clicker

The Scenario - Welcome to Fred the Baker Baking Company!
You have been contracted by Fred the Baker Baking Company to take a concept, Donut Maker Clicker, from the drawing board to the browser. Fred the Baker is tired of making real donuts and is ready to retire. He needs our help to keep his love of donuts alive. He wants you to create a game that uses button clicks to create virtual donuts for the world to enjoy. But all those early mornings of donut making may have tired out his brain because he has some strange requirements for 'Auto Clickers' and 'Donut Multipliers'. Unfortunately, it's always "Time to make the Donuts" and Fred is too busy to give us guidance on how to implement these requirements.

# The Application Requirements
You must create a website that uses button clicks to create donuts. The donuts can be used as currency to buy Auto Clickers and Donut Multipliers, which will be used to make even more donuts!

# Terminology
Donut Count
The number of Donuts you have created by clicking, either manually or with an Auto Clicker.

# Auto Clicker
Auto Clickers will automatically click for us every second, so we don't have to click manually.

# Auto Clicker Count
The number of Auto Clickers purchased. Auto Clickers apply one click per second for every Auto Clicker purchased.

Number of Auto Clickers Purchased	Clicks applied per second
1	- 1
2	- 2
3	- 3
...you get the picture

# Auto Clicker Cost
The number of donuts required to purchase an Auto Clicker. Starting cost is 100 donuts. For each Auto Clicker purchased, the cost of the next Auto Clicker increases by 10%.

# Next Auto Clicker Purchase	- Cost
1	- 100 donuts
2	- 110 donuts
3	- 121 donuts
4	- 133 donuts
Donut Multiplier
Donut Multipliers increase the number of Donuts made for each click.

# Donut Multiplier Count
The amount of Donut Multipliers purchased. Donut Multipliers increase the value of a click by 20% for each Donut Multiplier purchased. Donut Multipliers increase the value of both manual and Auto Clicks.

Donut Multipliers Purchased	Donuts Earned per Click
1	- 1.2
2	- 1.44
3	- 1.728
4	- 2.0736
NOTE: The number of Donuts earned per click can be calculated with the following equation:

1.2 to the xth power, where x is the number of Donut Multipliers
or written in JS syntax as Math.pow(1.2, DonutMultiplierCount)
Donut Multiplier Cost
The number of donuts required to purchase a Donut Multiplier. Starting value is 10 donuts. For each Donut Multiplier purchased, the cost of the next Donut Multiplier increases by 10%.

Next Donut Multiplier Purchase -	Cost
1	- 10 donuts
2	- 11 donuts
3	- 12.1 donuts
4	- 13.31 donuts

Index.Html Setup
Create a Header section
  Contains a navigation menu that when clicked will expand sections about:

    Fred the Baker Baking Company
    The inspiration for this game, Cookie Clicker
    Your contact info
Create a Main section that contains:
A section that handles a click
  Contains a button that can be clicked to make donuts.
  Displays the amount of Donuts made.
A section that interacts with the AutoClicker
  Displays the amount of Auto Clickers purchased.
  Provides a button to purchase Auto Clickers.
  Button is disabled when you do not have enough Donuts to buy an Auto Clicker.
A section that interacts with the ClickMultiplier
  Displays the amount of Donut Multipliers purchased.
  Provides a button to purchase Donut Multiplier.
  Button is disabled when you do not have enough Donuts to buy a Donut Multiplier.

Donut Maker Functions
Create functions in your DonutMaker class that perform the following actions:

  Adds a donut to the Donut Count for every button click
  Returns the Donut Count
  Purchases Auto Clickers with donuts
  Checks whether you have enough donuts to purchase an Auto Clicker
  Increases the count of Auto Clickers with each purchase of an Auto Clicker
  Increases Auto Clicker cost with each purchase of an Auto Clicker
  Activates the Auto Clicker by applying clicks every second based on the Auto Clicker count
  Purchases Donut Multipliers with donuts
  Checks whether you have enough donuts to purchase a Donut Multiplier
  Increases Donut Multiplier cost with each purchase of a Donut Multiplier
  Increases the count of Donut Multipliers with each purchase of an Donut Multiplier
  Calculates the number of donuts earned with each click based on the count of Donut Multipliers
  Resets the game state. This action should reset the game to zero donuts, zero Auto Clickers, and zero Donut Multipliers.
Additional Requirements
  Use semantic html and BEM when writing your html so that in the future we have a solid base to expand upon.
  Donuts are usually round, but the way in which you round your donut calculations is up to you!
........

This project demonstrates how to mimic a modular environment with testing capabilities. Frameworks like React will come out of the box with the testing and transpiling tools needed to create modular components that can be tested. Without a framework we are using the following tools:

- [Node](https://nodejs.org/en/)
- [Parcel](https://parceljs.org/)
- [Babel](https://babeljs.io/)
- [Jest](https://jestjs.io/)

## Getting Started

To get started `clone` this repository and run `npm install` . Be sure you have `node` already installed on your machine. You can check this in your terminal by running the command `node -v`

## Want to set up this project from scratch?

Not wanting to clone, but want to practice the set up of the environment yourself? The following steps will allow you to set up this project from scratch

- `mkdir virtual-pet-js`
- `npm init -y` to set up a `package.json` file and accept the default settings
- `npm i --save-dev parcel jest babel-jest @babel/core @babel/preset-env` to install Parcel, Jest and Babel
- create a `.babelrc` file and add the following snippet to this file:
  ```
     {
        "presets": ["@babel/preset-env"]
    }
  ```
- Edit the `scripts` in your `package.json` file to read as

  ```
    {
        "scripts": {
            "start": "parcel index.html",
            "build": "parcel build index.html",
            "test": "jest --watchAll"
        }
    }
  ```

- Create a [gitignore file at gitignore.io](https://www.toptal.com/developers/gitignore)
  - add Node and VisualStudioCode to this gitignore and bring into the project

## Interacting with this application

- `npm test` will run the tests
- `npm start` will run the application

Credits given to this source: [Using Jest with Parcel Bundler](https://ryankubik.com/blog/parcel-and-jest)
