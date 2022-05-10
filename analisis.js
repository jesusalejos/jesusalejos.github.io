// Helpers
function esPar(numerito) {
  return (numerito % 2 === 0);
}

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  );
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

// Calculadora de mediana
function medianaSalarios(lista) {
  const mitad = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    const personitaMitad1 = lista[mitad - 1];
    const personitaMitad2 = lista[mitad];

    const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
    return mediana;
  } else {
    const personitaMitad = lista[mitad];
    return personitaMitad;
  }
}

// Mediana General



function mediaGeneral() {

  const salariosCol = colombia.map(
  function (personita) {
    return personita.salary;
  }
);

const salariosColSorted = salariosCol.sort(
  function (salaryA, salaryB) {
    return salaryA - salaryB;
  }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted);

let mediaP = document.getElementById("mediaG");
mediaP.innerHTML = `La mediana general es de: ${medianaGeneralCol}`

};

// Mediana del top 10%



function mediaTop10() {

  const salariosCol = colombia.map(
    function (personita) {
      return personita.salary;
    }
  );

  const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
      return salaryA - salaryB;
    }
  );

  
  const spliceStart = (salariosColSorted.length * 90) / 100;
  const spliceCount = salariosColSorted.length - spliceStart;
  
  // const salariosColTop10 = salariosColSorted.splice(
  //   spliceStart,
  //   spliceCount,
  // );
  
  // The same but with slice that no modify the original array
  
  const salariosColTop10 = salariosColSorted.slice(spliceStart);
  
  const medianaTop10Col = medianaSalarios(salariosColTop10);

  let top = document.getElementById("top");
  top.innerHTML = `La media del top10 es de: ${medianaTop10Col}`
  
}

console.log({
  medianaGeneralCol,
  medianaTop10Col,
});

