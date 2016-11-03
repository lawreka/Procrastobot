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
// assign task input to popup window text
// var get = document.querySelector("#settext");
// get.addEventListener("submit", setText);
// function setText(event){
//   event.preventDefault();
//   var text = document.querySelector("#txt");
//   var t = text.value;
//   if (t == ""){
//     window.alert("You must set a task");
//   }
//   else{
//     console.log(t);
//     $("#settext").addClass("hidden");
//     $("#todo").text(t);
//   }
// }
//dropdown functions
function pick(){
  $("#times").removeClass("hidden");
}
window.onclick = function(event){
  if (!event.target.matches(".dropper")){
    $("#times").addClass("hidden");
  }
}
// assign reminder setter time to clock time and schedule popups
// function checkTime(){
//   var currentTime = new Date();
//   console.log(currentTime);
//   var t = setTimeout(checkTime, 2000);
// }
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
    var t = setTimeout(fivemins, 2000);
  }
}
function thirtmins(){
  if ($("#posicon").hasClass("notselect") && $("#neuticon").hasClass("notselect") && $("#negaicon").hasClass("notselect")){
    window.alert("Please choose a mood for your reminder");
  }
  else{
    $("#dropdown").addClass("hidden");
    var msg = document.querySelector("#todo").textContent;
    window.alert("Remind me in 30 minutes");
    var t = setTimeout(thirtmins,  1800000 );
  }
}
function onehour(){
  if ($("#posicon").hasClass("notselect") && $("#neuticon").hasClass("notselect") && $("#negaicon").hasClass("notselect")){
    window.alert("Please choose a mood for your reminder");
  }
  else{
    $("#dropdown").addClass("hidden");
    var msg = document.querySelector("#todo").textContent;
    window.alert("Remind me in 1 hour");
    var t = setTimeout(fivemins, 3600000);
  }
}
// use mood changer to change popup window text
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
// reset button to clear all inputs
$("#reset").on("click", function(){
  window.location.reload(true);
})
