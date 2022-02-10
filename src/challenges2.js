// Desafio 11
function generatePhoneNumber(inputPhoneNumber) {
  let saida ='';
  
  // inputPhoneNumber != 11 -> 'Array com tamanho incorreto.'
  function validateLength () {
    if (inputPhoneNumber.length == 11) {
      return true;
    } else {
      return false;
    };
  };
  
  // se numero x < 0 || > 9, -> 'não é possível gerar um número de telefone com esses valores'
  function validateAlgarisms () {
    for (let n1 in inputPhoneNumber) {
      if (inputPhoneNumber[n1] < 0 || inputPhoneNumber[n1] > 9) {
       return false;
      } else {
        return true;
      };
  };

  // se x repetir >= 3 -> 'não é possível gerar um número de telefone com esses valores'
  function validateRepetition () {
    let repeatCounter = 0;
    for (let i = 0 ; i < inputPhoneNumber.length-1 ; i +=1 ) {
    //comparador
      for (let j = 1 ; j < inputPhoneNumber.length ; j +=1 ){
      //comparado  
        if (inputPhoneNumber[i] === inputPhoneNumber[j]) {
          repeatCounter += 1;
        };
      };
    };
    if (repeatCounter < 3) {
      return true;
    } else {
      return false;
    };
  };
  
  //criar subStrings se  validateLength() validateAlgarisms() validateRepetition();
  //'(' + inputPhoneNumber.substring(0,2) + ') ' + inputPhoneNumber.substring(2,7) + ' - ' + inputPhoneNumber.substring(7);
validateLength();
if (validateLength() === false) {
  saida = 'Array com tamanho incorreto.';
} else {
  validateAlgarisms();
  if (validateAlgarisms() === false) {
    saida = 'não é possível gerar um número de telefone com esses valores';
  } else {
    validateRepetition();
    if (validateRepetition === false) {
      saida = 'não é possível gerar um número de telefone com esses valores';
    };
  };
  // saida = '(' + inputPhoneNumber.slice(0,2) + ') ' + inputPhoneNumber.slice(2,5) + ' - ' + inputPhoneNumber.slice(7);
  saida = '(' + inputPhoneNumber.substring(0,2) + ') ' + inputPhoneNumber.substring(2,7) + ' - ' + inputPhoneNumber.substring(7);
  // saida = '(' + inputPhoneNumber.substr(0,2) + ') ' + inputPhoneNumber.substr(2,5) + ' - ' + inputPhoneNumber.substr(7,4);
};
  return saida;
};
//teste
// console.log(generatePhoneNumber( [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
// .
// ref sobre .substring() :
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/substring
//.
//pela falha no 'npm test' testei com '.substring()', '.substr()' e com '.slice()' mas o erro na ultima lina do 'module.exports()' persistiu.


// Desafio 12
function triangleCheck() {
  // seu código aqui
};

// Desafio 13
function hydrate() {
  // seu código aqui
};

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};