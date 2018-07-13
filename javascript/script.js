/* Objetos: Macroeconomia e Microeconomia */
var macroeconomia = {
			introducao: "Introdução à Macroeconomia",
			conceito1: "Controle de Preços",
			conceito2: "Oferta e Demanda"
		};
var microeconomia = {
			introducao: "Introdução à Microeconomia",
			conceito1: "Elasticidade",
			conceito2: "Receita Total"
		};

/* Hearder - Menu - Página inicial; Macroeconomia; Microeconomia */
function initialChanges(){
	alterOptions();
	alterContentText();
}

function macroChanges(){
	alterOptionsMacroEconomia();
	alterContentTextMacro();
}

function microChanges(){
	alterOptionsMicroEconomia();
	alterContentTextMicro();
}

 /* alterar menu de opções */
function alterOptions(){
	document.getElementById("options").innerHTML= "<p>Disciplina: Economia para Computação (ACH2047)</p>";
}


function alterOptionsMicroEconomia(){
	createOptionsMenuMicro();
	document.getElementById("option1").innerHTML = microeconomia.introducao;
	document.getElementById("option2").innerHTML = microeconomia.conceito1;
	document.getElementById("option3").innerHTML = microeconomia.conceito2;
}

function alterOptionsMacroEconomia(){
	createOptionsMenuMacro();
	document.getElementById("option1").innerHTML = macroeconomia.introducao;
	document.getElementById("option2").innerHTML = macroeconomia.conceito1;
	document.getElementById("option3").innerHTML = macroeconomia.conceito2;
}

function createOptionsMenuMacro(){
	document.getElementById('options').innerHTML = '<ul class="options-menu"> <li id="option1" onclick="alterContentTextMacro()"></li> <li id="option2" onclick="controlePrecos()"></li> <li id="option3" onclick="ofertaDemanda()"></li></ul>';
}

function createOptionsMenuMicro(){
	document.getElementById('options').innerHTML = '<ul class="options-menu"> <li id="option1" onclick="alterContentTextMicro()"></li> <li id="option2" onclick="elasticidade()"></li> <li id="option3" onclick="receitaTotal()"></li></ul>';
}

/* alterar conteudo bloco principal */
function alterContentText(){
	patternContent();
	document.getElementById("content-title").innerHTML = "Introdução ao Projeto";
	document.getElementById("content-text").innerHTML = "&nbsp&nbsp&nbsp&nbspEste projeto tem como objetivo apresentar conceitos relevantes compreendidos ao longo da disciplina de Economia para Computação (ACH2047). <br>"
                + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspOs integrantes deste grupo são:<br>"
                + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspAna Paula Bruno Carbone (9761805)<br>"
                + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspBeatriz Pozzan do Santos Duarte (9779109)<br>"
                + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspFernando d'Avila Axthelm (9761805)<br>"
                + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspFernando de Freitas (9778901)";
	document.getElementById("content-economy").innerHTML = "<h1>Sobre Economia</h1>"
										+ " <p>&nbsp&nbsp&nbsp&nbspEconomia tem origem nas palavras gregas oikos e nomos, as quais significam administração da casa, e estado, respectivamente. É a ciência social que estuda como o indivíduo e a sociedade alocam os recursos escassos para melhor atender as necessidades humanas. A economia moderna pode ser divida em: Economia Descritiva, Teoria Econômica e Economia Aplicada.<br>"
										+ "&nbsp&nbsp&nbsp&nbspVamos nos aprofundar na Teoria Econômica, que por sua vez divide-se em: Microeconomia e Macroeconomia. Como sugerem os nomes, esses dois conceitos diferem pela perspectiva que adotam para observar a economia."
										+ "</p>";
}

function alterContentTextMacro(){
	patternContent();
	document.getElementById("content-title").innerHTML = "Macroeconomia";
	document.getElementById("content-text").innerHTML = "&nbsp&nbsp&nbsp&nbspMacroeconomia estuda o funcionamento da economia de um país de uma forma mais abrangente, de modo a considerar as variáveis globais. Algumas destas variáveis são:  o nível geral de preços, emprego e desemprego, renda, produto nacional, investimentos, taxa de câmbio, balanço de pagamento, inflação, poupança e consumo, estoque de moeda, políticas fiscais, monetárias, cambiais, e outros fatores."
														+ "<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspA estrutura macroeconômica é composta por 5 mercados:<br>"
														+ "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp1. Mercados de Bens e Serviços;<br>"
														+ "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp2. Mercado de Trabalho;<br>"
														+ "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp3. Mercado Monetário;<br>"
														+ "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp4. Mercado de Títulos;<br>"
														+ "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp5. Mercado de Divisas;<br>"
														+ "&nbsp&nbspA macroeconomia estuda as principais tendências obtidas através dos processos microeconômicos da economia, no que pertence principalmente à produção, geração de renda, uso de recursos, comportamento de preços e o comércio exterior. ";

	document.getElementById("content-economy").innerHTML = '<img id="content-image" src="img/img-macro.jpg">';
}

function alterContentTextMicro(){
	patternContent();
	document.getElementById("content-title").innerHTML = "Microeconomia";
	document.getElementById("content-text").innerHTML = "&nbsp&nbsp&nbsp&nbspA microeconomia desenvolve estudos a partir de construções teóricas importantes: a teoria do consumidor, que busca entender o comportamento e as escolhas das pessoas na economia; a teoria de empresa, focada nas corporações e na relação entre capital e trabalho; e a teoria da produção, que analisa minuciosamente a evolução do processo produtivo."
														+ "<br>&nbsp&nbsp&nbspSe a macroeconomia olha para o todo, a microeconomia se encarrega de estudar os detalhes. Também denominada como Teoria dos Preços, trata do comportamento das empresas, famílias e indivíduos. Lida com a oferta de um determinado bem ou serviço em relação às preferências dos consumidores, conceitualizando a demanda. Estuda os monopólios, oligopólios, monopsônios e concorrência perfeita."
														+ "<br>&nbsp&nbspA macroeconomia se interessa, por exemplo, pelo resultado das contas públicas e suas consequências para a dívida pública, para os juros, investimentos e para o resultado da produção (PIB). Por outro lado, a microeconomia visa questões como diferenças salariais entre diferentes grupos da sociedade, funcionamentos dos diversos setores econômicos e as motivações das decisões dos consumidores. São dois ramos complementares entre si. Os resultados observados no conjunto da obra (macroeconomia) podem ser melhor entendidos ao se analisar o nível unitário (microeconomia) - e vice-versa.";
	document.getElementById("content-economy").innerHTML = '<img id="content-image" src="img/img-micro.jpg">';
}


function patternContent(){
	document.getElementById("content").innerHTML = '<div class="content-economy" id="content-economy"></div>'
												+ '<div class = "content-text">'
												+ '<h2 id="content-title"></h2>'
												+ '<p align="justify" id="content-text"></p>'
												+ '</div>';
}
