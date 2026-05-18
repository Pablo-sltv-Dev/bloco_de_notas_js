import { Bnc, Note } from "../src/back/bnc.js";
const formulario = document.getElementById("frmlrio");



const bto222 = document.getElementById("r5t3")

bto222.addEventListener("click", ()=>{
    formulario.reset()

})

formulario.addEventListener("submit", (event)=>{
        event.preventDefault();

        const dados = new Bnc().carregar_dados();
    
      
        
        const nota = new Note(document.getElementById("ttl_nt").value, document.getElementById("desc_nt").value)
      
        // console.log(nota)

        dados.push(nota.note_completed())
        
        // console.log(dados)
        let e = []
       const s = new Bnc().salvar_dados(dados);        
        if (s === true){
            window.location.href = "../../index.html";
        }else{
            alert("erro")
        }
        formulario.reset()
    })


