console.log("main");
let number = document.querySelectorAll(".drum").length;

for (let index = 0; index < number; index++) {
  document
    .querySelectorAll(".drum")
    [index].addEventListener("click", function () {
      let buttonHTML = this.innerHTML;
      playSound(buttonHTML);
      addAnimation(buttonHTML)
    });
}

document.addEventListener("keypress", function (e) {
  playSound(e.key);
  addAnimation(e.key)
});

function playSound(index) {
  switch (index) {
    case "a":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "f":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
  }
}

function addAnimation(key) {
   let cls =  document.querySelector('.'+key);
   cls.classList.add('pressed')
   setTimeout(() => {
       cls.classList.remove('pressed')
    
   }, 100);
   
}