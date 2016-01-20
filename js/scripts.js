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

var functionRouter = function(str) {
  for (var i = 0; i < str.length; i++ ) {
    if (str.charCodeAt(i) < 97 || str.charCodeAt(i) > 122) {
      return "please enter a real word";
    }
  }
};

var caseChanger = function(str) {
  return str.toLowerCase();
};



// var a = str.indexOf('a');
// var e = str.indexOf('e');
// var i = str.indexOf('i');
// var o = str.indexOf('o');
// var u = str.indexOf('u');
// var y = str.indexOf('y');
// var vowelArray = [a, e, i, o , u, y]
