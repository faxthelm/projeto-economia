function explicaGrafico1(){
	document.getElementById("grafico").src="img/graficos/grafico1.png";
    document.getElementById('explicacao').innerHTML = "Neste caso o <b>preço máximo é igual ao preço de equilíbrio</b>. As forças de mercado movem naturalmente a economia em direção ao equilíbrio e o preço máximo <b>NÃO</b> exerce efeito sobre o preço e a quantiade vendida.";
}

function explicaGrafico2(){
	document.getElementById("grafico").src="img/graficos/grafico2.png";
    document.getElementById('explicacao').innerHTML = "Neste caso chamamos o preço máximo de <b>não obrigatório</b>. As forças de mercado movem naturalmente a economia em direção ao equilíbrio e o preço máximo <b>NÃO</b> exerce efeito sobre o preço e a quantiade vendida.";
}

function explicaGrafico3(){
	document.getElementById("grafico").src="img/graficos/grafico3.png";
    document.getElementById('explicacao').innerHTML = "Neste caso, o preço que foi colocado age como uma restrição obrigatória sobre o mercado. A este preço a quantidade demandada é de 2.500 e excede a quantidade ofertada que é de 1.500, portanto o que vamos ter é uma <b>ESCASSEZ</b> de 1000 unidades. De maneira que algumas pessoas que desejam comprar computadores não conseguirão:<br>Portanto mecanismos de racionamento serão desenvolvidos:<br><b>Filas</b> ou os vendedores criarão critérios pessoais para vender só para quem acharem que merece ter o computador.<br><b>Conclusão:</b> Embora o preço máximo tenha sido criado em beneficio dos compradores, nem todos os compradores se beneficiarão";
}


function controlePrecos() {
	document.getElementById('content').innerHTML =  '<div id = "primeiro-conceito" class = "primeiro-conceito">'
                    +'<span class= "esquerda">'
                        + "<h1>Oferta, demanda e políticas governamentais</h1>"
                        + "<h2>Controle de preços</h2>"
                        + '<p class="texto-esquerda">Podemos pegar como exempo o mercado de computadores. Pensando que o mercado de computadores é livre de regulamentações, o seu preço se ajustará para equilibrar a oferta e a demanda ao preço de equilíbrio, que no exato momento é R$ 1.000.</p>'
                        + '<p class="texto-esquerda">Entretanto nem todos estão felizes com esse preço e a Associação de Consumidores de Computadores reclamou, dizendo que é um preço muito elevado para qu todos possam ter acesso a esse bem. Esse grupo fez <i>lobby</i> no governo para que os legisladores aprovem leis que alterem o mercado  por meio de uma política de controle direto de preços.</p>'
                        + '<p class="texto-esquerda">Portanto você é um legislador e tem como objetivo estabelecer um preçio máximo para o computador.</p>'

                        

                    + "</span>"

                    + '<span class="direita">'
                    
                       + '<span class="escolhe-precos">'
                            + "<h4>Escolha o máximo preço que pode ser vendido um computador:</h3>"
                            + '<ul class="menu-opcoes">'
                                + '<li class="opcao"><button onclick="explicaGrafico2()">R$ 1.200,00</button></li>'
                                + '<li class="opcao"><button onclick="explicaGrafico2()">R$ 1.100,00</button></li>'
                                + '<li class="opcao"><button onclick="explicaGrafico1()">R$ 1.000,00</button></li>'
                                + '<li class="opcao"><button onclick="explicaGrafico3()">R$ 900,00</button></li>'
                            + "</ul>"

                           + '<img id="grafico" width="410px" height="350px" src="img/graficos/grafico1.png">'
                            + '<p id="explicacao">Neste caso o preço máximo é igual ao preço de equilíbrio. As forças de mercado já estão se movendo dentro dessa faixa, portanto esse preço máximo não exerce efeito sobre a quantidade vendida.</p>'
                        + "</span>"
                        
                    + "</span>"
                   + "<br>"
                    + "<span>"
                        + "<p>Fonte: Mankiw G. Introdução a Economia  </p>"
                    + "<span>"
                    
            + "</div>";
}