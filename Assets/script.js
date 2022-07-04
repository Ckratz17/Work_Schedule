var saveButton = document.querySelectorAll(".saveBtn")
function saveTasks() {
    
  let task = $(this).siblings(".description").text();
  let rowHour = $(this).siblings(".hour").val();
  console.log(rowHour);
  console.log(task);
  if (task === "") {
      localStorage.setItem(task, "")
}
else {
  localStorage.setItem(rowHour, task);
  
}}
$('.saveBtn').click(saveTasks)


setInterval(() =>{
  var time= moment().format("dddd, MMM Do")
  $("#currentDay").text(time);
});



