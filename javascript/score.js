let puntos = sessionStorage.getItem("puntos");

let porciento = Math.round((puntos/17)*100)

console.log(porciento)

document.querySelector("h3#porciento").innerHTML = `${porciento}%`;

document.querySelector("#circle").style.strokeDashoffset = 440 - (440 * porciento) / 100

console.log(document.querySelector("#circle").style.dashoffset)

console.log(porciento)

window.onload = () => {
    if (porciento < 25) {
        document.querySelector("div#text").innerHTML = `
            A ti no te gusta hablar con otras personas, \n
            Tienes que hablar mas con tus amigos
        `
    } else if (25 <= porciento && porciento < 50) {
        document.querySelector("div#text").innerHTML = `
            No eres un cotillo, pero te gusta conocer un poco a los demas
        `
    } else if (50 <= porciento) {
        document.querySelector("div#text").innerHTML = `
            Eres un cotillo!
        `
    }
}
