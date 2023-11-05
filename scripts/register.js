// Mostrar contraseña oculta en el formulario de registro
const showHiddenPass = (registerPass, registerEye) => {
    const input = document.getElementById(registerPass);
    const iconEye = document.getElementById(registerEye);
  
    iconEye.addEventListener('click', () => {
      if (input.type === 'password') {
        input.type = 'text';
        iconEye.classList.add('ri-eye-line');
        iconEye.classList.remove('ri-eye-off-line');
      } else {
        input.type = 'password';
        iconEye.classList.remove('ri-eye-line');
        iconEye.classList.add('ri-eye-off-line');
      }
    });
  }
  
  showHiddenPass('register-pass', 'register-eye');
  