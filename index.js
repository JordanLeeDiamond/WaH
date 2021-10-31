const BTN = document.getElementById("BTN");

//BUTTON CLICK

BTN.addEventListener("click", () => {
    WaH.pause();
    WaH.currentTime = 0;
    WaH.play();
});