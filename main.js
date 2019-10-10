var box1 = document.getElementById('stage-1');
var box2 = document.getElementById('stage-2');
var box3 = document.getElementById('stage-3');
var correct = document.getElementById('passwd');
correct.addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
});

var bouncer = [
  "yo' I said MEMBERS ONLY",
  'Are you sure you are on the right place?',
  "Pfff! Wrong code, keep on walking",
  "You are running out of tries...",
  "Move! There's a line of ppl behind you!",
  "Either you know it or not.",
  "Wrong answer! Don't make call the cops.",
];

function password(e) {
  var border = document.getElementById('passwd');
  var caption = document.getElementById('text-pswd');
  var neonSize = document.getElementById('sign');
  var key = e.keyCode;
  if (key === 13) {
     e.preventDefault();
    if (correct === '')
      {
      console.log('heellooo');
      } else
      {
        if (correct.value !== 'hola')
        {
          console.log('meh')
          border.className = 'hello wrong';
          setTimeout(removeClass, 450);
          var text = bouncer[Math.floor(Math.random() * bouncer.length )];
          caption.innerHTML = text;
        } else
          {
            border.style.borderColor = '#2ecc71';
            border.style.borderWidth = '5px';
            caption.innerHTML = 'Seems legit, come on in!';
            caption.style.color = '#fff';
            setTimeout(landStyle, 2000);
          }
      }
    return true;
  } else {
    console.log('not working');
  }

}

function removeClass(){
  console.log('its back');
document.getElementById('passwd').className = 'hello';
}

function landStyle(){
  var neonSize = document.getElementById('sign');
  var backfix = document.getElementById('landing');
  var neon = document.getElementById('landing-content');
  var form = document.getElementById('form-box');
  //backfix.className = 'container-fluid instructions';
  neonSize.style.animation = 'lightsOff 3s ease forwards'
  form.style.animation= 'exit 1s ease forwards';
  setTimeout(transitionStage, 2900);
}

function transitionStage(){
  window.location.href = "stages.html";
}


function switchOff1(){
  box2.className = 'col-3 box2 off ';
  box3.className = 'col-3 box3 off ';
  setTimeout(function(){
    box2.style.display = 'none';
    box3.style.display = 'none ';
  }, 1900);
   setTimeout(function(){
    box1.style.opacity = '0';
  }, 2500);
  setTimeout(function(){
    window.location.href = "define.html";
  }, 3650)
}

function switchOff2(){
  box1.className = 'col-3 box1 off ';
  box3.className = 'col-3 box3 off ';
  setTimeout(function(){
    box1.style.display = 'none';
    box3.style.display = 'none ';
  }, 1900);
   setTimeout(function(){
    box2.style.opacity = '0';
  }, 2500);
  setTimeout(function(){
    window.location.href = "define.html";
  }, 3650)
}

function switchOff3(){
  box1.className = 'col-3 box1 off ';
  box2.className = 'col-3 box2 off ';
  setTimeout(function(){
    box1.style.display = 'none';
    box2.style.display = 'none ';
  }, 1900);
   setTimeout(function(){
    box3.style.opacity = '0';
  }, 2500);
  setTimeout(function(){
    window.location.href = "define.html";
  }, 3650)
}


/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */

function openNav() {
  document.getElementById("mySidebar").style.width = "20vw";
  document.getElementById('burger').style.display = "none";
  document.getElementById('stages').style.width = "80vw";
  document.getElementById('stages').style.left= "0";
  document.getElementById('stages-content').style.transform= "scale(0.8)";
  document.getElementById('qgroup').style.display = "none";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById('burger').style.display = "block";
  document.getElementById('burger').style.animation = "none";
  document.getElementById('stages').style.width = "100vw";
  document.getElementById('stages-content').style.transform= "scale(1)";
  document.getElementById('qgroup').style.display = "block";
}
