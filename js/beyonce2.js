function escolher2() {
var pergunta = prompt("1- Dançar Single Ladies e tirar foto com os fãs. \n2- Não vir ao Brasil e atrasar os shows.");
    
while (pergunta != 2 || pergunta != 1) {

if (pergunta == 1) {
    window.location.href = "file:///C:/Users/home/Desktop/projeto%20modulo/beyonce3.html";
    
/*para finalizar e direcionar para o html acima caso escolha 1 ---> */ 
   break;
  } else if (pergunta == 2) {
    window.location.href = "file:///C:/Users/home/Desktop/projeto%20modulo/gameover.html";
    
 /*para finalizar e direcionar para o html acima caso escolha 2 ---> */   
   break;
  } 
}
}
