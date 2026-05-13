
export class Bnc {

    carregar_dados(){
    const dados = JSON.parse(localStorage.getItem("notas"))
    return dados
}
    salvar_dados(dados){
    localStorage.clear()
    console.log("aqui foi")
    localStorage.setItem("notas", JSON.stringify(dados))
    return true
        
    
}


}




