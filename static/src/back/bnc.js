
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

    remove_data(indi){
        console.log(indi)

        const dds = this.carregar_dados()
        
        const nv_dds = dds.filter( x=> dds.indexOf(x) != indi)


        // console.log(nv_dds)
        return this.salvar_dados(nv_dds)
    }

    save_note_edited(note){
        // console.log(note)
        const dados_antigos = this.carregar_dados()


        dados_antigos.push(note)


        console.log(dados_antigos)
        const nvs_dados = this.salvar_dados(dados_antigos)

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





