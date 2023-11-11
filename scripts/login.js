
// Mostrar contraseña oculta
// Aquí, se define una función llamada showHiddenPass que toma dos parámetros: loginPass y loginEye.
//  Estos parámetros representan el ID del campo de contraseña y el
//  ID del ícono del ojo en el formulario de inicio de sesión, respectivamente.
const showHiddenPass = (loginPass, loginEye) =>{
   // Se obtienen referencias a los elementos del DOM utilizando los IDs proporcionados como parámetros. 
   // input es el campo de contraseña y iconEye es el ícono del ojo.
    const input = document.getElementById(loginPass),
          iconEye = document.getElementById(loginEye)
 
    iconEye.addEventListener('click', () =>{
    //    cambiar contraseña a texto
   //  Se agrega un event listener al ícono del ojo que escucha el evento de clic.
   // Alternar entre Contraseña Visible y Oculta:
   //Dentro del event listener, se verifica el tipo de entrada (input.type). Si la contraseña está oculta 
   //(tipo 'password'), se cambia a texto y se actualiza el icono. Si la contraseña ya es visible (tipo 'text'),
   // se cambia nuevamente a contraseña y
   // se actualiza el icono correspondientemente.
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
//  Finalmente, se llama a la función showHiddenPass con los IDs
//   específicos para el campo de contraseña y el ícono del ojo en el formulario de inicio de sesión.
 showHiddenPass('login-pass','login-eye')