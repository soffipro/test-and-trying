// const price = prompt('Please enter check number');
// const tip = prompt('please enter tip percent');
// const formatedPrice = Number.parseFloat(price);
// const formatedTip = Number.parseFloat(tip);
// const tipAmounts = Number((formatedPrice / 100 * formatedTip).toFixed(2));
// const total = Number((formatedPrice + tipAmounts).toFixed(2));
// const massage = `Check number: ${formatedPrice}\nTip:${formatedTip}%\nTip amounth:${tipAmounts}\nTotal sum to pay:${total}`;
// alert(massage);

// const total = (formatedTip + formatedPrice);
// Check number: 200
// Tip: 15%
// Tip amount: 30
// Total sum to pay:  230


//----------- LETS GO-----------------------------

// const sofi = 1989;
// console.log(sofi)

// let sofi;
// console.log(sofi);

// ========= 3/41
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    if (this.potions.includes(newPotion)) {
      return `Error! Potion ${newPotion} is already in your inventory!`;
    }
    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    const potionIndex = this.potions.indexOf(potionName);

    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1, newName);
  },
  // Change code above this line
};