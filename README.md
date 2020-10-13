# Web-API-Code-Quiz

# Description
Homework week 4

GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score

# Psuedocode
determine number of questions 
generate a list of questions with 4 choices and slot for correct answer 
create container to hold code quiz
need a timer how long a timer?  start at 30 sec 
need a start button when pressed 
start the countdown timer 
  present question with choice of four answers
  accept button press on any of the four answers 
  compare button press to the correct answer stored earlier 
    if incorrect decrease timer by 10 seconds 
    if correct add 1 to correct 
    add 1 to total
    update page with correct/incorrect wait for user to accept 
    if check timer > 0 and number of questions < total questions 
      display next question 
    else
      game is over
      new screen 
        top output of number out of number correct
        input area "enter initials"
        submit button 
        play again button 
	  if play again button pushed 
	    clear screen
	    return
	  if submit is pressed 
	    new screen 
	    save initials and score to sorted list based on score 
	    box with list of names and scores 
	    play again button beside below 
	    Clear high score button 
	      if play again pressed 
	        return 
	      if clear high score pressed
	        clear list 
	        stay on page just show blank list 

# Website

