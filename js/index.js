// 1

let selectedDrink = prompt("Оберіть напій (Кава, Чай або Сік):");

switch (selectedDrink) {
  case "Кава":
    alert("Ви обрали каву. Смачного!");
    break;
  case "Чай":
    alert("Ви обрали чай. Насолоджуйтесь!");
    break;
  case "Сік":
    alert("Ви обрали сік. Освіжайтесь!");
    break;
  default:
    alert("Будь ласка, оберіть напій зі списку: Кава, Чай або Сік.");
}

// 2

let days = prompt(
  "Enter the day of the week, make sure to begin with capital letter!"
);

switch (days) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    alert("робочий день ");
    break;
  
  case "Saturday":
  case "Sunday":
    alert("вихідний");
    break;
  default:   alert("enter the day correctly please");
}



// 3

let monthNumber = Number(prompt("Enter the number of the month"));

switch (monthNumber) {
  case 1:
  case 2:
  case 12:
    alert(`The season now is Winter`);

    break;
  case 3:
  case 4:
  case 5:
    alert(`The season now is Spring`);

    break;

  case 6:
  case 7:
  case 8:
    alert(`The season now is Summer`);

    break;

  case 9:
  case 10:
  case 11:
    alert(`The season now is Autumn`);
    break;
  default:
    alert(" Enter the months number correctly!");
}

// 4

let colour = prompt("Enter any colour of red, green, or yellow");

switch (colour) {
  case "green":
    alert("You can go");

    break;

  case "yellow":
    alert("You need to wait");

    break;

  case "red":
    alert("You need to stop");

    break;
  default:
    alert("Enter your colour correctly!");
}

// 5

const number1 = Number(prompt("Enter a number "));
const number2 = Number(prompt("Enter a number "));
let operator = prompt("Can be +, -, *, or /");

let result;

switch (operator) {
  case "+":
    result = number1 + number2;
    alert(`Result: ${number1} ${operator} ${number2} = ${result}`);
    break;
  case "-":
    result = number1 - number2;
    alert(`Result: ${number1} ${operator} ${number2} = ${result}`);
    break;
  case "*":
    result = number1 * number2;
    alert(`Result: ${number1} ${operator} ${number2} = ${result}`);
    break;
  case "/":
    if (number2 !== 0) {
      result = number1 / number2;
      alert(`Result: ${number1} ${operator} ${number2} = ${result}`);
    } else {
      alert("Warning: Division by zero is not allowed!");
    }
    break;
  default:
    alert("Unknown operator. Please use +, -, *, or /");
}
