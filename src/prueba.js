let simbolos = ["♦", "♥", "♠", "♣"];
let valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

let simboloRandom = Math.floor(Math.random() * simbolos.length);
let valorRandom = Math.floor(Math.random() * valores.length);

let carta = valores[valorRandom] + simbolos[simboloRandom];

console.log("Carta generada:", carta);