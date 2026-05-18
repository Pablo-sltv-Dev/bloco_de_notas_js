import { Bnc } from "../src/back/bnc.js";
import { create_tag_div, create_tag_h3, create_tag_p, create_tag_section } from "../src/front/criacoes.js";
import { vz_notes, vz_notes_form, retirada, edit } from "../src/front/notes.js";


const bto_adc = document.getElementById("adc");
const bto_slct = document.getElementById("slct_nt"); // 01



bto_adc.addEventListener("click", ()=>{
    window.location.href = "./templates/adc.html"
})

const mn = document.querySelector('main')
const notes = vz_notes()

mn.appendChild(notes)

bto_slct.addEventListener("click", ()=>{ //02 
    mn.removeChild(notes)
    bto_adc.disabled = true
    setTimeout(()=>{
        const ot = vz_notes_form()
        mn.appendChild(ot)

        const form_nt = document.getElementById("nt_excl");

        const bto_edt = document.getElementById("w243r");
        const bto_rmv = document.getElementById("w3646");

        // const bto_nvo = document.getElementById("nt_excl");

        // console.log(bto_nvo)

        bto_edt.addEventListener("click", ()=>{
            form_nt.addEventListener("submit", (event)=>{
                event.preventDefault()

                const dds = new FormData(form_nt);
                const selecionado = dds.get("opcoes")

                console.log(selecionado)
               const tdf = edit(selecionado)
                
                return window.location.href = "../../templates/edit.html"

            })
        })
        bto_rmv.addEventListener("click", (event)=>{
            form_nt.addEventListener("submit", (event)=>{
                event.preventDefault()
                const dds = new FormData(form_nt);
                const selecionado = dds.get("opcoes")
    
                const resp = retirada(selecionado)
                if (resp === true){
                    window.location.href ="../../index.html"
                }
            })

        })
    })
})