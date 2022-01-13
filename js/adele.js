function escolher1() {
var pergunta = prompt("1- Lançar um agudo dizendo 'o estado é laicoo' \n2- Dizer que só uma religião pode ajudar");
    
while (pergunta != 1 || pergunta != 2) {

if (pergunta == 1) {
    window.location.href = "C:/Users/home/Desktop/projetoModulo1/adele/adele1.html";
/*para finalizar e direcionar para o html acima caso escolha 1 ---> */ 
   break;
  } else if (pergunta == 2) {
    window.location.href = "C:/Users/home/Desktop/projetoModulo1/gameover/gameover.html";
    
 /*para finalizar e direcionar para o html acima caso escolha 2 ---> */   
   break;

   
  } 
 
  alert("Digite 1 ou 2!" )

  return

}
 
}


