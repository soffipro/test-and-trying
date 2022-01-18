const price = prompt('Please enter check number');
const tip = prompt('please enter tip percent');
const formatedPrice = Number.parseFloat(price);
const formatedTip = Number.parseFloat(tip);
const tipAmounts = Number((formatedPrice / 100 * formatedTip).toFixed(2));
const total = Number((formatedPrice + tipAmounts).toFixed(2));
const massage = `Check number: ${formatedPrice}\nTip:${formatedTip}%\nTip amounth:${tipAmounts}\nTotal sum to pay:${total}`;
alert(massage);

// const total = (formatedTip + formatedPrice);
// Check number: 200
// Tip: 15%
// Tip amount: 30
// Total sum to pay:  230