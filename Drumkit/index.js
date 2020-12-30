window.addEventListener('keydown', function (e)
{
   const audio = document.querySelector('audio[data-key="'+e.keyCode+'"]');
   const key = document.querySelector('button[data-key="'+e.keyCode+'"]');
   if(!audio)return;
   audio.currentTime = 0;
   audio.play();
   key.classList.add("playing");
   console.log(key);
})
window.addEventListener('click',function(e)
{
  console.log(e);
})

function removeTransition(e)
{
  if(e.propertyName !== 'transform') return; //skip if it's not a transform;
  this.classList.remove("playing");
}
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend",removeTransition))
