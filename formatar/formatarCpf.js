function mascaraMutuarioCpf(o, f) {
    v_obj = o
    v_fun = f
    setTimeout('execmascaraCpf()', 1)
}

function execmascaraCpf() {
    v_obj.value = v_fun(v_obj.value)
}

function mask_cpf(v) {

    //Remove tudo o que não é dígito
    v = v.replace(/\D/g, "")

    if (v.length <= 14) { //CPF

        //Coloca um ponto entre o terceiro e o quarto dígitos
        v = v.replace(/(\d{3})(\d)/, "$1.$2")

        //Coloca um ponto entre o terceiro e o quarto dígitos
        //de novo (para o segundo bloco de números)
        v = v.replace(/(\d{3})(\d)/, "$1.$2")

        //Coloca um hífen entre o terceiro e o quarto dígitos
        v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    }
    

    return v

}

console.log(mask_cpf('09121395012')); //091.213.950-12