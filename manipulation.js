// let h2 = document.createElement("h2");
// h2.innerHTML = "This is a heading";
// console.log(h2);
// let text = document.createTextNode("This is a heading");
// h2.appendChild(text);
// h2.id = "demo";
// h2.className = "demo-class";
// console.log(h2);
// document.body.appendChild(h2);

// let h2 = document.createElement("h2");
// h2.textContent = "This is a heading";
// console.log(h2);

// h2.id = "demo";
// h2.className = "demo-class";
// console.log(h2);

// // document.body.appendChild(h2);
// let newList = document.createElement("ul");
// console.log(newList);
// let newChild = document.getElementById();
// console.log(newList);

// let list = document.querySelector("#list");
// let demo = document.querySelector("#demo");

// let addList = document.querySelector("#add-list");
// let addChild = document.querySelector("#add-child");

// addList.addEventListener("click", () => {
//   let listItems = `
//           <li class="list-items">Home</li>
//           <li class="list-items">About</li>
//           <li class="list-items">Projects</li>
//           <li class="list-items">Contact</li>
// `;
//   list.innerHTML = listItems;
// });

// addChild.addEventListener("click", () => {
//   let childEle = `
//           <p id="para">This is a paragraph</p>
//           <a href="#">Click</a>
//           <hr />
//           <h3>Heading Three</h3>
// `;

//   demo.innerHTML = childEle;
// });

// let addStyle = document.querySelector("#add-style");
// addStyle.addEventListener("click", () => {
//   list.className = "bg";
// });
// let list = document.querySelector("#list");
// list.insertAdjacentHTML("beforebegin", "<h2>List</h2>");
// list.insertAdjacentHTML("beforeend", "<li>Projects</li>");
// list.insertAdjacentHTML("afterend", "<hr />");
// console.log(list);

let list = document.querySelector("#list");
let cloneList = document.querySelector("#clone-list");

cloneList.appendChild(list.cloneNode());
