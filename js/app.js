const button=document.getElementById("startButton");
const image=document.getElementById("buttonImage");

button.addEventListener("pointerdown",(e)=>{
image.src="assets/start_pressed.png";
button.classList.add("pressed");
if(navigator.vibrate){
navigator.vibrate(CONFIG.vibration);
}

const rect=button.getBoundingClientRect();
ripple(
e.clientX-rect.left,
e.clientY-rect.top
);
});

function release(){
image.src="assets/start_normal.png";
button.classList.remove("pressed");
}

button.addEventListener("pointerup",release);
button.addEventListener("pointerleave",release);
button.addEventListener("pointercancel",release);
