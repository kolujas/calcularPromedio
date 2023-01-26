let arr = [];
let nota = 0;
let cont = 1;
let res = 0;


let nombreAlumno = document.querySelector('#nombreAlumno');
let notaAlumno = document.querySelector('#notaAlumno');
let notaAlumno2 = document.querySelector('#notaAlumno2');
let notaAlumno3 = document.querySelector('#notaAlumno3');
let calcularBtn = document.querySelector('#calcularBtn');
let formulario = document.querySelector('form');
let mostrarDatos = document.querySelector('.mostrarDatos');
let error = document.querySelectorAll('.error');

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
})

// Funcion constructora

function Alumnos(nombre, nota, nota2, nota3, res) {

  this.nombre = nombre;
  this.nota = nota;
  this.nota2 = nota2;
  this.nota3 = nota3;
  this.res = res;


  let inputs = document.querySelectorAll('input');

  inputs.forEach(element => {
    element.addEventListener('change', () => {
      nombre = nombreAlumno.value;
      nota = notaAlumno.value;
      nota2 = notaAlumno2.value;
      nota3 = notaAlumno3.value;

      res = (Math.floor(nota) + Math.floor(nota2) + Math.floor(nota3)) / 3;

      const validacion = () => {
        nota > 10 ? error[1].innerHTML = "Error! Debes ingresar un número entre 1 y 10 inclusive" : error[1].innerHTML = ""
        nota2 > 10 ? error[2].innerHTML = "Error! Debes ingresar un número entre 1 y 10 inclusive" : error[2].innerHTML = ""
        nota3 > 10 ? error[3].innerHTML = "Error! Debes ingresar un número entre 1 y 10 inclusive" : error[3].innerHTML = ""
    
    
      
      
        if (isNaN(nota)) {
          console.log("Los campos deben ser de formato numérico");
          return false;
        } else if(!isNaN(nota)){
          console.log("ok");
        }
      }
    
    
      validacion();
    })
  });



  calcularBtn.addEventListener("click", (e) => {
    e.preventDefault();

    


    while (cont < 2) {
     
      mostrarDatos.innerHTML = `

      <h3 class="py-2">¡Hola ${nombre}!</h3>
      
      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Primer nota:</div>
            ${nota}
          </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Segunda nota:</div>
            ${nota2}
          </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Tercer nota:</div>
            ${nota3}
          </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Tu promedio es:</div>
            ${res}
          </div>
        </li>
    </ul>`
      console.log(cont);
      cont++;
    }


    
    // datos guardados en LS

    localStorage.setItem(nombre, res);
    var lsData = localStorage.getItem(this.nombre, this.res);
    console.log(lsData)
    
  })
}


let alumno = new Alumnos(Alumnos.nombre, Alumnos.res);


// bd

// let bd = [{
//   "id": 1,
//   "nombre": alumno.nombre,
//   "promedio": alumno.res,
// },
// {
//   "id": 2,
//   "nombre": "Lucas",
//   "promedio": 7,
// },
// {
//   "id": 3,
//   "nombre": "Sheila",
//   "promedio": 7.5
// },
// {
//   "id": 4,
//   "nombre": "Leo",
//   "promedio": 8
// },
// {
//   "id": 5,
//   "nombre": "Kelpi",
//   "promedio": 9.5
// },
// {
//   "id": 6,
//   "nombre": "Pollo",
//   "promedio": 7.5
// }

// ]


fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => console.log(json))


     

let db = [...bd];



// Mostrar listado de alumnos

const usuariosBtn = document.querySelector('.salonFama');


usuariosBtn.addEventListener("click", () => {
  let listadoUsuarios = db.map(function (user) {
    return '<li class="list-group-item">' + user.nombre + '</li>';
  })

  document.querySelector('.users').innerHTML = listadoUsuarios.join('');
})


