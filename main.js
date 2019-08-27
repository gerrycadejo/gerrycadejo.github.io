/*
function intro() {
  setTimeout(introduction, 20000);
}
intro();
*/
function introduction() {
  document.getElementById('intro').style.display = "none";
  document.getElementById('page1').style.display = "block";
}

introduction();

function openNav() {
  document.getElementById("mySidebar").style.width = "20vh";
  document.getElementById("page1").style.marginLeft = "250px";
  document.getElementById("triangle").style.display="none";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("page1").style.marginLeft = "0";
  document.getElementById("triangle").style.display="block";

}
