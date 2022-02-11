// Desafio 11
function generatePhoneNumber(inputPhoneNumber) {
  if (inputPhoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < inputPhoneNumber.length; i += 1) {
    let repeatCounter = 0;
    for (let j = 0; j < inputPhoneNumber.length; j += 1) {
      if (inputPhoneNumber[i] === inputPhoneNumber[j]) {
        repeatCounter += 1;
      }
      if (repeatCounter > 2 || inputPhoneNumber[i] < 0 || inputPhoneNumber[i] > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  let stringNumber = inputPhoneNumber.join('');
  return '(' + stringNumber.slice(0, 2) + ') ' + stringNumber.slice(2, 7) + '-' + stringNumber.slice(7);
}
// teste
// console.log(generatePhoneNumber( [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
// .
// ref sobre .substring() :
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/substring
// .
// ref sobre .join():
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let side1 = false;
  let side2 = false;
  let side3 = false;
  if (Math.abs(lineB - lineC) < lineA && lineA < lineB + lineC) {
    side1 = true;
  }
  if (Math.abs(lineA - lineC) < lineB && lineB < lineA + lineC) {
    side2 = true;
  }
  if (Math.abs(lineA - lineB) < lineC && lineC < lineA + lineB) {
    side3 = true;
  }
  if (side1 === true && side2 === true && side3 === true) {
    return true;
  }
  return false;
}
// conforme sugestão do enunciado, consultei a doc do Math.abs() em:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
// e também uma notação mais visual da Condicao de Existencia do Triangulo em:
// https://mundoeducacao.uol.com.br/matematica/condicao-existencia-um-triangulo.htm

// Desafio 13
function hydrate(inputOrder) {
  let orderQuant = inputOrder.replace(/[^0-9]+/g, '');
  console.log(orderQuant);
  let sum = 0;
  for (let i = 0; i < orderQuant.length ; i += 1) {
    sum += orderQuant[i] * 1;
    console.log('loop', i, ':', sum);
  }
  if (sum === 1) {
    return sum + ' copo de água';
  }
  return sum + ' copos de água';
}
// teste
// console.log(hydrate('9 cachaça, 2 cervejas e 8 copo de vinho'));
// Conforme sugerido, pesquisei "get all integers inside a string js" e cai no StakOverflow
// e na localizei o coment do Artem Belik, que propunha usar o .replace()
// que eu já havia utilizado no Encode/Decode, então resolvi testar aqui.
// Como as quantidades de bebidas seriam entre 1 e 9, uma simples soma dos algarismos
// bastaria para retornar a quantidade de águas.
// link:
// https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript/30160994
// Já pra verificar como aplicar o regEx, pesquisei ".replace() non-numeric characters"
// que me levou direto ao link do StackOverflow que tinha a expressão que eu precisava
// na pergunta
// link:
// https://stackoverflow.com/questions/2555059/javascript-regular-expressions-replace-non-numeric-characters
// Para a somatória, precisei converter os números em strings para
// numerais puros, então apenas multipliquei por 1 para forçar a troca
// de tipagem primitiva.

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
