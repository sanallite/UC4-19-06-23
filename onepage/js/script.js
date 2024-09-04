let roundiconsvr= document.getElementById("roundiconsid");
let frameworkvr= document.getElementById("frameworkid");
let treehousevr= document.getElementById("treehouseid");

let texto= document.createElement("h2");

texto.setAttribute("class", "h2Portfolio");

function portfolioTextos(acao) { if (acao === 'roundiconspr') {
        texto.textContent= "Aplicativos e jogos. Para usos profissonais, educacionais e recreativos.";

        roundiconsvr.appendChild(texto);
    }

    else if (acao === 'frameworkpr') { 
        texto.textContent="Frameworks, Wireframes e Designs para sites e aplicativos.";

        frameworkvr.appendChild(texto);
    }

    else if (acao === 'treehousepr') { 
        texto.textContent="Sites sobre soluções digitais criativas, inclusive para os problemas mais obscuros.";
        
        treehousevr.appendChild(texto);
    }
}
// Não se esqueça das aspas na hora de dar nome a um parâmetro!

function esconderTextos(acao) { if (acao === 'roundiconspr') {
        let localTexto= document.getElementById("roundiconsid");
        localTexto.textContent="";
    }

    else if (acao === 'frameworkpr') { 
        let localTexto= document.getElementById("frameworkid");
        localTexto.textContent="";
    }

    else if (acao === 'treehousepr') { 
        let localTexto= document.getElementById("treehouseid");
        localTexto.textContent="";
    }
}

var index = 0;
elementos();

function elementos(){ let i;
    let elementspan= document.getElementsByClassName("carrosselprof")[0].getElementsByTagName("span");
    /* Para atribuir a variável elementspan apenas a tag span que está demtro da classe  */

    let anteriorvr= document.getElementsByClassName("anterior")[0];

    let posteriorvr= document.getElementsByClassName("posterior")[0];

    for (i=0; i<elementspan.length; i++) { elementspan[i].classList.remove("active");
    }
    index++;

    if (index > elementspan.length){index = 1;
    }
    /* Se a variável index for maior que a quantidade de itens, mudará o valor da variável para 1. */

    elementspan[index - 1].classList.add("active");
    /* O elemento atual do carrossel. */

    anteriorvr.onclick= function(){ index-= 2;
        /* Quando a seta de voltar for cli  cado, decrementará em 2, para voltar ao elemento anterior.  */
        elementos();
    }

    posteriorvr.onclick = function(){ elementos();   
    }

    setInterval(elementos, 10000);
}