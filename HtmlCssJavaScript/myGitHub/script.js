 const BASE_URL = "https://api.github.com/users/leogrocha";

  fetch(BASE_URL)
    .then(res => res.json())
    .then(result => {
      console.log(result);
      imgPerfil(result.avatar_url);
      infoPerfil(result);
      bio(result);
      
    })
    .catch(error => {
      console.log('error', error);
});

function imgPerfil(img) {
    document.getElementById('imgPerfil').setAttribute('src', img);
}
       
function infoPerfil(dados) {
    document.getElementById('nome').innerHTML = dados.name;

    document.getElementById('login').innerHTML = `Login: ${dados.login}`;

    document.getElementById('linkUrl').setAttribute('href', dados.html_url);
}

function bio(dados) {
    document.getElementById('bio').innerHTML = dados.bio;
}
  