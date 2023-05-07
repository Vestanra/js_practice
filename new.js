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
      const {name, price} = newPotion;
      for (const potion of this.potions) {
        const value = Object.values(potion);
        if (value.includes(name)) {
          return `Error! Potion ${name} is already in your inventory!`;
        }
      };
      this.potions.push(newPotion);
    },
    removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i++) {
      const value = Object.values(this.potions[i]);
      if (value.includes(potionName)) {
        this.potions.splice(i, 1);
        return this.potions;
        }
    }
    return (`Potion ${potionName} is not in inventory!`);
    },


    updatePotionName(oldName, newName) {
      for (const potion of this.potions) {
        if (potion.name === oldName) {
            potion.name = newName;
            return;
        }
      }
      return console.log(`Potion ${oldName} is not in inventory!`);
  },
  }

  atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion');
  console.log(atTheOldToad.potions);