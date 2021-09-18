var word = prompt("Introduzca una palabra:");;
const strReversed = word.split("").reverse().join("");
console.log(strReversed === word ? "es palindromo" : "no es palindromo");