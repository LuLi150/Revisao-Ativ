/*Atividade1
function calcularMedia( nota1 , nota2 , nota3 ){

  let total= nota1+nota2+nota3;
   
  final= total/3
  
  console.log(final);
  
}

calcularMedia(4,6,7);
*/
/*
//Atividade2

function verificarIdade(idade) {
  if (idade <1){
     console.log("Idade inválida");
  }
  else if (idade<=17) {
    console.log("menor de idade");
    
  } else if(idade>=18){
    console.log("maior de idade");
     
  } else {
    console.log("Idade inválida");
  }
}

verificarIdade(0);
*/

//Atividade3

function contarAte(numero) {
  if (numero < 0) {
    console.log("número invalido");
    return;
  }
  for (let contar = 0; contar <= numero; contar++) {
      console.log(contar);
  }
}

contarAte(-10)

/*Em java a primeira atividade1 
 Scanner entrada= new Scanner(System.in)

  Double numero1;
  Double numero2;
  Double numero3;
  Double media;
  Double notaTotal;
  Double notaFinal;


  System.out.println("Qual foi sua primeria nota?");
  nota1=entrada.nextInt();

  System.out.println("Qual foi sua segunnda nota?");
  nota2=entrada.nextInt();

  System.out.println("Qual foi sua terceira nota?");
  nota3=entrada.nextInt();


  notaTotal= nota1+nota2+nota3;

  notafinal= notaTotal/3

   System.out.println(notaFinal);

*/