const minimum = 1;
const maximum = 7;
const answer = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;


let attempts = 0;
let guess;
let running = true;
let emoji = "😉";
let hurray = "🎉";



while (running) {
    guess = window.prompt(`Guess a number between ${minimum} and ${maximum}:
        If you get it correct, you get my number! ${emoji}`);
    guess =Number(guess);
   

    if (isNaN(guess)) {
        alert("Please enter a valid number.");
       
    }
    else if (guess < minimum || guess > maximum) {
       window.alert(`Please enter a number between ${minimum} and ${maximum}.`);
    
    }
    else {
        attempts++;
        if (guess < answer) {
            window.alert(`try again!`);

        }
         else if (guess > answer) {
           window. alert("Too low! Try again.");
        } 
        else{
            window.alert(` ${hurray}correct. it took you ${attempts} attempts.`);
                    running = false;
                }
            }
        }

        /*function rollDice(){
  const numOfDice = document.getElementById("numOfDice").value;
  const diceResult = document.getElementById("diceResult");
  const diceimages = document.getElementById("diceimages");
  const values = [];
  const images = [];

for (let i = 0; i < numOfDice; i++) {
const value = Math.floor(Math.random() * 6) + 1;

values.push(value);
images.push(`<img src="dice_images/${value}.png" alt="Dice"> `);}

diceResult.textContent = `You rolled: ${values.join(", ")}`;
diceimages.innerHTML = images.join(" ");}
*/

function rollDice() {
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceimages = document.getElementById("diceimages");
  
    const values = [];
    const images = [];
  
    for (let i = 0; i < numOfDice; i++) {
      const value = Math.floor(Math.random() * 6) + 1;
      values.push(value);
      images.push(`<img src="dice_images/Dice-${value}.png" >`);
    }
  
    diceResult.textContent = `You rolled: ${values.join(", ")}`;
    diceimages.innerHTML = images.join(" ");
  }