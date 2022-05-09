function calcularMediaAritmetica(lista) {
  
  for (let i = 0; i < lista.length; i++) {
    lista[i] = parseInt(lista[i])
    
     }
  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  );
  const promedioLista = sumaLista / lista.length;

  return promedioLista
  
}

// const lista1 = [
//   100,
//   200,
//   500,
//   400000000,
// ];

function calcularMediana() {

  const inputLista = document.getElementById("mediana");
  const valueLista = inputLista.value;
  let resultado = valueLista.split(" ");

  resultado.sort(function(a, b){
    return a - b
  });

  console.log(resultado);

  const mitadResultado = parseInt(resultado.length / 2);

  

function esPar(numerito) {
  if (numerito % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let mediana;


if (esPar(resultado.length)) {
  const elemento1 = resultado[mitadResultado - 1];
  
  const elemento2 = resultado[mitadResultado];
  

  const promedioElemento1y2 = calcularMediaAritmetica([
    elemento1,
    elemento2,
  ]);
  
  mediana = promedioElemento1y2;
  
  

} else {
  mediana = resultado[mitadResultado];
  
}

const resultP = document.getElementById("ResultP");

resultP.innerText = "La mediana de los datos ingresados es " + mediana

};

