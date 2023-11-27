// Este código agrega un "event listener" al documento (la página web) que escucha el evento "DOMContentLoaded". 
// Este evento se dispara cuando todo el contenido HTML de la página ha sido completamente cargado 
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona los botones y la sección "change_text" por sus IDs
    const portatilButton = document.getElementById("portatil-button");
    const pcButton = document.getElementById("pc-button");
    const componenteButton = document.getElementById("componente-button");
    const changeText = document.querySelector(".change_text");

    function resetButtons() {
      // Remueve la clase 'selected' de todos los botones
      portatilButton.classList.remove("selected");
      pcButton.classList.remove("selected");
      componenteButton.classList.remove("selected");
    }
    // Agrega un controlador de eventos al botón "Portátil", de esta manera al precionarlo se ejecuta
    // un cambio en el html que tiene la clase change_text para reemplaszarlo por el que se describe a continuacion
    portatilButton.addEventListener("click", () => {
        resetButtons();
        portatilButton.classList.add("selected");
        // Cambia el contenido de la sección "change_text" según el botón "Portátil"
        changeText.innerHTML = `
            <p class="landing-services__paragraph">
                Entendemos que los computadores portátiles pueden tener una vida útil prolongada, pero con el tiempo es común que dejen
                de funcionar tan eficientemente como cuando fueron adquiridos. Estos problemas suelen surgir debido a muchos factores,
                como la acumulación de suciedad, daños causados por un mal uso, accidentes por golpes o derrames de líquido, virus,
                falta de memoria RAM o almacenamiento, sobrecalentamiento, problemas en la pantalla debido a cortocircuitos o fallas en
                la batería. Los daños en los computadores pueden ser tanto externos como internos, y en nuestro taller nos
                especializamos en solucionarlos.
            </p>
            <p class="landing-services__disclaimer">
                *Los precios varían de acuerdo a su dispositivo
            </p>
            <div class="landing-services__box-list" id="list-portatil">
                <div class="landing-services__list left">
                    <ul>
                        <h4>
                            Hardware(30.000-500.000 COP)
                        </h4>
                        <li>Mantenimiento Físico</li>
                        <li>Cambio de teclado</li>
                        <li>Reprogramación de BIOS</li>
                        <li>Reemplazo y reparación de carcasa</li>
                        <li>Cambio de Trackpad</li>
                        <li>Reparación  o cambio de Bisagras</li>
                        <li>Reemplazo de ventiladores y disipadores de calor</li>
                        <li>Corrección de errores de sobrecalentamiento</li>
                    </ul>
                </div>
                <div class="landing-services__list right">
                    <ul>
                        <h4>
                            Software(50.000-150.000 COP)
                        </h4>
                        <li>Reprogramación</li>
                        <li>Corrección de errores ocasionados por virus</li>
                        <li>Copias de seguridad (backups)</li>
                        <li>Instalación de programas</li>
                        <li>Configuración del sistema operativo</li>
                    </ul>
                </div>
            </div>
        `;
    });

    // Agrega un controlador de eventos al botón "PC" y pasa lo mismo que lo anterior
    pcButton.addEventListener("click", () => {
        resetButtons();
        pcButton.classList.add("selected");
        // Cambia el contenido de la sección "change_text" según el botón "PC"
        changeText.innerHTML = `
        <p class="landing-services__paragraph">
        Las computadoras, con el tiempo, tienden a experimentar problemas, incluso si
        son máquinas extremadamente potentes. Es esencial cuidarlas y realizar un
        mantenimiento regular. Las averías más comunes en las computadoras pueden ser
        causadas por diversas razones, como la ralentización del sistema, la
        imposibilidad de encender el equipo, problemas en la red, falta de espacio en el
        sistema, programas obsoletos, pantalla que no se enciende, ruidos inusuales en
        el interior de la computadora, fallas en la tarjeta gráfica, reinicios o
        apagados inesperados, fallos en el sistema operativo, y la interrupción del
        funcionamiento de las teclas o el mouse (que no siempre se debe a daños, sino
        que puede ser el resultado de una configuración incorrecta en el sistema). En
        caso de necesitar mantenimiento o reparación, takt ofrece una gama de servicios
        para los componentes de su computadora.         
    </p>
    <p class="landing-services__disclaimer">
        *Los precios varían de acuerdo a su dispositivo
    </p>
    <div class="landing-services__box-list" id="list-pc">
        <div class="landing-services__list left">
            <ul>
                <h4>
                    Hardware(30.000-500.000 COP)
                </h4>
                <li>Revisión exhaustiva</li>
                <li>Mantenimiento Fisico</li>
                <li>Reprogramación</li>
                <li>Limpieza física y general</li>
                <li>Mantenimiento de la Torre</li>
                <li>Cambio de piezas dañadas</li>
            </ul>
        </div>
        <div class="landing-services__list right">
            <ul>
                <h4>
                    Software(50.000-150.000 COP)
                </h4>
                <li>Reprogramación</li>
                <li>Instalacion de programas</li>
                <li>Configuración del sistema operativo</li>
                <li>Corrección de errores ocasionados por virus</li>
                <li>Copias de seguridad (backups)</li>
            </ul>
        </div>
    </div>
        `;
    });

    // Agrega un controlador de eventos al botón "Componente"
    componenteButton.addEventListener("click", () => {
        resetButtons();
        componenteButton.classList.add("selected");
        // Cambia el contenido de la sección "change_text" según el botón "Componente"
        changeText.innerHTML = `
    <p class="landing-services__paragraph">
        Los elementos de nuestro ordenador de sobremesa o portátil pueden dividirse en
        dos categorías: los componentes externos y los internos. Los componentes
        externos abarcan todos aquellos como la pantalla, un teclado, un ratón o un
        touchpad en el caso de los portátiles, una cámara web y micrófonos. Por otro
        lado, los componentes internos son aquellos que se encuentran dentro del
        ordenador, como el disco duro interno (ya sea SSD, SATA o SLIM), la unidad de
        procesamiento (que puede ser un procesador Intel, procesador AMD, procesador
        Intel Pentium, AMD FX, microprocesador, entre otros), la placa base (de marcas
        como Asus, Intel, Socket o MSI), la unidad de alimentación, la tarjeta de red,
        la memoria RAM y la tarjeta de sonido, así como la tarjeta gráfica. En caso de
        necesitar mantenimiento o reparación, Takt ofrece una variedad de servicios para
        estos componentes.
    </p>
    <p class="landing-services__disclaimer">
        *Los precios varían de acuerdo a su dispositivo
    </p>
    <div class="landing-services__box-list" id="list-componente">
        <div class="landing-services__list left">
            <ul>
            <h3>Dispositivos(Desde 50.000 COP)</h3>
                <li>Cámaras</li>
                <li>Pantallas</li>
                <li>Adaptadores</li>
                <li>Teclados</li>
                <li>Mouse O Touchpad</li>
                <li>Lector de CD</li>
                <li>Router de red</li>
            </ul>
        </div>
        <div class="landing-services__list right">
            <ul>
            <h3>Componentes(Desde 70.000 COP)</h3>
                <li>Memorias RAM</li>
                <li>Discos Duros</li>
                <li>Fuentes de alimentación</li>
                <li>Procesadores</li>
                <li>Tarjeta De Sonido</li>
                <li>Tarjeta De Video</li>
                <li>Placas madre</li>
            </ul>
        </div>
    </div>
        `;
    });
});





//LOCALSTORAGE-------------------------------------------------------------------------------------------

// Obtener los datos del usuario desde el almacenamiento local




//HOVER PARA BOTONES