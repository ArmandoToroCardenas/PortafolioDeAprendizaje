let vc = document.getElementById("VillaCalentura");

if (typeof vc !== 'undefined') {}

let papel = vc.getContext("2d");
let mapa = "tile.png";
let img = new Image();
img.src = mapa;
img.addEventListener("load", dibujar);

function dibujar()
{
  papel.drawImage(img, 0, 0);
}

function aleatoria(min, maxi)
{
  let resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
