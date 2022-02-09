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
  let reverseEdges = arrayInput[arrayInput.length-1] + ", " + arrayInput[0];
  return reverseEdges;
};
// test
//console.log(concatName(['captain', 'my', 'captain']));


// Desafio 5
function footballPoints(wins,ties) {
  let points = (wins*3)+ties;
  return points
};
// test
//console.log(footballPoints(0,0));


// Desafio 6
function highestCount(numbers) {
  let bigBoyPants = numbers[0];
  for (let i = 0; i<numbers.length ; i +=1) {
    if (numbers[i] > bigBoyPants) {
      bigBoyPants = numbers[i];
    };
  };
  let counter =0;
  for (let j = 0; j < numbers.length; j+=1) {
    if (bigBoyPants == numbers[j]) {
      counter +=1;
    };
  };
  return counter;
};
// test
// console.log(highestCount([0, 0, 0]));


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = 0;
  let distCat2 = 0;
  if (cat1 > mouse){
    distCat1 = cat1-mouse;
  } else {
    distCat1 = mouse-cat1;
  };
  if (cat2 > mouse){
    distCat2 = cat2-mouse;
  } else {
    distCat2 = mouse-cat2;
  };
  if (distCat1 < distCat2) {
    return 'cat1';
  } else if (distCat2 < distCat1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
};

// teste
// console.log(catAndMouse(0,6,-6));


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
