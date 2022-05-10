// const lista1 = [
//   1,
//   2,
//   3,
//   1,
//   2,
//   3,
//   4,
//   2,
//   2,
//   2,
//   1,
// ];

function calcularModa (){
  const inputLista = document.getElementById("moda");
  const valueLista = inputLista.value;
  let resultado = valueLista.split(" ");


const lista1Count = {};

resultado.map(
  function (elemento) {
    if (lista1Count[elemento]) {
      lista1Count[elemento] += 1;
    } else {
      lista1Count[elemento] = 1;
    }
  }
);
//  console.log(resultado)
//  console.log(lista1Count)

 const lista1Array = Object.entries(lista1Count).sort(
  function (elementoA, elementoB) {
    return elementoA[1] - elementoB[1];
  }
);;

//  console.log(lista1Array);

 const moda = lista1Array[lista1Array.length - 1];

 const resultP = document.getElementById("ResultP");

resultP.innerText = "La moda de los datos ingresados es " + moda[0];
}