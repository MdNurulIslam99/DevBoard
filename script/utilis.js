/* document.getElementById('completed').addEventListener('click',function(event){
    
}) */

function getInnerTextById(id) {
  const value = document.getElementById(id).innerText;
  const convertedValue = parseInt(value);
  return convertedValue;
}

function setInnerTextbyIdandValue(id, value) {
  document.getElementById(id).innerText = value;
}

function handleToggle(id, status) {
  document.getElementById(id).disabled = status;
}

// create date

function updateDate(id) {
  let date = new Date();
  let currentDate = date.toDateString();
  const dateContainer = document.getElementById(id);
  dateContainer.innerText = currentDate;
}

// function timeUpdate() {
/* const now = new Date();
const string = now.toLocaleTimeString("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
});

document.getElementById("activity").textContent = string; */
// }
// setInterval(timeUpdate, 1000);

function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  //document.getElementById(id).textContent = timeString;
}

setInterval(updateTime, 1000);
updateTime();

// activity show when submit function
function addTitle(id) {
  const container = document.getElementById("activity");
  const dayTime = new Date();
  let time = dayTime.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });
  const titleContent = document.getElementById(id).innerText;
  const div = document.createElement("div");
  div.classList.add("bg-[#F4F7FF]", "mt-5");
  div.innerHTML = `<h2 class="p-4 text-base rounded-lg">You have completed the task 
  <span class='font-semibold'>${titleContent}</span> at <span>${time}</span>`;
  container.appendChild(div);
}
