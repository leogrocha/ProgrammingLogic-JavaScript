const removeNonDigits = (text) => {
    const regex = /\D/g;
    return text.replace(regex, "");
}

console.log(removeNonDigits("487.594.844-44"));