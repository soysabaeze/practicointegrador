const formContact = document.querySelector("#formContact"); // Assuming your form has an ID "formContact"

const clearValidations = () => {
  // Remove error classes and messages from all fields
  document.querySelector("#nombre").classList.remove("error");
  document.querySelector("#email").classList.remove("error");
  document.querySelector("#comentario").classList.remove("error");
  document.querySelector("#tema").classList.remove("error");
  document.querySelector("#error-message").textContent = ""; // Assuming you have an element with ID "error-message" for error display
};

const validateContactForm = (event) => {
  event.preventDefault(); // Prevent default form submission

  clearValidations(); // Clear previous validation errors

  const nombre = document.querySelector("#nombre");
  const email = document.querySelector("#email");
  const comentario = document.querySelector("#comentario");
  const tema = document.querySelector("#tema");
  const medioContacto = document.querySelectorAll('input[name="medioContacto"]:checked'); // Get selected radio button

  let isValid = true; // Flag to track validation status

  if (!nombre.value.trim()) {
    nombre.classList.add("error");
    document.querySelector("#error-message").textContent = "El campo 'Nombre' es obligatorio";
    isValid = false;
  }

  if (!email.value.trim()) {
    email.classList.add("error");
    document.querySelector("#error-message").textContent = "El campo 'Correo electrónico' es obligatorio";
    isValid = false;
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    // Check for valid email format
    email.classList.add("error");
    document.querySelector("#error-message").textContent = "Ingrese un correo electrónico válido";
    isValid = false;
  }

  if (!comentario.value.trim()) {
    comentario.classList.add("error");
    document.querySelector("#error-message").textContent = "El campo 'Comentario' es obligatorio";
    isValid = false;
  }

  if (tema.value === "") {
    tema.classList.add("error");
    document.querySelector("#error-message").textContent = "Seleccione un tema de interés";
    isValid = false;
  }

  if (medioContacto.length === 0) {
    document.querySelector("#error-message").textContent = "Seleccione un medio de contacto";
    isValid = false;
  }

  if (isValid) {
    
    console.log("Formulario enviado correctamente");
  }
};

formContact.addEventListener("submit", validateContactForm); 
