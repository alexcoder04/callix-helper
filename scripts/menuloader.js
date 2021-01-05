
const markCurrent = () => {
  var page = window.location.href.split("/");
  page = page[page.length - 1];
  const navLinksContainer = document.getElementById("nav-links-container");
  Array.from(navLinksContainer.children).forEach(navLink => {
    if (navLink.href.endsWith(page)){
      navLink.style.backgroundColor = "#1DCBAA";
    }
  });

}

$(document).ready(() => {
  $("#menu").load("../include/menu.html", markCurrent)
});
