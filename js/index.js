// 1

const drinks = "Чай";

switch (drinks) {
  case "Чай":
    console.log("Ви обрали чай. Смачного!");
    break;
  case "Кава":
    console.log("Ви обрали каву. Смачного!");
    break;
  case "Сік":
    console.log("Ви обрали cік. Смачного!");
    break;
  default:
    console.log("Будь ласка, оберіть напій зі списку.");
}

// 2

let days = prompt(
  "Enter the day of the week, make sure to begin with capital letter"
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
