const addSection = document.querySelector(".add");
const todaySection = document.querySelector("#today_task");
const submitBtn = document.querySelector(
  '.task-form-btns button[type="submit"]'
);
const cancelBtn = document.querySelector(
  '.task-form-btns button[type="reset"]'
);
const inputTask = document.querySelector("#task-title");
const taskDescription = document.querySelector("#task-description");

//events on writing task in input field
inputTask.addEventListener("input", (e) => {
  if (inputTask.value.trim() === "") {
    submitBtn.setAttribute("disabled", "disabled");
    cancelBtn.setAttribute("disabled", "disabled");
  } else {
    submitBtn.removeAttribute("disabled");
    cancelBtn.removeAttribute("disabled");
  }
});

//events on clicking cancel button
cancelBtn.addEventListener("click", (e) => {
  e.preventDefault();

  //on clicking cancel button dialog box will be created
  if (inputTask.value.trim() !== "") {
    const div = document.createElement("div");
    div.classList.add("cancelAlert");
    div.innerHTML = `
      <div class="dialog">
        <p>Are you sure you want to cancel? Your task will be lost.</p>
        <div class="dialog-btns">
          <button class="confirm">Yes, Cancel</button>
          <button class="close">No</button>
        </div>
      </div>
    `;
    addSection.append(div);

    //refresh the form on clicking confirm button in dialog box
    const confirmBtn = div.querySelector(".confirm");
    confirmBtn.addEventListener("click", () => {
      inputTask.value = ""; // clear the input
      taskDescription.value = "";
      submitBtn.setAttribute("disabled", "disabled");
      cancelBtn.setAttribute("disabled", "disabled");
      div.remove(); // close the dialog
    });

    //close dialog box and remove div
    const closeBtn = div.querySelector(".close");
    closeBtn.addEventListener("click", () => {
      div.remove();
    });
    div.addEventListener("click", (event) => {
      if (event.target === div) div.remove();
    });
  }
});

//on clicking submit button
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const newTask = {
    task: inputTask.value.trim(),
    id: Date.now(),
    isCompleted: false,
  };
  console.log(newTask);
  inputTask.value = "";
  taskDescription.value = "";
  submitBtn.setAttribute("disabled", "disabled");
  cancelBtn.setAttribute("disabled", "disabled");
});
