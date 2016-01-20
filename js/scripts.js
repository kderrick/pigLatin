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
      alert("please enter a real word");
    } else {
      return str;
    }
  }
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
  var lowered = str.toLowerCase();
  var filtered = wordFilter(lowered);
  if(filtered[0] === "a" || filtered[0] === "e" || filtered[0] === "i" || filtered[0] === "o" || filtered[0] === "u") {
    return vowelHandler(filtered);
  } else if (filtered[0] === "q" ) {
    return qHandler(filtered);
  } else if (filtered[0] === "y") {
    return yHandler(filtered);
  } else if (filtered[1] === "q") {
    return squHandler(filtered);
  } else if (filtered[1] === "a" || filtered[1] === "e" || filtered[1] === "i" || filtered[1] === "o" || filtered[1] === "u") {
    return singleConsonantHandler(filtered);
  }else if (filtered[2] === "a" || filtered[2] === "e" || filtered[2] === "i" || filtered[2] === "o" || filtered[2] === "u") {
    return twoConsonantHandler(filtered);
  } else if (filtered[3] === "a" || filtered[3] === "e" || filtered[3] === "i" || filtered[3] === "o" || filtered[3] === "u") {
    return threeConsonantHandler(filtered);
  }

};
var translated = " "

$(function() {
  debugger;
  $('form#pig-latin').submit(function(event){
    var untranslated = $('input#english').val();
    translated = functionRouter(untranslated);
    $('div#result').show();
    $('.output').text(translated);



    event.preventDefault();
  });
});
