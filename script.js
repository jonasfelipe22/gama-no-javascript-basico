console.log("Carregar....");
function ValidaCPF(valor){
    console.log("VALIDA CPF");
    var validador1 =0;
    for(let i=0;i<valor.length-2;i++){
        validador1=validador1+(valor(i)*(10-i));
    }
    validador1=(validador1*10)%11;
    console.log("Validador1"+validador1);
    var validador2 =0;
    for(let i=0;i<valor.length-1;i++){
        validador2=validador2+(valor(i)*(11-i));
    }  
    validador2=(validador2*10)%11;
    console.log("Validador2"+validador2);
    console.log("Tamanho"+valor.length);
    if((valor.length==11)&&(validador1=valor(9))&&(validador2=valor(10))){
        return true;
    }else{
        return false;
    }}
    
    

function obterDados(){
    console.log("...Iniciando Validação...");//Testando se entrou na função
    var valor = document.getElementById("digitado").value;
    console.log(valor);
    ValidaCPF(valor);

    if (ValidaCPF == true ){
        document.getElementById("success").style.display = "block";
        console.log("success");
                            } 
    else                   {
        document.getElementById("error").style.display = "block";    
        console.log("error");
                            }
                    }