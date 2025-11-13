let body = document.querySelector('body');
let toggle = document.getElementById('toggle');
let counter = document.querySelector('h2');
let Incriment = document.getElementById('Inc');
let decriment = document.getElementById('Dec');

toggle.style.cursor = "pointer";

let isNight = false;

toggle.addEventListener('click',function(){

    isNight = !isNight;

    if(isNight){
        body.style.backgroundColor = "#000";
        body.style.color = "#fff";
        Incriment.style.color = "#fff";
        decriment.style.color = "#fff";
        Incriment.style.border = "1px solid #fff";
        decriment.style.border = "1px solid #fff";
        toggle.innerHTML = `<i class="ri-sun-line"></i>` ;
    } else{
        body.style.backgroundColor = "#fff";
        body.style.color = "#000";
        Incriment.style.color = "#000";
        decriment.style.color = "#000";
        Incriment.style.border = "1px solid #000";
        decriment.style.border = "1px solid #000";
        toggle.innerHTML = `<i class="ri-contrast-2-line"></i>`;
    }   
    
})


let count = 0;
Incriment.addEventListener('click',function(){
    count++;
    counter.innerHTML = count;
});
decriment.addEventListener('click',function(){
    count--;
    counter.innerHTML = count;
})