let teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

document.addEventListener("keyup", dibujarTeclado);
let cuadro = document.getElementById("area_de_dibujo");
let papel = cuadro.getContext("2d");
let x = 150;
let y = 150;

dibujarLinea("red", 149, 149, 151, 151, papel);

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.linewidth = 3;
  lienzo.moveTo(xInicial, yInicial);
  lienzo.lineTo(xFinal, yFinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{
  let clr = "blue";
  let mov = 3;
  switch (evento.keyCode)
  {
    case teclas.DOWN:
      dibujarLinea(clr, x, y, x, y + mov, papel);
      y = y + mov;
      break;
    case teclas.UP:
    dibujarLinea(clr, x, y, x, y - mov, papel);
    y = y - mov;
      break;
    case teclas.LEFT:
    dibujarLinea(clr, x, y, x - mov, y, papel);
    x = x - mov;
      break;
    case teclas.RIGHT:
    dibujarLinea(clr, x, y, x + mov, y, papel);
    x = x + mov;
      break;
    default:
  }
}
