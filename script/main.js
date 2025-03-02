const completedBtn = document.querySelectorAll(".box-completed");

for (const btnCompleted of completedBtn) {
  btnCompleted.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board Updated Successfully");
    const assignedTask = getInnerTextById("taskAssigned");
    // console.log(typeof assignedTask, assignedTask);
    const valueOfBoard = getInnerTextById("boardValue");
    // console.log(typeof valueOfBoard, valueOfBoard);

    const sumOfTask = assignedTask - 1;
    setInnerTextbyIdandValue("taskAssigned", sumOfTask);

    const sumOfBoardValue = valueOfBoard + 1;
    setInnerTextbyIdandValue("boardValue", sumOfBoardValue);
  });
}

//   button-1
document
  .getElementById("completedBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    addTitle("title");
    handleToggle("completedBtn", true);
  });

//   button-2
document
  .getElementById("completedBtn2")
  .addEventListener("click", function (event) {
    event.preventDefault();
    addTitle("title-2");

    handleToggle("completedBtn2", true);
  });

//   button-3
document
  .getElementById("completedBtn3")
  .addEventListener("click", function (event) {
    event.preventDefault();
    addTitle("title-3");
    handleToggle("completedBtn3", true);
  });

//   button-4
document
  .getElementById("completedBtn4")
  .addEventListener("click", function (event) {
    event.preventDefault();
    addTitle("title-4");
    handleToggle("completedBtn4", true);
  });

//   button-5
document
  .getElementById("completedBtn5")
  .addEventListener("click", function (event) {
    event.preventDefault();
    addTitle("title-5");
    handleToggle("completedBtn5", true);
  });

//   button-6
document
  .getElementById("completedBtn6")
  .addEventListener("click", function (event) {
    event.preventDefault();
    alert("congratulation!!! You have completed all the current task");
    addTitle("title-6");
    handleToggle("completedBtn6", true);
  });

// create date
updateDate("addDate");

//   Clear button Activity

document
  .getElementById("activityBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const container = document.getElementById("activity");
    container.innerText = " ";
    // document.getElementById("text").remove();
  });

// background Color
const bgColors = [
  "aquamarine",
  "purple",
  "orange",
  "green",
  "blue",
  "yellowGreen",
  "tomato",
];
let i = 0;
document.getElementById("themBtn").addEventListener("click", function (event) {
  event.preventDefault();
  document.body.style.backgroundColor = bgColors[i];
  i = (i + 1) % bgColors.length;
});
