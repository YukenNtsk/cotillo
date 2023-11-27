let puntos = sessionStorage.getItem("puntos");

let porciento = Math.round((puntos/17)*100)

console.log(porciento)

document.querySelector("h3#porciento").innerHTML = `${porciento}%`;

document.querySelector("#circle").style.strokeDashoffset = 440 - (440 * porciento) / 100

console.log(porciento)

window.onload = () => {
    if (porciento < 25) {
        document.querySelector("#circle").style.stroke = "#00ff00"
        document.querySelector("div#text").innerHTML = `
            A ti no te gusta hablar con otras personas.\n
            Tienes que hablar más con tus amigos y volverte\n
            más sociable
        `
    } else if (25 <= porciento && porciento < 50) {
        document.querySelector("#circle").style.stroke = "#ffff00"
        document.querySelector("div#text").innerHTML = `
            No eres chismoso/a, pero te gusta conocer un poco a los demás.\n
            Eres una persona de confianza
        `
    } else if (50 <= porciento && porciento < 75) {
        document.querySelector("#circle").style.stroke = "#ffaa00"
        document.querySelector("div#text").innerHTML = `
            Eres chismoso/a! Te gusta mucho hablar con personas\n
            y trabar amistad. Pero probablemente a las personas\n
            les gusta hablar contigo también
        `
    } else if (75 <= porciento) {
        document.querySelector("#circle").style.stroke = "#ff0000"
        document.querySelector("div#text").innerHTML = `
            Eres muy chismoso/a! Te gusta muchissimo hablar con personas\n
            pero tienes que respetar la privacidad de los demás\n
            un poco más...
        `
    }
}
