  console.log("Meu Projeto em Js");
  alert("Camila Nutri");
  let nome = prompt("Digite seu nome");
  let idade = prompt("Digite sua idade");
  let email;
  let peso;
  let altura;

  if (idade >= 18)
  {
    console.log("Liberar Acesso");
    email = prompt("Digite seu email");
    
  }
  else
  {
    console.log("Negar acesso");
  }

    console.log("Segunda Parte do cadastro");
    peso = prompt("Digite seu peso");

    if(peso > 60)
    {
        console.log("Peso normal");
       
    }
    
    else
    {
        console.log("Peso divergente, investigar paciente");
    }

    