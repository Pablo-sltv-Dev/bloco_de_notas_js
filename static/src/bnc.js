
export class Bnc {
    constructor(){
        if (localStorage.getItem("notas") !== null){

            return
        }else{
        this.salvar_dados([])
        }
    }

    carregar_dados(){
    const dados = JSON.parse(localStorage.getItem("notas"))
    return dados
}
    salvar_dados(dados){
    localStorage.clear()
    localStorage.setItem("notas", JSON.stringify(dados))
    return true
        
    
}


}




