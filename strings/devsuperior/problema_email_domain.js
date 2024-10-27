const extractEmailInformation = (email) => {
    const extractEmail = email.split("@")

    const user = extractEmail[0];
    const domain = extractEmail[1];
    const brazilian = domain.endsWith('.br');

    console.log(`Usuário: ${user}`);
    console.log(`Domínio: ${domain}`);
    console.log(`Brasileiro: ${brazilian}`);
}

const email = "joao.silva23@yahoo.com.br"

extractEmailInformation(email)


