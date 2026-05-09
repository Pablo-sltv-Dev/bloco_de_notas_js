export function salvar_dados(dados){
    localStorage.clear()
    console.log("aqui foi")
    localStorage.setItem("notas", JSON.stringify(dados))
    return true
        
    
}

export function carregar_dados(){
    const dados = JSON.parse(localStorage.getItem("notas"))
    return dados
}


export function retirada(esse){
    const retirar = JSON.parse(esse);
    let nv_lista = []
    let achado = false

    const dados = carregar_dados()
    console.log(dados[0])
     for (let dado of dados){
        if(dado.titulo === retirar.titulo){
            
            achado = true
            // break
        }else{
            nv_lista.push(dado)
        }
    }
    console.log(nv_lista)
    const t = salvar_dados(nv_lista)
    if (t === true){
        return true
    }else{
        return false
    }
   
}