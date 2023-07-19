**Random Number Guessing Game**


Introduction
This is a simple Random Number Guessing Game implemented using HTML, CSS, and JavaScript. The game generates a random number between 1 and 100, and the player has 10 chances to guess the correct number. If the player guesses the correct number within the given chances, they win, and the game displays a winning message with a winning style. If the player exhausts all their chances without guessing the correct number, the game reveals the correct number.

How to Play
Open the index.html file in your web browser.
You will see the title "Random Number Guessing Game" and a short description of the game.
Below the description, there is an input field labeled "Guess a number between 1 and 100." Enter your guess in this field.
Click on the "Submit Guess" button to submit your guess.
The game will provide feedback based on your guess:
If your guess is not a valid number between 1 and 100, it will display an error message.
If your guess is correct, it will show a winning message with a green background.
If your guess is incorrect, it will provide a hint (greater or less) and show the number of chances left.
Game Logic
When the page loads, the game generates a random number between 1 and 100 and stores it as randomNumber.
The player can submit their guess by entering a number in the input field and clicking the "Submit Guess" button.
The game checks if the entered value is a valid number between 1 and 100.
If the guess is not valid, an error message is displayed.
If the guess is valid, the game checks if the guess matches the randomNumber.
If the guess is correct, the game displays a winning message and adds the .winning CSS class to the output to style it with a green background.
If the guess is incorrect, the game provides a hint (greater or less) and updates the number of chances left.
The player has a total of 10 chances to guess the correct number.
Once the player wins or runs out of chances, the input field and the "Submit Guess" button are disabled to prevent further attempts.
CSS Styling
The game features clean and attractive CSS styling to make the user interface visually appealing. The key CSS styles include:

A blue color scheme for the title and buttons to provide a cohesive design.
A light gray background to enhance readability and contrast with the main content.
Appropriate font sizes and padding for better user experience on various devices.
A winning style with a green background to celebrate the player's success.
Enjoy playing the Random Number Guessing Game and have fun trying to guess the correct number within 10 attempts
