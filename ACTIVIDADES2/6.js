let n1 = prompt("dame un numero")
let operador = prompt("dame un operador +, -, *, /")
let n2 = prompt("dame otro numero")
let result

if (operador == "+"){
    result = parseFloat(n1) + parseFloat(n2)
}
else if (operador == "-"){
    result = parseFloat(n1) - parseFloat(n2)
}
else if (operador == "*"){
    result = parseFloat(n1) * parseFloat(n2)
}
else if (operador == "/"){
    result = parseFloat(n1) / parseFloat(n2)
}
alert(result)