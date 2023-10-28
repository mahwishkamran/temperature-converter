function ConvertCelsiusToFahrenheit(){
// get the value entered by the user
var celsius = parseFloat(document.getElementById('celsiusinput').value);
// check if the input is valid number
 if (!isNaN(celsius)){
// Convert Celsius To Fahrenheit 
var Fahrenheit = (celsius * 9/5) + 32
// display the result
document.getElementById('reslut').innerHTML = celsius + "degrees celsius is" + Fahrenheit.toFixed(2) +"degrees fahrenheit.";
} else {
 // display an error message if the input is not valid number
 document.getElementById
 ('result').innerHTML = "Please enter a valid number for celsius."   
}

}  