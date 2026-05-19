import { create_tag_input_button, create_tag_input, create_tag_input_txt, create_tag_textarea } from "../src/front/criacoes.js"

import { Edicao} from "../src/front/notes.js"
const dados = new Edicao()


// console.log()

const formulario = document.getElementById("32rwr")

const input_ttl = create_tag_input_txt("132e2edsdvf", dados.carregar_titulo())

const input_txt = create_tag_textarea("23rdwe", dados.carregar_texto())

const bto_sv = create_tag_input_button("657trf", "salvar")

bto_sv.addEventListener("click", ()=>{
    formulario.addEventListener("submit", (event)=>{
        event.preventDefault()

        const nv_ttl = document.getElementById("132e2edsdvf").value
        const nv_dscrc = document.getElementById("23rdwe").value

        

        console.log("este é o novo titulo\n-->", nv_ttl)

    })
})

formulario.appendChild(input_ttl)

formulario.appendChild(input_txt)


formulario.appendChild(bto_sv)

