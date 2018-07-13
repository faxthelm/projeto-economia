/*  MACROECONOMIA */

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
                        + '<p class="texto-esquerda">Podemos pegar como exemplo o mercado de computadores. Pensando que o mercado de computadores é livre de regulamentações, o seu preço se ajustará para equilibrar a oferta e a demanda ao preço de equilíbrio, que no exato momento é R$ 1.000.</p>'
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


/* MICROECONOMIA */

/* ELASTICIDADE */

function exemplo1(){
	document.getElementById('titulo-explicacao').innerHTML = '<b>Primeiro Exemplo:</b> suponhamos que o aumento de 10% no preço da batata cause uma queda de 20% na quantidade de batata que é comprada:';
	document.getElementById('explicacao').innerHTML = 'EPD = 20% / 10% = 2. <br/><br/>Neste caso, a variação da quantidade demandada é duas vezes maior que a variação de preços. Portanto com o aumento dos preços da batata, a queda na vontade dos consumidores comprarem pode ser medida quantitativamente, e comparada a outros para determinar qual dos bens está sendo mais prejudicado com o aumento de preços.';
}

function exemplo2(){
	document.getElementById('titulo-explicacao').innerHTML = '<b>Segundo Exemplo: </b> Simulação da elasticidade-preço demanda com dois bens: computadores e televisões:';
	document.getElementById('explicacao').innerHTML = '<b>Cálculo da Elasticidade-Preço de Demanda do Computador:</b><br/>VPQD: 35%<br/>VPP: 20%'
														+ '<br/><br/><b>Cálculo da Elasticidade-Preço de Demanda da Televisão:</b><br/>VPQD: 15%<br/>VPP: 10%'
														+'<br/><br/><b>Portanto:</b><br/>EAP do Computador: 1,75<br/>EAP da Televisão: 1,5'
														+ '<br/><br/>Deste modo, é possível notar que os computadores estão sendo mais prejudicados visto que a queda no consumo é maior com o aumento do preço nesta situação do que no caso das televisões.';
}

function elasticidade() {
	document.getElementById('content').innerHTML =  '<div id = "primeiro-conceito" class = "primeiro-conceito">'
                    +'<span class= "esquerda">'
                        + "<h1>Elasticidade</h1>"
                        + '<p class="texto-esquerda">A elasticidade é uma medida da resposta dos compradores e vendedores às mudanças nas condições de mercado, que nos permite analisar a demanda com maior precisão.</p>'
                        + '<p class="texto-esquerda">Para observar a demanda quantitativamente, e medir o quanto os consumidores reagem a mudança das variáveis que veremos posteriormente, usamos a elasticidade.</p>'
                        + '<p class="texto-esquerda">A lei da demanda afirma que a queda do preço de um bem, aumenta a quantidade demandada. A demanda por um bem é chamada elástica se a quantidade demandada se ajusta substancialmente a mudança de preço, e inelástica se ajusta pouco ou nada a mudança de preço.</p>'
                        + '<h2>Elasticidade-Preço da Demanda</h2>'
                        + '<p class="texto-esquerda">É uma medida do quanto a quantidade demandada de um bem reage a uma mudança no preço do bem em questão. Com base na experiência, entretanto, podemos apresentar algumas regras gerais sobre o que determina a elasticidade-preço da demanda.</p>'
                        + '<p class="texto-esquerda"><b>Disponibilidade de substitutos próximos</b> - bens com substitutos próximos tendem a ter uma demanda mais elástica, porque é mais fácil para os consumidores os substituir.Exemplo: a demanda por manteiga é mais elástica do que por ovos, porque é mais fácil encontrar substituto para a manteiga como a margarina, do que para ovos.</p>'
                        + '<p class="texto-esquerda"><b>Bens necessários versus Bens supérfluos</b> - bens necessários tendem a ter uma demanda mais inelástica do que os bens supérfluos. Exemplo: mesmo que os preços das consultas médicas aumentem, sua demanda é menos elástica do que a demanda pela compra de lanchas.</p>'
                        + '<p class="texto-esquerda"><b>Definição de mercado</b> - A elasticidade da demanda em qualquer mercado depende de como definimos o limite deste. Mercados definidos de forma restrita são mais inelásticos, uma vez que é mais difícil de encontrar produtos substitutos para eles.</p>'
                        + '<p class="texto-esquerda"><b>Horizonte de tempo</b> - os bens tendem a apresentar demanda mais elástica em horizontes de tempo mais longos.	Exemplo: quando o preço da gasolina sobe, a demanda cai pouco nos primeiros meses. Com o passar do tempo, as pessoas trocam seus carros, por aqueles que gastam menos combustível, começam a usar o transporte público, bicicletas.</p>'
                        + ''
                    + "</span>"
                    + '<span class="direita">'
                    
                       + '<span class="escolhe-precos">'
                            + "<h4>Calculando a Elasticidade-Preço da Demanda:</h3>"
                            + '<p>Fórmula: <b>EPD = VPQD / VPP</b></p>'
                            + '<p>Legenda:</p>'
                            + '<p>&nbsp&nbsp&nbsp&nbsp<b>EDP: </b>Elasticidade-Preço Demanda</p>'
                            + '<p>&nbsp&nbsp&nbsp&nbsp<b>VPQD: </b>Variação Percentual da Quantidade Demandada</p>'
                            + '<p>&nbsp&nbsp&nbsp&nbsp<b>VPP: </b>Variação Percentual do Preço</p>'
                            + '<ul class="menu-opcoes">'
                                + '<li class="opcao"><button onclick="exemplo1()">Primeiro Exemplo</button></li>'
                                + '<li class="opcao"><button onclick="exemplo2()">Segundo Exemplo</button></li>'
                            + "</ul>"
                            + '<p id="titulo-explicacao"><b>Primeiro Exemplo:</b> suponhamos que o aumento de 10% no preço da batata cause uma queda de 20% na quantidade de batata que é comprada:</p>'
                            + '<p id="explicacao">EPD = 20% / 10% = 2. <br/><br/>Neste caso, a variação da quantidade demandada é duas vezes maior que a variação de preços. Portanto com o aumento dos preços da batata, a queda na vontade dos consumidores comprarem pode ser medida quantitativamente, e comparada a outros para determinar qual dos bens está sendo mais prejudicado com o aumento de preços.</p>'
                        + "</span>"
                        
                    + "</span>"
                    + '</div>';


}