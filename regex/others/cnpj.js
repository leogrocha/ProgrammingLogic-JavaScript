const cnpj = "53168715000114";

// regex criar máscara cnpj
const cnpjMask = cnpj.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').
replace(/(\d{3})(\d)/, '$1/$2').replace(/(\d{4})(\d)/, '$1-$2');
console.log(cnpjMask);