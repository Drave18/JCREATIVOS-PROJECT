let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open');
}


const userInfo = document.getElementById("username");

function ShowUserName() {
  currentUser = localStorage.getItem("currentUser");
  if (currentUser) {
    const p = document.createElement("p");
    const user = JSON.parse(currentUser);
    p.textContent = user.Name;
    userInfo.appendChild(p);
    // mostrar info de usuario
    userInfo.style.display = "block";
    // quitar boton de login y register
    const login = document.getElementById("login");
    login.style.display = "none";
    const register = document.getElementById("register");
    register.style.display = "none";

    //boton de logout aparecer
    const logout = document.getElementById("logout");
    logout.style.display = "block";
    logout.addEventListener("click", () => {
      p.textContent = "";
      userInfo.style.display = "none";
      localStorage.removeItem("currentUser");
      logout.style.display = "none";

      login.style.display = "block";
      register.style.display = "block";
    });
  }
}

ShowUserName();
