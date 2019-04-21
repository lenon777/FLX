// your code goes here
class User {
  constructor(name, orderTotalPrice = 0, weekendDiscount = 0, nightDiscount = 0, bonus = 0) {
    this.name = name,
      this.orderTotalPrice = orderTotalPrice,
      this.weekendDiscount = weekendDiscount,
      this.nightDiscount = nightDiscount,
      this.bonus = bonus
  }
  makeOrder() {
    let finalPrice = this.orderTotalPrice - this.weekendDiscount - this.nightDiscount - this.bonus;

    return `Price after discount and including bonuses is ${finalPrice}`;

  }
}
let user = new User('Petro', 1000, 300, 200);

const getDiscount = user => {
  let currentDate = new Date();
  if (currentDate.getDay() > 0 && currentDate.getDay() < 6) {
    user.weekendDiscount = 0;
  }
  if (currentDate.getHours() !== 23 && currentDate.getHours() > 5) {
    user.nightDiscount = 0;
  }
}
getDiscount(user);

const setBonus = user => {
  let bonus = Math.floor(user.orderTotalPrice / 100);
  bonus *= 5;
  user.orderTotalPrice -= bonus;

}
setBonus(user);

console.log(user.makeOrder());


