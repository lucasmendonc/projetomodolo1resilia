function escolher3() {
var pergunta = prompt("1- Lavar o banheiro com sabão e cloro \n2-Deixar o banheiro com aroma de bar.");
    
while (pergunta != 1  || pergunta != 2) {

if (pergunta == 1) {
    window.location.href = "C:/Users/home/Desktop/projetoModulo1/ganhou/ganhou.html";
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


