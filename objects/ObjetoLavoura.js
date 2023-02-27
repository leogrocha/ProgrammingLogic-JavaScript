let lavouras = [

    {id: 1, nome_imovel: 'Fazenda 1', proprietario: 'Seu Madruga'},
    {id: 2, nome_imovel: 'Fazenda 2', proprietario: 'Seu Barriga'},
    {id: 3, nome_imovel: 'Fazenda 3', proprietario: 'Chaves'}
  
  ]
  
  lavouras.push({})
  
  let temLavouraVazia = false;
  for(let i = 0; i < lavouras.length; i++) {
      if(Object.keys(lavouras[i].length === 0)) {
        temLavouraVazia = true;
      }
  }
  
  console.log(temLavouraVazia); // true
  
  Object.assign(lavouras[lavouras.length - 1], {
    id: 4,
    nome_imovel: 'Fazenda 4',
    proprietario: 'Quico'
  })
  
  for(let indice in lavouras) {
    console.log(lavouras[indice]);
  }
  
  lavouras[2].nome_imovel = 'Fazenda Alterada';
  lavouras[2].elemento_novo = 'Elemento Novo';
  console.log(lavouras[2].elemento_novo);
  