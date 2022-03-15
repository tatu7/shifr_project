let sozInput = document.querySelector(".shifrInput");
let deShifrInput = document.querySelector(".deshifrInput");
let result1 = document.querySelector(".result1");
let result2 = document.querySelector(".result2");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let nolBirArr = [];
let musxaArr = [];

function shifr(str) {
  s = str.split("");
  let id = [];
  for (let i = 0; i < s.length; i++) {
    let q = s[i].charCodeAt();
    id.push(q);
  }
  for (let i = 0; i < id.length; i++) {
    let k = 0;
    while (id[i] > 1) {
      if (Math.floor(id[i] / 2 ** k) == 1) {
        break;
      }
      k++;
    }
    for (let j = k; j > 0; j--) {
      if (id[i] > 2 ** j) {
        nolBirArr.push(1);
        musxaArr.push(1);
        id[i] = id[i] % 2 ** j;
      } else {
        nolBirArr.push(0);
        musxaArr.push(0);
      }
    }
    for (let l = 0; l < i + 1; l++) {
      nolBirArr.push("*");
    }
    nolBirArr.push(1);
    musxaArr.push(1);
  }
}
btn1.disabled = true;
let r;
btn1.addEventListener("click", (e) => {
  e.preventDefault();
  shifr(sozInput.value);
  let result = nolBirArr.join("");
  result1.textContent = result;
  result2.textContent = "";
  deShifrInput.value = "";
});
sozInput.addEventListener("input", () => {
  btn1.disabled = false;
});

///deshifr function
function deshift(shifArr) {
  musxaArrJOin = shifArr.join("");
  console.log(deShifrInput.value);
  console.log(musxaArrJOin);
  if (deShifrInput.value === musxaArrJOin) {
    result2.textContent = sozInput.value;
  } else {
    result2.textContent = "bunday shifr mavjud emas";
  }
}
btn2.addEventListener("click", (e) => {
  e.preventDefault();
  deshift(musxaArr);
  btn1.disabled = true;
  result1.textContent = " ";
  sozInput.value = "";
  nolBirArr = [];
  musxaArr = [];
});
// let q = g.charCodeAt();
// let q = String.fromCharCode(97);

///////////////////////////////////////////////////////////////////////////////////////////////////////
