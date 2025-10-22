// #4 Исправьте ошибку

// В игре есть ошибка: если вы будете снова и снова вводить одну и ту же букву, которая есть в загаданном слове, remainingLetters будет снова и снова уменьшаться. Постарайтесь это исправить! (Подсказка: можно добавить проверку еще одного условия — что в соответствующем элементе answerArray все еще стоит знак подчеркивания. Если там другой символ, значит, эта буква уже угадана.)

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
        if(word[j] === guess && answerArray[j] === "_") {
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