// Desafio 11
function generatePhoneNumber(inputPhoneNumber) {
  if (inputPhoneNumber.length != 11) {
    return 'Array com tamanho incorreto.';
  };
  for (let i = 0; i < inputPhoneNumber.length ; i += 1) {
    let repeatCounter = 0;
    for (let j = 0; j < inputPhoneNumber.length; j += 1) {
      if (inputPhoneNumber[i] === inputPhoneNumber[j]) {
        repeatCounter += 1;
      };
      if (repeatCounter > 2 || inputPhoneNumber[i] < 0 || inputPhoneNumber[i] > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      };
    };
  };
  let stringNumber = inputPhoneNumber.join('');
  return '(' + stringNumber.slice(0, 2) + ') ' + stringNumber.slice(2, 7) + '-' + stringNumber.slice(7);
};
//teste
// console.log(generatePhoneNumber( [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
// .
// ref sobre .substring() :
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/substring
//.
// ref sobre .join():
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join



// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // lado1 < lado2 + lado3
  // && 
  // lado1 > Math.abs(lado2 - lado3)
  // return true/false

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