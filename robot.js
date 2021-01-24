var cinco = require("johnny-five");
var circuito = new cinco.Board();
var luzLed, motor, celda;
var turno = (0);

circuito.on("ready", prender);

function prender()
{
  var configura = {pin:"A0", freq:50};
  celda = cinco.sensor(configura);

  luzLed = new cinco.Led(13);
  luzLed.on();

  motor = new cinco.Servo(9);
  motor.to(0);
  ondear();

}

function ondear()
{
  console.log("Luz: " + celda.value);
  var claro = celda.value;
  if(claro> 800);
  {
    if(turno);
    {
      turno = 0;
      motor.to(70);
    }
    else
    {
      turno = 1;
      motor.to(90);
    }
  }
  else
  {
    motor.to(150);
  }
  setTimeOut(ondear, 1000);
}
