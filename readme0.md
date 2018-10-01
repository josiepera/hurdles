# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Sep 25th| Project Description | Incomplete
|Sep 25th| Wireframes / Priority Matrix / Functional Components | Incomplete
|Sep 26th| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Sep 27th| Pseudocode | Incomplete
|Sep 28th| Initial JS  | Incomplete
|Sep 29th| Bug Fixes | Incomplete
|Sep 30th| Present | Incomplete

notes
  - start with one hurdle come across that they clear it
    - use transitions for it to come up stay and come down


## Project Description

The hurdles game is a game where the user's character is running on a track and along the way, has to jump over hurdles in order to get to the finish line.  The second the user touches the hurdle, they lose the game and have the option to either restart the game or go back to the landing page (exit the game).  The character itself will be a div and will only move up and down.  the hurdles will come at the character at a steady pace but at different heights. Once the user reaches the finish line, then they win the game.  

## Wireframes

(https://res.cloudinary.com/jperalta/image/upload/v1537903107/IMG_0950.jpg)
(https://res.cloudinary.com/jperalta/image/upload/v1537903105/IMG_0951.jpg)
(https://res.cloudinary.com/jperalta/image/upload/v1537903105/IMG_0952.jpg)
(https://res.cloudinary.com/jperalta/image/upload/v1537903103/IMG_0954.jpg)
(https://res.cloudinary.com/jperalta/image/upload/v1537903103/IMG_0955.jpg)


## Priority Matrix

https://res.cloudinary.com/jperalta/image/upload/v1537903105/IMG_0953.jpg

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP

- Gravity function
  - Making sure the character moves up and down
- Collision Detection
  - User loses once they touch one of the hurdles
- Key up and key down
  - Looking to use key up only, once the character reaches a certain height it will always fall to the bottom unless it touches a hurdles
- Random function for hurdles (hard code)
  - Start off with a baseline of same level hurdles
  - Can randomize height after
- Making hurdles come towards user

#### PostMVP

- Transition pages
  - Going from the starting page to the game and from the game to the winner's page
- Form to enter game and start button
- Stopping game when user touches hurdles
  - Alert user when to either restart or go back to landing page
- Different levels w/ different speeds

## Functional Components

Based on the initial logic defined in the previous  phases section try and breakdown the logic further into functional components, and by that we mean functions.  Does your logic indicate that code could be encapsulated for the purpose of reusablility.  Once a function has been defined it can then be incorporated into a class as a method.

Landing page
  - Contains the title of the Game
  - Short form to add user's name

Game Itit
  - Start Game button for the user to click on to initiate the game
  - Transition to the game after "start game" was clicked

Game Play
  - Once the game is on the screen, the user controls a character on the bottom left-hand corner of the page.
  There will be a delay of a few seconds before the hurdles start coming at the user.  Once the hurdles start,
  the user will have to click on the up arrow to make their character jump to avoid the hurdles. The height and distance between the hurdles will be random but will not exceed or go below a certain height and distance.

Winning The game
  - Winner wins either through timer or number of hurdles

Resetting the Game
  - If the user's character touches the hurdles, then an alert will pop up and the user has an option of restarting the game or going back to the landing page.
  - If the winner wins, there will also be an option to restart the game

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evaluate game possibilities based on time needed and the actual time you have before game must be submitted.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Gravity | H | 5hrs | 3hrs | 3hrs |
| Collision Detection | H | 5hrs| 8hrs | 8hrs |
| Distance & Height of Hurdles | H | 3hrs| 2hrs | 2hrs |
| Moving Hurdles towards users | M | 3hrs| 1.5 | 1.5 |
| Key up and down | M | 2hrs| 1.5hrs | 1.5hrs |
| Stopping game when user touches hurdles| L | 2hrs| 4hrs | 4hrs |
| Restarting game| L | 2hrs| 3hrs | 3hrs |
| HTML & CSS| L | 1.5hrs| 2hrs | 2hrs |
| Total |  | 23.5hrs  | 25hrs  | 25hrs  |

## Helper Functions
Helper functions should be generic enough that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description |
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string of text |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project.

## Code Snippet

```
function isCollapsed(player1, hurdle){

  let playerBottom = window.getComputedStyle(player1, null).getPropertyValue("bottom");
  let playerLeft = window.getComputedStyle(player1, null).getPropertyValue("left");
  let hurdleLeft = window.getComputedStyle(hurdle, null).getPropertyValue("left");
  let hurdleHeight = window.getComputedStyle(hurdle, null).getPropertyValue("height");

  playerBottom = parseInt(playerBottom.split('px')[0])
  playerLeft = parseInt(playerLeft.split('px')[0])
  hurdleLeft = parseInt(hurdleLeft.split('px')[0])
  hurdleHeight = parseInt(hurdleHeight.split('px')[0])

  if (hurdleLeft <= (playerLeft) &&
        playerBottom < hurdleHeight) {
          alert('You Lose, Back to Start Page', startGame())
}
}



setInterval(function(){
isCollapsed(player1, hurdle)
}, 300)
```

## Change Log
    Since the collision detection was inconsistent with each hurdle, I made the
    images of each obstacle larger and somewhat within range of where the program would
    detect the collision.  Below is the code in css where I changed the size.  
    This change was so the user would avoid as much of the collision detection as possibilities

    #one img, #two img, #three img,
    #four img, #five img, #six img,
    #seven img, #eight img, #nine img,
    #ten img{
      max-width: 130px;
      max-height: 100%;
    }

## Issues and Resolutions
 The main issue I had was using querySelectorAll to pull all of the hurdles instead of the first one.
 In order to resolve this, I had to hard code and copy all of the hurdles and create a function for each hurdle.
 Another issue was when I had to determine where both the hurdle and the user collided side by side.
 We used setInterval to find this but the couldn't find the left of the hurdle.  Fortunately, the instructors pointed out that the px had to be taken out in order to compare the left of the hurdle and the user.  Below is the code we used to solve this issue.  

```
playerBottom = parseInt(playerBottom.split('px')[0])
playerLeft = parseInt(playerLeft.split('px')[0])
hurdleLeft = parseInt(hurdleLeft.split('px')[0])
hurdleHeight = parseInt(hurdleHeight.split('px')[0])
```
