function escolher1() {
var pergunta = prompt("1- Dizer para as pessoas que o mundo não tem jeito \n2- Ter pensamentos positivose acreditar em um mundo melhor");
    
while (pergunta != 2 || pergunta != 1) {

if (pergunta == 2) {
    window.location.href = "file:///C:/Users/home/Desktop/projeto%20modulo/beyonce2.html";
    
/*para finalizar e direcionar para o html acima caso escolha 1 ---> */ 
   break;
  } else if (pergunta == 1) {
    window.location.href = "file:///C:/Users/home/Desktop/projeto%20modulo/gameover.html";
    
 /*para finalizar e direcionar para o html acima caso escolha 2 ---> */   
   break;
  } 
}
}
