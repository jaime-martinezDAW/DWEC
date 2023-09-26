let n1 = prompt("introduce un número para adivinarlo")
let n2 = 0
let i = 0

while(n2 != n1){
    n2 = prompt("Adivina el número")
    if(n2 - n1 < 0){
        alert("sube sube")
    }
    if(n1 - n2 < 0){
        alert("baja baja")
    }
    i++
}
if (i == 1){
    alert("Correcto a la primera")
}
else{
    alert("Correcto, solo has necesitado " + i + " intentos.")
}
