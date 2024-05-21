function validateContactForm() {
    const nombreInput = document.querySelector('input[name="nombre"]');
    const emailInput = document.querySelector('input[name="email"]');
    const mensajeTextarea = document.querySelector('textarea[name="mensaje"]');
    const interesadoCheckbox = document.querySelector('input[name="interesado"]');
    const temaSelect = document.querySelector('select[name="tema"]');
    const fotoInput = document.querySelector('input[name="foto"]');
  
    // Validar nombre
    if (!nombreInput.value) {
      alert('El campo "Nombre" es obligatorio.');
      nombreInput.focus();
      return false;
    }
  
    // Validar email
    if (!emailInput.value || !validateEmail(emailInput.value)) {
      alert('Ingresa un correo electrónico válido.');
      emailInput.focus();
      return false;
    }
  
    // Validar mensaje
    if (!mensajeTextarea.value) {
      alert('El campo "Mensaje" es obligatorio.');
      mensajeTextarea.focus();
      return false;
    }
  
    // Validar checkbox
    if (!interesadoCheckbox.checked) {
      alert('Debes seleccionar que estás interesado/a en las conferencias.');
      interesadoCheckbox.focus();
      return false;
    }
  
    // Validar tema
    if (!temaSelect.value) {
      alert('Selecciona un tema de interés.');
      temaSelect.focus();
      return false;
    }
  
    // Validar imagen (opcional)
    if (fotoInput.files && !fotoInput.files[0].type.startsWith('image/')) {
      alert('Solo se permiten imágenes.');
      fotoInput.focus();
      return false;
    }
  
    // Si todas las validaciones pasan, retorna true para enviar el formulario
    return true;
  }
  
  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+)(\.[^<>()\[\]\\.,;:\s@"]+)*)@(([^<>()\[\]\\.,;:\s@"]+)(\.[^<>()\[\]\\.,;:\s@"]+)*)$/;
    return re.test(email);
  }
  