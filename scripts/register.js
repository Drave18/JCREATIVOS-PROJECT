// Mostrar contraseña oculta en el formulario de registro
const showHiddenPass = (passwordField, eyeIcon) => {
    const input = document.getElementById(passwordField);
    const iconEye = document.getElementById(eyeIcon);

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
showHiddenPass('confirm-pass', 'confirm-eye');









 //LOCAL STORAGE

const form = document.querySelector(".register__form");

function saveUserData(event){
    event.preventDefault();
    console.log(event);
    const formData = new FormData(event.srcElement)
    const Name = formData.get("Name")
    const lastName = formData.get("lastName")
    const email = formData.get("email")
    const password = formData.get("password")
    const confirmPassword = formData.get("confirmPassword")
    const gender = formData.get("gender")
    const mismatchMessage = document.querySelector(".password-mismatch");

    if (password !== confirmPassword) {
      mismatchMessage.style.display = "block";
      return;
    }

    if (Name && lastName && email && password && gender){
    const userData = { Name, lastName, email, password, gender, login:false};
    console.log(userData);
    const str = JSON.stringify(userData);
    console.log(str);
    // Almaceno la cadena JSON en el almacenamiento local del navegador, utilizando la dirección de correo electrónico como clave.
    localStorage.setItem(email, str);
    redirectToLogin()
  }

  function redirectToLogin(){
    const a = document.createElement("a")
    a.href = "../pages/Login.html"
    a.click()
  }

}





//envia formulario

form.addEventListener("submit", saveUserData)
