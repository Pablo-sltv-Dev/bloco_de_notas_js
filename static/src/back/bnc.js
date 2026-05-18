
export class Bnc {
    #lugar = "notas";
    constructor(){
        if (localStorage.getItem(this.#lugar) !== null){
            return true
        }else{
            this.salvar_dados([])
        }
    }
    save_tempo(dds){
        sessionStorage.setItem("edition_of_note", JSON.stringify(dds))
    }

    carregar_dados(){
    const dados = JSON.parse(localStorage.getItem(this.#lugar))
    return dados
    }

    salvar_dados(dados){
    localStorage.clear()
    localStorage.setItem(this.#lugar, JSON.stringify(dados))
    return true
    }


}


export class Note{

    constructor(ttl, txt){

        this.note = {
            titulo : String(ttl),
            descricao : String(txt),
            date_of_create: new Date().toLocaleDateString(),
            date_of_modification: new Date().toLocaleDateString()
        }

        
    }
    note_completed(){
        return this.note
    }

    edited(){

    }
    
    
}





