const obj = {
  average: function(Arrays) {
    let box = 0;
    Arrays.forEach(function(item, index, array) {
      total = box += item;

      average = Math.round(total / Arrays.length);
    });

    return "average:" + average + " ";
  },

  minimum: function(Arrays) {
    let i = Arrays[0];
    for (let value of Arrays) {
      if (value < i) {
        i = value;
      }
    }

    return "minimum:" + i + " ";
  },

  maximum: function(Arrays) {
    let i = Arrays[0];
    for (let value of Arrays) {
      if (value > i) {
        i = value;
      }
    }

    return "maximum:" + i + " ";
  },

  lengthy: function(Arrays) {
    let hMN = Arrays.length;

    return "length:" + hMN + " ";
  },
  Analyze: function(Arrays) {
    return (
      obj.average(Arrays) +
      obj.minimum(Arrays) +
      obj.maximum(Arrays) +
      obj.lengthy(Arrays)
    );
  }
};

obj.Analyze([5, 6, 7, 1, 6, 7, 9]);


module.exports = obj;