//given a word - write a function to test if that word is a palindrome or not
function palindrome(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[word.length - i - 1]) {
      console.log(word + "Is not a palindrome");
    } else {
      console.log(word + "is a palindrome");
    }
  }
}

let word = "asdiofpjsoij";

palindrome(word);

//given a number - write a function to return Buzz if that number is divisible by 5, Fizz if the number is divisible by 3, or FizzBuzz if the number is divisible by both 3 and 5
function FizzBuzz(num) {
  if (num % 3 == 0 && num % 5 == 0) {
    console.log("FizzBuzz");
  } else if (num % 3 == 0) {
    console.log("Fizz");
  } else if (num % 5 == 0) {
    console.log("Buzz");
  }
}

FizzBuzz(9);

//given an array of items - write a function to test if a given item is contained within that array
function arrayCheck(array, word) {
  let status = "False";
  for (let i = 0; i < array.length; i++) {
    if (array[i] == word) {
      status = "True";
      break;
    }
  }
  console.log(status);
}

let array = ["John", "Mary", "Alex", "Steve"];
let word = "John";

arrayCheck(array, word);
