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
if (
  days.includes("Monday") ||
  days.includes("Tuesday") ||
  days.includes("Wednesday") ||
  days.includes("Thursday") ||
  days.includes("Friday")
) {
  {
    alert("робочий день ");
  }
} else if (days.includes("Saturday") || days.includes("Sunday")) {
  {
    alert("вихідний");
  }
} else {
  alert("enter the day correctly please");
}

// 3

let season;
let monthNumber = Number(prompt("Enter the number of the months"));

switch (monthNumber) {
  case 1:
  case 2:
  case 12:
    season = "Winter";
    alert(`The season now is ${season}`);

    break;
  case 3:
  case 4:
  case 5:
    season = "Spring";
    alert(`The season now is ${season}`);

    break;

  case 6:
  case 7:
  case 8:
    season = "Summer";
    alert(`The season now is ${season}`);

    break;

  case 9:
  case 10:
  case 11:
    season = "Autumn";
    alert(`The season now is ${season}`);

    break;
  default:
    alert(" Enter the months number correctly!");
}
