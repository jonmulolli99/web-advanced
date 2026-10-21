// var button = document.getElementById("btn1")


// button1.onclick=function(){
//     alert("Hello")
// }
// //var button2=document.querySelector('button')
// ///button2.onclick=function(){
//    // alert('hello111')
// //}

// //button2.addEventListener("click", function())


// var button2=document.getElementById('btn2')
// var button3=document.getElementById('btn3')
// var button4=document.getElementById('btn4')

// button2.onmouseover=function(){
//     alert('hello')
// }

// button3.onmouseleave=function(){
//     alert('hello')
// }

// button4.onmosuewheel=function(){
//     alert('hello')
// }

var button5=document.getElementById("btn5")
var text=document.getElementById("txt1")

button5.onclick=function(){
    text.style.color="red"
    text.style.padding="123px"
    text.style.backgroundColor="blue"
    text.style.fontSize="400px"
}


text.onmouseover=function(){
    text.style.cssText="color:red; background-color:gray"
}



btn1.onclick=function(){
    text.setAttribute("class","text")
}

btn6.onclick=function(){
    text.setAttribute("class","hide")
}

