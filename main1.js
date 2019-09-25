const luck = document.querySelectorAll('#luck path');
for (let i = 0; i< luck.length; i++ ) {
  console.log(luck[i].getTotalLength());
}



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



window.onscroll = function() {scrollProgress()};

function scrollProgress() {
  var winScroll = document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  console.log(height);
  console.log(winScroll);
  var scrolled = (winScroll / height) * 100;
  console.log(scrolled);
  document.getElementById("myBar").style.width = scrolled + "%";
  if (scrolled >= 94) {
    console.log('its happening');
    document.getElementById('scroll-indicator').style.opacity = "0";
  } else {
    console.log('not yet');
    document.getElementById('scroll-indicator').style.opacity = "1";

  }
}


/*
function removeScroll() {
  document.getElementById('scroll-bar').style.display = "none";
}*/
