
// Mostrar contraseña oculta
const showHiddenPass = (loginPass, loginEye) =>{
    const input = document.getElementById(loginPass),
          iconEye = document.getElementById(loginEye)
 
    iconEye.addEventListener('click', () =>{
    //    cambiar contraseña a texto
       if(input.type === 'password'){
          input.type = 'text'
 
          // cambiar icono
          iconEye.classList.add('ri-eye-line')
          iconEye.classList.remove('ri-eye-off-line')
       } else{
          // cambiar a contraseña
          input.type = 'password'
 
          // cambiar icono
          iconEye.classList.remove('ri-eye-line')
          iconEye.classList.add('ri-eye-off-line')
       }
    })
 }
 
 showHiddenPass('login-pass','login-eye')