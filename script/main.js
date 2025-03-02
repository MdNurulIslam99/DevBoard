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
    setInnerTextByIdAndValue("taskAssigned", sumOfTask);

    const sumOfBoardValue = valueOfBoard + 1;
    setInnerTextByIdAndValue("boardValue", sumOfBoardValue);

    // handleToggle("box-completed", true);

    // Activity Log Add title and Con
    const container = document.getElementById("activity");
    const dayTime = new Date();
    let time = dayTime.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    });
    const titleContent = document.getElementById("title").innerText;
    const div = document.createElement("div");
    div.classList.add("bg-[#F4F7FF]", "mt-1");
    div.innerHTML = `<h2 id='text' class="p-4 text-sm rounded-lg">You have completed the task 
  <span class='font-semibold'>${titleContent}</span> at <span class='font-semibold'>${time}</span>`;
    container.appendChild(div);
  });
}

let button = 0;

for (let i = 1; i <= 6; i++) {
  let buttonAll = document.getElementById("completedBtn" + i);

  buttonAll.addEventListener("click", function () {
    if (!this.disabled) {
      this.disabled = true;
      button++;

      if (button === 6) {
        alert("congratulation!!! You have completed all the current task");
      }
    }
  });
}

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
