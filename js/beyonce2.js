function escolher2() {
var pergunta = prompt("1- Dançar Single Ladies e tirar foto com os fãs. \n2- Não vir ao Brasil e atrasar os shows.");
     
while (pergunta != 2 || pergunta != 1) {

  if (pergunta == 1) {
      window.location.href = "../beyonce/beyonce3.html";
      
  /*para finalizar e direcionar para o html acima caso escolha 1 ---> */ 
     break;
    } else if (pergunta == 2) {
      window.location.href = "../gameover/gameover.html";
      
   /*para finalizar e direcionar para o html acima caso escolha 2 ---> */   
     break;
  
     
    } 
   
    alert("Digite 1 ou 2!" )
  
    return
  
  }
   
  }
