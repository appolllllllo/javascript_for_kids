// #3 Ограничение по ходам

// Сейчас наша «Виселица» позволяет угадывать буквы сколько угодно раз, до победного конца. Добавьте в программу переменную для учета попыток и завершайте игру, если игрок израсходовал все попытки. (Подсказка: проверяйте значение этой переменной в том же цикле while, где проверяется условие remainingLetters > 0, а с помощью операции && можно убедиться, что сразу два логических условия дают true — см. вторую главу.) 

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
let attempts = 0;
let maxAttempts = 6;

while (remainingLetters > 0 && attempts < maxAttempts) {
    alert(answerArray.join(" "));
    let guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");

    if(guess === null) {
        break;
    }

    guess = guess.toLowerCase();
    if (guess.length !==1) {
        alert("Пожалуйста, введите одиночную букву.");
        continue;
    }

    let found = false;
    for (let j = 0; j < word.length; j++) {
        if(word[j] === guess) {
            answerArray[j] = guess;
            remainingLetters--;
            found = true;
        }
    }
    if (!found) {
        attempts++;
        alert("Нет такой буквы! Осталось попыток: " + (maxAttempts - attempts));
    }
}

alert(answerArray.join(" "));

if (remainingLetters === 0) {
    alert("Отлично! Было загадано слово: " + word);
} else {
    alert("Вы проиграли! Было загадано слово: " + word);
}