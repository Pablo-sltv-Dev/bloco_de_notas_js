export function create_tag_div(ide){
    const div = document.createElement("div")
    // console.log(ide)
    if (ide !== undefined){
        div.id = String(ide);
    }else{
        div.classList.add("container")
    }
    return div
}

export function create_tag_h3(text){
    const h = document.createElement("h3")
    h.textContent = String(text)
    return h
}

export function create_tag_p(text){
    const p = document.createElement("p")
    p.textContent = String(text)

    return p
}


export function create_tag_section(ide){
    const sec = document.createElement("section")
    if (ide !== undefined){
        sec.id = String(ide);
    }else{
        sec.classList.add("sections")
    }
    return sec
}


export function create_tag_form(ide){
    const form = document.createElement("form")
    if(ide === undefined){
        return alert("erro de criacao, define o ip");
    }else{
        form.id = ide
        return form

    }

}

export function create_tag_input(vl){
    const box = document.createElement("input")
    box.type="checkbox";
    box.name = "opcoes";
    box.id = vl.titulo;
    box.setAttribute("type", "checkbox");
    box.setAttribute("id", vl.titulo);
    // box.setAttribute("name", vl.titulo);
    // box.setAttribute("value", vl)
    // console.log(vl)
    box.value = JSON.stringify(vl)
    return box
}

export function create_tag_label(dados){
    const label = document.createElement("label")
    // const info = create_tag_input(dados)
    // label.appendChild(info)
    label.appendChild(create_tag_h3(dados.titulo))
    label.appendChild(create_tag_p(dados.descricao))

    return label
}
export function create_tag_input_s(){
    const button = document.createElement("input")
    button.type="submit";
    button.value = "enviar"
    return button;
}