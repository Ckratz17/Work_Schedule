//save button to localstorage
var saveButton = document.querySelectorAll(".saveBtn")

function saveItems() {
    
  let userinput = $(this).siblings(".description").text();
  let Hours = $(this).siblings(".hour").val();
  console.log(Hours);
  console.log(userinput);
  if (userinput === " ") {
  localStorage.setItem(userinput, " ")
}
else {
  localStorage.setItem(Hours, userinput);
  
}}
$('.saveBtn').click(saveItems)

//Date for the header
setInterval(() =>{
  var time= moment().format("dddd, MMM Do")
  $("#currentDay").text(time);
});

//colors for past, present, future
var hour = (new Date).getHours() ;

function hourNine() {

if (hour > 8 && hour < 10) {
  $('.nine').removeClass('').addClass("present")
}
  else if (hour > 10) {
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
    else if (hour > 11) {
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
    else if (hour > 12) {
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
    else if (hour > 13) {
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
    else if (hour > 14) {
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
    else if (hour > 15) {
      $('.two').removeClass('').addClass("past")
    }
    else{
      $('.two').removeClass('').addClass("future")
    }
}
hourTwo(

)         
function hourThree() {

  if (hour > 14 && hour < 16) {
      $('.three').removeClass('').addClass("present")
    }
    else if (hour > 16) {
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
    else if (hour > 18) {
      $('.five').removeClass('').addClass("past")
    }
    else{
      $('.five').removeClass('').addClass("future")
    }
}
hourFive()

function hourSix() {

  if (hour > 14 && hour < 16) {
    $('.six').removeClass('').addClass("present")
  }
    else if (hour > 16) {
      $('.six').removeClass('').addClass("past")
    }
    else{
      $('.six').removeClass('').addClass("future")
    }
}
hourSix()