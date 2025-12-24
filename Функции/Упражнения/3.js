// #3 «Виселица» и функции

/* Давайте вернемся к игре «Виселица» из седьмой главы и перепишем ее с помощью функций.

Я уже переписал основной код игры. Некоторые его части заменены вызовами функций. Вам осталось лишь запрограммировать эти функции! */

let pickWord = function () {
    let words = [
        "яблоко", "шоколад", "литература", "кольцо", "молния",
        "книга", "лев", "фортепиано", "дом", "телевизор",
        "мечта", "театр", "спагетти", "солнце", "маникюр"
    ];
    let randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
};

let setupAnswerArray = function (word) {
    let answerArray = [];
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = '_';
    }
    return answerArray;
};

let showPlayerProgress = function (answerArray) {
    alert(answerArray.join(' '));
};

let getGuess = function () {
    return prompt("Угадайте букву или нажмите Отмена для выхода:");
};

let updateGameState = function (guess, word, answerArray) {
    let correctGuesses = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === guess) {
            answerArray[i] = guess;
            correctGuesses++;
        }
    }
    return correctGuesses;
};

let showAnswerAndCongratulatePlayer = function (answerArray) {
    alert("Поздравляем! Вы угадали слово: " + answerArray.join(''));
};

let word = pickWord();
let answerArray = setupAnswerArray(word);
let remainingLetters = word.length;

while (remainingLetters > 0) {
    showPlayerProgress(answerArray);
    
    let guess = getGuess();
    
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Пожалуйста, введите одиночную букву.");
    } else {
        let correctGuesses = updateGameState(guess, word, answerArray);
        remainingLetters -= correctGuesses;
    }
}

showAnswerAndCongratulatePlayer(answerArray);