# Button game

A simple multipalyer game where players earn points by clicking the game button.

Try it here: https://buttongame2020.herokuapp.com/

The game looks quite ugly now, but don't worry, styling will be added soon! Now, continue reading and check the game rules and how you can start developing this game yourself.

## Game rules

Each player gets 20 points on registration. The goal is to push the game button to earn more points.

Each game button push costs one point. All the players increase the amount of pushes in the counter.

More points can be earned by the following rules:

- 5 points on every 10th
- 40 points on every 100th
- 250 points on every 500th game button push in the game.

If the user loses all his points, he is given the chance to restart the game with 20 points.

## Project structure

The project consists of a backend and a frontend. The bacend is made with Express. MongoDB is used as the database where user info and game button pushes are saved. The backend runs on Heroku at the moment.

The frontend is made with React and Redux. You can find the frontend files on the frontend folder. Communication between the backend and the frontend is implemented with Axios and Socket.io.

## Getting started

You must have Node installed on your computer. If you don't have it yet, check here: https://nodejs.org/en/download/

After that, clone this repository 
```
git clone https://github.com/nellileinonen/button-game.git
```

Go to the frontend folder where you can find the code that is relevant to the game frontend
```
cd frontend
```

Install dependencies by typing
```
npm install
```

Then run 
```
npm start
```

After this, the game should be up and running in development mode!

## To do

- Add notifications on errors during user registration and login so that the user knows what is going on. Now there is a major usability problems on registration and login because of lack of communication.
- Add styling.
- Fix position and styling of the award alert.
