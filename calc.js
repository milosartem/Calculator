let a = ""; //first number
let b = ""; //second number
let sign = "";
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "X", "/"];

//monitor

const out = document.querySelector(".calc-screen p");

const clearAll = () => {
  a = "";
  b = "";
  sign = "";
  finish = false;
  out.textContent = 0;
};

document.querySelector(".ac").onclick = clearAll;
document.querySelector(".buttons").onclick = (event) => {
  /* if not press btn*/
  if (!event.target.classList.contains("btn")) return;
  /* press btn AC */
  if (event.target.classList.contains("ac")) return;

  out.textContent = "";
  /*give press btn */
  const key = event.target.textContent;

  //if press 0-9 or .
  if (digit.includes(key)) {
    if (b === "" && sign === "") {
      a += key;
      out.textContent = a;
    } else if (a !== "" && b !== "" && finish) {
        b = key;
        finish =false;
        out.textContent = b;
    } else {
      b += key;
      out.textContent = b;
    }
    console.log(a, b, sign);
  }

  //if press + - / *
  if (action.includes(key)) {
    sign = key;
    out.textContent = sign;
    console.log(a, b, sign);
    return;
  }

  //pres=
  if (key === "=") {
    if(b==='') b = a;
    switch (sign) {
      case "+":
        a = +a + +b;
        break;
      case "-":
        a = a - b;
        break;
      case "X":
        a = a * b;
        break;
      case "/":
        if(b === '0'){
            out.textContent = 'Error';
            a ='';
            b ='';
            sign = '';
            return
        }
        a = a / b;
        break;
    }
    finish = true;
    out.textContent = a;
    console.table(a, sign, b);
  }
};
