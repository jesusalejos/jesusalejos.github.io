function calcularMediaAritmetica() {
  const inputLista = document.getElementById("Notas");
  const valueLista = inputLista.value;
  const resultado = valueLista.split(" ");
  

  let sumaLista = 0;
  for (let i = 0; i < resultado.length; i++) {
    resultado[i] = parseInt(resultado[i])
    sumaLista = sumaLista + resultado[i];
    
    console.log(resultado);
    console.log(sumaLista);
  }

  // const sumaLista = resultado.reduce(
  //    function (valorAcumulado = 0, nuevoElemento) {
  //     return valorAcumulado + nuevoElemento;
  //   }
  // );

  const promedioLista = sumaLista / resultado.length;

  promedioLista;

  const resultP = document.getElementById("ResultP");

  resultP.innerText = "El promedio de notas es " + promedioLista

}