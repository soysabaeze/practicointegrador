const formulario = document.getElementById('formularioContacto');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;
    const medioContacto = document.querySelector('input[name="medioContacto"]:checked').value;
    const imagen = document.getElementById('imagen').value;

    if (nombre === '' || email === '' || asunto === '' || mensaje === '' || medioContacto === '') {
        alert('Todos los campos son obligatorios.');
        return;
    }

    // Validar correo electrónico (opcional)
    if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-]+$/.test(email)) {
        alert('Formato de correo electrónico no válido.');
        return;
    }

    // Validar imagen (opcional)
    if (imagen !== '' && !/\.(jpg|jpeg|png|gif)$/i.test(imagen)) {
        alert('Solo se permiten imágenes JPG, JPEG, PNG o GIF.');
        return;
    }

    // Enviar el formulario (código a implementar según tu método de envío)
    // ...

    alert('Formulario enviado correctamente.');
});
