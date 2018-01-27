let capitalize = word => {
  firstCap = word[0].toUpperCase();
  return firstCap + word.slice(1, word.length);
};

const calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  divide: function(a, b) {
    return a / b;
  },

  multiply: function(a, b) {
    return a * b;
  }
};

module.exports = calculator;
