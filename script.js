document.addEventListener("DOMContentLoaded", function () {
  const calculateButton = document.getElementById("calculateButton");
  const resultDiv = document.getElementById("result");

  calculateButton.addEventListener("click", function () {
    const dateInput = document.getElementById("dateInput").value;

    // Parse the input date using Moment.js
    const inputDate = moment(dateInput, "YYYY-MM-DD");

    // Subtract 120 days from the input date
    const newDate = inputDate.subtract(120, "days").format("MMMM Do YYYY");

    resultDiv.textContent = `120 days before ${dateInput} is ${newDate}.`;
  });
});
