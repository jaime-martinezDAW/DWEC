let n = prompt("dame un numero")

let par = " es par"
let impar = " es impar"
let multi3 = ", es multiplo de 3"
let multi5 = ", es multiplo de 5"
let result = "El numero " + n

if (n % 2 != 0){
    result += impar
}
else{
    result += par
}
if (n % 3 == 0){
    result += multi3
}
if (n % 5 == 0){
    result += multi5
}

alert(result)

