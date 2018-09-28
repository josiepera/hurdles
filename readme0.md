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
| Collision Detection | H | 5hrs|  |  |
| Distance & Height of Hurdles | H | 3hrs| 2hrs | 2hrs |
| Moving Hurdles towards users | M | 3hrs| 1.5 | 1.5 |
| Key up and down | M | 2hrs| 1.5hrs | 1.5hrs |
| Stopping game when user touches hurdles| L | 2hrs|  |  |
| Restarting game| L | 2hrs|  |  |
| HTML & CSS| L | 1.5hrs|  |  |

| Total | 23.5hrs |  |  |  |

## Helper Functions
Helper functions should be generic enough that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description |
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string of text |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project.

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
