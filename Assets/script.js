var saveBtn = document.querySelectorAll(".saveBtn")//save button to local storage
var assignmentBox = document.querySelectorAll(".description")
var assignment = []

function init() {
  var storedAssignments = JSON.parse(localStorage.getItem("assignment"))
  if (storedAssignments !== null) {
    assignment = storedAssignments
  }
}

function saveContent () {
  localStorage.setItem("assignment", JSON.stringify(assignment))
}
init()
$('.saveBtn').click(saveContent)


setInterval(() =>{//Date for the header
  var time= moment().format("dddd, MMM Do")
  $("#currentDay").text(time);
});


var hour = (new Date).getHours();//classes for past, present, future added based on time of day

function hourNine() {

if (hour > 8 && hour < 10) {
  $('.nine').removeClass('').addClass("present")
}
  else if (hour > 9) {
    $('.nine').removeClass('').addClass("past")
  }
  else{
    $('.nine').removeClass('').addClass("future")
  }
}
hourNine()

function hourTen() {
  
  if (hour > 9 && hour < 11) {
    $('.ten').removeClass('').addClass("present")
  }
    else if (hour > 10) {
      $('.ten').removeClass('').addClass("past")
    }
    else{
      $('.ten').removeClass('').addClass("future")
    }
}
hourTen()

function hourEleven() {
    
  if (hour > 10 && hour < 12) {
    $('.eleven').removeClass('').addClass("present")
  }
    else if (hour > 11) {
      $('.eleven').removeClass('').addClass("past")
    }
    else{
      $('.eleven').removeClass('').addClass("future")
    }
}
hourEleven()

function hourTwelve() {
      
  if (hour > 11 && hour < 13) {
    $('.twelve').removeClass('').addClass("present")
  }
    else if (hour > 12) {
      $('.twelve').removeClass('').addClass("past")
    }
    else{
      $('.twelve').removeClass('').addClass("future")
    }
}
hourTwelve()

function hourOne() {

  if (hour > 12 && hour < 14) {
    $('.one').removeClass('').addClass("present")
  }
    else if (hour > 13) {
      $('.one').removeClass('').addClass("past")
    }
    else{
      $('.one').removeClass('').addClass("future")
    }
}
hourOne()

function hourTwo() {

  if (hour > 13 && hour < 15) {
    $('.two').removeClass('').addClass("present")
  }
    else if (hour > 14) {
      $('.two').removeClass('').addClass("past")
    }
    else{
      $('.two').removeClass('').addClass("future")
    }
}
hourTwo()

function hourThree() {

  if (hour > 14 && hour < 16) {
      $('.three').removeClass('').addClass("present")
    }
    else if (hour > 15) {
      $('.three').removeClass('').addClass("past")
    }
    else{
      $('.three').removeClass('').addClass("future")
    }
}
hourThree()

function hourFour() {

  if (hour > 15 && hour < 17) {
      $('.four').removeClass('').addClass("present")
    }
    else if (hour > 16) {
      $('.four').removeClass('').addClass("past")
    }
    else{
      $('.four').removeClass('').addClass("future")
    }
}
hourFour()

function hourFive() { 

  if (hour > 16 && hour < 18) {
      $('.five').removeClass('').addClass("present")
    }
    else if (hour > 17) {
      $('.five').removeClass('').addClass("past")
    }
    else{
      $('.five').removeClass('').addClass("future")
    }
}
hourFive()

function hourSix() {

  if (hour > 18 && hour < 20) {
    $('.six').removeClass('').addClass("present")
  }
    else if (hour > 19) {
      $('.six').removeClass('').addClass("past")
    }
    else{
      $('.six').removeClass('').addClass("future")
    }
}
hourSix()