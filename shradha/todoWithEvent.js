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
  inp.value = "";
});

delBtns = document.querySelectorAll(".Delete");

//this code will not delete the todo which will be created after the adding tasks for that we have to use event deligation model (event bubbling)

// for (delBtn of delBtns) {
//   delBtn.addEventListener("click", function () {
//     let par = this.parentElement;
//     par.remove();
//   });
// }

//in this case we can perform delete on Ul as we are not creating new ul on adding todo. so we used concept of event bubbling.

ul.addEventListener("click", function (e) {
  if (e.target.nodeName == "BUTTON") {
    let listItem = e.target.parentElement;
    listItem.remove();
  }
});
