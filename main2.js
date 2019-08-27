function openNav() {
  document.getElementById("mySidebar").style.width = "40vh";
  document.getElementById("page1").style.marginLeft = "250px";
  document.getElementById('burger').style.zIndex = "0";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("page1").style.marginLeft = "0";
  document.getElementById('burger').style.zIndex = "1";
}
