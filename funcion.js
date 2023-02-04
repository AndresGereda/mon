var b1 = document.getElementById("sorteo");
b1.addEventListener("click", f);
function f()
{
  function getRandomArbitrary(min, max){
    return Math.floor(Math.random() * (max - min) + min);
  }
  var number;
  var x;
  //hay tres puertas, puerta1=1, puerta2=2, puerta3=3
  number=(getRandomArbitrary(1,4));
  //x guarda en que parte se quedara el tesoro o tambien al auto
  x=number;
  //Muestra el valor en pantalla del valor de x
  //alert(x);

  //Aqui abajo se da una alert segun el tesoro en cada puerta
  const buttonA = document.querySelector('#Puerta1');
buttonA.onclick = () => {
  y=1;
  //alert(y);
  alert("La puerta 🚪🚪🚪 que escogio es la numero "+y);
}

const buttonB = document.querySelector('#Puerta2');
buttonB.onclick = () => {
 y=2;
 //alert(y);
 alert("La puerta 🚪🚪🚪 que escogio es la numero "+y);
  }

const buttonC = document.querySelector('#Puerta3');
buttonC.onclick = () => {
 y=3;
 //alert(y);
 alert("La puerta 🚪🚪🚪 que escogio es la numero "+y);
  }



  function c()
  {
    //alert(x);

    if(x==y){
      if(x==1){
        function getRandomArbitrary(min, max){
          return Math.floor(Math.random() * (max - min) + min);
        }
        n=(getRandomArbitrary(0,2));
        if(n==0){n1=2}
        else{n1=3}
        //alert(n1);
      }
      else if(x==2){
        function getRandomArbitrary(min, max){
          return Math.floor(Math.random() * (max - min) + min);
        }
        n=(getRandomArbitrary(0,2));
        if(n==0){n1=1;}
        else{n1=3}
        //alert(n1);
      }
      else{
        function getRandomArbitrary(min, max){
          return Math.floor(Math.random() * (max - min) + min);
        }
        n=(getRandomArbitrary(0,2));
        if(n==0){n1=1}
        else{n1=2}
        //alert(n1);
      }
    }
    else
    {
      z=x+y;
      if(z==3){
        n1=3;
       // alert(n1);
      }
      else if(z==5){
        n1=1
       // alert(n1);
      }
      else{
        n1=2
       // alert(n1);
      }
    }
    
    x1="abierta.png";
    x2="cldoor.png";
    x3="tesoro.png";

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


  const buttonD = document.querySelector('#Puerta4');
buttonD.onclick = () => {
  w=1;
  //alert("Confirma si la puerta 🚪🚪 a abrir es la numero "+w);
  x1="abierta.png";
    x2="cldoor.png";
    x3="tesoro.png";

  resultado1.src =x1;
  resultado2.src =x1;
  resultado3.src =x1;
  if(x==1){resultado1.src=x3}
  else if(x==2){resultado2.src=x3}
  else{resultado3.src=x3}
  if(w==x){alert("Felicitaciones Ganaste ✅✅💰💰🥇🥇🙏😇")}
  else{alert("Que Lastima Perdiste 😢😭🫣🐂🙉😂😓🤣")}

}
const buttonE = document.querySelector('#Puerta5');
buttonE.onclick = () => {
 w=2;
 //alert("Confirma si la puerta 🚪🚪 a abrir es la numero "+w);
 x1="abierta.png";
    x2="cldoor.png";
    x3="tesoro.png";

  resultado1.src =x1;
  resultado2.src =x1;
  resultado3.src =x1;
  if(x==1){resultado1.src=x3}
  else if(x==2){resultado2.src=x3}
  else{resultado3.src=x3}
  if(w==x){alert("Felicitaciones Ganaste ✅✅💰💰🥇🥇🙏😇")}
  else{alert("Que Lastima Perdiste 😢😭🫣🐂🙉😂😓🤣")}

  }
const buttonF = document.querySelector('#Puerta6');
buttonF.onclick = () => {
 w=3;
 //alert("Confirma si la puerta 🚪🚪 a abrir es la numero "+w);
 x1="abierta.png";
    x2="cldoor.png";
    x3="tesoro.png";

  resultado1.src =x1;
  resultado2.src =x1;
  resultado3.src =x1;
  if(x==1){resultado1.src=x3}
  else if(x==2){resultado2.src=x3}
  else{resultado3.src=x3}
  if(w==x){alert("Felicitaciones Ganaste ✅✅💰💰🥇🥇🙏😇")}
  else{alert("Que Lastima Perdiste 😢😭🫣🐂🙉😂😓🤣")}

  }
 
  

}
