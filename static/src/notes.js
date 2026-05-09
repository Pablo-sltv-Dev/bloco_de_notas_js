import { create_tag_div, create_tag_h3, create_tag_p, create_tag_section, create_tag_form, create_tag_input, create_tag_label, create_tag_input_s } from "./criacoes.js";
import { carregar_dados } from "./bnc.js";


export function vz_notes(){
    const section = create_tag_section("blc_nts");
    // ______________________________________________ 
    const dados = carregar_dados();
    const le_qtdd = dados.length
    
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
    const dados = carregar_dados();
    const le_qtdd = dados.length
    
    for (let dado of dados){
        
        const input = create_tag_input(dado);
        // console.log(input)
        const lab = create_tag_label(dado);
        form.appendChild(input);
        form.appendChild(lab);

       
    }
    form.appendChild(create_tag_input_s())
    section.appendChild(form)
    return section
}