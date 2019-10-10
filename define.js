var box1 = document.getElementById('band-1');
var box2 = document.getElementById('band-2');
var box3 = document.getElementById('band-3');
var box4 = document.getElementById('band-4');
var box5 = document.getElementById('band-5');
var box6 = document.getElementById('band-6');
var box7 = document.getElementById('band-7');
var box8 = document.getElementById('band-8');
var box9 = document.getElementById('band-9');
function defopenNav(){
  document.getElementById("mySidebar").style.width = "20vw";
  document.getElementById('burger').style.display = "none";
  document.getElementById('burger').style.animation = "none";
  document.getElementById('define').style.width = "80vw";
  document.getElementById('define').style.left= "0";
  document.getElementById('define-content').style.transform= "scale(0.8)";
  document.getElementById('qgroup').style.display = "none";
}

function defcloseNav(){
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById('burger').style.display = "block";
  document.getElementById('burger').style.animation = "none";
  document.getElementById('define').style.width = "100vw";
  document.getElementById('define-content').style.transform= "scale(1)";
  document.getElementById('qgroup').style.display = "block";
}

var defineArea = document.getElementById('define-question');
defineArea.addEventListener('keypress', function(){
var charac = 100-defineArea.value.length;
document.getElementById('count').innerHTML = "Max " + charac + " characters";
var text = defineArea.value;
document.getElementById('def-statement').innerHTML = text;
document.getElementById('def-statement-2').innerHTML = text;
document.getElementById('def-statement-3').innerHTML = text;

});


document.getElementById("deform").addEventListener('submit', function(event){event.preventDefault();goWorkshops()});

function goWorkshops(){
  console.log('mm');
  document.getElementById('define-bands').style.display= "block";
  document.getElementById('define').style.display= "none";
}


function switchOff1(){
  box2.className = 'col-3 box2 off ';
  box3.className = 'col-3 box3 off ';
  document.getElementById('mark1').style.display = "none";
  document.getElementById('mark2').style.display = "none";
  document.getElementById('mark3').style.display = "none";
   setTimeout(function(){
    box1.style.opacity = '0';
  }, 2500);
  setTimeout(function(){
    document.getElementById('define-bands').style.display="none";
    document.getElementById('main-band-1').style.display = "block";
  }, 3050)
}

function switchOff2(){
  box1.className = 'col-3 box1 off ';
  box3.className = 'col-3 box3 off ';
  document.getElementById('mark1').style.display = "none";
  document.getElementById('mark2').style.display = "none";
  document.getElementById('mark3').style.display = "none";
   setTimeout(function(){
    box2.style.opacity = '0';
  }, 2500);
  setTimeout(function(){
    document.getElementById('define-bands').style.display="none";
    document.getElementById('main-band-2').style.display = "block";
  }, 3050)
}

function switchOff3(){
  box1.className = 'col-3 box1 off ';
  box2.className = 'col-3 box2 off ';
  document.getElementById('mark1').style.display = "none";
  document.getElementById('mark2').style.display = "none";
  document.getElementById('mark3').style.display = "none";
   setTimeout(function(){
    box3.style.opacity = '0';
  }, 2500);
  setTimeout(function(){
    document.getElementById('define-bands').style.display="none";
    document.getElementById('main-band-3').style.display = "block";
  }, 3050)
}

function backWorkshop(){
  var band1 = document.getElementById('main-band-1');
  var band2 = document.getElementById('main-band-2');
  var band3 = document.getElementById('main-band-3');
  var defworkshops = document.getElementById('define-bands');
  box1.style.display = "block";
  box2.style.display ="block";
  box3.style.display ="block";
  band1.style.display = "none";
  band2.style.display ="none";
  band3.style.display ="none";
  box1.className = 'col-3 box1';
  box2.className = 'col-3 box2 ';
  box3.className = 'col-3 box3 ';
  box1.style.opacity ="1";
  box2.style.opacity ="1";
  box3.style.opacity ="1";
  document.getElementById('mark1').style.display = "block";
  document.getElementById('mark2').style.display = "block";
  document.getElementById('mark3').style.display = "block";
  defworkshops.style.display = "block";
}

function outputPage1(){
  var output = document.getElementById('main-define-output');
  var band1 = document.getElementById('main-band-1');
  var button1 = document.getElementById('back-out-1');
  var button2 = document.getElementById('back-out-2');
  var button3 = document.getElementById('back-out-3');
  var next1 = document.getElementById('next-out-1');
  var next2 = document.getElementById('next-out-2');
  var next3 = document.getElementById('next-out-3');
  var outputStatement1 = document.getElementById('def-band-1-output');
  var outputStatement2 = document.getElementById('def-band-2-output');
  var outputStatement3 = document.getElementById('def-band-3-output');
  var fill1 = document.getElementById('fill-1').value;
  var fill2 = document.getElementById('fill-2').value;
  var fill3 = document.getElementById('fill-3').value;
  var fill4 = document.getElementById('fill-4').value;
  var fill5 = document.getElementById('fill-5').value;
  outputStatement1.style.display = "block";
  outputStatement2.style.display = "none";
  outputStatement3.style.display = "none";
  button1.style.display="initial";
  button2.style.display="none";
  button3.style.display="none";
  next1.style.display="initial";
  next2.style.display="none";
  next3.style.display="none";
  band1.style.display="none";
  output.style.display ="block";
  outputStatement1.innerHTML = "The " + fill1 + " are struggling with " + fill3 + " when they are trying to " + fill2 + ". This makes them feel " + fill4 + " and in the future they'd love if " + fill5;
}
function outputPage2(){
  var output = document.getElementById('main-define-output');
  var band2 = document.getElementById('main-band-2');
  var next1 = document.getElementById('next-out-1');
  var next2 = document.getElementById('next-out-2');
  var next3 = document.getElementById('next-out-3');
  var button1 = document.getElementById('back-out-1');
  var button2 = document.getElementById('back-out-2');
  var button3 = document.getElementById('back-out-3');
  var outputStatement1 = document.getElementById('def-band-1-output');
  var outputStatement2 = document.getElementById('def-band-2-output');
  var outputStatement3 = document.getElementById('def-band-3-output');
  var fill1 = document.getElementById('sfill-1').value;
  var fill2 = document.getElementById('sfill-2').value;
  var fill3 = document.getElementById('sfill-3').value;
  var fill4 = document.getElementById('sfill-4').value;
  var fill5 = document.getElementById('sfill-5').value;
  button1.style.display="none";
  button2.style.display="initial";
  button3.style.display="none";
  next1.style.display="none";
  next2.style.display="initial";
  next3.style.display="none";
  band2.style.display="none";
  output.style.display ="block";
  outputStatement1.style.display = "none";
  outputStatement2.style.display = "block";
  outputStatement2.innerHTML = "How might we help " + fill1 + " feel " + fill5 + " when they are dealing with " + fill3 + " " + fill2 + "so that they can " + fill4 +"?";
  outputStatement3.style.display = "none";
}
function outputPage3(){
  var output = document.getElementById('main-define-output');
  var band3 = document.getElementById('main-band-3');
  var next1 = document.getElementById('next-out-1');
  var next2 = document.getElementById('next-out-2');
  var next3 = document.getElementById('next-out-3');
  var button1 = document.getElementById('back-out-1');
  var button2 = document.getElementById('back-out-2');
  var button3 = document.getElementById('back-out-3');
  var outputStatement1 = document.getElementById('def-band-1-output');
  var outputStatement2 = document.getElementById('def-band-2-output');
  var outputStatement3 = document.getElementById('def-band-3-output');
  var why = document.getElementById('why-1').value;
  button1.style.display="none";
  button2.style.display="none";
  button3.style.display="initial";
  next1.style.display="none";
  next2.style.display="none";
  next3.style.display="initial";
  band3.style.display="none";
  output.style.display ="block";
  outputStatement1.style.display = "none";
  outputStatement2.style.display = "none";
  outputStatement3.innerHTML = "How might we help " + why;
  outputStatement3.style.display = "block";
}

function inputPage1(){
  var output = document.getElementById('main-define-output');
  var band1 = document.getElementById('main-band-1');
  band1.style.display ="block";
  output.style.display = "none";
}
function inputPage2(){
  var output = document.getElementById('main-define-output');
  var band2 = document.getElementById('main-band-2');
  band2.style.display ="block";
  output.style.display = "none";
}
function inputPage3(){
  clic = 0;
  var askbutton = document.getElementById('ask');
  var next = document.getElementById('next-3');
  var back = document.getElementById('back-3');
  var output = document.getElementById('main-define-output');
  var band3 = document.getElementById('main-band-3');
  var problema = document.getElementById('problema');
  var why = document.getElementById('why-1');
  band3.style.display ="block";
  output.style.display = "none";
  askbutton.style.display ="initial";
  next.style.display = "none";
  back.style.display = "none";
  why.value = why.defaultValue;
  problema.innerHTML = "";
}
let clic = 0;
function ask(){
  var askbutton = document.getElementById('ask');
  var output = document.getElementById('def-band-3-output');
  var next = document.getElementById('next-3');
  var back = document.getElementById('back-3');
  var why = document.getElementById('why-1');
  var problema = document.getElementById('problema');
  clic = parseInt(clic)+parseInt(1);
  if (clic == 1){
    problema.innerHTML = why.value;
    why.value = why.defaultValue;
  } if (clic ==2){
    problema.innerHTML = why.value;
    why.value = why.defaultValue;
  } if (clic ==3){
    askbutton.style.display = "none";
    next.style.display = "initial";
    back.style.display = "initial";
    problema.innerHTML = why.value;
  }
}

/* THIS IS THE IDEATE SECTION --------------------
------------------------------------------------------
--------------@@@@@@@@@------------------------------------------------------
-------------------------------------------------------------------------
----------------------------------------------------------@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
function goToIdeate1(){
  var outputPage = document.getElementById('main-define-output');
  var ideatePage = document.getElementById('ideate-bands');
  var insight = document.getElementById('def-band-1-output').innerHTML;
  var statement1 = document.getElementById('statement-1');
  var statement2 = document.getElementById('statement-2');
  var statement3 = document.getElementById('statement-3');
  outputPage.style.display="none";
  ideatePage.style.display="block";
  statement1.innerHTML = insight;
  statement2.innerHTML = insight;
  statement3.innerHTML = insight;

}
function goToIdeate2(){
  var outputPage = document.getElementById('main-define-output');
  var ideatePage = document.getElementById('ideate-bands');
  var insight = document.getElementById('def-band-2-output').innerHTML;
  var statement1 = document.getElementById('statement-1');
  var statement2 = document.getElementById('statement-2');
  var statement3 = document.getElementById('statement-3');
  outputPage.style.display="none";
  ideatePage.style.display="block";
  statement1.innerHTML = insight;
  statement2.innerHTML = insight;
  statement3.innerHTML = insight;

}
function goToIdeate3(){
  var outputPage = document.getElementById('main-define-output');
  var ideatePage = document.getElementById('ideate-bands');
  var insight = document.getElementById('def-band-3-output').innerHTML;
  var statement1 = document.getElementById('statement-1');
  var statement2 = document.getElementById('statement-2');
  var statement3 = document.getElementById('statement-3');

  outputPage.style.display="none";
  ideatePage.style.display="block";
  statement1.innerHTML = insight;
  statement2.innerHTML = insight;
  statement3.innerHTML = insight;
}

function backiWorkshop(){
  clic = 0;
  var band1 = document.getElementById('ideate-band-1');
  var band2 = document.getElementById('ideate-band-2');
  var band3 = document.getElementById('ideate-band-3');
  var ideaworkshops = document.getElementById('ideate-bands');
  box1.style.display = "block";
  box2.style.display ="block";
  box3.style.display ="block";
  band1.style.display = "none";
  band2.style.display ="none";
  band3.style.display ="none";
  box4.className = 'col-3 box1 top';
  box5.className = 'col-3 box2  top';
  box6.className = 'col-3 box3 top';
  box4.style.opacity ="1";
  box5.style.opacity ="1";
  box6.style.opacity ="1";
  document.getElementById('mark1').style.display = "block";
  document.getElementById('mark2').style.display = "block";
  document.getElementById('mark3').style.display = "block";
  ideaworkshops.style.display = "block";
}

function switchOff4(){
  box5.className = 'col-3 box2 top off ';
  box6.className = 'col-3 box3 top off ';
  document.getElementById('mark1').style.display = "none";
  document.getElementById('mark2').style.display = "none";
  document.getElementById('mark3').style.display = "none";
   setTimeout(function(){
    box4.style.opacity = '0';
  }, 2500);
  setTimeout(function(){
    document.getElementById('ideate-bands').style.display="none";
    document.getElementById('ideate-band-1').style.display = "block";
  }, 3050)
}
function switchOff5(){
  box4.className = 'col-3 box1 top off ';
  box6.className = 'col-3 box3 top off ';
  document.getElementById('mark1').style.display = "none";
  document.getElementById('mark2').style.display = "none";
  document.getElementById('mark3').style.display = "none";
   setTimeout(function(){
    box5.style.opacity = '0';
  }, 2500);
  setTimeout(function(){
    document.getElementById('ideate-bands').style.display="none";
    document.getElementById('ideate-band-2').style.display = "block";
  }, 3050)
}
function switchOff6(){
  box4.className = 'col-3 box1 top off ';
  box5.className = 'col-3 box2 top off ';
  document.getElementById('mark1').style.display = "none";
  document.getElementById('mark2').style.display = "none";
  document.getElementById('mark3').style.display = "none";
   setTimeout(function(){
    box6.style.opacity = '0';
  }, 2500);
  setTimeout(function(){
    document.getElementById('ideate-bands').style.display="none";
    document.getElementById('ideate-band-3').style.display = "block";
    var instruction = document.getElementById('ch-instruction').innerHTML="Use the creative framework as a guide and write down one idea. You'll have 2 minutes";

  }, 3050)
}

var needs = "";
var services ="";
var tech="";
function needs1(){
  needs =document.getElementById('input1').value;
  var result = document.getElementById('mashup');
  result.innerHTML = needs +" + "+ services +" + "+ tech;
}
function needs2(){
  needs =document.getElementById('input2').value;
  var result = document.getElementById('mashup');
  result.innerHTML = needs +" + "+ services +" + "+ tech;
}
function needs3(){
   needs =document.getElementById('input3').value;
   var result = document.getElementById('mashup');
   result.innerHTML = needs +" + "+ services +" + "+ tech;
}
function needs4(){
   needs =document.getElementById('input4').value;
   var result = document.getElementById('mashup');
   result.innerHTML = needs +" + "+ services +" + "+ tech;
}
function needs5(){
  var needs =document.getElementById('input5').value;
  var result = document.getElementById('mashup');
  result.innerHTML = needs +" + "+ services +" + "+ tech;
}
function services1(){
  services =document.getElementById('input6').value;
  var result = document.getElementById('mashup');
  result.innerHTML = needs +" + "+ services +" + "+ tech;
}
function services2(){
  services =document.getElementById('input7').value;
  var result = document.getElementById('mashup');
  result.innerHTML = needs +" + "+ services +" + "+ tech;
}
function services3(){
  services =document.getElementById('input8').value;
  var result = document.getElementById('mashup');
  result.innerHTML = needs +" + "+ services +" + "+ tech;
}
function services4(){
  services =document.getElementById('input9').value;
  var result = document.getElementById('mashup');
  result.innerHTML = needs +" + "+ services +" + "+ tech;
}
function services5(){
  services =document.getElementById('input10').value;
  var result = document.getElementById('mashup');
  result.innerHTML = needs +" + "+ services +" + "+ tech;
}
function tech1(){
  tech =document.getElementById('input11').value;
  var result = document.getElementById('mashup');
  result.innerHTML = needs +" + "+ services +" + "+ tech;
}
function tech2(){
  tech =document.getElementById('input12').value;
  var result = document.getElementById('mashup');
  result.innerHTML = needs +" + "+ services +" + "+ tech;
}
function tech3(){
  tech =document.getElementById('input13').value;
  var result = document.getElementById('mashup');
  result.innerHTML = needs +" + "+ services +" + "+ tech;
}
function tech4(){
  tech =document.getElementById('input14').value;
  var result = document.getElementById('mashup');
  result.innerHTML = needs +" + "+ services +" + "+ tech;
}
function tech5(){
  tech =document.getElementById('input15').value;
  var result = document.getElementById('mashup');
  result.innerHTML = needs +" + "+ services +" + "+ tech;
}
clic= 0;
document.getElementById("change-instruction").addEventListener("click", changeInstruction);
function changeInstruction(){
  console.log('clickin');
  var instruction = document.getElementById('ch-instruction');
  clic = parseInt(clic)+parseInt(1);
  if (clic == 1){
    console.log('click 1');
    instruction.innerHTML = 'Start writing!';
    setTimeout(function(){
     instruction.innerHTML= 'Now share your mindblowing idea with your buddy to the right. You should have one too, and now you need to write down what are the limitations of it';
   }, 120000);
 } if (clic ==2){
   console.log('click 2');
   instruction.innerHTML = 'Use your glassess';
   setTimeout(function(){
    instruction.innerHTML= 'Ok, now let’s pass the paper one more time, and now try to solve the limitations or try to make it sellable. You will have 3 minutes';
  }, 180000);
 }
 setTimeout(function(){
  instruction.innerHTML= 'You are ready to go!';
}, 300000);
}

var defineArea2 = document.getElementById('ideate-question');
defineArea2.addEventListener('keypress', function(){
var charac = 140-defineArea2.value.length;
document.getElementById('icount').innerHTML = "Max " + charac + " characters";
var text = defineArea2.value;
});
//document.getElementById('def-statement').innerHTML = text;
//document.getElementById('def-statement-2').innerHTML = text;
//document.getElementById('def-statement-3').innerHTML = text;
function idInputpage1(){
  var output = document.getElementById('main-ideate-output');
  var band1 = document.getElementById('ideate-band-1');
  band1.style.display ="block";
  output.style.display = "none";
}
function idInputpage2(){
  var output = document.getElementById('main-ideate-output');
  var band2 = document.getElementById('ideate-band-2');
  band2.style.display ="block";
  output.style.display = "none";
}
function idInputpage3(){
  clic=0;
  var output = document.getElementById('main-ideate-output');
  var band3 = document.getElementById('ideate-band-3');
  band3.style.display ="block";
  output.style.display = "none";
}
function outputiPage1(){
  var output = document.getElementById('main-ideate-output');
  var band1 = document.getElementById('ideate-band-1');
  var button1 = document.getElementById('iback-out-1');
  var button2 = document.getElementById('iback-out-2');
  var button3 = document.getElementById('iback-out-3');
  var outputStatement1 = document.getElementById('ideate-band-1-output');
  button1.style.display="initial";
  button2.style.display="none";
  button3.style.display="none";
  band1.style.display="none";
  output.style.display ="block";
}
function outputiPage2(){
  var output = document.getElementById('main-ideate-output');
  var band1 = document.getElementById('ideate-band-2');
  var button1 = document.getElementById('iback-out-1');
  var button2 = document.getElementById('iback-out-2');
  var button3 = document.getElementById('iback-out-3');
  var outputStatement1 = document.getElementById('ideate-band-1-output');
  button1.style.display="none";
  button2.style.display="initial";
  button3.style.display="none";
  band1.style.display="none";
  output.style.display ="block";
}
function outputiPage3(){
  var output = document.getElementById('main-ideate-output');
  var band1 = document.getElementById('ideate-band-3');
  var button1 = document.getElementById('iback-out-1');
  var button2 = document.getElementById('iback-out-2');
  var button3 = document.getElementById('iback-out-3');
  var outputStatement1 = document.getElementById('ideate-band-1-output');
  button1.style.display="none";
  button2.style.display="none";
  button3.style.display="initial";
  band1.style.display="none";
  output.style.display ="block";
}

/* THIS IS THE BUILD SECTION --------------------
------------------------------------------------------
--------------@@@@@@@@@------------------------------------------------------
-------------------------------------------------------------------------
----------------------------------------------------------@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/

function goToBuild(){
  var outputPage = document.getElementById('main-ideate-output');
  var buildPage = document.getElementById('build-bands');
  var idea1 = document.getElementById('build-statement-1');
  var idea2 = document.getElementById('build-statement-2');
  //var idea3 = document.getElementById('build-statement-3');

  var statement1 = document.getElementById('ideate-question').value;
  console.log(statement1);
  outputPage.style.display = "none";
  buildPage.style.display = "block";
  idea1.innerHTML = statement1;
  idea2.innerHTML = statement1;
  //idea3.innerHTML = statement1;
}

function switchOff7(){
  box8.className = 'col-3 box2 top off ';
  box9.className = 'col-3 box3 top off ';
  document.getElementById('mark1').style.display = "none";
  document.getElementById('mark2').style.display = "none";
  document.getElementById('mark3').style.display = "none";
   setTimeout(function(){
    box7.style.opacity = '0';
  }, 2500);
  setTimeout(function(){
    document.getElementById('build-bands').style.display="none";
    document.getElementById('build-band-1').style.display = "block";
  }, 3050)
}

function switchOff8(){
  box7.className = 'col-3 box1 top off ';
  box9.className = 'col-3 box3 top off ';
  document.getElementById('mark1').style.display = "none";
  document.getElementById('mark2').style.display = "none";
  document.getElementById('mark3').style.display = "none";
   setTimeout(function(){
    box8.style.opacity = '0';
  }, 2500);
  setTimeout(function(){
    document.getElementById('build-bands').style.display="none";
    document.getElementById('build-band-2').style.display = "block";
  }, 3050)
}

function outputBPage1(){
  var output = document.getElementById('main-build-output');
  var band1 = document.getElementById('build-band-1');
  var button1 = document.getElementById('bnext-1');
  var outputStatement1 = document.getElementById('build-band-1-output');
  var fill6 = document.getElementById('fill-6').value;
  var fill7 = document.getElementById('fill-7').value;
  var fill8 = document.getElementById('fill-8').value;
  var fill9 = document.getElementById('fill-9').value;
  var fill10 = document.getElementById('fill-10').value;
  band1.style.display="none";
  output.style.display ="block";
  outputStatement1.innerHTML = fill6 + " are struggling with " + fill7+ " and this is causing them "+ fill8 + " That's why we came up with a  " + fill9 + " by implementing " + fill10;
}



function backHome(){
  window.location.href = "stages.html";
}
