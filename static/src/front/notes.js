import { create_tag_div, create_tag_h3, create_tag_p, create_tag_section, create_tag_form, create_tag_input_check, create_tag_label, create_tag_input_button } from "./criacoes.js";
import { Bnc } from "../back/bnc.js";





export function vz_notes(){
    const section = create_tag_section("blc_nts");
    // ______________________________________________ 
    const dados = new Bnc().carregar_dados();
    
    for (let dado of dados){
        const div = create_tag_div();

        div.appendChild(create_tag_h3(dado.titulo))
        div.appendChild(create_tag_p(dado.descricao))

       
        section.appendChild(div)
    }
    return section
}

export function vz_notes_form(){
    
    const section = create_tag_section("blc_nts");
    const form = create_tag_form("nt_excl");
    // ______________________________________________ 
    const dados = new Bnc().carregar_dados();
    
    
    for (let dado of dados){
        const input = create_tag_input_check(dados.indexOf(dado), dado);
        const lab = create_tag_label(dado);
        
        
        form.appendChild(input);
        form.appendChild(lab);

       
    }
    form.appendChild(create_tag_input_button("w3646", "excluir", ))
    form.appendChild(create_tag_input_button("w243r", "editar", true))
    section.appendChild(form)
    return section
}


export function retirada(esse){
    const retirar = JSON.parse(esse);
    let nv_lista = []
    let achado = false

    const dados = new Bnc().carregar_dados()
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
    const t = new Bnc().salvar_dados(nv_lista)
    if (t === true){
        return true
    }else{
        return false
    }
   
}

export function edit(dados){
    console.log(dados)
    const tv = new Bnc().remove_data(dados.vl_ide)

    const editar = JSON.parse(dados.vlr);
    sessionStorage.setItem("nt_edit", JSON.stringify(editar))
    return "ok"
}

export class Edicao{
    #dados = JSON.parse(sessionStorage.getItem("nt_edit"))
    carregar_titulo(){
        return this.#dados.titulo
    }
    carregar_texto(){
        return this.#dados.descricao
    }
}

