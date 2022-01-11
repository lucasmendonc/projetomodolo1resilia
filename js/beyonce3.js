function escolher3() {
var pergunta = prompt("1- Ajuda um idoso atravesar a rua. \n2- Ignorar o idoso que precisa de ajuda.");
    
while (pergunta != 2 || pergunta != 1) {

if (pergunta == 1) {
    window.location.href = "ganhou.html";
    
/*para finalizar e direcionar para o html acima caso escolha 1 ---> */ 
   break;
  } else if (pergunta == 2) {
    window.location.href = "file:///C:/Users/home/Desktop/projeto%20modulo/gameover.html";
    
 /*para finalizar e direcionar para o html acima caso escolha 2 ---> */   
   break;
  } 
}
}
