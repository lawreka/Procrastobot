var testmode = true;
var t;
$("#realmode").on("click", function() {
  console.log("hello??");
  if (testmode == true){
    $("#realmode").removeClass("notselected");
    $("#realmode").addClass("selected");
    $("#testmode").removeClass("selected");
    $("#testmode").addClass("notselected");
        testmode = false;
  }
  else{
    return;
  }
});
$("#testmode").on("click", function() {
  console.log("hello??");
  if (testmode == false){
    $("#testmode").addClass("selected");
    $("#testmode").removeClass("notselected");
    $("#realmode").removeClass("selected");
    $("#realmode").addClass("notselected");
    testmode = true;
  }
  else{
    return;
  }
});
// make clock run
function runClock() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = minSec(m);
  s = minSec(s);
  document.getElementById('clock').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(runClock, 500);
}
function minSec(i) {
  if (i < 10) {
    i = "0" + i;
    return i;
  }
  else{
    return i;
  }
}
//dropdown functions
function pick(){
  $("#times").removeClass("hidden");
}
window.onclick = function(event){
  if (!event.target.matches(".dropper")){
    $("#times").addClass("hidden");
  }
}
// schedule popups
function fivemins(){
  console.log("five mins");
  if ($("#posicon").hasClass("notselect") && $("#neuticon").hasClass("notselect") && $("#negaicon").hasClass("notselect")){
    window.alert("Please choose a mood for your reminder");
    return;
  }
  else{
    if (mood == posi){
          $("#posiface").removeClass("superhide");
          $("#posiface").addClass("mainface");
    }
    else{
      if (mood == neut){
        $("#neutface").removeClass("superhide");
        $("#neutface").addClass("mainface");
      }
      else{
        if (mood == nega){
          $("#negaface").removeClass("superhide");
          $("#negaface").addClass("mainface");
        }
      }
    }
    $("#clock").removeClass("clock");
    $("#clock").addClass("smallclock");
    $("#dropdown").addClass("hidden");
    $("#todo").addClass("superhide");
    $("#moodselect").addClass("superhide");
    $("#faces").removeClass("hidden");
    window.alert("Remind me in 5 minutes");
    if (testmode == true){
    t = setTimeout(fivemins, 5000);
    }
    else {
      t = setTimeout(fivemins, 300000);
    }
  }
}
function thirtmins(){
  if ($("#posicon").hasClass("notselect") && $("#neuticon").hasClass("notselect") && $("#negaicon").hasClass("notselect")){
    window.alert("Please choose a mood for your reminder");
    return;
  }
  else{
    if (mood == posi){
          $("#posiface").removeClass("superhide");
          $("#posiface").addClass("mainface");
    }
    else{
      if (mood == neut){
        $("#neutface").removeClass("superhide");
        $("#neutface").addClass("mainface");
      }
      else{
        if (mood == nega){
          $("#negaface").removeClass("superhide");
          $("#negaface").addClass("mainface");
        }
      }
    }
    $("#clock").removeClass("clock");
    $("#clock").addClass("smallclock");
    $("#dropdown").addClass("hidden");
    $("#todo").addClass("superhide");
    $("#moodselect").addClass("superhide");
    $("#faces").removeClass("hidden");
    window.alert("Remind me in 30 minutes");
    if (testmode == true){
    var t = setTimeout(thirtmins, 5000);
    }
    else {
    var t = setTimeout(thirtmins,  1800000 );
    }
  }
}
function onehour(){
  if ($("#posicon").hasClass("notselect") && $("#neuticon").hasClass("notselect") && $("#negaicon").hasClass("notselect")){
    window.alert("Please choose a mood for your reminder");
    return;
  }
  else{
    if (mood == posi){
          $("#posiface").removeClass("superhide");
          $("#posiface").addClass("mainface");
    }
    else{
      if (mood == neut){
        $("#neutface").removeClass("superhide");
        $("#neutface").addClass("mainface");
      }
      else{
        if (mood == nega){
          $("#negaface").removeClass("superhide");
          $("#negaface").addClass("mainface");
        }
      }
    }
    $("#clock").removeClass("clock");
    $("#clock").addClass("smallclock");
    $("#dropdown").addClass("hidden");
    $("#todo").addClass("superhide");
    $("#moodselect").addClass("superhide");
    $("#faces").removeClass("hidden");
    window.alert("Remind me in 1 hour");
    if (testmode == true){
    var t = setTimeout(onehour, 5000);
    }
    else {
    var t = setTimeout(onehour, 3600000);
    }
  }
}
// change mood
var mood = "";
function posi(){
  $("#posicon").removeClass("notselect");
  $("#posicon").addClass("selected");
  $("#neut").addClass("hidden");
  $("#nega").addClass("hidden");
  mood = posi;
}
function neut(){
  $("#neuticon").removeClass("notselect");
  $("#neuticon").addClass("selected");
  $("#posi").addClass("hidden");
  $("#nega").addClass("hidden");
  mood = neut;
}
function nega(){
  $("#negaicon").removeClass("notselect");
  $("#negaicon").addClass("selected");
  $("#posi").addClass("hidden");
  $("#neut").addClass("hidden");
  mood = nega;
}
