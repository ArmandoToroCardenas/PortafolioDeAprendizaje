var jf = require("johnny-five");
var circuito = new jf.board();

circuito.on("ready", prender);

function prender()
{
  var luzRoja = new jf.Led(9);
  var luz = new jf.Led(13);
  luzRoja.blink(900);
  luz.blink(500);
  console.log("Hola Mundo");
}
