const cnpj = '12345678912345';

const cnpj_formatado = cnpj.substring(0, 2) + '.' + cnpj.substring(2, 5) + 
'.' + cnpj.substring(5, 8) + '/' + cnpj.substring(8, 12) + '-' + cnpj.substring(12, 14);

console.log(cnpj_formatado);