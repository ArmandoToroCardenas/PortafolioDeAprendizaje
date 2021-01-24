var diego = require("express");
var app = diego();

app.get("/", inicio);
app.get("/cursos", cursos);

function inicio(pedido, resultado)
{
  resultado.send("<strong>Hola Mundo</strong>");
}
function cursos(pedido, resultado)
{
  resultado.send("<strong>Home</strong>");
}

app.listen(8989);
