function generarCarta(){

    let simbolos = ["♦", "♥", "♠", "♣"];
    let valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    let simboloRandom = Math.floor(Math.random() * simbolos.length);
    let valorRandom = Math.floor(Math.random() * valores.length);

    let simbolo = simbolos[simboloRandom];
    let valor = valores[valorRandom];

    document.getElementById("arriba").innerHTML = simbolo;
    document.getElementById("numero").innerHTML = valor;
    document.getElementById("abajo").innerHTML = simbolo;
    
    let card = document.getElementById("card");

    card.classList.remove("heart", "diamond", "spade", "club");

    if (simbolo === "♥") {
        card.classList.add("heart");
    } else if (simbolo === "♦") {
        card.classList.add("diamond");
    } else if (simbolo === "♠") {
        card.classList.add("spade");
    } else {
        card.classList.add("club");
    }
    

}
window.onload = function() {
    generarCarta();
    document.getElementById("btn").addEventListener("click", generarCarta);
};

setInterval(generarCarta, 10000);
