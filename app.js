var colors = require('colors');

// **** Change this to update info
// **** preferOdd usually be the lowest odd in win/draw/loss
// **** warranty usually is the 2nd lowest odd in win/draw/loss, this bet for warranty your return if there is a upset.

var bet = 50
var preferOdd = 2.62
var warrantyOdd = 3.1

const getPreferReturn = () => {
  return bet * (preferOdd - 1)
}

const getWarrantyBet = () => {
  return bet/warrantyOdd
}

const getEqualWinBet = () => {
  return (warrantyOdd * bet)/(preferOdd + warrantyOdd)
}

const getReturnEqualwin = ( betForPreferOdd ) => {
  let betForWarrantyOdd = bet - betForPreferOdd
  return betForPreferOdd * (preferOdd - 1) - betForWarrantyOdd
}

const getWarrantyBetOnEqualwin = () => {
  return (bet - getEqualWinBet())
}

console.log("-------------------------".red)
console.log("Bet %s on prefer odd ( %s ) will win: %s return: %s", bet.toString().yellow, `1 : ${preferOdd}`.red,getPreferReturn().toFixed(2).green, (bet*preferOdd).toString().cyan)
console.log("Bet on warranty odd ( %s ) should >", `1 : ${warrantyOdd}`.red, getWarrantyBet().toFixed(2).yellow )
console.log("You will win if prefer odd win ", (getPreferReturn() - getWarrantyBet()).toFixed(2).green)
console.log("-------------------------".red)
console.log("Equal win on prefer odd ( %s ): %s", `1 : ${preferOdd}`.red, getEqualWinBet().toFixed(2).yellow)
console.log("Or, bet on warrantyOdd ( %s ): %s", `1 : ${warrantyOdd}`.red, getWarrantyBetOnEqualwin().toFixed(2).toString().yellow)
console.log("This will get equal win %s", getReturnEqualwin(getEqualWinBet()).toFixed(2).green)
console.log("-------------------------".red)
