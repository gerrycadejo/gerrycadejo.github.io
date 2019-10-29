
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
document.getElementById('statement-1').innerHTML = text;
document.getElementById('statement-2').innerHTML = text;
document.getElementById('statement-3').innerHTML = text;
document.getElementById('idea-statement-2').innerHTML= text;
var emailout1 = document.getElementById('out-1');
emailout1.value = text;

});


document.getElementById("deform").addEventListener('submit', function(event){event.preventDefault();goWorkshops()});

function goWorkshops(){
  console.log('mm');
  document.getElementById('ideate-bands').style.display= "block";
  document.getElementById('define').style.display= "none";
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
  var emailout1 = document.getElementById('out-1');
  emailout1.value = insight;
  var definition = document.getElementById('idea-statement-2');
  definition.innerHTML = insight;
}




function switchOff4(){
  box5.className = 'col-3 box2 top off ';
  box6.className = 'col-3 box3 top off ';
  document.getElementById('mark1').style.display = "none";
  document.getElementById('mark2').style.display = "none";
  document.getElementById('mark3').style.display = "none";
   setTimeout(function(){
    box4.style.opacity = '0';
  }, 1800);
  setTimeout(function(){
    document.getElementById('ideate-bands').style.display="none";
    document.getElementById('ideate-band-1').style.display = "block";
  }, 2500)
}
function switchOff5(){
  box4.className = 'col-3 box1 top off ';
  box6.className = 'col-3 box3 top off ';
  document.getElementById('mark1').style.display = "none";
  document.getElementById('mark2').style.display = "none";
  document.getElementById('mark3').style.display = "none";
   setTimeout(function(){
    box5.style.opacity = '0';
  }, 1800);
  setTimeout(function(){
    document.getElementById('ideate-bands').style.display="none";
    document.getElementById('ideate-band-2').style.display = "block";
  }, 2500)
}
function switchOff6(){
  box4.className = 'col-3 box1 top off ';
  box5.className = 'col-3 box2 top off ';
  document.getElementById('mark1').style.display = "none";
  document.getElementById('mark2').style.display = "none";
  document.getElementById('mark3').style.display = "none";
   setTimeout(function(){
    box6.style.opacity = '0';
  }, 1800);
  setTimeout(function(){
    document.getElementById('ideate-bands').style.display="none";
    document.getElementById('ideate-band-3').style.display = "block";
  }, 2500)
}

var needs = "";
var services ="";
var tech="";
var resultMash = document.getElementById('mash-statement');
function needs1(){
  needs =document.getElementById('input1').value;
  getValue(needs, services, tech );
}
function needs2(){
  needs =document.getElementById('input2').value;
  getValue(needs, services, tech );
}
function needs3(){
   needs =document.getElementById('input3').value;
   getValue(needs, services, tech );
}
function needs4(){
   needs =document.getElementById('input4').value;
   getValue(needs, services, tech );
}
function needs5(){
  var needs =document.getElementById('input5').value;
  getValue(needs, services, tech );
}
function services1(){
  services =document.getElementById('input6').value;
  getValue(needs, services, tech );
}
function services2(){
  services =document.getElementById('input7').value;
  getValue(needs, services, tech );
}
function services3(){
  services =document.getElementById('input8').value;
  getValue(needs, services, tech );
}
function services4(){
  services =document.getElementById('input9').value;
  getValue(needs, services, tech );
}
function services5(){
  services =document.getElementById('input10').value;
  getValue(needs, services, tech );
}
function tech1(){
  tech =document.getElementById('input11').value;
  getValue(needs, services, tech );
}
function tech2(){
  tech =document.getElementById('input12').value;
  getValue(needs, services, tech );
}
function tech3(){
  tech =document.getElementById('input13').value;
  getValue(needs, services, tech );
}
function tech4(){
  tech =document.getElementById('input14').value;
  getValue(needs, services, tech );
}
function tech5(){
  tech =document.getElementById('input15').value;
  getValue(needs, services, tech );
}

function getValue(needs, services,tech){
  console.log(resultMash.innerHTML);
  resultMash.innerHTML = needs +" + "+services+ " + " + tech;
}

  /*var instruction = document.getElementById('ch-instruction');
    instruction.innerHTML = 'Start writing!';
     instruction.innerHTML= 'Now share your mindblowing idea with your buddy to the right. You should have one too, and now you need to write down what are the limitations of it';
   instruction.innerHTML = 'Use your glassess';
    instruction.innerHTML= 'Ok, now let’s pass the paper one more time, and now try to solve the limitations or try to make it sellable. You will have 3 minutes';
  instruction.innerHTML= 'You are ready to go!';
*/

var defineArea2 = document.getElementById('ideate-question');
defineArea2.addEventListener('keypress', function(){
var charac = 140-defineArea2.value.length;
document.getElementById('icount').innerHTML = "Max " + charac + " characters";
var text = defineArea2.value;
});
function backiWorkshop(){
  cuack = 0;
  var band1 = document.getElementById('ideate-band-1');
  var band2 = document.getElementById('ideate-band-2');
  var band3 = document.getElementById('ideate-band-3');
  var ideaworkshops = document.getElementById('ideate-bands');
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
//document.getElementById('def-statement').innerHTML = text;
//document.getElementById('def-statement-2').innerHTML = text;
//document.getElementById('def-statement-3').innerHTML = text;
function idInputpage1(){
  var brain2 = document.getElementById('converge-band');
  var band1 = document.getElementById('ideate-band-1');
  band1.style.display ="block";
  brain2.style.display = "none";
}
function idInputpage2(){
  var brain2 = document.getElementById('converge-band');
  var band2 = document.getElementById('ideate-band-2');
  band2.style.display ="block";
  brain2.style.display = "none";
}
function idInputpage3(){
  cuack=0;
  var brain2 = document.getElementById('converge-band');
  var band3 = document.getElementById('ideate-band-3');
  band3.style.display ="block";
  brain2.style.display = "none";
}
function outputiPage1(){
  var brain2 = document.getElementById('converge-band');
  var band1 = document.getElementById('ideate-band-1');
  var button1 = document.getElementById('iback-out-1');
  var button2 = document.getElementById('iback-out-2');
  var button3 = document.getElementById('iback-out-3');
  var outputStatement1 = document.getElementById('ideate-band-1-output');
  button1.style.display="initial";
  button2.style.display="none";
  button3.style.display="none";
  band1.style.display="none";
  brain2.style.display ="block";
  var emailout2 = document.getElementById('out-2');

}
function outputiPage2(){
  var brain2 = document.getElementById('converge-band');
  var band1 = document.getElementById('ideate-band-2');
  var button1 = document.getElementById('iback-out-1');
  var button2 = document.getElementById('iback-out-2');
  var button3 = document.getElementById('iback-out-3');
  var outputStatement1 = document.getElementById('ideate-band-1-output');
  button1.style.display="none";
  button2.style.display="initial";
  button3.style.display="none";
  band1.style.display="none";
  brain2.style.display ="block";
}
function outputiPage3(){
  var brain2 = document.getElementById('converge-band');
  var band1 = document.getElementById('ideate-band-3');
  var button1 = document.getElementById('iback-out-1');
  var button2 = document.getElementById('iback-out-2');
  var button3 = document.getElementById('iback-out-3');
  var outputStatement1 = document.getElementById('ideate-band-1-output');
  button1.style.display="none";
  button2.style.display="none";
  button3.style.display="initial";
  band1.style.display="none";
  brain2.style.display ="block";
}

function ideationOutput(){
  var brain2 = document.getElementById('converge-band');
  var ideaout = document.getElementById('main-ideate-output');
  brain2.style.display ="none";
  ideaout.style.display ="block";
}
function backConverge(){
  var brain2 = document.getElementById('converge-band');
  var ideaout = document.getElementById('main-ideate-output');
  brain2.style.display ="block";
  ideaout.style.display ="none";
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
  var idea3 = document.getElementById('build-statement-3');

  var statement1 = document.getElementById('ideate-question').value;
  console.log(statement1);
  outputPage.style.display = "none";
  buildPage.style.display = "block";
  idea1.innerHTML = statement1;
  idea2.innerHTML = statement1;
  idea3.innerHTML = statement1;
}

function switchOff7(){
  box8.className = 'col-3 box2 top off ';
  box9.className = 'col-3 box3 top off ';
  document.getElementById('mark1').style.display = "none";
  document.getElementById('mark2').style.display = "none";
  document.getElementById('mark3').style.display = "none";
   setTimeout(function(){
    box7.style.opacity = '0';
  }, 1800);
  setTimeout(function(){
    document.getElementById('build-bands').style.display="none";
    document.getElementById('build-band-1').style.display = "block";
  }, 2500)
}

function switchOff8(){
  box7.className = 'col-3 box1 top off ';
  box9.className = 'col-3 box3 top off ';
  document.getElementById('mark1').style.display = "none";
  document.getElementById('mark2').style.display = "none";
  document.getElementById('mark3').style.display = "none";
   setTimeout(function(){
    box8.style.opacity = '0';
  }, 1800);
  setTimeout(function(){
    document.getElementById('build-bands').style.display="none";
    document.getElementById('build-band-2').style.display = "block";
  }, 2500)
}
function switchOff9(){
  box7.className = 'col-3 box1 top off ';
  box8.className = 'col-3 box2 top off ';
  document.getElementById('mark1').style.display = "none";
  document.getElementById('mark2').style.display = "none";
  document.getElementById('mark3').style.display = "none";
   setTimeout(function(){
    box9.style.opacity = '0';
  }, 1800);
  setTimeout(function(){
    document.getElementById('build-bands').style.display="none";
    document.getElementById('build-band-3').style.display = "block";
  }, 2500)
}

function outputBPage1(){
  var output = document.getElementById('main-build-output');
  var band1 = document.getElementById('build-band-1');
  var button1 = document.getElementById('bnext-1');
  var outputStatement1 = document.getElementById('build-band-1-output');
  var outputStatement2 = document.getElementById('build-band-2-output');
  var otherStatement = document.getElementById('build-output');
  var bnext1 = document.getElementById('obnext-1');
  var bback1 = document.getElementById('obback-1');
  var bback2 = document.getElementById('obback-2');
  bback2.style.display="none";
  var fill6 = document.getElementById('fill-6').value;
  var fill7 = document.getElementById('fill-7').value;
  var fill8 = document.getElementById('fill-8').value;
  var fill9 = document.getElementById('fill-9').value;
  var fill10 = document.getElementById('fill-10').value;
  var start = document.getElementById('start');
  var act = document.getElementById('act');
  var achieve = document.getElementById('achieve');
  var finish = document.getElementById('finish');
  start.style.display="none";
  act.style.display="none";
  achieve.style.display="none";
  finish.style.display="none";
  otherStatement.style.display="block";
  band1.style.display="none";
  output.style.display ="block";
  bback1.style.display = "initial";
  bnext1.style.display="initial";
  outputStatement1.innerHTML = fill6 + " are struggling with " + fill7+ " and this is causing them "+ fill8 + " That's why we came up with a  " + fill9 + " by implementing " + fill10;
  outputStatement2.style.display = "none";
  var emailout3 = document.getElementById('out-3');
  emailout3.value = outputStatement1.innerHTML;
}

var featuremapoutput;

function outputBPage2(){
  var output = document.getElementById('main-build-output');
  var band2 = document.getElementById('build-band-2');
  var otherStatement = document.getElementById('build-output');
  var bnext2 = document.getElementById('obnext-2');
  var bback2 = document.getElementById('obback-2');
  var start = document.getElementById('start');
  var act = document.getElementById('act');
  var achieve = document.getElementById('achieve');
  var finish = document.getElementById('finish');
  var outputStatement1 = document.getElementById('build-band-1-output');
  var outputStatement2 = document.getElementById('build-band-2-output');
  outputStatement2.style.display ="block";
  // extracting the data
  var txtarea1 = document.getElementById('explain-1');
  var txtarea2 = document.getElementById('explain-2');
  var txtarea3 = document.getElementById('explain-3');
  var span1 = document.getElementById('bmashup1').innerHTML;
  var span2 = document.getElementById('bmashup2').innerHTML;
  var span3 = document.getElementById('bmashup3').innerHTML;
  var block1 = document.getElementById('feat-explain-1');
  var block2= document.getElementById('feat-explain-2');
  var block3 = document.getElementById('feat-explain-3');
  otherStatement.style.display="block";
  start.style.display="none";
  act.style.display="none";
  achieve.style.display="none";
  finish.style.display="none";
  band2.style.display="none";
  output.style.display ="block";
  bback2.style.display = "initial";
  bnext2.style.display="initial";
  outputStatement1.innerHTML ="";
  block1.innerHTML = "It will be " + span1 + " " + txtarea1.value;
  block2.innerHTML = "Its next pillar will be " + span2 + " " + txtarea2.value;
  block3.innerHTML = "Finally, it will be " + span3 + " " + txtarea3.value;
  featuremapoutput = span1 + " " + txtarea1.value + " " + span2 + " " + txtarea2.value + " " + span3 + " " + txtarea3.value;
  var emailout3 = document.getElementById('out-3');
  emailout3.value = featuremapoutput;
}
function outputBPage3(){
  var output = document.getElementById('main-build-output');
  var band3 = document.getElementById('build-band-3');
  // pitch output
  var otherStatement = document.getElementById('build-output');
  var outputStatement2 = document.getElementById('build-band-2-output');
  outputStatement2.style.display ="none";
  // JOURNEY output
  var start = document.getElementById('start');
  var act = document.getElementById('act');
  var achieve = document.getElementById('achieve');
  var finish = document.getElementById('finish');
  //buttons back
  var bback3 = document.getElementById('obback-3');
  //buttons next
  var bnext3 = document.getElementById('obnext-3');
  // GET in the blanks JOURNEY
  var journey1 = document.getElementById('j-1');
  var journey2 = document.getElementById('j-2');
  var journey3 = document.getElementById('j-3');
  var journey4 = document.getElementById('j-4');
  // GET in the questions JOURNEY
  var qjour1 = document.getElementById('fill-11');
  var qjour2 = document.getElementById("fill-12");
  var qjour3 = document.getElementById("fill-13");
  var qjour4 = document.getElementById("fill-14");
// Remove input page3 and display output3
  band3.style.display="none";
  output.style.display ="block";
// remove input other pages
  otherStatement.style.display="none";
  // appear cols of journey
  start.style.display="block";
  act.style.display="block";
  achieve.style.display="block";
  finish.style.display="block";
// leave the correct buttons
  bback3.style.display = "initial";
  bnext3.style.display="initial";
  // fill in the paragraphs
  journey1.innerHTML = qjour1.value;
  journey2.innerHTML = qjour2.value;
  journey3.innerHTML = qjour3.value;
  journey4.innerHTML = qjour4.value;
  var emailout3 = document.getElementById('out-3');
  emailout3.value = "1. " + journey1.innerHTML + " 2. " + journey2.innerHTML + " 3. " + journey3.innerHTML + " 4. " + journey4.innerHTML;
}

function backBWorkshop(){
  var band1 = document.getElementById('build-band-1');
  var band2 = document.getElementById('build-band-2');
  var band3 = document.getElementById('build-band-3');
  var buildworkshop = document.getElementById('build-bands')
  values = ["","",""];
  buildworkshop.style.display = "block";
  band1.style.display = "none";
  band2.style.display ="none";
  band3.style.display ="none";
  box7.className = 'col-3 box1 top';
  box8.className = 'col-3 box2 top';
  box9.className = 'col-3 box3 top';
  box7.style.opacity ="1";
  box8.style.opacity ="1";
  box9.style.opacity ="1";
  document.getElementById('mark1').style.display = "block";
  document.getElementById('mark2').style.display = "block";
  document.getElementById('mark3').style.display = "block";
  console.log(values);
}
var values = ["", "",""];
function feature1(){
    console.log(values);
    var button1 = document.getElementById("bbinput1").value;
    var bmashup1 = document.getElementById('bmashup1');
    var bmashup2 = document.getElementById('bmashup2');
    var bmashup3 = document.getElementById('bmashup3');
    values.shift();
    values.push(button1)
    console.log(values);
    bmashup1.innerHTML = values[0];
    bmashup2.innerHTML = values[1];
    bmashup3.innerHTML = values[2];

}
function feature2(){
  console.log(values);
  var button1 = document.getElementById("bbinput2").value;
  var bmashup1 = document.getElementById('bmashup1');
  var bmashup2 = document.getElementById('bmashup2');
  var bmashup3 = document.getElementById('bmashup3');
  values.shift();
  values.push(button1)
  console.log(values);
  bmashup1.innerHTML = values[0];
  bmashup2.innerHTML = values[1];
  bmashup3.innerHTML = values[2];
}
function feature3(){
  var button1 = document.getElementById("bbinput3").value;
  var bmashup1 = document.getElementById('bmashup1');
  var bmashup2 = document.getElementById('bmashup2');
  var bmashup3 = document.getElementById('bmashup3');
  values.shift();
  values.push(button1)
  console.log(values);
  bmashup1.innerHTML = values[0];
  bmashup2.innerHTML = values[1];
  bmashup3.innerHTML = values[2];
}
function feature4(){
  var button1 = document.getElementById("bbinput4").value;
  var bmashup1 = document.getElementById('bmashup1');
  var bmashup2 = document.getElementById('bmashup2');
  var bmashup3 = document.getElementById('bmashup3');
  values.shift();
  values.push(button1)
  console.log(values);
  bmashup1.innerHTML = values[0];
  bmashup2.innerHTML = values[1];
  bmashup3.innerHTML = values[2];
}
function feature5(){
  var button1 = document.getElementById("bbinput5").value;
  var bmashup1 = document.getElementById('bmashup1');
  var bmashup2 = document.getElementById('bmashup2');
  var bmashup3 = document.getElementById('bmashup3');
  values.shift();
  values.push(button1)
  console.log(values);
  bmashup1.innerHTML = values[0];
  bmashup2.innerHTML = values[1];
  bmashup3.innerHTML = values[2];
}
function feature6(){
  var button1 = document.getElementById("bbinput6").value;
  var bmashup1 = document.getElementById('bmashup1');
  var bmashup2 = document.getElementById('bmashup2');
  var bmashup3 = document.getElementById('bmashup3');
  values.shift();
  values.push(button1)
  console.log(values);
  bmashup1.innerHTML = values[0];
  bmashup2.innerHTML = values[1];
  bmashup3.innerHTML = values[2];
}
function feature7(){
  var button1 = document.getElementById("bbinput7").value;
  var bmashup1 = document.getElementById('bmashup1');
  var bmashup2 = document.getElementById('bmashup2');
  var bmashup3 = document.getElementById('bmashup3');
  values.shift();
  values.push(button1)
  console.log(values);
  bmashup1.innerHTML = values[0];
  bmashup2.innerHTML = values[1];
  bmashup3.innerHTML = values[2];
}
function feature8(){
  var button1 = document.getElementById("bbinput8").value;
  var bmashup1 = document.getElementById('bmashup1');
  var bmashup2 = document.getElementById('bmashup2');
  var bmashup3 = document.getElementById('bmashup3');

  values.shift();
  values.push(button1)
  console.log(values);
  bmashup1.innerHTML = values[0];
  bmashup2.innerHTML = values[1];
  bmashup3.innerHTML = values[2];
}
function feature9(){
  var button1 = document.getElementById("bbinput9").value;
  var bmashup1 = document.getElementById('bmashup1');
  var bmashup2 = document.getElementById('bmashup2');
  var bmashup3 = document.getElementById('bmashup3');
  values.shift();
  values.push(button1)
  console.log(values);
  bmashup1.innerHTML = values[0];
  bmashup2.innerHTML = values[1];
  bmashup3.innerHTML = values[2];
}
function feature10(){
  var button1 = document.getElementById("bbinput10").value;
  var bmashup1 = document.getElementById('bmashup1');
  var bmashup2 = document.getElementById('bmashup2');
  var bmashup3 = document.getElementById('bmashup3');
  values.shift();
  values.push(button1)
  console.log(values);
  bmashup1.innerHTML = values[0];
  bmashup2.innerHTML = values[1];
  bmashup3.innerHTML = values[2];
}

function backBinput1(){
  var band1 = document.getElementById('build-band-1');
  var output = document.getElementById('main-build-output');
  band1.style.display ="block";
  output.style.display ="none";
}
function backBinput2(){
  var band2 = document.getElementById('build-band-2');
  var output = document.getElementById('main-build-output');
  var outputStatement1 = document.getElementById('build-band-1-output');
  outputStatement1.innerHTML = "";
  values = ["","",""];
  band2.style.display ="block";
  output.style.display ="none";
}
function backBinput3(){
  var band3 = document.getElementById('build-band-3');
  var output = document.getElementById('main-build-output');
  band3.style.display ="block";
  output.style.display ="none";
}
function backHome(){
  window.location.href = "index.html";
}

function resume1(){
  var resume = document.getElementById('resume');
  var two = document.getElementById("main-ideate-output");
  var three = document.getElementById("main-build-output");
  var last = document.getElementById('last-one');
  // buttons define
  var coutext2 =document.getElementById("courage-text2");
  var coutext3 =document.getElementById("courage-text3");
  coutext2.style.display="none";
  coutext3.style.display="none";
  //buttons ideate
  var ibbut1 = document.getElementById('iback-out-1');
  var ibbut2 = document.getElementById('iback-out-2');
  var ibbut3 = document.getElementById('iback-out-3');
  var ibbut4 = document.getElementById('iback-out-4');
  var inext = document.getElementById('next-build');
  ibbut1.style.display = "none";
  ibbut2.style.display = "none";
  ibbut3.style.display = "none";
  ibbut4.style.display = "none";
  inext.style.display = "none";
  //buttons build
  var bnext1 = document.getElementById('obnext-1');
  var bnext2 = document.getElementById('obnext-2');
  var bnext3 = document.getElementById('obnext-3');
  var bbbut1 = document.getElementById('obback-1');
  var bbbut2 = document.getElementById('obback-2');
  var bbbut3 = document.getElementById('obback-3');
  bnext1.style.display = "none";
  bnext2.style.display = "none";
  bnext3.style.display = "none";
  bbbut1.style.display = "none";
  bbbut2.style.display = "none";
  bbbut3.style.display = "none";
// change titles of pages
  var idehead = document.getElementById('ideate-head');
  var buihead = document.getElementById('build-head');
  var marca1 = document.getElementById('marca1');
  var creativeHost = document.getElementById('creative-host');
  marca1.style.opacity="0";
  creativeHost.style.display="none";
  idehead.innerHTML = "FIRE";
  buihead.innerHTML = "WIND";
  buihead.style.fontSize = "2.5rem";
  // change idea format in ideation
  var ideabox = document.getElementById('ideate-question');
  var idescription = document.getElementById('ideate-band-1-output');
  var ideap = document.getElementById('idea-statement');
  var contador = document.getElementById('icount');
  ideap.innerHTML = ideabox.value;
  ideap.style.display = "block";
  ideabox.style.display= "none";
  idescription.style.display ="none";
  icount.style.display = "none";

  resume.style.display="block";
  two.style.display="block";
  three.style.display="block";
  last.style.display="block";
  var ideap = document.getElementById('idea-statement').innerHTML;
  var out2 = document.getElementById('out-2');
  out2.value = ideap;
}

function myFunction(){
  var out1 = document.getElementById('out-1');
  var out2 = document.getElementById('out-2');
  var out3 = document.getElementById('out-3');
  console.log(out1.value);
  console.log(out2.value);
  console.log(out3.value);

}

/*--------TIMER---------------------------------------
------------------------------------------------------
-----------------------------------------------------------------------
-------------------------------------------------------------------------------
-------------------------------------------------*/
/*convergence timer*/

var seconds = 60;
var minutes = 5;
var timer;
function startTime(){
  var secdisplay = document.getElementById('clock-converge');
  var nextbutton = document.getElementById('next-idea-output');
    minutes = minutes-1;
      timer = setInterval(function(){
      seconds = seconds-1;
      // as long as there is one second it ill display dinamcally
    if (minutes >= 0){
        secdisplay.innerHTML = "0"+minutes + ":" + seconds;
      }    // less than 10 it'll display a 0 in seconds
       if (seconds < 10){
          secdisplay.innerHTML = "0"+minutes + ":0" +seconds;
        }// restart the sec countdown and display 00
         if (seconds <= 0){
          secdisplay.innerHTML = "0"+minutes + ":00";
          seconds = 60;
          minutes--;
        } // after the time ends it clears the interval
         if (minutes < 0){
        console.log('hola');
        secdisplay.innerHTML = "00:00";
        nextbutton.style.display ="initial";
        clearInterval(timer);
      }
    }, 1000);
  }


function resetTime(){
  var secdisplay = document.getElementById('clock-converge');
  var nextbutton = document.getElementById('next-idea-output');
  secdisplay.innerHTML = "05:00";
  seconds = 60;
  minutes = 5;
  nextbutton.style.display ="initial";
  clearInterval(timer);
}
function add1(){
  var secdisplay = document.getElementById('clock-converge');
  minutes = minutes +1;
  if (seconds <= 59){
    secdisplay.innerHTML = "0" + minutes + ":" + seconds;
 } if (seconds == 60){
 secdisplay.innerHTML = "0"+minutes + ":00";
} if(minutes >= 8){
  resetTime();
  alert("That's a no no... try doing it with less time! ")
}
}

function minus1(){
  var secdisplay = document.getElementById('clock-converge');
  minutes = minutes-1;
  if (seconds <= 59){
    secdisplay.innerHTML = "0" + minutes + ":" + seconds;
 }
  if (seconds == 60){
  secdisplay.innerHTML = "0"+minutes + ":00";
 }
 if (minutes < 0){
   resetTime();
 }
}
/*FIRST------------------ IDEATION---------- timer*/
var oneseconds = 60;
var oneminutes = 3;
var stop;
function oneStartTime(){
  console.log('start');
  var nextbutton = document.getElementById('inext-1');
  var secdisplay = document.getElementById('clock-converge-1');
    oneminutes = oneminutes-1;
      stop = setInterval(function(){
      oneseconds = oneseconds-1;
      // as long as there is one second it ill display dinamcally
    if (oneminutes >= 0){
        secdisplay.innerHTML = "0"+oneminutes + ":" + oneseconds;
      }    // less than 10 it'll display a 0 in seconds
       if (oneseconds < 10){
          secdisplay.innerHTML = "0"+oneminutes + ":0" +oneseconds;
        }// restart the sec countdown and display 00
         if (oneseconds <= 0){
          secdisplay.innerHTML = "0"+oneminutes + ":00";
          oneseconds = 60;
          oneminutes--;
        } // after the time ends it clears the interval
         if (oneminutes < 0){
        console.log('hola');
        secdisplay.innerHTML = "00:00";
        nextbutton.style.display ="initial";
        clearInterval(stop);
      }
    }, 1000);
  }


function oneResetTime(){
  var nextbutton = document.getElementById('inext-1');
  var secdisplay = document.getElementById('clock-converge-1');
  secdisplay.innerHTML = "03:00";
  oneseconds = 60;
  oneminutes = 3;
  nextbutton.style.display ="initial";
  clearInterval(stop);
}
function oneAdd1(){
  var secdisplay = document.getElementById('clock-converge-1');
  oneminutes = oneminutes +1;
  if (oneseconds <= 59){
    secdisplay.innerHTML = "0" + oneminutes + ":" + oneseconds;
 } if (oneseconds == 60){
 secdisplay.innerHTML = "0"+oneminutes + ":00";
} if(oneminutes >= 5){
  oneResetTime();
  alert("That's a no no... try doing it with less time! ")
}
}

function oneMinus1(){
  var secdisplay = document.getElementById('clock-converge-1');
  oneminutes = oneminutes-1;
  if (oneseconds <= 59){
    secdisplay.innerHTML = "0" + oneminutes + ":" + oneseconds;
 }
  if (oneseconds == 60){
  secdisplay.innerHTML = "0"+oneminutes + ":00";
 }
 if (oneminutes < 0){
   oneResetTime();
 }
}
/*second------------------ IDEATION---------- timer*/
var twoseconds = 60;
var twominutes = 3;
var alto;
function twoStartTime(){
  console.log('start');
  var secdisplay = document.getElementById('clock-converge-2');
  var nextbutton = document.getElementById('inext-2');
    twominutes = twominutes-1;
      alto = setInterval(function(){
      twoseconds = twoseconds-1;
      // as long as there is one second it ill display dinamcally
    if (twominutes >= 0){
        secdisplay.innerHTML = "0"+twominutes + ":" + twoseconds;
      }    // less than 10 it'll display a 0 in seconds
       if (twoseconds < 10){
          secdisplay.innerHTML = "0"+twominutes + ":0" +twoseconds;
        }// restart the sec countdown and display 00
         if (twoseconds <= 0){
          secdisplay.innerHTML = "0"+twominutes + ":00";
          twoseconds = 60;
          twominutes--;
        } // after the time ends it clears the interval
         if (twominutes < 0){
        console.log('hola');
        secdisplay.innerHTML = "00:00";
        nextbutton.style.display ="initial";
        clearInterval(alto);
      }
    }, 1000);
  }


function twoResetTime(){
  var secdisplay = document.getElementById('clock-converge-2');
  var nextbutton = document.getElementById('inext-2');
  secdisplay.innerHTML = "03:00";
  twoseconds = 60;
  twominutes = 3;
  nextbutton.style.display ="initial";
  clearInterval(alto);
}
function twoAdd1(){
  var secdisplay = document.getElementById('clock-converge-2');
  twominutes = twominutes +1;
  if (twoseconds <= 59){
    secdisplay.innerHTML = "0" + twominutes + ":" + twoseconds;
 } if (twoseconds == 60){
 secdisplay.innerHTML = "0"+twominutes + ":00";
} if(twominutes >= 5){
  twoResetTime();
  alert("That's a no no... try doing it with less time! ")
}
}

function twoMinus1(){
  var secdisplay = document.getElementById('clock-converge-2');
  twominutes = twominutes-1;
  if (twoseconds <= 59){
    secdisplay.innerHTML = "0" + twominutes + ":" + twoseconds;
 }
  if (twoseconds == 60){
  secdisplay.innerHTML = "0"+twominutes + ":00";
 }
 if (twominutes < 0){
   twoResetTime();
 }
}
/*third------------------ IDEATION---------- timer*/
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
  }if (touch ==3){
    speedNico.innerHTML ="Awesome! You are ready to go!";
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
