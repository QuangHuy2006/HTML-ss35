const table = document.querySelector("#table tbody");
const portfolioId = document.querySelector("#input1");
const portfolioName = document.querySelector("#input2");
const bookmark = document.querySelector(".bookmarkContent");
const firstElementTable = document.querySelector("table:nth-child(2)");
const findElement = document.querySelector("#input");
const select = document.querySelector("#select");
const closeBtn = document.querySelector("#close");
const cancel = document.querySelector("#cancel");
const addBtn = document.querySelector("#added");
const error1 = document.querySelector("#error");
const error2 = document.querySelector("#error2");
function getSelectedValue() {
  const status = document.querySelector('input[name="status"]:checked');
  return status.value;
}
let portfolio = [];
const btn = document.querySelector("#add");
btn.addEventListener("click", function (event) {
  event.preventDefault();
  bookmark.style.display = "block";
  document.body.style.background = "rgba(0,0,0,0.5)";
  firstElementTable.style.background = "rgba(0,0,0,0.5)";
  findElement.style.background = "rgba(0,0,0,0.5)";
  select.style.background = "rgba(0,0,0,0.5)";
});
closeBtn.addEventListener("click", function (event) {
  event.preventDefault();
  bookmark.style.display = "none";
  document.body.style.background = "white";
  firstElementTable.style.background = "whitesmoke";
  findElement.style.background = "white";
  select.style.background = "white";
});
cancel.addEventListener("click", function (event) {
  event.preventDefault();
  bookmark.style.display = "none";
  document.body.style.background = "white";
  firstElementTable.style.background = "whitesmoke";
  findElement.style.background = "white";
  select.style.background = "white";
});
addBtn.addEventListener("click", function (event) {
  event.preventDefault();
  if (!portfolioId.value || !portfolioName.value) {
    alert(`Dữ liệu không hợp lệ`);
    if (!portfolioId.value) {
      error1.textContent = "Ô dữ liệu không được để trống";
      portfolioId.style.borderColor = "red";
    }
    if (!portfolioName.value) {
      error2.textContent = "Ô dữ liệu không được để trống";
      portfolioName.style.borderColor = "red";
    }
  } else {
    const newPortfolio = {
      Id: portfolioId.value,
      Name: portfolioName.value,
      Status: getSelectedValue(),
    };
    localStorage.setItem(`portfolio:`, JSON.stringify(newPortfolio));
    portfolio.push(newPortfolio);
    portfolioId.value = "";
    portfolioName.value = "";
    event.preventDefault();
    bookmark.style.display = "none";
    document.body.style.background = "white";
    firstElementTable.style.background = "whitesmoke";
    findElement.style.background = "white";
    select.style.background = "white";
    render(portfolio);
  }
});
function render(choice) {
  table.innerHTML = "";
  choice.forEach((value, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${value.Id}</td>
        <td>${value.Name}</td>
        <td><span class="${
          value.Status === "Đang hoạt động" ? "active" : "inactive"
        }">&bull; ${value.Status}</span></td>
        <td>
        <button id="deletePortfolio" class="btnForEdit" date-id="${index}"><ion-icon name="trash-outline"></ion-icon></button>
        <button id="revise" class="btnForEdit" date-id="${index}"><ion-icon name="pencil-outline"></ion-icon></button>
        </td>
        `;
    tr.querySelector("#deletePortfolio").addEventListener(
      "click",
      function (event) {
        event.preventDefault();
        if (confirm(`Bạn muốn xóa danh mục này không`)) {
          choice.splice(index, 1);
          render();
          localStorage.removeItem("portfolio");
        } else {
          alert(`Danh mục chưa được xóa`);
        }
      }
    );
    tr.querySelector("#revise").addEventListener("click", function (event) {
      event.preventDefault();
      choice[index].Id = prompt("Nhập mã danh mục mới");
      choice[index].Name = prompt("Nhập tên danh mục mới");
      console.log(choice);
      render();
    });
    table.appendChild(tr);
  });
}
function filtered() {
  const filteredPortfolio = portfolio.filter(
    (value) => value.Status === findElement.value
  );
  render(filteredPortfolio);
}
