let fruta = "morango, "
let frutas = ["kiwi", " manga", " uva"]
let banana = {
    "cor": "Amarela", 
    "leguminosa": "Não",
    "fruta": "Sim",
    "sabor": "Doce"
}
let batata = {
    "cor": "Amarela", 
    "leguminosa": "Não",
    "fruta": "Não",
    "sabor": "Levemente terroso"
}
let colegas = {
    "Marcelo": {
        "apelido": "Marquito",
        "alto": "Sim",
        "cor do tênis": "Azul",
        "frequenta": "Sim"
    }, 

    "Vitória": {
        "apelido": "Vi",
        "alto": "Sim",
        "cor do tênis": "Azul",
        "frequenta": "Sim"
    }
}
console.log("A cor da banana é: " + banana.cor + ". Ela é leguminosa? " + banana.leguminosa + ". Ela é uma fruta? " + banana.fruta + ". Qual é o seu sabor? " + banana.sabor) 
console.log("A cor da batata é: " + batata.cor + ". Ela é leguminosa? " + batata.leguminosa + ". Ela é uma fruta? " + batata.fruta + ". Qual é o seu sabor? " + batata.sabor)
console.log("Quem é o seu colega?: " + colegas.Marcelo.apelido + ". Ele é alto?: " + colegas.Marcelo.alto + ". Qual é a cor do tênis dele?: " + colegas.Marcelo.cordotenis + ". Ele frequenta?: " colegas.Marcelo.frequenta)