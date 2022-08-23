var drumBtns = document.querySelectorAll(".drum");

//Mouse clicks
drumBtns.forEach(element => { element.addEventListener("click", function () {   
    var btnInnerHTML = element.innerHTML;
    makeAudio(btnInnerHTML);
    makeAnimation(btnInnerHTML);
    });    
});

//Keyboard inputs
document.addEventListener("keydown", function (event) {
    makeAudio(event.key);
    makeAnimation(event.key);   
});

//Creating audio    
function makeAudio(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            break;
    };
    
};

//Creating animation
function makeAnimation(key){
    var activeButton = document.querySelector("."+key);
    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);
}