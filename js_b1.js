let todolist = [];
const input = document.querySelector("#myInput");
const ul = document.querySelector("#myUL");
function add() {
  if (input.value) {
    const newlist = {
      task: input.value,
    };
    todolist.push(newlist);
    ul.textContent = "";
    set();
  } else {
    alert(`gia tri khong hop le`);
  }
}
function set() {
  todolist.forEach((value) => {
    const li = document.createElement("li");
    li.innerHTML = `
    ${value.task}
    <div>
    <span class="close">Xóa</span>
    <span class="close2">Sửa</span>
    </div>`;
    li.querySelector(".close").addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      if (confirm("ban muon xoa nhiem vu nay chu")) {
        li.remove();
        todolist.splice(
          todolist.findIndex((value2) => value2.task == value.task),
          1
        );
      } else {
        alert(`nhiem vu chua duoc xoa`);
      }
    });
    li.querySelector(".close2").addEventListener("click", function (event) {
      event.preventDefault();
      let newtask = prompt("nhap nhiem vu moi: ");
      if (!newtask) {
        value.task =
          todolist[
            todolist.findIndex((value2) => value2.task == value.task)
          ].task;
          ul.textContent = "";
          set();
        } else {
          todolist[
            todolist.findIndex((value2) => value2.task == value.task)
          ].task = newtask;
          localStorage.setItem("list", JSON.stringify(todolist));
        ul.textContent = "";
        set();
      }
    });
    ul.appendChild(li);
  });
}
