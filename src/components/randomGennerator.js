exports.generate = (arr) => {
  let number = Math.ceil(Math.random() * 10);
  if (arr.indexOf(number) === -1 && number <= 10) {
    return number;
  } else {
    if (number <= 10) {
      localStorage.setItem("test1", number);
      return this.generate(arr);
    } else {
      localStorage.setItem("test2", number);
      return number - 10;
    }
  }
};
