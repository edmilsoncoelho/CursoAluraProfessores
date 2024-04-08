let nomeUser = "";
let elemento = document.querySelector("#nome-usuario");


while(nomeUser == ""){
    nomeUser = prompt("Qual o seu nome?");
}

if(nomeUser == null){
    elemento.textContent = "visitante";
}
else{
    elemento.textContent = nomeUser;
}

