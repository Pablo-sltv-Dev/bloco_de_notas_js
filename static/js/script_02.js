import { salvar_dados, carregar_dados } from "../src/bnc.js";
const formulario = document.getElementById("frmlrio");

    formulario.addEventListener("submit", (event)=>{
        event.preventDefault();
        const dados = carregar_dados();
        // console.log(dados);
        // localStorage.clear()
      
        
        const nota = {
            titulo : document.getElementById("ttl_nt").value,
            descricao : document.getElementById("desc_nt").value
        }
       
      
        // console.log("titulo: ",nota.titulo, "\nDescrição: ", nota.descricao);

        dados.push(nota)
        // console.log(dados)
        // let e = []
        const s = salvar_dados(dados);        
        if (s === true){
            // console.log("deu certo\n", dados)
            window.location.href = "../../index.html";
        }else{
            alert("erro")
        }
        console.log(dados[0])
        
    })


