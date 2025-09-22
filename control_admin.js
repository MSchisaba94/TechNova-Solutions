


    let servicios = []; // Array para almacenar usuarios
    const form = document.getElementById("form_servicios");
    const form_editar = document.getElementById("form_editar");
    const tableBody = document.getElementById("tabla_servicios");

    servicios.push({indice:"1", nombre_servicio:"Desarrollo Web", precio:"$200 USD", estado:"Activo"});
    servicios.push({indice:"2", nombre_servicio:"Consultoria Tecnológica", precio:"$200 USD", estado:"Inactivo"});
    servicios.push({indice:"3", nombre_servicio:"Mantenimiento de Sistemas", precio:"$250 USD", estado:"Activo"});
    servicios.push({indice:"4", nombre_servicio:"Migración de Datos", precio:"$400 USD", estado:"Inactivo"});
    servicios.push({indice:"5", nombre_servicio:"Capacitación IT", precio:"$150 USD", estado:"Activo"});
    servicios.push({indice:"6", nombre_servicio:"Integración de APIs", precio:"$$350 USD", estado:"Inactivo"});

    function mostrar_servicios() {
      tableBody.innerHTML = "";
      const cabecera = `<thead class="table-light">
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          </tbody>`
          tableBody.innerHTML += cabecera
        servicios.forEach((servicio, index) => {
        const row = `<tr>
          <td>${servicio.nombre_servicio}</td>
          <td>${servicio.precio}</td>
          <td>${servicio.estado}</td>
          <td>
            <button type="button" class="btn btn-sm btn-light" onclick="formEditarServicio(${index})"><img src="Imagenes/lapiz_naranja.png" class="float-start">Editar</button>
            <button type="button" class="btn btn-sm btn-light" onclick="eliminarServicio(${index})"><img src="Imagenes/eliminar.png" class="float-start">Eliminar</button>
          </td>
        </tr>`;
        tableBody.innerHTML += row;
      });
    }
    
    mostrar_servicios();


    // Editar usuario
    function formEditarServicio (index) {
      const servicio = servicios[index];
      tableBody.innerHTML = "";
      const form = `<form id="userForm">
      <thead class="table-light">
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          </tbody>
          <tr>
          <input type="hidden" id="userId">
          <td>
          <input type="text" id="nombre" placeholder="${servicio.nombre_servicio}" required></td>
          <td>
    <input type="text" id="precio" placeholder="${servicio.precio}" required></td>
    <td>
    <input type="text" id="estado" placeholder="${servicio.estado}" required></td>
    <td>
    <button type="button" onclick="editarServicio(${index})">Guardar</button>
    <button type="button" onclick="mostrar_servicios()">Cancelar</button>
    </td>
        </tr>
        </form>`
    tableBody.innerHTML += form;
    }  

    function editarServicio (index){
    servicios[index].nombre_servicio = document.getElementById("nombre").value;
    servicios[index].precio = document.getElementById("precio").value;
    servicios[index].estado = document.getElementById("estado").value;
    mostrar_servicios();
    }
      
      

    // Eliminar usuario
    window.eliminarServicio = function(index) {
      servicios.splice(index, 1);
      mostrar_servicios();
    };

