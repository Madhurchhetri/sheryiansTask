const main = document.querySelector('main');
const para = document.querySelector('p');
const characters = "ABCDSEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const text = para.innerText
let audio = new Audio('./song.mp3');
let stopTimer;
let iteration = 0;

addEventListener('mousemove',(e)=>{
    console.log('mousemove');
    document.body.style.setProperty('--x',e.clientX+'px');
    document.body.style.setProperty('--y',e.clientY+'px');
    main.style.background= `radial-gradient(150px at var(--x) var(--y),rgba(255,255,255,0),rgba(0, 0, 0, 0.993))`;

    clearTimeout(stopTimer);

    stopTimer = setTimeout(()=>{
        main.style.background ='none';
        audio.play();
    },200)
});

para.addEventListener('mouseenter',()=>{

    setInterval(()=>{
        const str = text.split('').map((char,index)=>{
            if(index < iteration){
                return char;
            }
            return characters.split('')[Math.floor(Math.random()*53)]
        }).join('');

        para.innerText = str;
        iteration += 0.25;
    },30)

});

