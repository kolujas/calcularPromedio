let arr = [],
    nota = 0, 
    cont = 1,
     res = 0;


const nombreAlumno = document.querySelector('#nombreAlumno'),
      notaAlumno = document.querySelector('#notaAlumno'),
      notaAlumno2 = document.querySelector('#notaAlumno2'),
      notaAlumno3 = document.querySelector('#notaAlumno3'),
      calcularBtn = document.querySelector('#calcularBtn'),
      formulario = document.querySelector('form'),
      mostrarDatos = document.querySelector('.mostrarDatos'),
      error = document.querySelectorAll('.error'),
      usuarios = document.querySelector('.users')

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
}


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
          // console.log("ok");
        }
      }
    
    
      validacion();
      let alumno = new Alumnos(nombre, res);
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
      cont++;
    }
    
    
    // datos guardados en LS


    const mostrarLS = () => {
      localStorage.setItem(nombre, res);
    var lsData = localStorage.getItem(this.nombre, this.res); 

      let mostrarStorage = document.querySelector('.storageContent')
      mostrarStorage.innerHTML = `<button class="btn btn-primary col" id="mostrarStorage">Ver mi promedio</button>`

      let mostrarStorageBtn = document.querySelector('#mostrarStorage');
      
      mostrarStorageBtn.addEventListener("click", () => {
        Swal.fire({
          title: `Hola ${this.nombre}`,
          text: `Tu promedio es ${lsData}`,
          icon: 'info',
          confirmButtonText: 'Aceptar'
        })
      })
    }

    mostrarLS();


       
    
    
    
    // Mostrar listado de alumnos
    
    const usuariosBtn = document.querySelector('.salonFama');
    
    
    usuariosBtn.addEventListener("click", () => {

      fetch('https://fakerapi.it/api/v1/persons?_quantity=20')
      .then(response => response.json())
      .then(data => { 
        const personas = data.data;

        let listadoUsuarios = personas.map(function (user) {
          return `<li class="list-group-item"> <span class="fw-bolder">Nombre:</span> ${user.firstname} - <span class="fw-bolder">Email:</span> ${user.email} </li>`;
        })
      
        listadoUsuarios.sort();

        usuarios.innerHTML = listadoUsuarios.join('');
    })
    })
  })
 
  

 

     

   
  


  
 



