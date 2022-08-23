
let box = document.getElementsByClassName('box');

for (let i = 0; i < box.length; i++) {
    const element = box[i];
    sound = new Audio('./boom.wav');
   
    
    element.addEventListener('click', ()=>
    {
       
     sound.play()
      
        
    })
}

function playAudio(url) {
    new Audio(url).play();
  }