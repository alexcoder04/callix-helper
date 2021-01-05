
const resize = () => {
  console.log("resized");
  if (document.getElementById("menu").offsetWidth == 250){
    document.querySelector("main").style.paddingLeft = "250px";
  } else{
    document.querySelector("main").style.paddingLeft = "30vw";
  }
}

document.body.onload = resize;

window.onresize = resize;
