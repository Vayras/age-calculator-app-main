

const mainbutton = document.getElementById("mainbutton");

mainbutton.addEventListener("click", function() {
  const date = parseInt(document.getElementById("date").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);
  
  const result = calculateTimeSinceDate(date, month, year);
  
  const yearsElement = document.getElementById("years");
  const monthsElement = document.getElementById("months");
  const daysElement = document.getElementById("days");
  
  yearsElement.textContent = result.years;
  monthsElement.textContent = result.months;
  daysElement.textContent = result.days;
  yearsElement.classList.remove("animate-blink");
  monthsElement.classList.remove("animate-blink");
  daysElement.classList.remove("animate-blink");

});

function calculateTimeSinceDate(day, month, year) {
  const currentDate = new Date();
  const inputDate = new Date(year, month - 1, day);

  if (inputDate > currentDate) {
    return "Invalid date: Future date not allowed.";
  }

  if (day < 1 || day > 31 || (month === 2 && day > 28) || (month === 2 && isLeapYear(year) && day > 29) || month < 1 || month > 12 || year > 2023) {
    return "Invalid date: Please enter a valid day, month, and year.";
  }

  let yearsDiff = currentDate.getFullYear() - inputDate.getFullYear();
  const monthsDiff = currentDate.getMonth() - inputDate.getMonth();
  const daysDiff = Math.abs(currentDate.getDate() - inputDate.getDate());

  if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
    yearsDiff -= 1;
  }

  return {
    years: yearsDiff,
    months: monthsDiff >= 0 ? monthsDiff : (12 + monthsDiff),
    days: daysDiff,
  };
}


function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
