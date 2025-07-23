// #2 Изощренные дразнилки

// Усовершенствуйте генератор дразнилок, чтобы он создавал дразнилки такого типа: «У тебя [часть тела] еще более [прилагательное], чем [часть тела животного] у [животное]». Подсказка: нужно будет создать еще один массив.

let randomBodyParts = ["голова", "лицо", "нос", "рот", "руки", "ноги", "пальцы"];
let randomAdjectives = ["длинее", "короче", "противнее", "уродливее", "толще", "меньше", "тяжелее"];
let randomAnimalBodyParts = ["уши", "язык", "вымя", "хвост", "глаза", "кожа", "зубы"]
let randomAnimals = ["свиньи", "козы", "собаки", "ящерицы", "жабы", "крысы", "коровы"];

let randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];

let randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];

let randomAnimal = randomAnimals[Math.floor(Math.random() * randomAnimals.length)];

let randomAnimalBodyPart = randomAnimalBodyParts[Math.floor(Math.random() * randomAnimalBodyParts.length)];

let randomInsult = "У тебя " + randomBodyPart + " еще " + randomAdjective + " чем " + randomAnimalBodyPart + " " + randomAnimal + "!";

console.log(randomInsult);