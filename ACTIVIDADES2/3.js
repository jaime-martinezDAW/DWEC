let hermanos = prompt("dime cuantos hermanos tienes")
let cantidad = prompt("cantidad")


if (hermanos >= 3){
    alert(cantidad * 0.85)
}
 else if (hermanos > 0){
    alert(cantidad * 0.95)
 }   
 else{
    alert(cantidad)
 }