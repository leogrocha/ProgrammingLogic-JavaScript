const findEmails = (text) => {
    const regex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;
    const result = text.match(regex);

    return result ? result : [];
}

const text = "Para mais informações, contate-nos em contato@exemplo.com ou suporte@ectare.com.br.";

const emails = findEmails(text);

if (emails.length > 0) {
    console.log("Emails encontrados: ");
    for (let i = 0; i < emails.length; i++) {
        console.log(emails[i]);
    }
} else {
    console.log("Nenhum e-mail encontrado.");
}