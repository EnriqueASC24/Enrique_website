function calculate() {
    // Retrieve the values entered by the user
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var num3 = parseFloat(document.getElementById('num3').value);
    var num4 = parseFloat(document.getElementById('num4').value);
    var num5 = parseFloat(document.getElementById('num5').value);
    // Perform the calculation (example: addition)

    if (num3 > 0){
        var result1 = (((12 * num4) * num3) + ((365 * num4) * (num5 * num1)));
        var result2 = (((12 * num4) * num3) + ((365 * num4) * (num5 * num2)));
    }else{
        var result1 = ((365 * num4) * (num5 * num1));
        var result2 = ((365 * num4) * (num5 * num2));
    }
    

    // Display the result
    document.getElementById('result').textContent = 'Result: ' + result1 + ' - ' + result2;
}