var imagenes = [];
imagenes ["Cauchin"] = "vaca.png";
imagenes ["Pokacho"] = "pollo.png";
imagenes ["Tocinaurio"] = "cerdo.png";

var colection = [];
colection.push(new Pakiman("Cauchin", 100, 30));
colection.push(new Pakiman("Pokacho", 80, 50));
colection.push(new Pakiman("Tocinaurio", 120, 40));

for(var diegito of colection)
{
  diegito.mostrar();
}

for(var x in colection[0,1,2])
{
  console.log(x);
}
