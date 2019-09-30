
function openNav() {
  document.getElementById("mySidebar").style.width = "40vh";
  document.getElementById('burger').style.display = "none";

}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById('burger').style.display = "block";
}

document.getElementById("cta").addEventListener("click", storyPage);


function storyPage() {
  document.getElementById('landing').style.display = "none";
  document.getElementById('loading-story').style.display = "block";
  setTimeout(startStory , 7000);
}

function startStory(){
  window.location.href = "short.html";

}

document.getElementById("bad").addEventListener("click", workPage);


function workPage() {
  document.getElementById('landing').style.display = "none";
  document.getElementById('loading-work').style.display = "block";
  setTimeout(startWork, 9000);
}

function startWork(){
  window.location.href = "work.html";
}
