// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a,b) {
   if(a>b) {
    return a;
   }
    else if(a<b) {
    return b;
    }
    else if(a=b) {
    return a & b;

    }
   
    
    
}

maxOfTwoNumbers(4,6)




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    var longestWord="";
    for (let i=0; i<words.length; i++) 
        if(words[i].length<longestWord.length){
            longestWord =words[i]
        }
        return longestWord;
           
            
     }
console.log(findLongestWord(words));





// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let total=0;
    for(let i=0; i<numbers.length; i++ ) {
        total =numbers[i]
    }
    return  total;
}
console.log(sumNumbers(numbers))




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    if(numbers2===0) {
        return null;
    }
    
    let sum = 0;
    
 for (let i = 0; i < numbers2.length; i++) {
        sum += numbers2[i];
    }
    return sum / numbers2.length;
}
 
const average = averageNumbers(numbers2);
console.log(average);







// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];


function doesWordExist(wordsArray, existingWord) { 
  if (wordsArray.length === 0) {
        return null;
  }
 
  for (let i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i] === existingWord) {
            return true; 
        }
    }
    
    return false; 
}

const existingWord = "machine"
const exists = doesWordExist(words2, existingWord);
console.log(`Does the word "${existingWord}" exist?`, exists);

const emptyArray2 = [];
const existsInEmpty2 = doesWordExist(emptyArray, "");
console.log(`Does the word "" exist?`, existsInEmpty);