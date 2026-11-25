
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

var text = "hey hi hiiiiiiiiii"
var rege4 = /hi?/g:
document.getElementById("result6").innerHTML = text.match(rege4)

var text = "heyi hi hiiiiiiiiii"
var regex3= /i{3}/g:
document.getElementById("result7").innerHTML = text.match(regex3)

var text = "heyi hi hiiiiiiiiii"
var regex5 = /i{1,10}/g:
document.getElementById("result8").innerHTML = text.match(regex5)

var text = "heyiello hiello hiiiiiiiiiiello"
var regex6 = /i{ello$}/g:
document.getElementById("result9").innerHTML = text.match(regex6)

var text = "hi hi hiiiiiiiiii"
var regex7 = /i{^hi}/g:
document.getElementById("result8").innerHTML = text.match(regex7)