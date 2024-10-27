const validateBrDomain = (domain) => {
    const regex = /\.br$/;
    return regex.test(domain);
}

console.log(validateBrDomain("pudim.com.br"));
console.log(validateBrDomain("google.com"));