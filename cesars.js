let cesar = message => {
  var blank = "";

  for (var l in message) {
    msgNum = message[l].charCodeAt() - 1;

    if (message[l] == '!'){
      
        msgNum = message[l].charCodeAt();
     }


    msgLetters = String.fromCharCode(msgNum)
      .replace("\u001f", " ")
      .replace("`", "z")
      .replace(">", "?")
      .replace("-", ".")
      .replace("+", ",")
      .replace("&", "'");

    console.log(msgLetters);
    decodeMsg = blank += msgLetters;
  }

  return decodeMsg;
};

module.exports = cesar;
