setInterval(() =>{
    var time= moment().format("dddd, MMM do")
    $("#currentDay").text(time);
})
    
var inputGroup = document.querySelector(".description")
var submit = document.querySelector(".saveBtn")
let Storage = localStorage.getItem(inputGroup)
  ? JSON.parse(localStorage.getItem(inputGroup))
  : [];

  

//   var checkTime = function () {
//     var hour = $(".hour").text().trim();

//     var time = moment(hour, "LT");
//     console.log(time)

//     //remove any old classes from element
//     // $(".hour").removeClass(".present .past .future");

//     // apply new class if task is near/over due date
//     if (moment().isAfter(time)) {
//         $(".hour").addClass(".past");
//     } else if (moment().isBefore(time)) {
//         $(".hour").addClass(".future");
//     } else {
//         $(".hour").addClass(".present");
//     }
// }

// checkTime();