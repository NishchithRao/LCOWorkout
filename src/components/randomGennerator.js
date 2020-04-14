exports.generate = (arr) => {
  let number = Math.ceil(Math.random() * 10);
  if (arr.indexOf(number) === -1) {
    return number;
  } else {
    if (number <= 10) {
      return number + Math.floor(Math.random() * 10) - 1;
    } else {
      return number + Math.floor(Math.random() * 10);
    }
  }
};
