const btn = document.querySelector("#add");
const saveBtn = document.querySelector("#save");
const closeBtn = document.querySelector("#close");
const bookmark = document.querySelector(".bookmarkContent");
const nameElement = document.querySelector("#input1");
const urlElement = document.querySelector("#input2");
const ul = document.querySelector("#myUl");
btn.addEventListener("click", function (event) {
  event.preventDefault();
  bookmark.style.display = "block";
  document.body.style.background = "rgba(0,0,0,0.8)";
});
saveBtn.addEventListener("click", function (event) {
  event.preventDefault();
  if (!nameElement.value || !urlElement.value) {
    alert(`du lieu khong hop le`);
  } else {
    document.body.style.background = "slateblue";
    bookmark.style.display = "none";
    const newweb = {
      id: i,
      name: nameElement.value,
      url: urlElement.value,
    };
    link.push(newweb);
    localStorage.setItem("newweb", JSON.stringify(newweb));
    render();
    nameElement.value = "";
    urlElement.value = "";
  }
});
closeBtn.addEventListener("click", function (event) {
  event.preventDefault();
  document.body.style.background = "slateblue";
  bookmark.style.display = "none";
});
const link = [];
function render() {
  ul.textContent = "";
  link.forEach((value, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${value.url}">${value.name}</a>
        <button id="delete" data-id="${index}">x</button>`;
    li.querySelector("#delete").addEventListener("click", function (event) {
      event.preventDefault();
      if (confirm("ban muon xoa web nay khong")) {
        link.splice(
          link[index],
          1
        );
        console.log(link);

        li.remove();
        localStorage.removeItem("newweb");
        ul.textContent = "";
        render();
      } else {
        alert(`web nay chua duoc xoa`);
      }
    });
    ul.appendChild(li);
  });
}
