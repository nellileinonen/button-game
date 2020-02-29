# Button game

A simple multipalyer game where players earn points by clicking the game button.

Try it here: 

## Game rules

Each player gets 20 points on registration. The goal is to push the game button to earn more points.

Each game button push costs one point. All the players increase the amount of pushes in the counter.

More points can be earned by the following rules:

- 5 points on every 10th
- 40 points on every 100th
- 250 points on every 500th game button push in the game.

If the user loses all his points, he is given the chance to restart the game with 20 points.

## Project structure

The game consists of a backend and a frontend. The bacend is made with Express. MongoDB is used as the database where user info and game button pushes are saved.  The frontend is made with React and Redux. Communication between the backend and the frontend is implemented with Axios and Socket.io.

## Set up

You must have Node installed on your computer.

Clone this repoitory.

Go to the backend folder and create there a .env file based on the example given in the .env.example file.

Then run 
```
npm start
```
to start the sever.

Then go to the frontend folder and run
```
npm start
```
to start the React app.

After this, the game should be up and running!

## To do

The game looks quite ugly now, but don't worry, styling will be added soon!
