export const adjustAndRound = (number : number) => {
  if (number > 0) {
    return Math.round(number * 100)
  } else {
    return Math.round(number * -100)
  }
}