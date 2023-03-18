const inputPeso = document.getElementById("peso");
const inputAltura = document.getElementById("altura");
const buttonCalcular = document.getElementById("btn_calcular");
const inputResult = document.getElementById("result");

function calcularIMC() {
  const peso = parseFloat(inputPeso.value); // conversão para numero
  const altura = parseFloat(inputAltura.value) / 100; // conversão cm para m

  // Calculo de IMC
  const calImc = peso / (altura * altura);

  // Arredondando o resultado para duas casas decimais
  const imcArredondado = calImc.toFixed(2);

  // Exibir resultado
  inputResult.value = `${imcArredondado}`;

  // Verificar a classificação do IMC e exibir um resultado
  if (calImc < 18.5) {
    inputResult.value += " (Abaixo do peso)";
  } else if (calImc >= 18.6 && calImc <= 24.9) {
    inputResult.value += " (Peso normal)";
  } else if (calImc >= 25 && calImc <= 29.9) {
    inputResult.value += " (Sobrepeso)";
  } else if (calImc >= 30 && calImc <= 34.9) {
    inputResult.value += " (Obesidade grau 1)";
  } else if (calImc >= 35 && calImc <= 39.9) {
    inputResult.value += " (Obesidade grau 2)";
  } else if (calImc >= 40){
    inputResult.value += " (Obesidade grau 3)";
  }
}

// Adicionar um listener de evento para o botão calcular
buttonCalcular.addEventListener("click", calcularIMC);
