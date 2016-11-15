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
    // test interval
    var t = setTimeout(fivemins, 3000);
    // real interval
    // var t = setTimeout(fivemins, 300000);
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
    var t = setTimeout(thirtmins,  1800000 );
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
    var t = setTimeout(fivemins, 3600000);
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
