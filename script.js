//Paralax effect
let stars = document.getElementById('Stars');
let clouds = document.getElementById('Clouds');
let bclouds = document.getElementById('Clouds2');
let people = document.getElementById('People');
let title = document.getElementById('title');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    clouds.style.top = value * 1.05 +'px';
    bclouds.style.top = value * 1.25 +'px';
    people.style.transform = 'translate3d(0, ' + '-'+value + 'px, 0)';

})

//Clock
var tyme = function(){
    return document.getElementById(area).innerHTML = new Date().toLocaleString("en-US", {timeZone: zone, timeStyle: 'medium', hourCycle: 'h24'})
}
let zone = '';
let area = '';
function forTime(var1){
    area = var1;
    if(var1=='India'){zone="Asia/Kolkata"}
    else if(var1=='NYC'){zone='America/New_York'}
    else {zone='Australia/Sydney'}
    tyme();
}
setInterval(tyme, 1000);