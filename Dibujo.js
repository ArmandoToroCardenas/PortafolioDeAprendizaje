let text = document.getElementById("txt_line");
let boton = document.getElementById("button");
boton.addEventListener("click", dibujo_click);

let d = document.getElementById("dibujito");
let ancho = d.width;
alert(ancho);
let lienzo = d.getContext("2d");

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal,)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xInicial, yInicial);
  lienzo.lineTo(xFinal, yFinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujo_click()
{
  let lineas = parseInt(text.value);
  let l = 0;
  let xI, yI, xF, yF;
  let rotulo;
  let espacio = ancho / lineas;

  while(l < lineas)
  {
    yI = espacio * 1;
    xF = espacio * (l + 1);
    dibujarLinea("grey", 0, yI, xF, 300);
    l = l + 1;
  }

  for(l = 0; l < lineas; l ++)
  {
    xI = espacio * 1;
    yF = espacio * (l + 1);
    dibujarLinea("grey", xI, 300, 300, yF);
  }

  dibujarLinea(rotulo, 1, 1, 1, 299);
  dibujarLinea(rotulo, 1, 299, 299, 299);
  dibujarLinea(rotulo, 299, 299, 299, 1);
  dibujarLinea(rotulo, 299, 1, 1, 1);
}
