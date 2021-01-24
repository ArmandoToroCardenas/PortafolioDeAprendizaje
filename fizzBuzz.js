var numeros = 100;
//var divisible = false;PRIMER FORMA DE QUE FUNCIONE EL ALGORITMO//

for (var i = 1; i <= 100; i++)
{
  //divisible=false;PRIMER FORMA DE QUE FUNCIONE EL ALGORITMO//
  //if(i%3==0)CONDICIONALES PARA LA PRIMER Y SEGUNDA FORMA DE QUE FUNCIONE EL ALGORITMO//
    if(esDivisible(i,3))
  {
    document.write("Fizz");
    //divisible=true;PRIMER FORMA DE QUE FUNCIONE EL ALGORITMO//
  }
  //if(i%5==0)CONDICIONALES PARA LA PRIMER Y SEGUNDA FORMA DE QUE FUNCIONE EL ALGORITMO//
    if(esDivisible(i,5))
  {
    document.write("Buzz");
    //divisible=true;PRIMER FORMA DE QUE FUNCIONE EL ALGORITMO//
  }
  //if(!divisible)PRIMER FORMA DE QUE FUNCIONE EL ALGORITMO//
  //if(i%3 !=0 && i%5 !=0)SEGUNDA FORMA EN LA QUE FUNCIONA LAS CONDICIONALES//
    if(!esDivisible(i,3)&&!esDivisible(i,5))
  {
    document.write(i);
  }
  document.write("<br/>")
}

function esDivisible(num, divisor)
{
  if(num%divisor==0)
  {
    return true;
  }
  else
  {
    return false;
  }
}
//Vimos tres formas de lograr el algoritmo.
//- Primer forma fue creando una variable que llamamos divisible y dos condicionales independientes dentro de nuestro ciclo además de una última condicional que niegue la variable divisible.
//var divisible = false;
//if (i%3==0)
//if (i%5==0)
//if (!divisible)
//- La segunda forma fue sin la variable anterior divisible, aunque si usamos las dos primeras condicionales del ejemplo que acabamos de ver además de la condicional **if (i%3 !=0 && i%5 !=0)**.
//- Y la tercer forma que vimos fue con la que nos hemos casado al final. Que fue con la función **esDivisible(num,divisor)** y la su condicional **if(num%divisor==0)** incluyendo dos **return**
