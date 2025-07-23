// #1 Новые дразнилки

// Сделайте генератор случайных дразнилок со своим набором слов

let randomBodyParts = ["голова", "лицо", "нос", "рот", "руки", "ноги", "пальцы"];
let randomAdjectives = ["тупая", "грязная", "вонючая", "кривая", "горбатая", "бородавчатая", "пузатая"];
let randomWords = ["свинья", "тыква", "собака", "ящерица", "жаба", "крыса", "тетка"];

let randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];

let randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];

let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

let randomInsult = "У тебя " + randomBodyPart + " как " + randomAdjective + " " + randomWord + "!";

console.log(randomInsult);