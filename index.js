/*
//by class name
var drumButtons = document.getElementsByClassName("drum");

// Convert HTMLCollection to Array and loop through
Array.from(drumButtons).forEach(function(button) {
  button.addEventListener("click", function() {
    // Action to take when button is clicked
    alert("Button " + button.innerHTML + " clicked!");
  });
});
*/
/*
//single button change
document.querySelector("button").addEventListener("click",function()
{
    alert("i was clicked")
});
*/




// Detect button clicks and make sound
var bt = document.querySelectorAll(".drum").length;
for (var i = 0; i < bt; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;  // Get the innerHTML of the clicked button

        // Call the makeSound function and pass the innerHTML
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

// Detect keypresses and make sound
document.addEventListener("keypress", function(event) {
    makeSound(event.key);  // Pass the pressed key to the makeSound function
    buttonAnimation(event.key);
});

function makeSound(key) {
    var audio;
    switch (key) {
        case "w":
            audio = new Audio("sounds/crash.mp3");
            audio.play();  // Play the sound
            break;
        case "a":
            audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "k":
            audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "l":
            audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        default:
            console.log("No audio assigned for this button");
    }
}
var buttonAnimation = function(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed") 

    
    setTimeout(function() {
        activeButton.classList.remove("pressed") // Use 'remove' to remove the class after the timeout
    }, 100); // Corrected the timeout duration as well
};