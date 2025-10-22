// #1 Больше слов

// Добавьте новые слова в массив words. Не забывайте, что все буквы должны быть строчными.

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
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

let remainingLetters = word.length;

while (remainingLetters > 0) {
    alert(answerArray.join(" "));

    let guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");

    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Пожалуйста, введите одиночную букву.");
    } else {
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }

}

alert(answerArray.join(" "));
alert("Отлично! Было загадано слово " + word);

