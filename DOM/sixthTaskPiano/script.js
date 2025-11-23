const pianoKeys = [
  { key: "a", note: "C4", sound: "./sounds/28.mp3" },
  { key: "s", note: "D4", sound: "./sounds/29.mp3" },
  { key: "d", note: "E4", sound: "./sounds/30.mp3" },
  { key: "f", note: "F4", sound: "./sounds/31.mp3" },
  { key: "g", note: "G4", sound: "./sounds/32.mp3" },
  { key: "h", note: "A4", sound: "./sounds/33.mp3" },
  { key: "j", note: "B4", sound: "./sounds/34.mp3" },

  { key: "z", note: "C3", sound: './sounds/35.mp3'},
  { key: "x", note: "D3", sound: "./sounds/36.mp3" },
  { key: "c", note: "E3", sound: "./sounds/37.mp3" },
  { key: "v", note: "F3", sound: "./sounds/38.mp3" },
  { key: "b", note: "G3", sound: "./sounds/39.mp3" },
  { key: "n", note: "A3", sound: "./sounds/41.mp3" },
  { key: "m", note: "B3", sound: "./sounds/42.mp3" },

  { key: "q", note: "C5", sound: "./sounds/43.mp3" },
  { key: "w", note: "D5", sound: "./sounds/44.mp3" },
  { key: "e", note: "E5", sound: "./sounds/45.mp3" },
  { key: "r", note: "F5", sound: "./sounds/46.mp3" },
  { key: "t", note: "G5", sound: "./sounds/47.mp3" },
  { key: "y", note: "A5", sound: "./sounds/48.mp3" },
  { key: "u", note: "B5", sound: "./sounds/49.mp3" },

];



let body = document.querySelector('body');
let h1 = document.querySelector('h1')
body.addEventListener('keydown', (dets)=>{
    console.log(dets.code);
   pianoKeys.forEach((elem)=>{
    if(dets.key.toLowerCase() === elem.key){
        let audio = new Audio(elem.sound);
        audio.play(); 
        
    let li = document.querySelector(`li[data-key="${elem.key}"]`);
      if (li) li.classList.add("active");

      h1.innerText = elem.note;
    }
    
   })


    
});

body.addEventListener('keyup',(dets)=>{
    let releaseKey = dets.key.toLowerCase();
    let li = document.querySelector(`li[data-key="${releaseKey}"]`);
    if (li) li.classList.remove("active");
})