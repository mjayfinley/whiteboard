//function to get a random number between two numbers

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + 1);
}

//from unsorted array, check whether there are any two numbers that will sum up to a given number

// [6,4,3,2,1,7], 9
// [6,4,3,2,1,7], 2

function sumFinder(arr, sum) {
  var len = arr.length;

  for (var i = 0; i < len - 1; i++) {
    for (var j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] == sum) {
        return true;
      }
    }
  }

  return false;
}


//create a function that filters through an array for an item and returns a the same array without the item

function filterArray(arr, x) {
   arr = arr.filter(item) {
        return item != x
    }
}
