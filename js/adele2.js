function escolher3() {
var pergunta = prompt("1- Dizer eu te amo para alguém que não merece. \n2- Me cuidar, me valorizar e me amar.");
    
while (pergunta != 2 || pergunta != 1) {

if (pergunta == 2) {
    window.location.href = "C:/Users/home/Desktop/projetoModulo1/ganhou/ganhou.html";
/*para finalizar e direcionar para o html acima caso escolha 1 ---> */ 
   break;
  } else if (pergunta == 1) {
    window.location.href = "C:/Users/home/Desktop/projetoModulo1/gameover/gameover.html";
    
 /*para finalizar e direcionar para o html acima caso escolha 2 ---> */   
   break;

   
  } 
 
  alert("Digite 1 ou 2!" )

  return

}
 
}


