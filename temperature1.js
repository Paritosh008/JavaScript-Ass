//Write a JavaScript program to convert temperatures to and from Celsius,

function CelsiusTemp(fahrenheitvalue){
    var Celsius = ((fahrenheitvalue-32)*5/9)
    return(`${fahrenheitvalue}°F is ${Celsius}°C`)
}

function Fahrenheitvalue(CelsiusTemp){
    var Fahrenheit = ((CelsiusTemp*9/5)+32)
    return(`${CelsiusTemp}°C is ${Fahrenheit}°F`)
}

var result = Fahrenheitvalue(60)
console.log(result)
var result = CelsiusTemp(45)
console.log(result)
