function ripple(x,y){
const r=document.getElementById("ripple");
r.style.left=x+"px";
r.style.top=y+"px";
r.classList.remove("animateRipple");
void r.offsetWidth;
r.classList.add("animateRipple");
}
