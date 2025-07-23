// #3 Оператор + или join?

// Сделайте две версии своего генератора дразнилок: одна пусть использует для составления дразнилки оператор +, а другая создает массив со словами и соединяет их через пробел с помощью join. Какой вариант вам больше нравится и почему?

// Версия 1

/* let randomBodyParts = ["голова", "лицо", "нос", "рот", "руки", "ноги", "пальцы"];
let randomAdjectives = ["длинее", "короче", "противнее", "уродливее", "толще", "меньше", "тяжелее"];
let randomAnimalBodyParts = ["уши", "язык", "вымя", "хвост", "глаза", "кожа", "зубы"]
let randomAnimals = ["свиньи", "козы", "собаки", "ящерицы", "жабы", "крысы", "коровы"];

let randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];

let randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];

let randomAnimal = randomAnimals[Math.floor(Math.random() * randomAnimals.length)];

let randomAnimalBodyPart = randomAnimalBodyParts[Math.floor(Math.random() * randomAnimalBodyParts.length)];

let randomInsult = "У тебя " + randomBodyPart + " еще " + randomAdjective + " чем " + randomAnimalBodyPart + " " + randomAnimal + "!";

console.log(randomInsult); */

// Версия 2

let randomBodyParts = ["голова", "лицо", "нос", "рот", "руки", "ноги", "пальцы"];
let randomAdjectives = ["длинее", "короче", "противнее", "уродливее", "толще", "меньше", "тяжелее"];
let randomAnimalBodyParts = ["уши", "язык", "вымя", "хвост", "глаза", "кожа", "зубы"]
let randomAnimals = ["свиньи", "козы", "собаки", "ящерицы", "жабы", "крысы", "коровы"];

let randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];

let randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];

let randomAnimal = randomAnimals[Math.floor(Math.random() * randomAnimals.length)];

let randomAnimalBodyPart = randomAnimalBodyParts[Math.floor(Math.random() * randomAnimalBodyParts.length)];

let randomInsult = [ "У тебя", randomBodyPart, "еще", randomAdjective, "чем", randomAnimalBodyPart, randomAnimal, "!"];

console.log(randomInsult.join(" "));