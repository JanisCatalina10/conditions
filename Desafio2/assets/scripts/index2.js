let btnResultado = document.getElementById("sumar");
let total = document.getElementById("total");

btnResultado.addEventListener("click", sumarNumeros);

function sumarNumeros() {
  const num1 = parseFloat(document.getElementById("numero1").value);
  const num2 = parseFloat(document.getElementById("numero2").value);
  const num3 = parseFloat(document.getElementById("numero3").value);
  let suma = num1 + num2 + num3;
  if (suma <= 10) {
    total.innerHTML = `Llevas ${suma} stickers.`;
  } else {
    total.innerHTML = `Llevas demasiados stickers`;
  }
}
