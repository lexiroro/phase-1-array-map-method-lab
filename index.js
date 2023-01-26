const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = tutorials.map(word => word.split(" "));
// const capitalizedFirst = word.charAt(0)
  

// console.log(titleCased)

function titleCased(arr) {
  return arr.map((word) => {
    const capitalizedFirst = word.charAt(0).toUpperCase();
    const rest = word.slice(1);
    const wordFinal = (capitalizedFirst+rest)
    return(wordFinal.split(" ").map((product)=> product.charAt(0).toUpperCase()+ product.slice(1)).join(' '))
  });
}

// function separateWord(capitalizeWords) {
// return capitalizeWords.map(word => word.split(" "));
// }

// [ 'Welcome', 'To', 'Coding', 'Beauty' ]
console.log(titleCased(tutorials));