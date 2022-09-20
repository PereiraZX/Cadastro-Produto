function botao(){
    //*let = variaveis temporarias*/ 
         let emailuser = document.getElementById("i_emauser");
         let senha= document.getElementById("i_senha");
         let emaicad = document.getElementById("i_emcad");
         let senhacad= document.getElementById("i_sencad");
         let datacad= document.getElementById("i_datacad");
         let nomeprod = document.getElementById("i_nome");
         let qnt= document.getElementById("i_quantidade");
         let modelo = document.getElementById("modelo");
    
    muda_estilo(emailuser);
    muda_estilo(senha);
    muda_estilo(emaicad);
    muda_estilo(senhacad);
    muda_estilo(datacad);
    muda_estilo(nomeprod);
    muda_estilo(qnt);
    muda_estilo(modelo);
    }
     
    
    
    function muda_estilo(input) {/*parametro para facilitar a utilizacao de funcoes o que vem dentro () é oq vamos verificar*/
     
        let estilo_e ="2px solid #ff0000";
        let estilo_c ="2px solid #ff0000";
        let erro = document.getElementById("d_erro");
     
        if (!input.checkValidity()){
            erro.style.display = "block"; 
            return input.style.border = estilo_e;
    
     }
    
     return input.style.border = estilo_c;
    
    
    }

    function mostrarocultar(){
        var senha=document.getElementById("i_senha")

        if(senha.type=="password"){
            senha.type="text";
        }else{
            senha.type="password";
        }





    }