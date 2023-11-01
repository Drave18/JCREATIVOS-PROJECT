// Obtén una referencia al botón "PC" y al elemento "change_text".
const pcButton = document.getElementById("pc-button");
const changeText = document.querySelector(".change_text");

// Agrega un controlador de eventos para el clic en el botón "PC".
pcButton.addEventListener("click", () => {
    // Define el nuevo contenido que deseas mostrar.
    const nuevoContenido = `
        <p class="landing-services__paragraph">
            LAS PCS
        </p>

        <p class="landing-services__disclaimer">
            *Los precios varian de acuerdo a su dispositivo
        </p>
        <div class="landing-services__box-list" id="list-portatil">
            <div class="landing-services__list left">
                <ul>
                    <h4>
                        Hardware(30.000-500.000 COP)
                    </h4>
                    <li>Mantenimiento Fisico</li>
                    <li>Cambio de teclado</li>
                    <li>Reprogramacion de BIOS</li>
                    <li>Reemplazo y reparacion de carcasa</li>
                    <li>Cambio de Trackpad</li>
                    <li>Reparacion  o cambio de Bisagras</li>
                    <li>Reemplazo de ventiladores y disipadores de calor</li>
                    <li>Correccon de errores de sobrecalentamiento</li>
                </ul>
            </div>  

            <div class="landing-services__list right">
                <ul>
                    <h4>
                        Software(50.000-150.000 COP)
                    </h4>
                    <li>Reprogramacion</li>
                    <li>Correccion de erorres ocasionados por virus</li>
                    <li>Copias de seguridad(backups)</li>
                    <li>Instalacion de programas</li>
                    <li>Configuracion del sistema operativo</li>
                </ul>
            </div>
        </div>
    `;

    // Establece el nuevo contenido en el elemento "change_text".
    changeText.innerHTML = nuevoContenido;
});

// Puedes agregar eventos similares para otros botones si es necesario.
