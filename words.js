let capitalize = word => {
    firstCap = word[0].toUpperCase();
    return firstCap + word.slice(1, word.length);
  };

 
  
  module.exports = capitalize;