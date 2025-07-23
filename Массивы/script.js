// Создание массива

/* let myTopThreeDinosaurus = ["Тиранозавр", "Велоцираптор", "Стегозавр"];

console.log(myTopThreeDinosaurus); */

/* let dinosaurs = ["Тираннозавр", "Велоцираптор", "Стегозавр", "Трицератопс", "Брахиозавр", "Птеранодон", "Апатозавр", "Диплодок", "Компсогнат"];

console.log(dinosaurs); */

// Создание и изменение элементов

/* let dinosaurs = [
    "Тираннозавр",
    "Велоцираптор",
    "Стегозавр",
    "Трицератопс",
    "Брахиозавр",
    "Птеранодон",
    "Апатозавр",
    "Диплодок",
    "Компсогнат"
];

dinosaurs[0] = "Тираннозавр рекс";
console.log(dinosaurs); */

/* let dinosaurs = [];

dinosaurs[0] = "Тираннозавр";
dinosaurs[1] = "Велоцираптор";
dinosaurs[2] = "Стегозавр";
dinosaurs[3] = "Трицератопс";
dinosaurs[4] = "Брахиозавр";
dinosaurs[5] = "Птеранодон";
dinosaurs[6] = "Апатозавр";
dinosaurs[7] = "Диплодок";
dinosaurs[8] = "Компсогнат";

console.log(dinosaurs); */

/* let dinosaurs = ["Тираннозавр", "Велоцираптор", "Стегозавр", "Трицератопс", "Брахиозавр", "Птеранодон", "Апатозавр", "Диплодок", "Компсогнат"];

dinosaurs[33] = "Филосораптор";

console.log(dinosaurs); */

// Разные типы данных в одном массиве

/* let dinosaursAndNumbers = [3, "динозавры", ["трицератопс", "стегозавр", 3627.5], 10];

console.log(dinosaursAndNumbers[2]); */

/* let dinosaursAndNumbers = [3, "динозавры", ["трицератопс", "стегозавр", 3627.5], 10];

console.log(dinosaursAndNumbers[2][0]); */

// Работаем с массивами

// Длина массива

/* let maniacs = ["Якко", "Вакко", "Дот"];

maniacs[0];
maniacs[1];
maniacs[2];

console.log(maniacs.length); */

/* let maniacs = ["Якко", "Вакко", "Дот"];

maniacs[0];
maniacs[1];
maniacs[2];

console.log(maniacs[maniacs.length - 1]); */

// Добавление элементов в массив

// Чтобы добавить элемент к концу массива, можно воспользоваться методом push. Введите .push после имени массива, а после в круглых скобках укажите элемент, который нужно добавить:

/* let animals = [];

animals.push("Кот");
animals.push("Пес");
animals.push("Лама");

console.log(animals); */

// Чтобы добавить элемент в начало массива, используйте метод .unshift(элемент):

/* let animals = ["Кот", "Пес", "Лама"];

animals.unshift("Мартышка");

console.log(animals);

animals.unshift("Белый медведь");

console.log(animals); */

// Удаление элементов массива

// Убрать из массива последний элемент можно, добавив к его имени .pop(). Метод pop делает сразу два дела: удаляет последний элемент из массива и возвращает этот элемент в виде значения:

/* let animals = ["Белый медведь", "Мартышка", "Кот", "Пес", "Лама"];

let lastAnimal = animals.pop();

animals.pop();

console.log(lastAnimal);

console.log(animals);

animals.unshift(lastAnimal);

console.log(animals); */

// Чтобы удалить из массива первый элемент, вернув его значение, используйте .shift():

/* let animals = ["Лама", "Белый медведь", "Мартышка", "Кот"];

let firstAnimal = animals.shift();

console.log(firstAnimal);

console.log(animals); */

// Методы unshift и shift добавляют и удаляют элементы с начала массива — так же как push и pop добавляют и удаляют элементы с конца.

// Объединение массивов

// Чтобы «склеить» два массива, создав таким образом новый массив, используйте команду firstArray. concat(otherArray). Метод concat создает массив, в котором элементы из firstArray будут расположены перед элементами из otherArray.

/* let furryAnimals = ["Альпака", "Кольцехвостый лемур", "Йети"];

let scalyAnimals = ["Удав", "Годзилла"];

let furryAndScalyAnimals = furryAnimals.concat(scalyAnimals);

console.log(furryAndScalyAnimals);

console.log(furryAnimals);

console.log(scalyAnimals); */

// Хоть команда firstArray.concat(otherArray) и возвращает массив, содержащий все элементы из firstArray и otherArray, сами эти массивы остаются прежними. Запросив содержимое furryAnimals и scalyAnimals, мы видим, что массивы не изменились.

// Объединение нескольких массивов

// С помощью concat можно объединить больше чем два массива. Для этого укажите дополнительные массивы в скобках, разделив их запятыми:

/* let furryAnimals = ["Альпака", "Кольцехвостый лемур", "Йети"];

let scalyAnimals = ["Удав", "Годзилла"];

let featheredAnimals = ["Ара", "Додо"];

let allAnimals = furryAnimals.concat(scalyAnimals, featheredAnimals);

console.log(allAnimals);

console.log(scalyAnimals);

console.log(featheredAnimals); */

// Поиск индекса элемента в массиве

// Чтобы выяснить, какой у определенного элемента индекс в массиве, используйте .indexOf("элемент").

/* let colors = ["красный", "зеленый", "синий"];

console.log(colors.indexOf("синий"));

console.log(colors.indexOf("зеленый")); */

// Превращаем массив в строку

// Воспользовавшись методом .join(), можно соединить все элементы массива в одну большую строку:

/* let boringAnimals = ["Мартышка", "Кот", "Рыба", "Ящерица"];

console.log(boringAnimals.join()); */

// Метод join возвращает строку, в которой через запятую перечислены все элементы массива boringAnimals. Но что если мы не хотим использовать в качестве разделителя запятую?

// Нам поможет метод .join ("разделитель"), который делает все то же самое, но вместо запятых ставит между элементами выбранный разделитель.

/* let boringAnimals = ["Мартышка", "Кот", "Рыба", "Ящерица"];

console.log(boringAnimals.join("-"));
console.log(boringAnimals.join("*"));
console.log(boringAnimals.join(" и ")); */

// Этот вариант join удобен, когда у вас есть массив, из которого нужно сделать строку. Предположим, у вас много средних имен и вы решили хранить их все в массиве вместе со своим личным именем и фамилией. И вдруг кому-то понадобилось ваше полное имя в виде строки. Тогда метод join с разделителем-пробелом преобразует все имена в искомую строку:

/* let myNames = ["Николас", "Эндрю", "Максвелл", "Морган"];

console.log(myNames.join(" ")); */

// Не будь метода join, пришлось бы соединять элементы вручную, что очень утомительно:

/* let myNames = ["Николас", "Эндрю", "Максвелл", "Морган"];

console.log(myNames[0] + " " + myNames[1] + " " + myNames[2] + " " + myNames[3]); */

// Кроме того, этот код сработает, только если у вас ровно два средних имени. Если же их три или одно, программу придется менять. А c join ничего менять не надо — этот метод соединит в строку все элементы массива независимо от его длины.

// Если же в массиве хранятся нестроковые значения, JavaScript преобразует их в строки перед тем, как соединить:

/* let ages = [11, 14, 79];

console.log(ages.join(" ")); */

// Построение массива с помощью push

/* let landmarks = [];

landmarks.push("Мой дом");
landmarks.push("Дорожка к дому");
landmarks.push("Мигающий фонарь");
landmarks.push("Протекающий гидрант");
landmarks.push("Пожарная станция");
landmarks.push("Приют для кошек");
landmarks.pzzzzzush("Школа");
landmarks.push("Дом подруги");

console.log(landmarks); */

// Движемся в обратном порядке с помощью pop

/* landmarks.pop();
landmarks.pop();
landmarks.pop();
landmarks.pop();
landmarks.pop();
landmarks.pop();
landmarks.pop();
landmarks.pop();

console.log(landmarks); */

// Случайный выбор

// Используя массивы, можно написать программу, которая выдает случайные варианты из заданного списка (наподобие «магического шара»). Однако сначала нужно разобраться, откуда нам брать случайные числа.

// Использование Math.random()

// Случайные числа можно генерировать с помощью специального метода Math.random(), который при каждом вызове возвращает случайное число от 0 до 1:

// console.log(Math.random());

// Важно помнить, что Math.random() всегда возвращает число меньше 1, то есть никогда не возвращает собственно 1.

// Если вам нужно число побольше, просто умножьте полученное из метода Math random() значение на подходящий коэффициент. Например, если нужно случайное число от 0 до 10, умножьте Math.random() на 10:

// console.log(Math.random() * 10);

// Округление с помощью Math.floor()

// И все же эти случайные значения нельзя использовать как индексы в массиве, поскольку индексы должны быть целыми числами, а не десятичными дробями. Чтобы исправить этот недостаток, нужен метод Math.floor(), округляющий число до ближайшего снизу целого значения:

// console.log(Math.floor(3.7463463));

// Давайте используем оба метода, чтобы получить случайный индекс. Нужно лишь умножить Math.random() на длину массива и затем округлить полученное число методом Math floor(). Например, если в массиве четыре элемента, это можно сделать так:

// console.log(Math.floor(Math.random() * 4));

// При каждом запуске этот код будет возвращать случайное число от 0 до 3 (включая 0 и 3). Поскольку Math.random() всегда возвращает значение меньше 1, Math.random() * 4 никогда не вернет 4 или большее число.

// Используя это случайное число как индекс, можно получить случайный элемент массива:

/* let randomWords = ["Взрыв", "Пещера", "Принцесса", "Карандаш"];

let randomIndex = Math.floor(Math.random() * 4);

console.log(randomWords[randomIndex]); */

// В сущности, можно сделать этот код короче, избавившись от переменной randomIndex:

/* let randomWords = ["Взрыв", "Пещера", "Принцесса", "Карандаш"];

console.log(randomWords[Math.floor(Math.random() * 4)]); */

// Программа случайного выбора вариантов

/* let phrases = [
    "Звучит неплохо",
    "Да, это определенно надо сделать",
    "Не думаю, что это хорошая идея",
    "Может, не сегодня?",
    "Компьютер говорит нет"
];

console.log(phrases[Math.floor(Math.random() * 5)]); */

//Генератор случайных дразнилок

/* let randomBodyParts = ["глаз", "нос", "череп"];
let randomAdjectives = ["вонючая", "унылая", "дурацкая"];
let randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];

let randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
let randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)]; 
let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

let randomInsult = "У тебя " + randomBodyPart + " словно " + randomAdjective + " " + randomWord + "!";

console.log(randomInsult); */