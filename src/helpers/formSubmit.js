export const handleSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  fetch(`https://formspree.io/f/${import.meta.env.VITE_FORM_URI}`, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then(() => {
      alert("Mensaje enviado");
      e.target.reset(); // Restablecer el formulario después de enviar
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    })
    .catch((error) => {
      console.error(error);
    });
};
