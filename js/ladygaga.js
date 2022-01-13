function escolher1() {
var pergunta = prompt("1- Deixar a toalha mollhada em cima da cama. \n2- Estender a toalha no varal.");
    
while (pergunta != 2 || pergunta != 1) {

if (pergunta == 2) {
    window.location.href = "../lady gaga/ladygaga1.html";
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


