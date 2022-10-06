// export default [
//     {id: 1, nome: 'Seu Madruga', salario: 5000.00},
//     {id: 2, nome: 'Chaves', salario: 5000.00},
//     {id: 3, nome: 'Seu Barriga', salario: 5000.00},
//     {id: 4, nome: 'Quico', salario: 5000.00},
//     {id: 5, nome: 'Professor Linguiça', salario: 5000.00},
// ]

const balanco_ano_atual = [
    {
        "idtipodocumento": 9,
        "tipo": "balanco_ano_atual",
        "titulo": "Balanço Ano Atual",
        "descricao": "Deve ser retirado do sistema ECF",
        "cadastro": false,
        "credito": true,
        "obrigatorio": true,
        "ativo_tipo": true,
        "ativo_documento": true,
        "iddocumento": 563,
        "idpessoa": 11576,
        "data": "2022-10-03",
        "iddocumentoitem": 1467,
        "dataenvio": "2022-10-03",
        "datainicioanalise": "2022-10-03",
        "datafimanalise": "2022-10-03",
        "url": "15_pdfviewer2619204387105330867.pdf",
        "resultadojson": "{\"data\":{\"liquidez_balanco\":[{\"liquidez_variaveis\":{\"ativo\":[{\"T01\":1301904.37},{\"T02\":3579042.96},{\"T03\":9688509.75},{\"T04\":9696366.76}],\"ativo_nao_circulante\":[{\"T01\":32625.29},{\"T02\":31910.87},{\"T03\":31396.45},{\"T04\":30682.03}],\"disponibilidades\":[{\"T01\":321980.35},{\"T02\":382766.01},{\"T03\":5110801.13},{\"T04\":2478593.14}],\"obrigacoes_a_longo_prazo\":[{\"T01\":1190000.66},{\"T02\":1190000.66},{\"T03\":1190000.66},{\"T04\":1190000.66}],\"passivo_nao_circulante\":[{\"T01\":1190000.66},{\"T02\":1190000.66},{\"T03\":1190000.66},{\"T04\":1190000.66}],\"realizavel_a_longo_prazo\":[{\"T01\":0},{\"T02\":0},{\"T03\":0},{\"T04\":0}],\"ativo_circulante\":[{\"T01\":1269279.08},{\"T02\":3547132.09},{\"T03\":9657113.3},{\"T04\":9665684.73}],\"estoques\":[{\"T01\":0},{\"T02\":0},{\"T03\":0},{\"T04\":0}],\"imobilizado\":[{\"T01\":27405.29},{\"T02\":26690.87},{\"T03\":25976.45},{\"T04\":25262.03}],\"passivo_circulante\":[{\"T01\":466929.82},{\"T02\":2891623.76},{\"T03\":9136655.24},{\"T04\":9313289.03}],\"patrimonio_liquido\":[{\"T01\":355026.11},{\"T02\":502581.46},{\"T03\":638146.15},{\"T04\":806922.93}]},\"identificacao\":{\"nome_empresarial\":\"ECTARE PAY SERVICOS DE GESTAO DE PAGAMENTOS S/A\",\"cnpj\":\"34.536.749/0001-70\"},\"periodo\":\"01/01/2020 a 31/12/2020\",\"liquidez_indices\":{\"indice_liquidez_geral\":{\"situacao\":\"ruim\",\"indice\":0.908564983149337},\"indice_liquidez_imediata\":{\"situacao\":\"pessimo\",\"indice\":0.38031691531656775},\"indice_liquidez_seca\":{\"situacao\":\"atencao\",\"indice\":1.106871705058769},\"participacao_capital_terceiros\":{\"situacao\":\"otimo\",\"indice\":11.538094369437413},\"indice_solvencia_geral\":{\"situacao\":\"atencao\",\"indice\":0.9133305753982354},\"indice_endividamento_geral\":{\"situacao\":\"atencao\",\"indice\":1.094893817130752},\"indice_liquidez_corrente\":{\"situacao\":\"atencao\",\"indice\":1.106871705058769},\"imobilizacao_patrimonio_social\":{\"situacao\":\"otimo\",\"indice\":0.04574443398294763}}}]},\"success\":true,\"message\":\"relatorio gerado com sucesso\"}",
        "aprovado": true,
        "alterar": true,
        "rejeitado": false
    }
]


export default {
    "balanco": [balanco_ano_atual]
}