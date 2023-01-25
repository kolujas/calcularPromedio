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

      nota > 10 ? error[1].innerHTML = "sos pelotudo" : error[1].innerHTML = ""
      nota2 > 10 ? error[2].innerHTML = "sos pelotudo" : error[2].innerHTML = ""
      nota3 > 10 ? error[3].innerHTML = "sos pelotudo" : error[3].innerHTML = ""



      res = (Math.floor(nota) + Math.floor(nota2) + Math.floor(nota3)) / 3;
    })
  });

  calcularBtn.addEventListener("click", (e) => {
    e.preventDefault();


    while (cont < 2) {
      // mostrarDatos.innerHTML = `¡Hola ${nombre}! tus notas son:
      // <li>Primer nota: ${nota} </li>
      // <li>Segunda nota: ${nota2} </li>
      // <li>Tercer nota: ${nota3} </li>

      // <p>y tu promedio es: ${res} </p>  `


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





    // if(typeof nombre !== 'string' || nombre !== ""){
    //   console.log("SOS LA BESTIA INETERA");
    // }

    // while (cont < 2) {

    //   nombre = nombreAlumno.value;
    //   nota = notaAlumno.value;
    //   nota2 = notaAlumno2.value;
    //   nota3 = notaAlumno3.value;

    //   console.log(nota2)

    //   // calculo de promedio

    //   this.res = (Math.floor(nota) + Math.floor(nota2) + Math.floor(nota3)) / 3;


    //   if (Math.floor(notaAlumno.value) > 10) {
    //     console.log("Los campos deben ser completados por un número válido entre 1 al 10");
    //     return false;
    //   }
    //   if (Math.floor(nota2) > 10) {
    //     console.log("Los campos deben ser completados por un número válido entre 1 al 10");
    //     return false;
    //   }
    //   if (Math.floor(nota3) > 10) {
    //     console.log("Los campos deben ser completados por un número válido entre 1 al 10");
    //     return false;
    //   }


    //   // datos guardados en LS

    //   localStorage.setItem(nombre, this.res);
    //   var lsData = localStorage.getItem(this.nombre, this.res);
    //   console.log(lsData)



    //   if (isNaN(this.res)) {
    //     console.log("Los campos deben ser de formato numérico");
    //     return false;
    //   } else if (this.res >= 7) {
    //     console.log(`Tu promedio es: ${this.res} felicidades sos un héroe!`);
    //   } else {
    //     console.log(`Tu promedio es: ${this.res} sos un asistente!`);
    //   }



    //   const mostrarPromedio = document.querySelector('.tuPromedio');
    //   console.log(mostrarPromedio);

    //   mostrarPromedio.innerHTML = `${nombre} tu promedio es ${this.res}`;

    //   cont++;
    // }
  })
}


let alumno = new Alumnos(Alumnos.nombre, Alumnos.res);
nombre.innerHTML = `Alumno: ${alumno.nombre}`;
promedio.innerHTML = `Tu promedio es: ${alumno.res}`;



// bd

let bd = [{
  "id": 1,
  "nombre": alumno.nombre,
  "promedio": alumno.res,
},
{
  "id": 2,
  "nombre": "Lucas",
  "promedio": 7,
},
{
  "id": 3,
  "nombre": "Sheila",
  "promedio": 7.5
},
{
  "id": 4,
  "nombre": "Leo",
  "promedio": 8
},
{
  "id": 5,
  "nombre": "Kelpi",
  "promedio": 9.5
},
{
  "id": 6,
  "nombre": "Pollo",
  "promedio": 7.5
}

]


let db = [...bd];



// Mostrar listado de alumnos

const usuariosBtn = document.querySelector('.salonFama');

console.log(usuariosBtn);


usuariosBtn.addEventListener("click", () => {
  let listadoUsuarios = db.map(function (user) {
    return '<li>' + user.nombre + '</li>';
  })

  document.getElementById('users').innerHTML = listadoUsuarios.join('');
})


