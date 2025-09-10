// #2 Генератор случайных строк

// Напишите генератор случайных строк.

let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
let randomString = "";

while (randomString.length < 10) {
    let randomIndex = Math.floor(Math.random() * alphabet.length);
    let randomLetter = alphabet[randomIndex];
    randomString += randomLetter;
}

console.log(randomString);
