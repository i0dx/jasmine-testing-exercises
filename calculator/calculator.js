window.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("calc-form");
    if (form) {
        setupIntialValues();
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            update();
        });
    }
});

function getCurrentUIValues() {
    return {
        amount: +(document.getElementById("loan-amount").value),
        years: +(document.getElementById("loan-years").value),
        rate: +(document.getElementById("loan-rate").value),
    }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
    const initialValues = {
        amount: document.getElementById("loan-amount").value = 12000,
        years: document.getElementById("loan-years").value = 10,
        rate: document.getElementById("loan-rate").value = 4.5,
    }
    update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
    const newValues = getCurrentUIValues();
    const userPayment = calculateMonthlyPayment(newValues);
    updateMonthly(userPayment);

}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
    console.log("calculating!")
    const principle = values.amount;
    const interest = ((values.rate / 100) / 12);
    const payment = (values.years * 12);
    const monthlyPayment = ((principle * interest) / (1 - (1 + interest) ** -payment));
    console.log(monthlyPayment);
    //round to two decimal places
    return (`${monthlyPayment.toFixed(2)}`);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
    console.log(monthly);
    document.querySelector("span").innerText = "$" + monthly;
}