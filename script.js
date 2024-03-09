// createElement, append, prepend, appendChild(), cssText //
// getAttribute(), setAttribute(), classList, toggle, remove //

// let div = document.createElement("div");
// let p = document.createElement("p");
// let h1 = document.createElement("h1");

// div.prepend(h1, p);
// body.prepend(div);

// h1.innerHTML = "Hello World";
// p.innerText =
//   " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quas fuga cum voluptatum enim. Repellendus neque molestias dignissimos laborum velit sint at, dolor doloremque non alias accusamus similique error autem! Quaerat saepe, nostrum distinctio eaque atque consequuntur molestiae tempore adipisci?✌️✌️";

// h1.style.cssText = `
// color:tomato;
// background:aqua;
// width:175px;
// border: 3px solid pink;
// border-radius:20px;
// `;
// p.style.cssText = `
// width:400px;
// `;

// let img = document.createElement("img");
// body.prepend(img);

// img.setAttribute(
//   "src",
//   "https://cdn.kodixauto.ru/media/image/601405ecd655fc0001f247dc"
// );

// img.setAttribute("alt", "BMW M5 CS");

// let input = document.querySelector("input");
// let v12 = document.querySelector("h1");
// let btn = document.querySelector("btn")

// input.addEventListener("input", () => {
//   console.log(input.value);
//   v12.innerText = input.value;
// });

// btn.addEventListener("click" , () => {
//     h1.innerHTML = input.value
// })

// let body = document.querySelector("body");
// let input = document.querySelector("input");
// let btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   body.style.backgroundColor = input.value;
// });

let number = document.querySelector(".number");
let plusBtn = document.querySelector(".plus");
let minusBtn = document.querySelector(".minus");

let plusMinus = 0;

function plusNumber() {
  plusMinus++;
  number.textContent = plusMinus;
}

function minusNumber() {
  if (plusMinus === 0) {
    alert("Error😒");
    return;
  }
  plusMinus--;
  number.textContent = plusMinus;
}

plusBtn.addEventListener("click", plusNumber);
minusBtn.addEventListener("click", minusNumber);

number.style.fontSize = "64px";
number.style.textAlign = "center";
number.style.color = "aqua";
number.style.fontFamily = "Traculeta , sans-serif";
plusBtn.style.width = "50px";
plusBtn.style.height = "50px";
plusBtn.style.fontWeight = "900";
minusBtn.style.width = "50px";
minusBtn.style.height = "50px";
minusBtn.style.fontWeight = "900";
plusBtn.style.transform = "translateY(-50px)"
minusBtn.style.transform = "translateY(-50px)"
plusBtn.style.marginLeft = "705px";
plusBtn.style.borderRadius = "30px"
minusBtn.style.borderRadius = "30px"
plusBtn.style.border = "3px solid lightgreen"
minusBtn.style.border = "3px solid red"