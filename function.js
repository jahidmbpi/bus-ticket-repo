// hide element by id function

function handleTicketDecrement(button) {
  const selectedButtons = document.querySelectorAll(".Selected");
  const sitElement = document.getElementById("set-sit");
  const sitElementUpdateValue = parseInt(sitElement.innerText);
  const ticket = document.getElementById("main-sit");
  const finalTicket = parseInt(ticket.innerText);

  console.log(ticket);

  // console.log("selected", selectedButtons.length);
  if (selectedButtons.length >= 4) {
    alert("You can only buy a maximum of 4 tickets at a time.");
    return;
  }

  let isButtonSelected = false;
  // console.log(button);

  for (let i = 0; i < selectedButtons.length; i++) {
    if (selectedButtons[i] === button) {
      isButtonSelected = true;
      break;
    }
  }

  if (isButtonSelected) {
    alert("This Ticket Already Exists");
  } else {
    sitElement.innerText = sitElementUpdateValue - 1;
    ticket.innerText = finalTicket + 1;

    let parentDiv = document.getElementById("jahid");
    if (!parentDiv) {
      parentDiv = document.createElement("div");
      parentDiv.id = "jahid";
      parentDiv.classList.add("flex", "justify-around", "flex-col");
    }

    let rowDiv = document.createElement("div");
    rowDiv.classList.add("flex", "justify-around", "items-center", "flex-row");

    let h1 = document.createElement("h1");
    h1.innerText = button.innerText;

    let h2 = document.createElement("h2");
    h2.innerText = "Economic";

    let h3 = document.createElement("h3");
    h3.innerText = 550;

    rowDiv.appendChild(h1);
    rowDiv.appendChild(h2);
    rowDiv.appendChild(h3);

    parentDiv.appendChild(rowDiv);

    // Append the parent div to the desired container in your HTML
    // For example: document.body.appendChild(parentDiv);

    // console.log(parentDiv);

    if (button && button.classList) {
      button.classList.add("Selected");
      button.style.backgroundColor = "green";
    }
  }

  const findSit = document.getElementById("main-sit");
  const findSitN = findSit.innerText;
  let fullTicket = findSitN * 550;

  const setFullTicketprice = document.getElementById("total-price");
  // let setFullTicketpriceFinal =parseInt(setFullTicketprice);
  setFullTicketprice.innerText = fullTicket;

  console.log(findSitN);
  console.log(fullTicket);
  // const sitElementDJa = document.getElementById("jahid");
  // const newSit = sitElementDJa.innerText;
  // console.log(newSit);
}

function getHideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}
// function HideElementByid(elmentid) {
//   const elment = document.getElementById(elmentid);
//   elment.classList.add("hidden");
// }

function ShowElementById(elmentid) {
  const elment = document.getElementById(elmentid);
  elment.classList.add("hidden");
}

function getShowElementbyid(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}
