
var text = "The best school in the world is Digital School";

var result = text.search(/Digital School/i);
document.getElementById("result2").innerHTML = result;

var result3 = text.replace(/Digital School/, "Hasan Prishtina");
document.getElementById("result3").innerHTML = result3;

var text = "abcdef";

var regex = new RegExp("abc");
document.getElementById("result4").innerHTML = regex.test(text);

var regex2 = /e+/gi;
document.getElementById("result5").innerHTML = "The best school in the world is Digital School".match(regex2);
