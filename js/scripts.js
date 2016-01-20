var vowelHandler = function(str) {
  return str + "ay";
}

var singleConsonantHandler = function (str) {
  var startConsonant = str.slice(0,1);
  var end = str.slice(1, str.length);
  return end + startConsonant + "ay";
}

var twoConsonantHandler = function(str) {
  var startConsonant = str.slice(0,2);
  var end = str.slice(2, str.length);
  return end + startConsonant + "ay";
}

var threeConsonantHandler = function(str) {
  var startConsonant = str.slice(0,3);
  var end = str.slice(3, str.length);
  return end + startConsonant + "ay";
}

var wordFilter = function(str) {
  for (var i = 0; i < str.length; i++ ) {
    if (str.charCodeAt(i) < 97 || str.charCodeAt(i) > 122) {
      return "please enter a real word";
    }
  }
};

var caseChanger = function(str) {
  return str.toLowerCase();
};

var qHandler = function(str) {
  var startConsonant = str.slice(0,2);
  var end = str.slice(2, str.length);
  return end + startConsonant + "ay";
}

var squHandler = function(str) {
  var startConsonant = str.slice(0,3);
  var end = str.slice(3, str.length);
  return end + startConsonant + "ay";
}

var yHandler = function (str) {
  var startConsonant = str.slice(0,1);
  var end = str.slice(1, str.length);
  return end + startConsonant + "ay";
}

var functionRouter = function(str) {
  if(str[0] === "a" || str[0] === "e" || str[0] === "i" || str[0] === "o" || str[0] === "u") {
  return vowelHandler(str);
} else if (str[0] === "q" ) {
  return qHandler(str);
} else if (str[0] === "y") {
  return yHandler(str);
} else if (str[1] === "q") {
  return squHandler(str);
}


};







// var a = str.indexOf('a');
// var e = str.indexOf('e');
// var i = str.indexOf('i');
// var o = str.indexOf('o');
// var u = str.indexOf('u');
// var y = str.indexOf('y');
// var vowelArray = [a, e, i, o , u, y]
