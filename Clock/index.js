const sh = document.querySelector('.sec');
const mh = document.querySelector('.min');
const hh = document.querySelector('.hour');
function setDate()
{
  const now = new Date();
  const seconds = now.getSeconds();
  const secdeg = (((seconds/60)*360)+90);
  sh.style.transform = `rotate(${secdeg}deg)`;


  const minutes = now.getMinutes();
  const mindeg = ((minutes/60)*360)+90;
  mh.style.transform = `rotate(${mindeg}deg)`;

  const hours = now.getHours();
  const hourdeg = ((hours/12)*360)+90;
  hh.style.transform = `rotate(${hourdeg}deg)`;

}
setInterval(setDate,1000);
