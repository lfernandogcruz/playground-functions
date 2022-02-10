// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  };
};
// test
//console.log(compareTrue(false,false));


// Desafio 2
function calcArea(base, height) {
  let triangleArea = (base * height) / 2;
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
  let reverseEdges = arrayInput[arrayInput.length - 1] + ", " + arrayInput[0];
  return reverseEdges;
};
// test
//console.log(concatName(['captain', 'my', 'captain']));


// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points
};
// test
//console.log(footballPoints(0,0));


// Desafio 6
function highestCount(numbers) {
  let bigBoyPants = numbers[0];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > bigBoyPants) {
      bigBoyPants = numbers[i];
    };
  };
  let counter = 0;
  for (let j = 0; j < numbers.length; j += 1) {
    if (bigBoyPants == numbers[j]) {
      counter += 1;
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
  if (cat1 > mouse) {
    distCat1 = cat1 - mouse;
  } else {
    distCat1 = mouse - cat1;
  };
  if (cat2 > mouse) {
    distCat2 = cat2 - mouse;
  } else {
    distCat2 = mouse - cat2;
  };
  if (distCat1 < distCat2) {
    return 'cat1';
  } else if (distCat2 < distCat1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  };
};

// teste
// console.log(catAndMouse(0,6,-6));


// Desafio 8
function fizzBuzz(arrayNumbers) {
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (arrayNumbers[i] % 5 == 0 && arrayNumbers[i] % 3 == 0) {
      arrayNumbers.splice(i, 1, 'fizzBuzz');
    } else if (arrayNumbers[i] % 5 == 0) {
      arrayNumbers.splice(i, 1, 'buzz');
    } else if (arrayNumbers[i] % 3 == 0) {
      arrayNumbers.splice(i, 1, 'fizz');
    } else {
      arrayNumbers.splice(i, 1, 'bug!');
    };
  };
  return arrayNumbers;
};
//teste
//console.log(fizzBuzz([2, 15, 7, 9, 45]));
// link ref .splice() consultado:
//https://ricardo-reis.medium.com/splice-969723f47d26#:~:text=Substituindo%20elementos%20usando%20o%20splice,existentes%20em%20um%20array%20simultaneamente.


// Desafio 9
function encode(inputString) {
  for (let j = 0; j < inputString.length; j += 1) {
    inputString = inputString.replace('a', 1);
    inputString = inputString.replace('e', 2);
    inputString = inputString.replace('i', 3);
    inputString = inputString.replace('o', 4);
    inputString = inputString.replace('u', 5);
  };
  return inputString;
};
function decode(inputString) {
  for (let k = 0; k < inputString.length; k += 1) {
    inputString = inputString.replace(1, 'a');
    inputString = inputString.replace(2, 'e');
    inputString = inputString.replace(3, 'i');
    inputString = inputString.replace(4, 'o');
    inputString = inputString.replace(5, 'u');
  };
  return inputString;
};
// teste
// console.log(encode('hi there aeiou 12345'));
// console.log(encode('h3 th2r2 12345 aeiou'));
// console.log(decode('hi there aeiou 12345'));
// console.log(decode('h3 th2r2 12345 aeiou'));
// link ref .replace() consultado:
//https://www.devmedia.com.br/javascript-replace-substituindo-valores-em-uma-string/39176


// Desafio 10
function techList(inputTech,inputName) {
  if ( inputTech.length < 1 ) {
    return 'Vazio!';
  } else {
    let objectsArray = [];
    for (let i in inputTech) {
      objectsArray.push({tech: inputTech[i],name: inputName});
    };
    return objectsArray.sort( (a, b) => {
      if (a.tech > b.tech ){
        return 1;
      } else if (a.tech < b.tech) {
        return -1;
      } else {
        return 0;
      }
    });
  };
};
//  teste
// console.log('final', techList(['Bigode','Zipper', 'Abracadabra', 'Sopa'],'Luis'));
// .
// referencias consultadas:
// - documentaçao:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// - ex de aplicacao:
// https://www.javascripttutorial.net/array/javascript-sort-an-array-of-objects/
// coment:
// testei diversas formas de aplicar a 'arrow function' pra reduzir a sub funcao de ordenar, mas sem sucesso (ainda! Vou pegar a manha disso logo logo).
// voltei ao pattern da documentacao que atribui momentaneamente um "valor" aos "objetos comparados" de acordo com a relacao numerica de seus caracteres e, entao, os ordena na funcao superior, que é o '.sort()'.


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
