function cep(v){
    v.value=v.value.replace(/\D/g,"");
    v.value=v.value.replace(/^(\d{5})(\d)/,"$1-$2");




}

function  camposPreenchidos(form){

if(form.cep.value !=""&& form.cep.value.length==9){
 return true;
    }else{

    return false;
    }


}



