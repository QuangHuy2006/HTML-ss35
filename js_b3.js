const products = [
    {
      id: 1,
      name: "Laptop Dell XPS 15",
      price: 35990000,
      image: "https://laptopmedia.com/wp-content/uploads/2022/04/2-14-scaled.jpg",
      description:
        "Laptop cao cap voi man hinh 15 inch, CPU Intel Core i7 va RAM 16GB. ",
    },
    {
      id: 2,
      name: "iPhone 15 Pro Max",
      price: 32990000,
      image:
        "https://th.bing.com/th/id/OIP.PO8M08Vxndz_455at0qGawHaFj?rs=1&pid=ImgDetMain",
      description:
        "Dien thoai flagship cua Apple voi camera 48MP va chip A17 Pro. ",
    },
    {
      id: 3,
      name: "Samsung Galaxy S24 Ultra",
      price: 28990000,
      image:
        "https://th.bing.com/th/id/OIP.n5ZE0e4C910Ed2cLhNKjPAHaEK?rs=1&pid=ImgDetMain",
      description:
        "Dien thoai Android manh me voi but S-Pen va camera sieu zoom. ",
    },
    {
      id: 4,
      name: "Tai nghe Sony WH-1000XM5",
      price: 7990000,
      image:
        "https://photo2.tinhte.vn/data/attachment-files/2022/07/6043317_tinhte_sony_wh-1000xm5_2.jpg",
      description:
        "Tai nghe chong on tot nhat voi thoi luong pin len den 30 giò. ",
    },
    {
      id: 5,
      name: "Apple Watch Series 9 ",
      price: 11990000,
      image:
        "https://bgr.com/wp-content/uploads/2023/09/Apple-Watch-Series-9.jpg?quality=82&strip=all",
      description:
        "Dong ho thong minh cao cap voi tinh nang do nhip tim va ho tro the thao. ",
    },
    {
      id: 6,
      name: "Loa JBL Charge 5",
      price: 3990000,
      image:
        "https://th.bing.com/th/id/OIP.kNp66Lw41hQJBWsxrddSZQHaHa?rs=1&pid=ImgDetMain",
      description: "Loa Bluetooth chong nuoc voi am bass manh me va pin 20 giò. ",
    },
  ];
  const ul = document.querySelector("#myUl");
  const input = document.querySelector("#myInput");
  const btn = document.querySelector("#btn");
  function render(choice) {
    choice.forEach((value) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <img
        src="${value.image}"
        width="100%"
        height="100px"
        >
        <h4>
        ${value.name}
        </h4>
        <div class="description">
        ${value.description}
        </div>
        <div style="font-size: 15px">
        ${value.price.toLocaleString("vi", {
          style: "currency",
          currency: "VND",
        })}
        </div>
        <div>
        <button class="btn">Buy</button></div>
        `;
      ul.appendChild(li);
    });
  }
  render(products);
  let filtered = [];
  btn.addEventListener("click", function(event) {
      filtered = [];
      filtered.push(...products.filter(value => input.value.toString().includes(value.name)));
      localStorage.setItem("filter", JSON.stringify(filtered));
      ul.textContent = "";
      render(filtered);
  })
  
  