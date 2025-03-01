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

  /* const h2 = document.createElement("h2");
  h2.innerHTML = ``;
  dateContainer.appendChild(h2); */
}

// activity show when submit function
function addTitle(id) {
  const container = document.getElementById("activity");
  const titleContent = document.getElementById(id).innerText;
  const div = document.createElement("div");
  div.classList.add("bg-[#F4F7FF]", "mt-5");
  div.innerHTML = `<h2>You have completed the task ${titleContent}  at `;
  container.appendChild(div);
}
