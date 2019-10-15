/*third------------------ IDEATION---------- timer*/
var lastseconds = 60;
var lastminutes = 3;
var detente;
var speedNico = document.getElementById('ch-instruction');
var touch = 0;

function lastStartTime(){
  console.log('start');
  var secdisplay = document.getElementById('clock-converge-3');
    lastminutes = lastminutes-1;
      detente = setInterval(function(){
      lastseconds = lastseconds-1;
      // as long as there is one second it ill display dinamcally
    if (lastminutes >= 0){
        secdisplay.innerHTML = "0"+lastminutes + ":" + lastseconds;
      }    // less than 10 it'll display a 0 in seconds
       if (lastseconds < 10){
          secdisplay.innerHTML = "0"+lastminutes + ":0" +lastseconds;
        }// restart the sec countdown and display 00
         if (lastseconds <= 0){
          secdisplay.innerHTML = "0"+lastminutes + ":00";
          lastseconds = 60;
          lastminutes--;
        } // after the time ends it clears the interval
         if (lastminutes < 0){
        console.log('hola');
        secdisplay.innerHTML = "00:00";
        clearInterval(detente);
        speedNico.innerHTML = "Reset the timer";
      }
    }, 1000);
  }


function lastResetTime(){
  var nextbutton = document.getElementById('inext-3');
  console.log(touch);
  touch = touch + 1;
  var secdisplay = document.getElementById('clock-converge-3');
  secdisplay.innerHTML = "03:00";
  lastseconds = 60;
  lastminutes = 3;
  clearInterval(detente);
  if (touch == 1){
    speedNico.innerHTML ="2. Everybody give your idea to the buddy to your right. Now that you have the other person's idea, write down what could be its limitations. You have 2 minutes.";
  }
  if (touch ==2){
    speedNico.innerHTML ="3. Finally give both, idea and limitations, to the person to your right. Now try to build on top of the idea so that it can overcome its limitations. You have 3 minutes.";
    nextbutton.style.display ="initial";
  }
}
function lastAdd1(){
  var secdisplay = document.getElementById('clock-converge-3');

  lastminutes = lastminutes +1;
  if (lastseconds <= 59){
    secdisplay.innerHTML = "0" + lastminutes + ":" + lastseconds;
 } if (lastseconds == 60){
 secdisplay.innerHTML = "0"+lastminutes + ":00";
} if(lastminutes >= 5){
  lastResetTime();
  alert("That's a no no... try doing it with less time! ")
}
}

function lastMinus1(){
  var secdisplay = document.getElementById('clock-converge-3');
  lastminutes = lastminutes-1;
  if (lastseconds <= 59){
    secdisplay.innerHTML = "0" + lastminutes + ":" + lastseconds;
 }
  if (lastseconds == 60){
  secdisplay.innerHTML = "0"+lastminutes + ":00";
 }
 if (lastminutes < 0){
   lastResetTime();
 }
}
/*third------------------ IDEATION---------- timer*/
