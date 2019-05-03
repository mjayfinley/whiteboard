//write a function that counts the number of vowels in a given string
const vowels = string => {
  let count = 0;
  const choices = "aeiou"; // or ['a', 'e', 'i', 'o', 'u']

  for (let character of string.toLowerCase())
    if (choices.includes(character)) count++;

  return count;
};

//given a phrase, capitalize the first character in each word
const capitalize = phrase => {
  const words = [];

  for (let word of phrase.split(" "))
    words.push(word[0].toUpperCase() + word.slice(1));

  return words.join(" ");
};

//Implement a function that returns the fibonacci number at a given index.

function fibonacci(num) {
  var a = 1,
    b = 0,
    temp;

  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}
