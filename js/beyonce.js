function escolher1() {
var pergunta = prompt("1- Dizer para as pessoas que o mundo não tem jeito \n2- Ter pensamentos positivos e acreditar em um mundo melhor");
    
while (pergunta != 2 || pergunta != 1) {

if (pergunta == 2) {
    window.location.href = "../beyonce/beyonce2.html";
    
/*para finalizar e direcionar para o html acima caso escolha 1 ---> */ 
   break;
  } else if (pergunta == 1) {
    window.location.href = "../gameover/gameover.html";
    
 /*para finalizar e direcionar para o html acima caso escolha 2 ---> */   
   break;

   
  } 
 
  alert("Digite 1 ou 2!" )

  return

}
 
}


