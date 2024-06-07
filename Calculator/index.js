document.getElementById("add").addEventListener("click", function () {
    calculate("add");
});

document.getElementById("subtract").addEventListener("click", function () {
    calculate("subtract");
});

document.getElementById("multiply").addEventListener("click", function () {
    calculate("multiply");
});

document.getElementById("divide").addEventListener("click", function () {
    calculate("divide");
});

function calculate(operation) {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
    } else {
        switch (operation) {
            case "add":
                result = num1 + num2;
                break;
            case "subtract":
                result = num1 - num2;
                break;
            case "multiply":
                result = num1 * num2;
                break;
            case "divide":
                if (num2 === 0) {
                    alert("Division by zero is not allowed.");
                } else {
                    result = num1 / num2;
                }
                break;
            default:
                alert("Invalid operation.");
        }

        document.getElementById("result").textContent = "Result: " + result;
    }
}