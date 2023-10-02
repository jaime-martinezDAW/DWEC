let nombre = prompt("introduce su nombre")
let apellidos = prompt("introduce sus apellidos")
let salario = Number.parseFloat(prompt("Introduce tu salario"))
let edad = Number(prompt("Introduce tu edad"))

if(1000 <= salario <= 2000){
    if(edad > 45){
        salario = salario * 1.03
    }
    else{
        salario = salario * 1.10
    }
}
else if(salario < 1000){
    if(edad < 30){
        salario = 1100
    }
    else if(30 <= edad <= 45){
        salario = salario * 1.05
    }
    else{
        salario = salario * 1.15
    }
}
alert("Nombre: " + nombre + " " + apellidos + "\nSalario: " + salario.toFixed(2) + "€" + "\nEdad: " + edad)