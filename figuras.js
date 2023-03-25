const inputCuadrado = document.getElementById("InputCuadrado");
const sectionCuadrado = document.getElementById("SectionCuadrado");
const sectionTriangulo = document.getElementById("SectionTriangulo");
const sectionCirculo = document.getElementById("SectionCirculo");
const inputCirculo = document.getElementById("InputCirculo");
  

// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cmˆ2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triángulo miden: "
//   + ladoTriangulo1
//   + "cm, "
//   + ladoTriangulo2
//   + "cm, "
//   + baseTriangulo
//   + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

// console.log("El área del triángulo es: " + areaTriangulo + "cmˆ2");

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
// console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return Math.pow(radio,2) * PI;
}

console.groupEnd();


// Aquí interactuamos con el HTML. Calcular Cuadrado

function calcularPerimetroCuadrado() {
  const valueCuadrado = inputCuadrado.value;  
  const perimetro = perimetroCuadrado(valueCuadrado);
  const resultadoCuadrado = document.createElement("p")
  resultadoCuadrado.innerHTML = `El perimetro es ${perimetro}`
  sectionCuadrado.appendChild(resultadoCuadrado)
  
}

function calcularAreaCuadrado() {
  const valueCuadrado = inputCuadrado.value;
  const area = areaCuadrado(valueCuadrado);
  const resultadoCuadrado = document.createElement("p")
  resultadoCuadrado.innerHTML = `El área es ${area}`
  sectionCuadrado.appendChild(resultadoCuadrado)
  
}

//Calcular Triángulo
function calcularPerimetroTriangulo() {
  const ladoOne = document.getElementById("InputLadoOne");
  const ladoTwo = document.getElementById("InputLadoTwo");
  const ladoBasis = document.getElementById("InputLadoBasis");
  const valueOne = parseInt(ladoOne.value);
  const valueTwo = parseInt(ladoTwo.value);
  const valueBasis = parseInt(ladoBasis.value);

  const perimetroT = perimetroTriangulo(valueOne,valueTwo,valueBasis);
  const resultadoTriangulo = document.createElement("p")
  resultadoTriangulo.innerHTML = `El perimetro es ${perimetroT}`
  sectionTriangulo.appendChild(resultadoTriangulo)
  
}

function calcularAreaTriangulo() {
  const ladoBasis = document.getElementById("InputLadoBasis");
  const valueBasis = ladoBasis.value;
  const altura = document.getElementById("InputLadoHeight");
  const valueHeight = altura.value;

  const areaT = areaTriangulo(valueBasis,valueHeight);
  const resultadoTriangulo = document.createElement("p")
  resultadoTriangulo.innerHTML = `El área es ${areaT}`
  sectionTriangulo.appendChild(resultadoTriangulo)
}

//Calcular círculo
function calcularPerimetroCirculo() {
  
  const value = inputCirculo.value;
  const perimetro = perimetroCirculo(value);
  const resultadoCirculo = document.createElement("p")
  resultadoCirculo.innerHTML = `El perimetro es ${perimetro}`
  sectionCirculo.appendChild(resultadoCirculo);
}

function calcularAreaCirculo() {
  
  const value = inputCirculo.value;

  const area = areaCirculo(value);
  const resultadoCirculo = document.createElement("p")
  resultadoCirculo.innerHTML = `El área es ${area}`
  sectionCirculo.appendChild(resultadoCirculo);
}