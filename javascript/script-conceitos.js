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
                            + "<h4>Escolha o máximo preço que pode ser vendido um computador:</h4>"
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

function ofertaDemanda(){
	document.getElementById('content').innerHTML = '<div id = "segundo-conceito" class = "segundo-conceito">'
                    +'<span class= "esquerda">'
                        + "<h1>Modelo Clássico de Oferta e Demanda</h1>"
                        + "<h2>O modelo clássico considera que:</h2>"
                        + '<p class="texto-esquerda">Há completa flexibilidade de preços e salários, isto é, se igualam a oferta e a procura de mão-de-obra.</p>'
                        + '<p class="texto-esquerda">As variáveis reais, bem como os preços relativos, não são afetadas pela política monetária. Ou seja, como o nível de atividade e de emprego está determinado automaticamente pelas forças de mercado, a quantidade de moeda afeta apenas o nível geral de preços.</p>'
                        + '<p class="texto-esquerda">A demanda agregada não é um fator determinante do nível de produto. É válida a Lei de Say: “a oferta cria sua própria procura”.</p>'



                    + "</span>"

                    + '<span class="direita">'

                       + '<span class="escolhe-precos">'
                            + '<h4 id="titulo">Oferta agregada clássica:</h4>'
                            + '<ul class="menu-opcoes">'
                                + '<li class="opcao"><button onclick="oferta()">Oferta</button></li>'
                                + '<li class="opcao"><button onclick="demanda()">Demanda</button></li>'
                            + "</ul>"
														+'<div id="conteudoDireita">'
														+'<p>A oferta agregada corresponde ao total de produto que as empresas e famílias estão dispostas a oferecer em um determinado período de tempo, a um determinado padrão de preços. A oferta agregada diz qual será o produto ofertado, a quantidade de produção que será fornecida pelas empresas em conjunto, para cada nível de preços. A existência de um grande número de empresas tira o poder de cada uma delas de influir nas condições de mercado, ou seja, afetar os preços. Para deduzir a oferta agregada é necessário analisar como se determina o nível de produção para cada empresa individual, e por agregação, obtê-la para a economia como um todo. A função de produção retrata a relação entre quantidade produzida e a utilização de fatores de produção com uma dada tecnologia: Y = F (K, N, T), onde:</p>'
														+'<ul>'
														+'<li>Y = produto;</li>'
														+'<li>K = estoque de capital utilizado;</li>'
														+'<li>N = quantidade de trabalho (horas-trabalho) utilizada;</li>'
														+'<li>T = nível tecnológico</li>'
														+ '</ul>'
														+'<p>Todas definidas num dado período de tempo</p>'
														+'<p>A função de produção apresenta o máximo de produto que pode ser obtido para uma dada combinação de fatores, considerando que não haja desperdícios.</p>'+'<p>Considerando um mercado do tipo concorrência perfeita, isto é, um grande número de empresas, que não conseguem afetar o preço dos produtos que vendem e o preço dos fatores de produção. O lucro das empresas corresponde à diferença entre suas receitas com a venda da produção e os custos para gerar o produto.</p>'
														+'<p>Lucro = Receita Total - Custo Total</p>'
														+'<p>Lucro = PY - (WN + RK), onde:</p>'
														+'<ul>'
														+'<li>W = salário nominal por unidade de trabalho N,</li>'
														+'<li>R = custo por unidade de capital K,</li>'
														+'<li>P = preço do produto Y.</li>'
														+'</ul>'
														+'<p>Como o produto (Y) é função da utilização de trabalho, têm-se: Lucro = P F (N) - WN - RK</p>'
														+'<p>Por ser um mercado de concorrência perfeita, as empresas não decidem sobre o preço que vendem seus produtos ou sobre o salário que pagarão ao trabalho. Sua decisão restringe a quantidade de mão-de-obra (N) contratará e quanto irá produzir, de modo a obter lucro máximo.</p>'
														+'</div>'
                        + "</span>"

                    + "</span>"
                   + "<br>"
                    + "<span>"
                        + "<p>Fonte: Mankiw G. Introdução a Economia  </p>"
                    + "<span>"

            + "</div>";
}

function oferta(){
	document.getElementById('titulo').innerHTML = "Oferta agregada clássica:"
	document.getElementById('conteudoDireita').innerHTML ='<p>A oferta agregada corresponde ao total de produto que as empresas e famílias estão dispostas a oferecer em um determinado período de tempo, a um determinado padrão de preços. A oferta agregada diz qual será o produto ofertado, a quantidade de produção que será fornecida pelas empresas em conjunto, para cada nível de preços. A existência de um grande número de empresas tira o poder de cada uma delas de influir nas condições de mercado, ou seja, afetar os preços. Para deduzir a oferta agregada é necessário analisar como se determina o nível de produção para cada empresa individual, e por agregação, obtê-la para a economia como um todo. A função de produção retrata a relação entre quantidade produzida e a utilização de fatores de produção com uma dada tecnologia: Y = F (K, N, T), onde:</p>'
	+'<ul>'
	+'<li>Y = produto;</li>'
	+'<li>K = estoque de capital utilizado;</li>'
	+'<li>N = quantidade de trabalho (horas-trabalho) utilizada;</li>'
	+'<li>T = nível tecnológico</li>'
	+ '</ul>'
	+'<p>Todas definidas num dado período de tempo</p>'
	+'<p>A função de produção apresenta o máximo de produto que pode ser obtido para uma dada combinação de fatores, considerando que não haja desperdícios.</p>'+'<p>Considerando um mercado do tipo concorrência perfeita, isto é, um grande número de empresas, que não conseguem afetar o preço dos produtos que vendem e o preço dos fatores de produção. O lucro das empresas corresponde à diferença entre suas receitas com a venda da produção e os custos para gerar o produto.</p>'
	+'<p>Lucro = Receita Total - Custo Total</p>'
	+'<p>Lucro = PY - (WN + RK), onde:</p>'
	+'<ul>'
	+'<li>W = salário nominal por unidade de trabalho N,</li>'
	+'<li>R = custo por unidade de capital K,</li>'
	+'<li>P = preço do produto Y.</li>'
	+'</ul>'
	+'<p>Como o produto (Y) é função da utilização de trabalho, têm-se: Lucro = P F (N) - WN - RK</p>'
	+'<p>Por ser um mercado de concorrência perfeita, as empresas não decidem sobre o preço que vendem seus produtos ou sobre o salário que pagarão ao trabalho. Sua decisão restringe a quantidade de mão-de-obra (N) contratará e quanto irá produzir, de modo a obter lucro máximo.</p>'
}
function demanda(){
	document.getElementById('titulo').innerHTML = "Demanda agregada clássica:"
	document.getElementById('conteudoDireita').innerHTML ='<p>A demanda agregada é a relação entre a quantidade demandada de bens e serviços e o nível geral de preços. Com essa definição, é possível derivar a demanda agregada no modelo clássico com base na teoria quantitativa da moeda.</p>'
	+'<p>Tem-se:  MV = PY, onde:</p>'
	+'<ul>'
	+'<li>M = quantidade de moeda;</li>'
	+'<li>V = velocidade-renda da moeda;</li>'
	+'<li>P = nível geral de preços;</li>'
	+'<li>Y = renda ou produto real (PY então é o produto nominal ou monetário).</li>'
	+'</ul>'
	+'<p>Esta teoria é vista como uma equação de equilíbrio do mercado monetário, mostra que a oferta de moeda é igual à demanda de moeda e que a demanda é proporcional à quantidade do produto real Y. A demanda agregada não é um fator determinante do nível de produto da economia. São as condições de oferta que determinam o nível de produto.</p>'
	+'<p>Se o produto real é dado pela oferta, a única variável determinada pela demanda é o nível de preços.</p>'
	+'<p>Como a posição da curva de demanda é determinada pela oferta de moeda, é possível concluir que, no modelo clássico, políticas monetárias expansionistas ampliam a demanda e, como a oferta é dada pelas condições reais, as únicas variáveis afetadas pela moeda são as nominais (preços).</p>'
	+'<p>Dado a oferta de moeda e o nível de produto definido pela oferta agregada, a demanda agregada apenas determina o nível de preços da economia. Alterações na demanda agregada, em decorrência de alterações na oferta de moeda, apenas mudam o nível de preços da economia, sem qualquer impacto sobre o produto real.</p>'
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
                            + "<h4>Calculando a Elasticidade-Preço da Demanda:</h4>"
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

function receitaTotal(){
	document.getElementById('content').innerHTML = '<div id = "segundo-conceito" class = "segundo-conceito">'
										+'<span class= "esquerda">'
												+ "<h1>Receita Total</h1>"
												+ '<p class="texto-esquerda">Ao estudarmos as mudanças da oferta ou da demanda em um mercado, uma variável que normalmente desejamos calcular é a receita total: “a quantia paga pelos compradores e recebida pelos vendedores de um bem”. Em qualquer mercado, a receita total é calculada como o produto do preço pela quantidade total vendida do bem em questão, ou a área do retângulo como no gráfico abaixo.</p>'
												+ '<img src="img/receitatotal1.jpg"></img>'
												+ '<p class="texto-esquerda">Como a receita total varia à medida que nos movemos ao longo da curva de demanda? A resposta depende da elasticidade preço da demanda ja vista no outro tópico sobre microeconomia.</p>'



										+ "</span>"

										+ '<span class="direita">'

											 + '<span class="escolhe-precos">'
																+ '<ul class="menu-opcoes">'
																+ '<li class="opcao"><button onclick="demandaInelastica()">Demanda Inelástica</button></li>'
																+ '<li class="opcao"><button onclick="demandaElastica()">Demanda Elástica</button></li>'
														+ "</ul>"
														+'<div id="conteudoDireita">'
														+'<h4 id="tituloReceita">Demanda Inelástica:</h4>'
														+'<p>Observando o gráfico abaixo um aumento no preço de $1 para $3 de um produto x, provoca uma diminuição pequena de apenas 20 unidades, até porque estamos considerando um bem de demanda inelástica. Um aumento do preço eleva a receita total porque a diminuição na quantidade é proporcionalmente inferior ao aumento no preço. </p>'
														+'<img src="img/demanda-inelastica.jpg"></img>'
														+'</div>'
												+ "</span>"

										+ "</span>"
						+ "</div>";

}

function demandaInelastica(){
	document.getElementById('conteudoDireita').innerHTML = '<h4 id="tituloReceita">Demanda Inelástica:</h4>'
	+'<p>Observando o gráfico abaixo um aumento no preço de $1 para $3 de um produto x, provoca uma diminuição pequena de apenas 20 unidades, até porque estamos considerando um bem de demanda inelástica. Um aumento do preço eleva a receita total porque a diminuição na quantidade é proporcionalmente inferior ao aumento no preço. </p>'
	+'<img src="img/demanda-inelastica.jpg"></img>';
}

function demandaElastica(){
	document.getElementById('conteudoDireita').innerHTML = '<h4 id="tituloReceita">Demanda Elástica:</h4>'
	+'<p>Obtemos um resultado oposto se a demanda é elástica. Observando o gráfico abaixo considere um aumento no preço de $4 para $5 de um bem x, podemos ver que a quantidade demandada diminui de 50 para 20, até porque estamos considerando um bem cuja demanda é inelástica, que pode ter substitutos próximos ou que seja um produto supérfluo. E com isso a receita diminui de $200 para $100. Ou seja um aumento no preço reduz a receita porque a diminuição na quantidade é proporcionalmente maior que o aumento no preço.</p>'
	+'<img src="img/demanda-elastica.jpg"></img>'
	+'<p>Situação: calcular a elasticidade preço da demanda com o método do ponto médio</p>'
	+'<p>Fórmula:</p>'
	+'<p><b>EPD = { (Q2 - Q1)/[(Q2 + Q1)/2] }/ { (P2 - P1) / [(P2 + P1) / 2] }</b></p>'
	+'<p>Resultados Possíveis:</p>'
	+ '<span class="escolhe-precos">'
			 + '<ul class="menu-opcoes">'
		 			+ '<li class="opcao"><button onclick="epdMaior()">EPD > 1</button></li>'
		 			+ '<li class="opcao"><button onclick="epdMenor()">EPD < 1</button></li>'
		 			+ '<li class="opcao"><button onclick="epdIgual()">EPD = 1</button></li>'
		 	+ "</ul>"
	 + "</span>"
	+'<p id="respostasEPD">EPD > 1 - Elasticidade elástica, logo um aumento nos preços gerará a situação descrita no segundo gráfico e a receita total diminuirá.</p>';
}

function epdMaior(){
	document.getElementById('respostasEPD').innerHTML='EPD > 1 - Elasticidade elástica, logo um aumento nos preços gerará a situação descrita no segundo gráfico e a receita total diminuirá.'
}

function epdMenor(){
	document.getElementById('respostasEPD').innerHTML='EPD < 1 - Elasticidade inelástica, logo um aumento nos preços gerará a situação descrita no primeiro gráfico e a receita total aumentará.'
}

function epdIgual(){
	document.getElementById('respostasEPD').innerHTML='EPD = 1 - Elasticidade unitária, sem alteração na receita total.'
}
