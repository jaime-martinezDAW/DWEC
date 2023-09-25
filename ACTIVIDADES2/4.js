let mes = prompt("dame el numero del mes")
let result = ""
switch (mes) {
    case "1":
    case "3":
    case "5":
    case "7":
    case "8":
    case "10":
    case "12":
        result = "es un mes de 31 dias";
        break;
    case "4":
    case "6":
    case "9":
    case "11":
        result = "es un mes de 30 dias";
        break;
    case "2":
        result = "es un mes de 28 y a veces de 29 dias";
        break;
}
alert(result)