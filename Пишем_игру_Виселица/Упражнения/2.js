// #2 Заглавные буквы

// Если игрок введет заглавную букву, она не совпадет с такой же строчной буквой в загаданном слове. Эту вероятность можно учесть, преобразовав введенную букву в строчный регистр. (Подсказка: для этого подойдет метод toLowerCase.)

let words = [
    "яблоко",
    "шоколад",
    "литература",
    "кольцо",
    "молния",
    "книга",
    "лев",
    "фортепиано",
    "дом",
    "телевизор",
    "мечта",
    "театр",
    "спагетти",
    "солнце",
    "маникюр"
];

let word = words[Math.floor(Math.random() * words.length)];

let answerArray = [];
for(let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

let remainingLetters = word.length;

while (remainingLetters > 0) {
    alert(answerArray.join(" "));
    let guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");

    if (guess === null) {
        break;
    }

    guess = guess.toLowerCase();
    
    if (guess.length !== 1) {
        alert("Пожалуйста, введите одиночную букву.");
        continue;
    }
    
    for (let j = 0; j < word.length; j++) {
        if(word[j] === guess) {
            answerArray[j] = guess;
            remainingLetters--;
        }
    }
}

alert(answerArray.join(" "));
alert("Отлично! Было загадано слово " + word);