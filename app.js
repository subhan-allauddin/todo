var data = [];

let getIndex;

function renderCell() {
  var ul = document.createElement("ul");
  for (var i = 0; i < data.length; i++) {
    var li = document.createElement("li");

    li.innerText = `${i + 1})${data[i]}`;
    ul.appendChild(li);
    var div = document.createElement("div");
    div.id = "divButton"
    var button = createDeleteButton(i);
    var button1 = createEditButton(i);
    div.appendChild(button);
    div.appendChild(button1);
    // li.appendChild(button);
    // li.appendChild(button1);
    li.appendChild(div);
    li.id = "liButton";
  }
  document.getElementById("todoData").innerHTML = "";
  document.getElementById("todoData").appendChild(ul);
}

function todo() {
  var values = document.getElementById("input").value;
  document.getElementById("input").value = "";
  data.push(values);
  renderCell();
}

function createDeleteButton(index) {
  var button = document.createElement("button");
  button.innerText = "Delete";
  button.id = "deleteButton";
  button.onclick = () => todoListDelete(index);
  return button;
}

function todoListDelete(index) {
  data.splice(index, 1);
  renderCell();
}

function createEditButton(index) {
  var button1 = document.createElement("button");
  button1.innerText = "Edit";
  button1.id = "editButton";
  button1.onclick = () => {
    getIndex = index;
    todoListEdit();
  };
  return button1;
}

function update() {
  document.getElementById("form-id").onsubmit = () => {
    if (getIndex !== undefined) {
      var values = document.getElementById("input").value;
      document.getElementById("input").value = "";
      data.splice(getIndex, 1, values);
      renderCell();
      document.getElementById("form-id").onsubmit = todo;
      document.getElementById("mainButton").innerText = "Submit";
      document.getElementById("mainButton").style.backgroundColor = "#0278FC";
    }
  };
}

function todoListEdit() {
  // getIndex = index;
  document.getElementById("input").value = data[getIndex];
  document.getElementById("mainButton").innerText = "Update";
  document.getElementById("mainButton").style.backgroundColor = "green";

  update();
}

// function todo() {
//   var values = document.getElementById("input").value;
//   document.getElementById("input").value = "";
//   data.push(values);
//   renderCell();
// }
