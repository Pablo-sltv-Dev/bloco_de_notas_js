import { Bnc, Note } from "../src/back/bnc.js"
import { create_tag_input_button, create_tag_input_txt, create_tag_textarea } from "../src/front/criacoes.js"

import { Edicao} from "../src/front/notes.js"




const dados = new Edicao()


// console.log()

const formulario = document.getElementById("32rwr")

const input_ttl = create_tag_input_txt("132e2edsdvf", dados.carregar_titulo())

const input_txt = create_tag_textarea("23rdwe", dados.carregar_texto())

const bto_sv = create_tag_input_button("657trf", "salvar", true)

bto_sv.addEventListener("click", ()=>{
    formulario.addEventListener("submit", (event)=>{
        event.preventDefault()

        const edited_note = new Bnc()

        const note_edited = new Note(document.getElementById("132e2edsdvf").value, document.getElementById("23rdwe").value )
        

        // console.log(note_edited)
        const resp = edited_note.save_note_edited(note_edited.note_completed())

        if (resp === true){
            sessionStorage.clear()
            window.location.href = "../../index.html"
        }


    })
})

formulario.appendChild(input_ttl)

formulario.appendChild(input_txt)


formulario.appendChild(bto_sv)

