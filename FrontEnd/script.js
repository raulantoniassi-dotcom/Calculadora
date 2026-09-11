// Base
let a = [];
let b = [];
let operador = false;
let operacaoAtual = "";

// Display
let display = document.querySelector("#display");

function addNumber(number) {
  display.value += number;
}

// Botões pra apagar
limpar.addEventListener("click", () => {
  display.value = "";
  a = [];
  b = [];
  operador = false;
  operacaoAtual = "";
});

const backspace = document.getElementById("Backspace");

// Números
const num1 = document.getElementById("1");
const num2 = document.getElementById("2");
const num3 = document.getElementById("3");
const num4 = document.getElementById("4");
const num5 = document.getElementById("5");
const num6 = document.getElementById("6");
const num7 = document.getElementById("7");
const num8 = document.getElementById("8");
const num9 = document.getElementById("9");
const num0 = document.getElementById("0");

num1.addEventListener("click", () => {
  if (operador == false) {
    a.push(1);
  } else if (operador == true) {
    b.push(1);
  }
  addNumber(1);
});

num2.addEventListener("click", () => {
  if (operador == false) {
    a.push(2);
  } else if (operador == true) {
    b.push(2);
  }
  addNumber(2);
});

num3.addEventListener("click", () => {
  if (operador == false) {
    a.push(3);
  } else if (operador == true) {
    b.push(3);
  }
  addNumber(3);
});

num4.addEventListener("click", () => {
  if (operador == false) {
    a.push(4);
  } else if (operador == true) {
    b.push(4);
  }
  addNumber(4);
});

num5.addEventListener("click", () => {
  if (operador == false) {
    a.push(5);
  } else if (operador == true) {
    b.push(5);
  }
  addNumber(5);
});

num6.addEventListener("click", () => {
  if (operador == false) {
    a.push(6);
  } else if (operador == true) {
    b.push(6);
  }
  addNumber(6);
});

num7.addEventListener("click", () => {
  if (operador == false) {
    a.push(7);
  } else if (operador == true) {
    b.push(7);
  }
  addNumber(7);
});

num8.addEventListener("click", () => {
  if (operador == false) {
    a.push(8);
  } else if (operador == true) {
    b.push(8);
  }
  addNumber(8);
});

num9.addEventListener("click", () => {
  if (operador == false) {
    a.push(9);
  } else if (operador == true) {
    b.push(9);
  }
  addNumber(9);
});

num0.addEventListener("click", () => {
  if (operador == false) {
    a.push(0);
  } else if (operador == true) {
    b.push(0);
  }
  addNumber(0);
});

// operadores
const btnSoma = document.querySelector("#somar");
btnSoma.addEventListener("click", () => {
  operador = true;
  operacaoAtual = "+";
  addNumber(" + ");
});

const btnSubtrair = document.querySelector("#subtrair");
btnSubtrair.addEventListener("click", () => {
  operador = true;
  operacaoAtual = "-";
  addNumber(" - ");
});

const btnMultiplicar = document.querySelector("#multiplicar");
btnMultiplicar.addEventListener("click", () => {
  operador = true;
  operacaoAtual = "*";
  addNumber(" × ");
});

const btnDividir = document.querySelector("#dividir");
btnDividir.addEventListener("click", () => {
  operador = true;
  operacaoAtual = "/";
  addNumber(" ÷ ");
});

const btnPorcento = document.querySelector("#porcento");
btnPorcento.addEventListener("click", () => {
  operador = true;
  operacaoAtual = "%";
  addNumber(" % ");
});

const btnIgual = document.querySelector("#igual");
btnIgual.addEventListener("click", () => {
  if (a.length === 0 || b.length === 0) return;

  fetch("http://localhost:3000/calculo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      num1: parseFloat(a.join("")),
      num2: parseFloat(b.join("")),
      operacao: operacaoAtual,
    }),
  })
    .then((res) => res.json())
    .then((resultado) => {
      console.log(resultado);

      display.value = resultado.resultado || resultado;

      a = [display.value];
      b = [];
      operador = false;
    })
    .catch((err) => {
      console.error("Erro:", err);
      display.value = "Erro";
    });
});
