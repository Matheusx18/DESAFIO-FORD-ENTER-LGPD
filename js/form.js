function Post(form) {
    if (window.event) {
        window.event.preventDefault();
    }

    const formData = new FormData(form);
    const contatoDados = {};

    formData.forEach((value, key) => {
        contatoDados[key] = value;
    });

    console.log("Objeto com os dados do formulário:", contatoDados);

    alert("Mensagem enviada com sucesso! Verifique o console do navegador.");
    
    form.reset();
    return false;
}
document.addEventListener('DOMContentLoaded', function() {
  const checkboxTermos = document.getElementById('aceiteTermos');
  const btnEnviar = document.getElementById('btnEnviar');
  const mensagemAviso = document.getElementById('mensagemAviso');

  if (checkboxTermos && btnEnviar && mensagemAviso) {
    checkboxTermos.addEventListener('change', function() {
      if (this.checked) {
        btnEnviar.disabled = false;
        mensagemAviso.style.display = 'none'; 
      } else {
        btnEnviar.disabled = true;
        mensagemAviso.style.display = 'block'; 
      }
    });
  }
});