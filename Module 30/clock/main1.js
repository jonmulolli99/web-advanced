var noon="12"

function showCurrentTime(){
    var clock=document.getElementById("clock")
    var getTime=new Date()


    var hours= getTime.showHours()
    var minutes= getTime.showMinutes()
    var seconds= getTime.showSeconds()

    var meridian="AM"

    if(hours>=noon){
        meridian="PM"
    }

    var clockTime= hours + ":" + minutes+ ":"+ seconds +"   "+ meridian
    clock.innerText=clockTime
}



function changeImage(){
    var time = new Date().getHours()
    var image="https://th.bing.com/th/id/OIP.5HzAvZPEp3wkBoMrCeYDLgHaCW?w=320&h=111&c=7&r=0&o=7&pid=1.7&rm=3"
    var imageHTML=document.getElementById("timeImage")
    if(time==wakeUpTime){
        image="https://th.bing.com/th/id/OIP.s7oaEeeeIsONiXk1MzS-hQHaE8?w=228&h=180&c=7&r=0&o=7&pid=1.7&rm=3"

    }
    else if(time==sleepTime){
        image="https://th.bing.com/th/id/OIP.72pvQgIL_d-va3LAvT177AHaHa?w=204&h=203&c=7&r=0&o=7&pid=1.7&rm=3"

    }
    else{
        image="https://th.bing.com/th/id/OIP.5HzAvZPEp3wkBoMrCeYDLgHaCW?w=320&h=111&c=7&r=0&o=7&pid=1.7&rm=3"
        
    }
}    


function updateClock(){
    var wakeUpTimeSelector=document.getElementById("wakeUpTimeSelector")
    wakeUpTime=wakeUpTimeSelector.value
    var sleepTimeSelector=document.getElementById("sleepTimeSelector")
    sleepTime=sleepTimeSelectorTimeSelector.value
    var DSTimeSelector=document.getElementById("DSTimeSelector")
    DStime=DSTimeSelector.value
}




