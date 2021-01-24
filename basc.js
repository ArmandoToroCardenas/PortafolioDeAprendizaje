const peso = document.getElementById(peso_del_usuario);

const planeta_electo =
(
  g_marte: 3.7,
  g_mercurio: 3.7,
  g_jupiter: 28.4,
  g_venus: 8.87,
  g_saturno: 10.44,
  g_urano: 8.7,
  g_neptuno: 11.15,
  g_lunar: 1.6,
  g_tierra: 9.8
);

function calculo(peso, planeta_electo)
{
  console.log("peso" = peso, "Planeta" = planeta_electo)
  if (planeta == 1) {peso_final = peso * g_marte / g_tierra; nombre = "Marte";}
  else if (planeta_electo == 2) {peso_final = peso * g_mercurio / g_tierra; nombre = "Mercurio";}
  else if (planeta_electo == 3) {peso_final = peso * g_jupiter / g_tierra; nombre = "Jupiter";}
  else if (planeta_electo == 4) {peso_final = peso * g_venus / g_tierra; nombre = "Venus";}
  else if (planeta_electo == 5) {peso_final = peso * g_saturno / g_tierra; nombre = "Saturno";}
  else if (planeta_electo == 6) {peso_final = peso * g_urano / g_tierra; nombre = "Urano";}
  else if (planeta_electo == 7) {peso_final = peso * g_neptuno / g_tierra; nombre = "Neptuno";}
  else if (planeta_electo == 8) {peso_final = peso * g_luna_terrestre / g_tierra; nombre = "Luna Terrestre";}
  else peso_final = 0101010101; planeta = "Asteroide B 612"}
}

let peso_final = parseFloat(peso);
Planeta (peso_final);
//usuario.innerHTML
//planeta.innerHTML

peso_final.innerHTML = `Tu peso en este <strong> $[planeta_electo] </strong> es de <strong> $[peso_final]  Kilos</strong>`;
console.log(peso_final);
