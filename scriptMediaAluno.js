/*

 Solicitar nome do aluno e as 3 notas
 do bimestre calcular a media daquele aluno.

 a média positiva deverá ser maior q 6

 se o aluno passou, ok
 se não vish...

 */


 //Nome aluno 
 let student = prompt("Qual nome do(a) aluno(a)?: ")

 //notas
 let n1 = prompt("qual a primeira nota do aluno(a)?:")
 let n2 = prompt("qual a secunda nota do aluno(a)?:")
 let n3 = prompt("qual a terceira nota do aluno(a)?:")

 //média 
 let average = (Number(n1) + Number(n2) + Number(n3)) / 3

 let result = average > 6

 //duas casa apos virgula, collcoando no geral
 average = average.toFixed(2)

 if (result) {
    alert("Ai sim, " + student + " ,passou com media de, " + average + " ,marcha padrinho")
 } else {
    alert("Vish, " + student + ", Sua Media é de " + average + " e não passou, estude mais, ta moscando!?")
 }