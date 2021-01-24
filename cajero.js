class Billete
 {
  constructor(v, c)
  {
      this.valor = v;
      this.cantidad = c;
  }
}

function entregarDinero()
{
  div = Math.floor(dinero / bi.valor);

  let t = document.getElementById("dinero");
  dinero = parsetInt(t.valor);

  for(let bi of caja)
  {

    if (div > bi.cantidad)
    {
      papeles = bi.cantidad;
    }
    else
    {
      papeles = div;
    }
    entregado.push(new Billete(bi.valor, papeles));
    dinero -= (bi.valor*papeles);
  }

  if (dinero > 0)
  {
    resultado.innerHTML = "Operación invalida";
  }
  else
  {
    for(let e of entregado)
    {
      if(e.cantidad > 0)
      resultado.innerHTML += e.cantidad, + " Billetes de $" + e.valor, + "<br />";
    }
  }
  console.log(entregado);
}

let caja = [];
let entregado = [];

caja.push( new Billete(100, 100));
caja.push( new Billete(50, 100));
caja.push( new Billete(20, 100));
caja.push( new Billete(10, 100));

let dinero = 0;
let div = 0;
let papeles = 0;

let resultado = document.getElementById("resultado");
let bo = document.getElementById("Retirar");

//trate de seguir a Freddy Vega con su addEventListener pero no me funciono, incluso trate de solucionar el error
//"TypeError bo is null" con la sujerencia de developer.mozilla.org "if(typeof bo !== 'null')"
//y siguio sin funcionar. La instrucción de Freddy es:

//bo.addEventListener("click", entregarDinero);
//if(typeof bo !== 'null');

//este problema lo solucione con "onclick = "entregarDinero" en el atm.html"
