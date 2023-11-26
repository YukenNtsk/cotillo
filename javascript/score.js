let puntos = sessionStorage.getItem("puntos");

let porciento = Math.round((puntos/17)*100)

console.log(porciento)

document.querySelector("h3#porciento").innerHTML = `${porciento}%`;

document.querySelector("#circle").style.strokeDashoffset = 440 - (440 * porciento) / 100

console.log(porciento)

window.onload = () => {
    if (porciento < 25) {
        document.querySelector("#circle").style.sroke = "#00ff00"
        document.querySelector("div#text").innerHTML = `
            A ti no te gusta hablar con otras personas, \n
            Tienes que hablar más con tus amigos.
        `
    } else if (25 <= porciento && porciento < 50) {
        document.querySelector("#circle").style.sroke = "#ffff00"
        document.querySelector("div#text").innerHTML = `
            No eres un cotillo, pero te gusta conocer un poco a los demás.
        `
    } else if (50 <= porciento && porciento < 75) {
        document.querySelector("#circle").style.sroke = "#99aa00"
        document.querySelector("div#text").innerHTML = `
            Eres un cotillo! Te gusta mucho hablar con personas\n
            y trabar amistad.
        `
    } else if (75 <= porciento) {
        document.querySelector("#circle").style.sroke = "#ff0000"
        document.querySelector("div#text").innerHTML = `
            Eres un cotillo! Te gusta muchissimo hablar con personas\n
            pero tienes que respetar la privacidad de las personas\n
            un poco más...
        `
    }
}
