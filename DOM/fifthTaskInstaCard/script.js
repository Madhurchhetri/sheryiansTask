let img = document.querySelector('img');
let love = document.querySelector('.love');
let span = document.querySelector('span');
let clickNumber = 0;

 img.addEventListener('dblclick',()=>{
    // console.log('hello');
        clickNumber++;
        // count.push(clickNumber);
        // console.log(count); 
        span.innerText=clickNumber;
        love.style.opacity = 1;
        love.style.transform='translate(-50%,-50%) scale(1) rotate(0deg)';
    setTimeout(()=>{
        console.log('set time out chal gya');
          love.style.transform='translate(-50%,-600%) scale(1) rotate(0deg)';
    },800);
    setTimeout(()=>{
        love.style.opacity = 0;
    },1000)
    setTimeout(()=>{
         love.style.transform='translate(-50%,-50%) scale(0) rotate(-60deg)';
    },1200)
    
});





