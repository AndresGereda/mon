x1="abierta.png";
x2="cldoor.png";
x3="tesoro.png";
x4="copia.png";

var b1 = document.getElementById("sorteo");
b1.addEventListener("click", f);
function f()
{
  var n = 3; 
  var vector = []; 

  for (var i = 0; i < n; i++) {vector[i] = i+1;}

  function getRandomArbitrary(min, max){return Math.floor(Math.random() * (max - min) + min);}
  var x=(getRandomArbitrary(1,4));

const buttonA = document.querySelector('#Puerta1');
buttonA.onclick = () => {y=1;resultado1.src =x4}

const buttonB = document.querySelector('#Puerta2');
buttonB.onclick = () => {y=2;resultado2.src =x4}

const buttonC = document.querySelector('#Puerta3');
buttonC.onclick = () => {y=3;resultado3.src =x4}

  function c()
  {
    var vectorNuevo = [];
    var j = 0;
    var n1;
    for (var i = 0; i < vector.length; i++) {
      if (vector[i] !== x && vector[i] !== y) {
        vectorNuevo[j] = vector[i];
        j++;
      }
    }
    var n1 = vectorNuevo[Math.floor(Math.random() * vectorNuevo.length)];

  resultado1.src =x2;
  resultado2.src =x2;
  resultado3.src =x2;
 
  if(n1==1){resultado1.src =x1}
  else if(n1==2){resultado2.src =x1}
  else{resultado3.src =x1}

  de.innerHTML ="Recuerda la puerta 🚪🚪 que escogio es la numero: "+y+" te quedas con esa o cambia?";
  }

  var de = document.getElementById("de");
  var resultado1 = document.getElementById("resultado1");
  var resultado2 = document.getElementById("resultado2");
  var resultado3 = document.getElementById("resultado3");
  var b2 = document.getElementById("sorteo1");
  b2.addEventListener("click", c);

function d()
{
resultado1.src =x1;
resultado2.src =x1;
resultado3.src =x1;
if(x==1){resultado1.src=x3}
else if(x==2){resultado2.src=x3}
else{resultado3.src=x3}
if(w==x){alert("Felicitaciones Ganaste ✅✅💰💰🥇🥇🙏😇")}
else{alert("Que Lastima Perdiste 😢😭🫣🐂🙉😂😓🤣")}
}

const buttonD = document.querySelector('#Puerta4');
buttonD.onclick = () => {w=1;d();}
const buttonE = document.querySelector('#Puerta5');
buttonE.onclick = () => {w=2;d();}
const buttonF = document.querySelector('#Puerta6');
buttonF.onclick = () => {w=3;d();}

}
