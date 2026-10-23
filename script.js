let numero = "50";
let numeroReal = 50;
console.log(typeof numero, typeof numeroReal);
console.log(numero + 5);
console.log(numeroReal + 5);

let idade = 17;
let status = idade >= 18 ? "Maior de idade" : "Menor de idade";

for (let i = 1; i <= 10; i++) {
  console.log(8 * i);
}

let lista = ['Banana', 'Maçã'];
lista.unshift('Uva');
lista.pop();
lista.push('Melão');

const somar = (a, b) => a + b;

let alunos = [{ nome: "Ana", nota: 8 }, { nome: "Bia", nota: 4 }];
let aprovados = alunos.filter(aluno => aluno.nota >= 6);

function calcular() {
  const valor1 = Number(document.getElementById('valor1').value);
  const valor2 = Number(document.getElementById('valor2').value);
  document.getElementById('resultado').textContent = valor1 + valor2;
}

function dividir(valor1, valor2) {
  if (valor2 === 0) {
    alert("Não é possível dividir por zero!");
    return;
  }
  return valor1 / valor2;
}

document.querySelectorAll('.paragrafo').forEach(p => p.style.color = "blue");

document.getElementById('btnSoma').addEventListener('click', calcular);
document.getElementById('btnDivisao').addEventListener('click', () => {
  const valor1 = Number(document.getElementById('valor1').value);
  const valor2 = Number(document.getElementById('valor2').value);
  const resultado = dividir(valor1, valor2);
  if (resultado !== undefined) {
    document.getElementById('resultado').textContent = resultado;
  }
});
