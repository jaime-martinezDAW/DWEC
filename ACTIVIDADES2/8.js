
let result = "Los numeros pares entre el 25 y 1 son: "

for(i = 1; i <= 25; i++){
    if( i % 2 == 0)
    result += i + ", "
}
alert(result)