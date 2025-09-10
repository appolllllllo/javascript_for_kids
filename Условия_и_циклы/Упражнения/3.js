// Упражнение #3

// Переведите англоязычный текст на «хакерский язык» (h4ck3r sp34k)! 

let input = "javascript is awesome";
let output = "";

for (let i = 0; i < input.length; i++) {
    let char = input[i];

    if (char === "a") {
        output += "4";
    } else if (char === "e") {
        output += "3";
    } else if (char === "i") {
        output += "1";
    } else if (char === "o") {
        output += "0";
    } else {
        output += char;
    }
}

console.log(output);