let btnAcceder = document.getElementById("acceder");
let estadoIngreso = document.getElementById("respuesta");

btnAcceder.addEventListener("click", concat);

function concat() {
  const numeroClave1 = document.getElementById("numero1").value;
  const numeroClave2 = document.getElementById("numero2").value;
  const numeroClave3 = document.getElementById("numero3").value;
  let concatenado = numeroClave1 + numeroClave2 + numeroClave3;
  if (concatenado === "911") {
    estadoIngreso.innerHTML = `Password 1 correct`;
  } else if (concatenado === "714") {
    estadoIngreso.innerHTML = `Password 2 correct`;
  } else {
    estadoIngreso.innerHTML = `Password incorrect`;
  }
}
