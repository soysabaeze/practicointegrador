const BASEURL = 'http://127.0.0.1:5000';

function obtenerContactos() {
         fetch('http://tu-api-flask/api/contacts')
         .then(response => response.json())
            .then(data => {
                const tbody = document.querySelector('#list-table-contacts tbody');
                tbody.innerHTML = ''; // Limpiar tabla antes de agregar filas
    
                    data.forEach(contacto => {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `
                        <td>${contacto.nombre}</td>
                        <td>${contacto.email}</td>
                        <td>${contacto.comentario}</td>
                        <td>${contacto.tema}</td>
                        <td>${contacto.medio_contacto}</td>
                        <td>${contacto.archivo ? `<a href="${contacto.archivo}">Enlace</a>` : 'N/A'}</td>
                        <td>
                            <button class="btn-edit" data-id="${contacto.id}" onclick="editarContacto(${contacto.id})">Editar</button>
                            <button class="btn-delete" data-id="${contacto.id}" onclick="eliminarContacto(${contacto.id})">Eliminar</button>
                        </td>
                     `;
                     tbody.appendChild(tr);
                });
            })
            .catch(error => console.error('Error al obtener los contactos:', error));
    }
    
    // Función para agregar un nuevo contacto
    function agregarContacto(data) {
        fetch('http://tu-api-flask/api/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
              if (!response.ok) {
              throw new Error('Error al agregar el contacto.');
           }
             return response.json();
        })
        .then(data => {
            // Mostrar modal de éxito con SweetAlert2
            Swal.fire({
                icon: 'success',
                title: 'Contacto agregado correctamente',
                showConfirmButton: false,
                timer: 1500
            });
    
            // Limpiar el formulario y actualizar la tabla
            document.getElementById('form-contact').reset();
            obtenerContactos(); // Actualizar tabla
        })
        .catch(error => {
            console.error('Error al agregar el contacto:', error);
             // Mostrar mensaje de error con SweetAlert2
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo agregar el contacto.'
        });
        });
    }
    
    // Función para eliminar un contacto por su ID
    function eliminarContacto(id) {
         Swal.fire({
            title: '¿Estás seguro?',
            text: "No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminarlo!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://tu-api-flask/api/contacts/${id}`, {
                 method: 'DELETE'
                })
                .then(response => {
                if (!response.ok) {
                    throw new Error('Error al eliminar el contacto.');
                   }
                   return response.json();
                 })
                .then(data => {
                    // Mostrar modal de éxito con SweetAlert2
                     Swal.fire({
                         icon: 'success',
                         title: 'Contacto eliminado correctamente',
                         showConfirmButton: false,
                         timer: 1500
                });
    
                    // Actualizar la tabla después de eliminar
                    obtenerContactos();
                })
                .catch(error => {
                    console.error('Error al eliminar el contacto:', error);
                    // Mostrar mensaje de error con SweetAlert2
                     Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'No se pudo eliminar el contacto.'
                    });
                });
            }
        });
    }
    
    // Función para inicializar la tabla de contactos al cargar la página
    document.addEventListener('DOMContentLoaded', obtenerContactos);
    