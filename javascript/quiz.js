let preguntas = [
    {
        id: 1,
        pregunta: "En el autobus, una pareja a tu lado empeza charlar",
        respuestas: {
            "Intentas no escucharles o la conversación no te cabe en la cabeza": 0,
            "No dices ni pipa pero escuchas a la conversación": 1,
            "Empiezas cotillear con ellos": 2,
        },
        img: "https://t4.ftcdn.net/jpg/02/69/47/51/360_F_269475198_k41qahrZ1j4RK1sarncMiFHpcmE2qllQ.jpg"
    },
    {
        id: 2,
        pregunta: "Tu amigo/a te cuenta un secreto muy divertido/interesante",
        respuestas: {
            "Lo dices a un/a amigo/a en quién confías": 1,
            "Lo compartes a todo el mundo, pero no dices de quién es": 2,
            "No lo compartes a nadie": 0,
        },
        img: "https://thumbs.dreamstime.com/b/little-secrets-picture-girl-telling-secret-to-her-brother-over-white-background-36911367.jpg"
    },
    {
        id: 3,
        pregunta: "Tu amigo/a te envia un mensaje",
        respuestas: {
            "Respondes con un mensaje": 1,
            "Le llamas": 3,
            "Respondes con un mensaje de voz": 2
        },
        img: "https://thumbs.dreamstime.com/b/apple-messages-application-icon-iphone-screen-close-up-app-online-social-media-net-sankt-petersburg-russia-april-116158709.jpg"
    },
    {
        id: 4,
        pregunta: "Tu amigo/a esta escribiendo un mensaje en su telefono y parece muy divertido",
        respuestas: {
            "No haces nada, no te importa": 0,
            "Lees los mensajes sobre su hombro": 2,
            "Le preguntas con quién está hablando": 1,
        },
        img: "https://images.pexels.com/photos/6140981/pexels-photo-6140981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 5,
        pregunta: "Encontras un vecino en tu edificio o al lado de tu casa",
        respuestas: {
            "Le dices hola, pero las conversacion se termina ahí": 1,
            "No dices nada si el vecino no te reconoce": 0,
            "Le dices hola y cotilleas con él o le compartes un rumor que circula en el barrio": 2,
        },
        img: "https://t4.ftcdn.net/jpg/02/79/95/39/360_F_279953994_TmVqT7CQhWQJRLXev4oFmv8GIZTgJF1d.jpg"
    },
    {
        id: 6,
        pregunta: "Alguien deja su teléfono desbloqueado",
        respuestas: {
            "Abres una aplicación y lees los mensajes recientes": 2,
            "Apagas el teléfono": 0,
            "Miras a las aplicaciónes pero no hace nada": 1,
        },
        img: "https://media.istockphoto.com/id/1166536066/vector/security-smartphone-flat-design-vector-illustration.jpg?s=612x612&w=0&k=20&c=5edDe4mgkDB0BXiPnb3DC8eai9bYgWyLBWsC2v7zV2I="
    },
    {
        id: 7,
        pregunta: "Tu amigo/a deja su teléfono y alguien le llama",
        respuestas: {
            "Observas quién está llamando": 1,
            "Llamas el amigo para decirlo que alguien está llamando": 0,
            "Coges el teléfono": 2,
        },
        img: "https://images.pond5.com/cell-phone-ringing-missed-call-footage-092625043_iconl.jpeg"
    },
    {
        id: 8,
        pregunta: "Miras a los mensajes Whatsapp/Instagram...",
        respuestas: {
            "Menos de cada 8 horas": 0,
            "Entre cada 2 y 8 horas": 1,
            "Más de cada 2 horas": 2,
        },
        img: "https://as1.ftcdn.net/v2/jpg/05/82/75/02/1000_F_582750275_wQXuNIVkLZxg84wgLYPePwfUqvH4BikW.jpg"
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
        <img src=${preguntas[numero-1].img}>
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
