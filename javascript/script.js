/* Objetos: Macroeconomia e Microeconomia */
var macroeconomia = {
			conceito1: "Introdução à Macroeconomia", 
			conceito2: "Controle de Preços", 
			conceito3: "Conceito 3"
		};
var microeconomia = {
			conceito1: "Introdução à Microeconomia", 
			conceito2: "Conceito 2", 
			conceito3: "Conceito 3"
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
	createOptionsMenu();
	document.getElementById("option1").innerHTML = microeconomia.conceito1;
	document.getElementById("option2").innerHTML = microeconomia.conceito2;
	document.getElementById("option3").innerHTML = microeconomia.conceito3;
}

function alterOptionsMacroEconomia(){
	createOptionsMenu();
	document.getElementById("option1").innerHTML = macroeconomia.conceito1;
	document.getElementById("option2").innerHTML = macroeconomia.conceito2;
	document.getElementById("option3").innerHTML = macroeconomia.conceito3;
}

function createOptionsMenu(){
	document.getElementById('options').innerHTML = '<ul class="options-menu"> <li id="option1"></li> <li id="option2"></li> <li id="option3"></li></ul>';
}

/* alterar conteudo bloco principal */
function alterContentText(){
	document.getElementById("content-title").innerHTML = "Introdução ao Projeto";
	document.getElementById("content-text").innerHTML = "&nbsp&nbsp&nbsp&nbspEste projeto tem como objetivo apresentar conceitos relevantes compreendidos ao longo da disciplina de Economia para Computação (ACH2047). <br>"
                + "&nbsp&nbsp&nbsp&nbspOs integrantes deste grupo são:<br>"
                + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspAna Paula Bruno Carbone (9761805)<br>"
                + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspBeatriz Pozzan do Santos Duarte (9779109)<br>"
                + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspFernando d'Avila Axthelm (9761805)<br>"
                + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspFernando de Freitas (9778901)";
}

function alterContentTextMacro(){
	document.getElementById("content-title").innerHTML = "Macroeconomia";
	document.getElementById("content-text").innerHTML = "Texto sobre macroeconomia";
}

function alterContentTextMicro(){
	document.getElementById("content-title").innerHTML = "Microeconomia";
	document.getElementById("content-text").innerHTML = "Texto sobre microeconomia";
}

