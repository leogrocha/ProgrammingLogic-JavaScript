function formata_cpf(cpf) {
    let cpfMask = cpf.replace(/\D/g, '').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').
        replace(/(\d{3})(\d)/, '$1-$2');

    return cpfMask.replace(cpfMask.substring(0, 3), "###").replace(cpfMask.substring(12, 14), "##");
}

console.log(formata_cpf("13569486699"));