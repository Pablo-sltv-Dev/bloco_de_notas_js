import { create_tag_div, create_tag_h3, create_tag_p, create_tag_section } from "../src/criacoes.js";
import { vz_notes, vz_notes_form, retirada } from "../src/notes.js";


const bto_adc = document.getElementById("adc");
const bto_slct = document.getElementById("slct_nt");



bto_adc.addEventListener("click", ()=>{
    window.location.href = "./templates/adc.html"
})

const mn = document.querySelector('main')
const notes = vz_notes()

mn.appendChild(notes)

bto_slct.addEventListener("click", ()=>{
    mn.removeChild(notes)
    bto_adc.disabled = true
    setTimeout(()=>{
        const ot = vz_notes_form()
        mn.appendChild(ot)
        const bto_nvo = document.getElementById("nt_excl");
        bto_nvo.addEventListener("submit", (event)=>{
            event.preventDefault()
            const dds = new FormData(bto_nvo);
            const selecionado = dds.get("opcoes")

            const resp = retirada(selecionado)
            if (resp === true){
                window.location.href ="../../index.html"
            }
        })
    })
})