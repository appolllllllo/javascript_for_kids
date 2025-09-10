// Условные конструкции

// Конструкция if

/* let name = "Николай";
console.log("Привет, " + name);
if (name.length > 6) {
    console.log("Ну и длиннющее же у вас имя!");
} */

// Конструкция if... else

/* let name = "Николай";
console.log("Привет, " + name);
if (name.length > 6) {
    console.log("Ну и длиннющее же у вас имя!");
} else {
    console.log("Имя у вас не из длинных.");
} */

// Цепочка из конструкций if... else

/* let lemonChicken = false;
let beefWithBlackBean = true;
let sweetAndSourPork = true;

if (lemonChicken) {
    console.log("Отлично! Я буду курицу с лимоном!");
} else if (beefWithBlackBean) {
    console.log("Заказываю говядину.");
} else if (sweetAndSourPork) {
    console.log("Ладно, закажу свинину.");
} else {
    console.log("Что ж, остается рис с яйцом.");
} */

/* let name = "Тата";

if (name === "Тата") {
    console.log("Привет мне!");
} else if (name === "Эдди") {
    console.log("Привет, Эдди!");
} else {
    console.log("Привет, незнакомец!")
} */

// Циклы

// Цикл while

/* let sheepCounted = 0;

while (sheepCounted < 10) {
    console.log("Посчитано овец: " + sheepCounted + "!");
    sheepCounted++;
}

console.log("Хрррррррррр-псссс"); */

// Бесконечный цикл

/* let sheepCounted = 0;

while (sheepCounted < 10) {
    console.log("Посчитано овец: " + sheepCounted + "!");
}

console.log("Хрррррррррр-псссс"); */

// Цикл for

/* for (let sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
    console.log("Посчитано овец: " + sheepCounted + "!");
}

console.log("Хрррррррррр-псссс"); */

/* let timeToSayHello = 3;

for (let i = 0; i < timeToSayHello;  i++) {
    console.log("Привет!");
} */

// Цикл for, массивы и строки

/* let animals = ["лев", "фламинго", "белый медведь", "удав"];

for (let i = 0; i < animals.length; i++) {
    console.log("В этом зоопарке есть " + animals[i] + ".");
} */

/* let name = "Ник";

for (let i = 0; i < name.length; i++) {
        console.log("В моем имени есть буква " + name[i] + ".");
} */

// Другие варианты применения for  
    
/* for (let x = 2; x < 10000; x = x * 2) {
    console.log(x);
} */

/* for (let x = 3; x < 10000; x = x * 3) {
    console.log(x);
} */

/* let x = 3;

while (x < 10000) {
    console.log(x)
    x = x * 3;
} */