// Espera 3 segundos y muestra la invitación
setTimeout(() => {

    document.getElementById("pantallaCarga").style.display = "none";
    document.getElementById("contenidoPrincipal").style.display = "flex";

}, 3000);


// Botones
const btnSi = document.getElementById("btnSi");
const btnNo = document.getElementById("btnNo");

// Botón NO se escapa
btnNo.onmouseover = function () {

    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 80);

    btnNo.style.position = "absolute";
    btnNo.style.left = x + "px";
    btnNo.style.top = y + "px";

};


// Botón SI
btnSi.addEventListener("click", () => {


    // Latido del botón
    btnSi.classList.add("latido");



    // Crear lluvia de corazones
    for(let i = 0; i < 50; i++){

        let corazon = document.createElement("div");

        corazon.innerHTML = "❤️";
        corazon.className = "corazon";


        corazon.style.left = Math.random() * 100 + "vw";


        corazon.style.animationDuration =
        (Math.random() * 3 + 2) + "s";


        document.body.appendChild(corazon);



        setTimeout(() => {

            corazon.remove();

        },5000);

    }



    // Guardando respuesta
    setTimeout(() => {


        document.body.innerHTML = `

        <div class="guardando">

            <h1>
            💻 Guardando respuesta...
            </h1>

        </div>

        `;


    },5000);




    // Respuesta guardada
    setTimeout(() => {


        document.body.innerHTML = `

        <div class="guardando">

            <h1>
            ✅ Respuesta guardada: SÍ ❤️
            </h1>

        </div>

        `;


    },7500);



// Carta final
setTimeout(() => {

    document.body.innerHTML = `

    <div class="final">

        <h1>
        🕸️ Gracias por aceptar esta aventura ❤️
        </h1>

        <p>

        No sabes lo feliz que me hace que aceptaras esta invitación.

        <br><br>

        Ahora tenemos una cita para ver
        Spider-Man: Brand New Day. 🍿🕷️

        <br><br>

        Prometo que será un día muy especial
        y espero que lo disfrutemos juntas. ❤️

        <br><br>

        Espero este sea el inicio de muchos
        momentos bonitos junto a ti.

        <br><br>

        <strong>
        Con mucho cariño,<br>
        🕸️ Oviedo ❤️
        </strong>

        </p>

    </div>

    `;

    // Después de 18 segundos cambia a la tarjeta de la cita
    setTimeout(() => {

        document.body.innerHTML = `

        <div id="cita">

            <div class="tarjeta-cita">

                <h1>🕷️ Nuestra cita 🕷️</h1>

                <p><strong>📅 Fecha:</strong> Tú eliges el dia.</p>

                <p><strong>🕒 Hora:</strong> Tú eliges la hora.</p>

                <p><strong>🍿 Yo solo quiero compartir ese momento contigo.</p>

                <button id="confirmar">Confirmar cita❤️</button>

                <p id="gracias" style="display:none;">
                    ¡Gracias por confirmar! 🕷️❤️<br>
                    Nos vemos pronto❤️</p>

            </div>

        </div>

        `;

        document.getElementById("confirmar").onclick = function () {

    document.getElementById("gracias").style.display = "block";
    this.style.display = "none";

    setTimeout(() => {

        document.body.classList.add("fade-out");

        setTimeout(() => {
             document.body.classList.remove("fade-out");

            document.body.innerHTML = `
                <div style="
                    height:100vh;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    background:black;
                    color:white;
                    font-family:Arial, sans-serif;
                    text-align:center;
                ">
                    <div>
                        <h1>❤️ Gracias por hacer este momento especial ❤️</h1>
                        <p>Hasta pronto... 🕷️</p>
                    </div>
                </div>
            `;

        }, 2000);

    }, 3000);

};

    }, 18000);

}, 10000);
});