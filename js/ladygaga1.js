function escolher2() {
var pergunta = prompt("1- Mandar mensagens com discurso de ódio. \n2- Ser empata e resíliente com as pessoas dentro e fora da rede.");
    
while (pergunta != 2  || pergunta != 1) {

if (pergunta == 2) {
    window.location.href = "../lady gaga/ladygaga2.html";
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


