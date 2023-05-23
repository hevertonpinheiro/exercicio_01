let number1, number2, result, rest, equal

number1 = Number(prompt("Digite o primeiro número: "))
number2 = Number(prompt("Digite o segundo número: "))

alert(`A soma dos dois número é: ${number1 + number2}`)
alert(`A subtração dos dois número é: ${number1 - number2}`)
alert(`A multiplicação dos dois número é: ${number1 * number2}`)
alert(`A divisão dos dois número é: ${number1 / number2}`)
alert(`O resto da divisão dos dois número é: ${number1 % number2}`)

result = (number1 + number2)
rest = result % 2;
equal = number1 == number2;

if(rest == 0) {
    alert(`A soma dos dois números é par: ${result}`)
} else {
    alert(`A soma dos dois números é ímpar: ${result}`)
}

if(equal) {
    alert(`Os números inseridos são iguais`)
} else {
    alert(`Os números inseridos são diferentes`)
}