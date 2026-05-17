import { Bnc } from "../src/bnc.js";
const formulario = document.getElementById("frmlrio");
let dta = new Date
    formulario.addEventListener("submit", (event)=>{
        event.preventDefault();
  

        const dados = new Bnc().carregar_dados();
    
      
        
        const nota = {
            titulo : document.getElementById("ttl_nt").value,
            descricao : document.getElementById("desc_nt").value,
            // adicionar Data
        }
       
      
        

        dados.push(nota)
        
        // let e = []
       const s = new Bnc().salvar_dados(dados);        
        if (s === true){
            // console.log("deu certo\n", dados)
            window.location.href = "../../index.html";
        }else{
            alert("erro")
        }
        formulario.reset()
    })


