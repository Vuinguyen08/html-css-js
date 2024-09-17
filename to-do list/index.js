const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const taskContainer = document.getElementById("task-container");
/*
 * Add task
 *  Sau khi nhấn button add task => add vào list và show lên màn hình
 *  Clear nội dung đã nhập
 */
taskForm.addEventListener("submit", function (e) {
  e.preventDefault();
  addTask(taskInput.value);
  taskInput.value = "";
});

/**
 * Show list
 * + show list lên màn hình và delete button active
 * + Nếu task name dài thì hiển thị dấu 3 chấm
 * + Khi list task vượt quá chiều dài màn hình thì show scroll bar .
 */
const addTask = (taskName) => {
  taskContainer.style.display = "block";

  //Tạo thẻ li
  const li = document.createElement("li");
  //Tạo thẻ span
  const span = document.createElement("span");
  //Add text vào span
  span.textContent = taskName;
  //Tạo button delete
  const button = document.createElement("button");
  button.textContent = "Delete";
  button.classList.add("delete");

  button.addEventListener("click", function () {
    taskList.removeChild(li);
    //Check taskList rỗng thì ẩn taskContainer
    if (taskList.children.length === 0) {
      taskContainer.style.display = "none";
    }

    if (taskList.getElementsByTagName("li").length === 0) {
      taskContainer.style.display = "none";
    }
  });

  //Add span vào li
  li.appendChild(span);
  li.appendChild(button);

  //add li vào ul
  taskList.appendChild(li);
};

/*
//Add value vao mảng
//=> duyệt mảng và show ra màn hình /
let tasks = [];
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const taskContainer = document.getElementById("task-container");

taskForm.addEventListener("submit", function (e) {
  e.preventDefault();
  tasks.push(taskInput.value);
  taskInput.value = "";
  addTask();
});

const addTask = () => {
  taskContainer.style.display = "block";
  tasks.forEach((taskName, index) => {
    const li = document.createElement("li");
    //Tạo thẻ span
    const span = document.createElement("span");
    //Add text vào span
    span.textContent = taskName;
    //Tạo button delete
    const button = document.createElement("button");
    button.textContent = "Delete";
    button.classList.add("delete");
    button.onclick = () => removeTask(index);

    button.addEventListener("click", function () {
      taskList.removeChild(li);
      //Check taskList rỗng thì ẩn taskContainer
      if (taskList.children.length === 0) {
        taskContainer.style.display = "none";
      }

      // if (taskList.getElementsByTagName("li").length === 0) {
      //   taskContainer.style.display = "none";
      // }
    });

    //Add span vào li
    li.appendChild(span);
    li.appendChild(button);

    //add li vào ul
    taskList.appendChild(li);
    //};
  });
};

const removeTask = (index) => {
  tasks.splice(index, 1);
  addTask();
};
*/
