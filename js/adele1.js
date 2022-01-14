function escolher2() {
var pergunta = prompt("1-Colocar uma blusa de onça, um sapato de estampa de vaca e um óculos rosa. \n2- Colocar um pretinho básico com um colar de pérolas.");
    
while (pergunta != 2 || pergunta != 1) {

if (pergunta == 2) {
    window.location.href = "../adele/adele2.html";
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


