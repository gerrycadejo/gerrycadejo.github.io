/*
function intro() {
  setTimeout(introduction, 20000);
}
intro();
*/






function openNav() {
  document.getElementById("mySidebar").style.width = "40vh";
  document.getElementById('burger').style.display = "none";
  document.getElementById("page1").style.marginLeft = "250px";

}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById('burger').style.display = "block";
  document.getElementById("page1").style.marginLeft = "0";

}



  window.onscroll = function() {scrollProgress()};

function scrollProgress() {
  var winScroll = document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  console.log(height);
  console.log(winScroll);
  var scrolled = (winScroll / height) * 100;
  console.log(scrolled);
  document.getElementById("myBar").style.width = scrolled + "%";
}
/*
function removeScroll() {
  document.getElementById('scroll-bar').style.display = "none";
}*/
