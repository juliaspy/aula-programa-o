//calça tem 4 bolsos, 2 primeiros = mais fundos. primeiro bolso = carteira, celular e chave. segundo bolso = cadeado, outra chave e cartão de visita
let calça = {
    "bolso1": { 
        "contem": ["carteira", " celular", "chave"],
        "fundo": true
    },
    "bolso2": {
        "contem":["cadeado", "chave", "cartãoVisita"],
        "fundo": true
    },
    "bolso3": {
        "contem": [], 
        "fundo": false
    },
    "bolso4": { 
        "contem": [],
        "fundo": false
    }
}
console.log("Na minha calça tem" + Object.keys(calça) + "no bolso 1, contem" + calça.bolso1.contem)