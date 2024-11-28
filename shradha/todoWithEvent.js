let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
  console.log(inp.value);

  let item = document.createElement("li");
  item.innerText = inp.value;

  let del = document.createElement("button");
  del.innerText = "delete";
  del.classList.add("delete");

  item.appendChild(del);
  ul.appendChild(item);
});

delBtns = document.querySelectorAll(".Delete");

for (delBtn of delBtns) {
  delBtn.addEventListener("click", function () {
    let par = this.parentElement;
    par.remove();
  });
}
