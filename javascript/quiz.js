let preguntas = [
    {
        id: 1,
        pregunta: "En el autobus, una pareja a tu lado empeza conversar",
        respuestas: {
            "Intentas no escucharles": 0,
            "No dices nada pero escucha a la conversación": 1,
            "Empiezas hablar con ellos": 2,
        }
    },
    {
        id: 2,
        pregunta: "Tu amigo/a te cuenta un secreto muy divertido/interesante",
        respuestas: {
            "Lo dices a un amigo en quién confías": 1,
            "Le compartes a todo el mundo, pero no dices de quien es": 2,
            "No le compartes a nadie": 0,
        }
    },
    {
        id: 3,
        pregunta: "Tu amigo/a te envia un mensaje",
        respuestas: {
            "Respondes con un mensaje": 1,
            "Le llamas": 3,
            "Respondes con un mensaje de voz": 2
        }
    },
    {
        id: 4,
        pregunta: "Tu amigo/a esta escribiendo un mensaje en su telefono y parece muy divertido",
        respuestas: {
            "No haces nada": 0,
            "Lees los mensajes sobre su hombro": 2,
            "Preguntas con quién está hablando": 1,
        }
    },
    {
        id: 5,
        pregunta: "Encontras un vecino en tu edificio o al lado de tu casa",
        respuestas: {
            "Le dices hola, pero las conversacion se termina ahí": 1,
            "No dices nada si el vecino no te reconoce": 0,
            "Le dices hola y le compartes un rumor que circula en el barrio": 2,
        }
    },
    {
        id: 6,
        pregunta: "Alguien deja su teléfono desbloqueado",
        respuestas: {
            "Abres una aplicación y lees los mensajes recientes": 2,
            "Apagas el teléfono": 0,
            "Miras a las aplicaciónes pero no hace nada": 1,
        }
    },
    {
        id: 7,
        pregunta: "Tu amigo/a deja su teléfono y alguien le llama",
        respuestas: {
            "Observas quién está llamando": 1,
            "Llamas el amigo para decirlo que alguien está llamando": 0,
            "Coges el teléfono": 2,
        }
    },
    {
        id: 8,
        pregunta: "Miras a los mensajes Whatsapp/Instagram...",
        respuestas: {
            "Menos que cada 8 horas": 0,
            "Entre cada 2 y 8 horas": 1,
            "Más que cada 2 horas": 2,
        }
    },
]

var numero = 1

var puntos = 0

window.onload = function () {
    show(numero)
}

function show (numero) {
    let pregunta = document.getElementById("pregunta")
    let respuestas = preguntas[numero-1].respuestas
    pregunta.innerHTML = `
        <h1>Pregunta ${numero}:</h1>
        <h3>${preguntas[numero-1].pregunta}</h3>
        <div class="respuesta">
            <li class="btn">${Object.keys(respuestas)[0]}</li>
            <li class="btn">${Object.keys(respuestas)[1]}</li>
            <li class="btn">${Object.keys(respuestas)[2]}</li>
        </div>
    `
    toggleActive()
}

function toggleActive(){
    let option = document.querySelectorAll("li.btn");
    for(let i=0; i < option.length; i++){
        option[i].onclick = function(){
            for(let i=0; i < option.length; i++){
                if(option[i].classList.contains("active")){
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}

function next () {
    if (numero == preguntas.length) {
        location.href = "resultado.html"
        console.log(puntos)
    }
    let user_respuesta = document.querySelector("li.btn.active").innerHTML;
    if (!user_respuesta) {
        return
    } else {
        console.log(preguntas[numero-1].respuestas[user_respuesta])
        puntos += preguntas[numero-1].respuestas[user_respuesta]
        sessionStorage.setItem("puntos", puntos)
    }
    numero ++
    console.log(puntos)
    show(numero)
}
