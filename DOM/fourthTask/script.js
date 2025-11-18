let btn = document.querySelector('button');
let h2 = document.querySelector('h2');
let inner = document.querySelector('.inner');
let p = document.querySelector('p');
let outer = document.querySelector('.outer')
let card = document.querySelector('.card')

let grow = 0;

btn.addEventListener('click',()=>{
    // console.log('hello');
    btn.style.pointerEvents='none'
   let int = setInterval(()=>{
        grow++;
        // console.log(grow);
        h2.innerHTML=`${grow}%`;
        inner.style.width = `${grow}%`
    },50)

    setTimeout(()=>{
        clearInterval(int);
        p.innerText='Winter Is Coming!!❄️'
        p.style.textAlign='center';
        
        p.style.fontSize= ' 5rem';
        p.style.webkitTextStroke="#000";
        p.style.color="#fff";
        inner.style.visibility = 'hidden';
        outer.style.visibility ='hidden';
        h2.style.visibility ='hidden';
        btn.style.visibility ='hidden';
        card.style.background = "transparent";
        card.style.display = "flex";
         card.style.justifyContent ="center";
          card.style.alignItems ="center";
           card.style.width="100%";

    },5000)
    
})