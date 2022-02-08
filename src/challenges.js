// Desafio 1
function compareTrue(value1,value2) {
  if (value1 === true && value2 === true){
    return true;
  } else {
    return false;
  };
};
// test
//console.log(compareTrue(false,false));


// Desafio 2
function calcArea(base,height) {
  let triangleArea = (base*height)/2;
  return triangleArea;
};
// test
//console.log(calcArea(2,5));


// Desafio 3
function splitSentence(originalString) {
  let brokenString = originalString.split(" ");
  return brokenString;
};
// test
// console.log(splitSentence('go Trybe iufiuug fiaehfi faejibfiae ifaeif iafaufhoaeb iajggfoieaj uhewfbv grehe'));
// link no StackOverflow consultado:
// https://stackoverflow.com/questions/18473326/javascript-break-sentence-by-words


// Desafio 4
function concatName(arrayInput) {
  let reverseEdges = [arrayInput[arrayInput.length-1] , arrayInput[0]];
  return reverseEdges;
};
// test
//console.log(concatName(['captain', 'my', 'captain']));


// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
