
function openNav() {
  document.getElementById("mySidebar").style.width = "40vh";
  document.getElementById('burger').style.display = "none";
  document.getElementById('scroll-indicator').style.display = "none";

}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById('burger').style.display = "block";
  document.getElementById('scroll-indicator').style.display = "block";


}
