'use strict' //Modo estricto de JavaScript

// Declaracion de las Variables
var a,b,c;
a = 5
b = 3
c = -12

// Evaluacion para saber si los resultados son verdaderos o falsos
var resultado = a > 3
var resultado1 = a > c
var resultado2 = a < c
var resultado3 = b < c
var resultado4 = b != c
var resultado5 = a == 3
var resultado6 = a * b == 15
var resultado7 = a * b == -30
var resultado8 = c / b < a
var resultado9 = c / b == -10
var resultado10 = c / b == -4
var resultado11 = a + b + c == 5
var resultado12 = (a + b == 8) && (a - b == 2)
var resultado13 = (a + b == 8) || (a - b == 6)
var resultado14 = a > 3 && b > 3 && c < 3
var resultado15 =  a > 3 && b > 3 && c < -3

// Alerta de los Resultados de las Variables
alert("a) a > 3\n"+resultado)
alert("b) a > c\n"+resultado1)
alert("c) a < c\n"+resultado2)
alert("d) b < c\n"+resultado3)
alert("e) b != c\n"+resultado4)
alert("f) a == 3\n"+resultado5)
alert("g) a * b == 15\n"+resultado6)
alert("h) a * b == -30\n"+resultado7)
alert("i) c / b < a\n"+resultado8)
alert("j) c / b == -10\n"+resultado9)
alert("k) c / b == -4\n"+resultado10)
alert("l) a + b + c == 5\n"+resultado11)
alert("m) (a + b == 8) && (a - b == 2)\n"+resultado12)
alert("n) (a + b == 8) || (a - b == 6)\n"+resultado13)
alert("o) a > 3 && b > 3 && c < 3\n"+resultado14)
alert("p) a > 3 && b > 3 && c < -3\n"+resultado15)

