import { Bnc } from "../src/bnc.js";
const formulario = document.getElementById("frmlrio");

    formulario.addEventListener("submit", (event)=>{
        event.preventDefault();
        // const dados = carregar_dados(); // original

        const dados = new Bnc().carregar_dados();
        // dados.carregar_dados()

        // console.log(dados);
        // localStorage.clear()
      
        
        const nota = {
            titulo : document.getElementById("ttl_nt").value,
            descricao : document.getElementById("desc_nt").value
        }
       
      
        // console.log("titulo: ",nota.titulo, "\nDescrição: ", nota.descricao);

        // console.log(dados)
        // dados.carregar_dados()
        // console.log(dados)

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


