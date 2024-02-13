document.addEventListener("DOMContentLoaded", function () {
    let pantalla = document.querySelector(".pantalla");
    let onOffButton = document.querySelector("#onoff");
    let botonA = document.querySelector("#boton_A");
    let botonB = document.querySelector("#boton_B");
    let resetButton = document.querySelector("#reset");
    let led = document.querySelector(".led");
    let audio = new Audio("audio/super1.mp3");
    let positiveButton = document.querySelector(".positivo");
    let negativeButton = document.querySelector(".negativo");


    let isOn = false;
    let currentImage = 0;
    const images = [
        null,           
        "img/start.png", 
        "img/static.png",
        "img/jamp.png",  
        "img/runn.png"   
    ];

    
    let buttonAState = 0;

    let volume = 0.5;

    function togglePower() {
        isOn = !isOn;
        if (isOn) {
            pantalla.style.display = "block";
            led.style.backgroundColor = "green";
            currentImage = 1; 
        } else {
            pantalla.style.display = "none";
            led.style.backgroundColor = "red";
            
            currentImage = 0;  
            audio.pause(); 
        }
        
        pantalla.style.backgroundImage = images[currentImage] ? `url(${images[currentImage]})` : "";
    }

    function changeImageA() {
        if (isOn) {
            
            if (buttonAState === 0) {
                currentImage = 2;  
                buttonAState = 1;  
            } else {
                currentImage = 3;  
                buttonAState = 0;  
            }
            pantalla.style.backgroundImage = `url(${images[currentImage]})`;
        }
    }

    function changeImageB() {
        if (isOn) {
            currentImage = 4;  
            pantalla.style.backgroundImage = `url(${images[currentImage]})`;
        }
    }

    function resetImage() {
        currentImage = 1;  
        pantalla.style.backgroundImage = `url(${images[currentImage]})`;
    }

    function increaseVolume() {
        if (isOn) {
            if (volume < 1) {
                volume += 0.1; 
                audio.volume = volume;
                audio.play(); 
            }
        }
    }

    function decreaseVolume() {
        if (isOn) {
            if (volume > 0) {
                volume -= 0.1; 
                audio.volume = volume;
            }
        }
    }

    onOffButton.addEventListener("click", togglePower);
    botonA.addEventListener("click", changeImageA);
    botonB.addEventListener("click", changeImageB);
    resetButton.addEventListener("click", resetImage);
    positiveButton.addEventListener("click", increaseVolume);
    negativeButton.addEventListener("click", decreaseVolume);
});
