
const resize = () => {
  console.log("resized");
  if (document.getElementById("menu").offsetWidth == 400){
    document.querySelector("main").style.paddingLeft = "400px";
  } else{
    document.querySelector("main").style.paddingLeft = "30vw";
  }
}

document.body.onload = resize;

window.onresize = resize;
