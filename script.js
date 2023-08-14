// document.getElementById()
// let headingOne = document.getElementById("heading");
// console.log(headingOne.textContent);

// 2. document.getElementsByClassName()
// let className = document.getElementsByClassName("items");
// console.log(className);
// // console.log(className[0].textContent);
// // console.log(className[1]);
// // console.log(className[2]);
// // console.log(className[3]);
// // console.log(className[4]);

// let listArr = Array.from(className);
// console.log(listArr);

// 3. document.getElementsByTagName()

// let tagNames = document.getElementsByTagName("li");
// let tagName = document.getElementsByTagName("h1");
// console.log(tagName);
// console.log(tagNames.textContent);

// // 4. document.getElementsByName()

// let eleName = document.getElementsByName('subject');
// console.log(eleName);

// let newArr = Array.from(eleName);
// console.log([newArr]);
// console.log(newArr[3]);

// 5. document.querySelector()

// let selector = document.querySelector(".heading-one");
// console.log(selector);

// // 6. document.querySelectorAll()

// let querySelector = document.querySelectorAll("ul .items");
// console.log(querySelector);

// let li;

//  let para = document.getElementById("para");
//     console.log(para);
//     console.log(para.id);
//     console.log(para.textContent);

let projects = document.querySelectorAll(".items")[2];
console.log(projects);

parentNode;
console.log(projects.parentNode);

//  Parent to Child
//       let list = document.querySelector("#Menulist");
//       // console.log(list);
//       // console.log(list.firstElementChild);
//       // console.log(list.lastElementChild);
//       // console.log(list.children);
//       for (const listEle of list.children) {
//         console.log(listEle.textContent);
//       }.

// Siblings
// let projects = document.querySelectorAll(".items")[2];
// console.log(projects);
// console.log(projects.previousElementSibling);
// console.log(projects.nextElementSibling);
