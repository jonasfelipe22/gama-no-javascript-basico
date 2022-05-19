console.log("Carregar....");
function ValidaCPF(valor){
    console.log("VALIDA CPF");
    return false;
}

function obterDados(){
    console.log("...Iniciando Validação...");//Testando se entrou na função
    var valor = document.getElementById("digitado").value;
    console.log(valor);
    ValidaCPF(valor);

    if (ValidaCPF){
        document.getElementById("success").style.display = "block";
        console.log("success");
                } 
    else {
        document.getElementById("error").style.display = "block";    
        console.log("error");
         }
                    }