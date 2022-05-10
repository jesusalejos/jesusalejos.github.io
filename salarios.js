const colombia = [];
colombia.push({
  name: "Camila",
  salary: 500,
});
colombia.push({
  name: "Nath",
  salary: 1500,
});
colombia.push({
  name: "Luisa",
  salary: 1800,
});
colombia.push({
  name: "Laura",
  salary: 1000,
});
colombia.push({
  name: "Daniela",
  salary: 2200,
});
colombia.push({
  name: "Esperancita",
  salary: 200,
});
colombia.push({
  name: "Carla",
  salary: 500,
});
colombia.push({
  name: "Antonieta",
  salary: 1500,
});
colombia.push({
  name: "Alicia",
  salary: 1300,
});
colombia.push({
  name: "Ana",
  salary: 2400,
});
colombia.push({
  name: "Julia",
  salary: 3400,
});
colombia.push({
  name: "Rosa",
  salary: 400,
});
colombia.push({
  name: "Angélica",
  salary: 400,
});
colombia.push({
  name: "Tatiana",
  salary: 400,
});
colombia.push({
  name: "Lorena",
  salary: 600,
});
colombia.push({
  name: "Carolina",
  salary: 1600,
});
colombia.push({
  name: "Fernanda",
  salary: 2600,
});
colombia.push({
  name: "Nora",
  salary: 1000,
});
colombia.push({
  name: "Gisselle",
  salary: 2000,
});
colombia.push({
  name: "Bill Gates",
  salary: 100000000,
});


let lista = document.getElementById("lista");
let lista2 = document.getElementById("lista2");

function nuevosElementos(){
  let nombre = document.getElementById("nombre").value;
  let salario = document.getElementById("salario").value;
  salario = parseInt(salario);
      
  
  colombia.push({
    name: nombre,
    salary: salario,
  });

  console.log(colombia);

  const salariosCol = colombia.map(
    function (personita) {
      return personita.salary;
    }
  );

  console.log(salariosCol.length);
  lista.innerHTML = `Èsta es la lista de salarios:  ${salariosCol.slice(0, salariosCol.length - 10)}`;
  lista2.innerHTML = `${salariosCol.slice(11)}`;

  
}