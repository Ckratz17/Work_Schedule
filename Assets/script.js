var saveButton = document.querySelectorAll(".saveBtn")
function saveTasks() {
    
  let userinput = $(this).siblings(".description").text();
  let Hours = $(this).siblings(".hour").val();
  console.log(Hours);
  console.log(task);
  if (task === "") {
      localStorage.setItem(userinput, "")
}
else {
  localStorage.setItem(Hours, userinput);
  
}}
$('.saveBtn').click(saveTasks)


setInterval(() =>{
  var time= moment().format("dddd, MMM Do")
  $("#currentDay").text(time);
});



