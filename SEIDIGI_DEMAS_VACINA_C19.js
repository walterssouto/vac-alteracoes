/*
 *    Fill in host and port for Qlik engine
 */
var prefix = window.location.pathname.substr(0, window.location.pathname.toLowerCase().lastIndexOf("/extensions") + 1);

var config = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};
//to avoid errors in workbench: you can remove this when you have added an app
var app;
var app1;
var app2;
require.config({
	baseUrl: (config.isSecure ? "https://" : "http://") + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources"
});

require(["js/qlik"], function (qlik) {
	window.qlik = qlik;
		//var app = qlik.openApp('e097a86d-c34b-4093-98cb-e30afeb11ffb', config); //APP Desenvolvimento
		//var app = qlik.openApp('573a5d66-b4dd-463f-9534-a5a88b2599b1', config); //APP HML
		app = qlik.openApp('f5098243-3dd0-4b4c-ba0c-12fa00e3e175', config); //APP Produção
		qlik.resize();
		qlik.theme.apply('tema-sage');
		qlik.setOnError(function (error) {
		console.log(error);
	});

	


	//callbacks -- inserted here --
	//open apps -- inserted here --

		if(app) {
			
		app.getObject('data-atualizacao', 'QGxGjM');
		app.getObject('QV1-00', 'AFrCmZx');
		app.getObject('QV1-01', 'NShpJWm');
		app.getObject('CurrentSelections', 'CurrentSelections');

		// Tabela Estado
		app.getObject('QV1', 'bXASUG').then(function (reply) {
			$('#exportar-dados-QV1').click(function () {
				var qTable = qlik.table(reply);
				qTable.exportData({ download: true });
			});
		});


		// Tabela Municipio
		app.getObject('QV2', 'sdtECt').then(function (reply) {
			$('#exportar-dados-QV2').click(function () {
				var qTable = qlik.table(reply);
				qTable.exportData({ download: true });
			});
		});

		// Tabela Municipio IBGE
		app.getObject('QV22', 'RTUvc').then(function (reply) {
			$('#exportar-dados-QV22').click(function () {
				var qTable = qlik.table(reply);
				qTable.exportData({ download: true });
			});
		});



		// Grupos Prioritários
		app.getObject('QV3', 'KtqDmE').then(function (reply) {
			$('#exportar-dados-QV3').click(function () {
				var qTable = qlik.table(reply);
				qTable.exportData({ download: true });
			});
		});

		// Faixa Etária
		app.getObject('QV4', 'JefFN').then(function (reply) {
			$('#exportar-dados-QV4').click(function () {
				var qTable = qlik.table(reply);
				qTable.exportData({ download: true });
			});
		});

		// Faixa Etária - Municipio
		app.getObject('QV4-02', 'CJChhm').then(function (reply) {
			$('#exportar-dados-QV4-02').click(function () {
				var qTable = qlik.table(reply);
				qTable.exportData({ download: true });
			});
		});

		// Doses por dia
		app.getObject('QV5', 'eqm').then(function (reply) {
			$('#exportar-dados-QV5').click(function () {
				var qTable = qlik.table(reply);
				qTable.exportData({ download: true });
			});
		});




		//Total de doses Bivalente
		app.getObject('KPI-BI-01', 'msEpZgs');

		//Total de doses Reforço
		app.getObject('KPI-BI-02', 'MBAzVMY');

		//Total de Outras doses
		app.getObject('KPI-BI-03', 'KTgCNSg');

		// Tabela Estado
		app.getObject('QV1-BI', 'a522f7b0-af83-40e3-b5cd-09524a607fb8').then(function (reply) {
			$('#exportar-dados-QV1-BI').click(function () {
				var qTable = qlik.table(reply);
				qTable.exportData({ download: true });
			});
		});


		// Tabela Municipio
		app.getObject('QV2-BI', '9333e2cf-d6f2-4db9-b39b-b4cff98f40a5').then(function (reply) {
			$('#exportar-dados-QV2-BI').click(function () {
				var qTable = qlik.table(reply);
				qTable.exportData({ download: true });
			});
		});

		// Tabela Municipio IBGE
		app.getObject('QV22-BI', 'RcCpv').then(function (reply) {
			$('#exportar-dados-QV22-BI').click(function () {
				var qTable = qlik.table(reply);
				qTable.exportData({ download: true });
			});
		});


		// Faixa Etária
		app.getObject('QV3-BI', 'SJJMjVz').then(function (reply) {
			$('#exportar-dados-QV3-BI').click(function () {
				var qTable = qlik.table(reply);
				qTable.exportData({ download: true });
			});
		});

		// Faixa Etária - Export Município
		app.getObject('QV3-02-BI', 'xJnZvDa').then(function (reply) {
			$('#exportar-dados-QV3-02-BI').click(function () {
				var qTable = qlik.table(reply);
				qTable.exportData({ download: true });
			});
		});

		// Grupos Prioritários
		app.getObject('QV4-BI', 'VsCTma').then(function (reply) {
			$('#exportar-dados-QV4-BI').click(function () {
				var qTable = qlik.table(reply);
				qTable.exportData({ download: true });
			});
		});

		// Doses por dia
		app.getObject('QV5-BI', 'wNqWH').then(function (reply) {
			$('#exportar-dados-QV5-BI').click(function () {
				var qTable = qlik.table(reply);
				qTable.exportData({ download: true });
			});
		});

		// Doses por sexo e faixa etaria
		app.getObject('QV6-BI', 'XKKyz').then(function (reply) {
			$('#exportar-dados-QV6-BI').click(function () {
				var qTable = qlik.table(reply);
				qTable.exportData({ download: true });
			});
		});

		// Doses por Sexo e Faixa Etaria - Extração
		app.getObject('QV6-2-BI', 'ewjS').then(function (reply) {
			$('#exportar-dados-QV6-2-BI').click(function () {
				var qTable = qlik.table(reply);
				qTable.exportData({ download: true });
			});
		});



		// Doses por tipo Tabela
		app.getObject('QV7-BI', 'VUWbH').then(function (reply) {
			$('#exportar-dados-QV7-BI').click(function () {
				var qTable = qlik.table(reply);
				qTable.exportData({ download: true });
			});
		});

		//Cobertura Vacinal
		app.getObject('QV8-BI', 'CXaqpx').then(function (reply) {
			$('#exportar-dados-QV8-BI').click(function () {
				var qTable = qlik.table(reply);
				qTable.exportData({ download: true });
			});
		});

		//Cobertura Vacinal Export
		app.getObject('QV8-02-BI', 'EYuWrt').then(function (reply) {
			$('#exportar-dados-QV8-02-BI').click(function () {
				var qTable = qlik.table(reply);
				qTable.exportData({ download: true });
			});
		});


		//Cobertura Vacinal Estado
		app.getObject('QV9-BI', 'axPZJs').then(function (reply) {
			$('#exportar-dados-QV9-BI').click(function () {
				var qTable = qlik.table(reply);
				qTable.exportData({ download: true });
			});
		});

		//Cobertura Vacinal Estado - Export
		app.getObject('QV9-02-BI', 'pAPW').then(function (reply) {
			$('#exportar-dados-QV9-02-BI').click(function () {
				var qTable = qlik.table(reply);
				qTable.exportData({ download: true });
			});
		});





		app.getObject('KPI-01', 'BCpGy');
		app.getObject('KPI-02', 'tXAvwK');
		app.getObject('KPI-03', 'Shff');
		app.getObject('KPI-04', 'mMKmgbA');
		app.getObject('KPI-05', 'eTHNaH');
		app.getObject('KPI-06', 'nq');
		app.getObject('KPI-07', 'PYksx');
		app.getObject('KPI-08', 'YpNjJx'); 	//  3° Dose
		app.getObject('KPI-09', 'GjKTJG'); 	//  1 Reforço
		app.getObject('KPI-Bivalente-09', 'GjKTJG'); 	//  1 Reforço
		app.getObject('KPI-10', 'sFxNjmY'); //  3 Reforço

		app.getObject('QV1-Bivalente-01', 'umajs').then(function (reply) {
			$('#exportar-dados-QV1-Bivalente-01').click(function () {
				var qTable = qlik.table(reply);
				qTable.exportData({ download: true });
			});
		}); //Doses aplicadas por unidade geográfica



		app.getObject('QV1-Bivalente-02', 'rXjfUx').then(function (reply) {
			$('#exportar-dados-QV1-Bivalente-02').click(function () {
				var qTable = qlik.table(reply);
				qTable.exportData({ download: true });
			});
		}); //Doses aplicadas por unidade geográfica //Doses aplicadas por Estado


		app.createGenericObject({

			Reload: { qStringExpression: "'Atualização do painel em <b>'& Date(ReloadTime()) & '</b> às <b>' & Time(ReloadTime())& '</b>, com dados contidos na Rede Nacional de Dados em Saúde (RNDS) até as <b>'&Time(max(vacdtmax))&'</b> do dia <b>'&Date(max(vacdtmax))&'.' " }
		}, function (model) {
			console.log(model);
			var data = {
				Reload: model.Reload
			};
			$("#kpi-container").html(data.Reload);
		});



		app.getObject('QV1-00', 'AFrCmZx');

		app.getObject('', 'HMGqpD').then(function (reply) {
			$('#exportar-dados').click(function () {
				var qTable = qlik.table(reply);
				qTable.exportData({ download: true });
			});
		});
		app.getObject('', 'WEGNn').then(function (reply) {
			$('#exportar-dados-municipio-paciente').click(function () {
				var qTable = qlik.table(reply);
				qTable.exportData({ download: true });
			});
		});

		}
		
		

	async function getApp1() {

		//var app1 = qlik.openApp('72572ea0-99e4-40d7-8c9c-faf224df856c', config); //IMUNIZACAO_INDIGENA_DS //QSE
		app1 = qlik.openApp('6ddaf501-e8f2-4ea1-970b-00196c5f3125', config); //IMUNIZACAO_INDIGENA_DS //Produção
		
		qlik.resize();
		
		app1.getObject('KPI-INDIGENA-01', 'hXfQSU');
		app1.getObject('KPI-INDIGENA-02', 'KwkzMa');
		app1.getObject('KPI-INDIGENA-03', 'aPSC');
		app1.getObject('KPI-INDIGENA-04', 'ghtNKM');
		app1.getObject('KPI-INDIGENA-05', 'FkLGHj');

		app1.getObject('QV1-INDIGENA-00', '837aad53-0919-43fb-9786-56341f3df08d'); //filtro
		app1.getObject('QV1-INDIGENA-01', 'DsCBAbT', { noSelections: true });
		app1.getObject('QV1-INDIGENA-02', 'rxdjTR', { noSelections: true });
		app1.getObject('QV1-INDIGENA-03', 'ApnPsDg', { noSelections: true });
		app1.getObject('QV1-INDIGENA-04', 'VqPpqr', { noSelections: true });
		app1.getObject('QV1-INDIGENA-05', 'jMykHgc', { noSelections: true });
		app1.getObject('QV1-INDIGENA-06', 'ZsSNQZr', { noSelections: true });
		app1.getObject('', 'jMykHgc').then(function (reply) {
			$('#exportar-dados-indigena').click(function () {
				var qTable = qlik.table(reply);
				qTable.exportData({ download: true });
			});
		});
	}
	async function getApp2() {
		//var app2 = qlik.openApp('9bba02dd-103d-4d50-a8df-9b0db0bb8217', config); //QSE
		app2 = qlik.openApp('22d2dbcd-1eac-439f-a8cf-0f4136bcd9d1', config); //DEMAS_C19Vacina_Quilombolas_DS //Produção
		//var app2 = qlik.openApp('DEMAS_C19Vacina_Quilombolas_v2', config); //DEMAS_C19Vacina_Quilombolas_DS //Produção
		qlik.resize();

		app2.getObject('QV0-QUILOMBOLA-FF', 'hdakjsP'); //Filtro Quilombola
		app2.getObject('KPI-QUILOMBOLA-01', 'UjPdJe');
		app2.getObject('KPI-QUILOMBOLA-02', 'QgjNshy');
		app2.getObject('KPI-QUILOMBOLA-03', 'yXKAaLk');
		app2.getObject('KPI-QUILOMBOLA-04', 'UEXgU');
		app2.getObject('KPI-QUILOMBOLA-05', 'JhgBGp');
		app2.getObject('KPI-QUILOMBOLA-06', 'PhTTNLt');
		app2.getObject('KPI-QUILOMBOLA-07', 'BpzmxG'); //2ª Dose de reforço
		app2.getObject('QV1-QUILOMBOLA-01', 'TFGmUJp', { noSelections: true });
		app2.getObject('QV1-QUILOMBOLA-02', 'NaEHsUR', { noSelections: true });
		app2.getObject('QV1-QUILOMBOLA-03', 'mFKVPT', { noSelections: true });
		app2.getObject('QV1-QUILOMBOLA-04', 'RJWv', { noSelections: true });
		app2.getObject('QV1-QUILOMBOLA-05', 'BhUJe', { noSelections: true }).then(function (reply) {
			$('#exportar-dados-QV1-QUILOMBOLA-05').click(function () {
				var qTable = qlik.table(reply);
				qTable.exportData({ download: true });
			});
		});
		app2.getObject('QV1-QUILOMBOLA-06', 'JBGgzuP', { noSelections: true });
		app2.getObject('', 'RWGq').then(function (reply) {
			$('#exportar-dados-quilombola').click(function () {
				var qTable = qlik.table(reply);
				qTable.exportData({ download: true });
			});
		});
		}
	


	//get objects -- inserted here --


	// Bivalente




	



	//create cubes and lists -- inserted here --


	if (app) {

		$(".filter-drawer-toggle, paper-menu paper-item").click(function () {
			qlik.resize();
		});

		$("[data-qcmd]").on('click', function () {
			var $element = $(this);
			switch ($element.data('qcmd')) {
				//app level commands
				case 'clearAll':
					app.clearAll();
					break;
				case 'back':
					app.back();
					break;
				case 'forward':
					app.forward();
					break;
				case 'lockAll':
					app.lockAll();
					break;
				case 'unlockAll':
					app.unlockAll();
					break;
				case 'createBm':
					var title = $("#bmtitle").val(), desc = $("#bmdesc").val();
					app.bookmark.create(title, desc);
					$('#createBmModal').modal('hide');
					break;
			}
		});

	} else {
		$(".current-selections-placeholder span").css("display", "inline-block");
	}

	//Get selection list


	app.getList("SelectionObject", function (reply) {

		$selections = $("#tagselections");  //DOM node to append selections to
		$selections.html("");  //Clear node of any previous selections

		//Loop through array of fields that have selections
		$.each(reply.qSelectionObject.qSelections, function (key, value) {

			var field = value.qField;  //The field name
			var numSelected = value.qSelectedCount;  //Number of selections in field
			var total = value.qTotal;  //Total number of values in field
			var threshold = value.qSelectionThreshold;  //Threshold in which to display a number count instead of each value
			var selectedStr = value.qSelected;  //When numSelected is less than or equal to threshold, a string of the names of each value selected


			//If numSelected is below or equal to threshold, show string of names of each value selected
			if (numSelected <= threshold) {
				var html = "";
				html += "<span class='br-tag text selected-field-container' id='" + field + "'>";
				html += "<span class='selected-field'>" + field + ": </span>";
				html += selectedStr;
				html += " <span class='clear-field'>X</span>";
				html += "</span>";
				$selections.append(html);
			}
			else if (numSelected === 0) {
				$('#clear-selections').hide();
			}
			// If numSelected is greater than threshold, show the numSelected of total values
			else {
				var html = "";
				html += "<span class='br-tag text selected-field-container' id='" + field + "'>";
				html += "<span class='selected-field'>" + field + ": </span>";
				html += numSelected + " of " + total;
				html += " <span class='clear-field'>X</span>";
				html += "</span>";
				$selections.append(html);
			}

		});

		//Event listener on .clear-field to clear that field's selections when clicked
		$(".clear-field").click(function () {
			//console.log($(this).parent().attr("id"));
			var field = $(this).parent().attr("id");
			app.field(field).clear();

		});

		if ($("#tagselections").html() === "") {
			$("#tagbar").css("margin-top", "0px");
		} else {
			var offset = $("#tagbar").offset();
			if ($(window).scrollTop() > offset.top) {
				$("#tagbar").css("margin-top", $(window).scrollTop() - offset.top);
			};

		}

	});



	//#####################
	// Filtro de Quilombola

	if (app2) {

		$(".filter-drawer-toggle, paper-menu paper-item").click(function () {
			qlik.resize();
		});

		$("[data-qcmd2]").on('click', function () {
			var $element = $(this);
			switch ($element.data('qcmd2')) {
				//app level commands
				case 'clearAll':
					app2.clearAll();
					break;
				case 'back':
					app2.back();
					break;
				case 'forward':
					app2.forward();
					break;
				case 'lockAll':
					app2.lockAll();
					break;
				case 'unlockAll':
					app2.unlockAll();
					break;
				case 'createBm':
					var title = $("#bmtitle").val(), desc = $("#bmdesc").val();
					app2.bookmark.create(title, desc);
					$('#createBmModal').modal('hide');
					break;
			}
		});

	} else {
		$(".current-selections-placeholder span").css("display", "inline-block");
	}

	app2.getList("SelectionObject", function (reply) {

		$selections = $("#tagselections2");  //DOM node to append selections to
		$selections.html("");  //Clear node of any previous selections

		//Loop through array of fields that have selections
		$.each(reply.qSelectionObject.qSelections, function (key, value) {

			var field = value.qField;  //The field name
			var numSelected = value.qSelectedCount;  //Number of selections in field
			var total = value.qTotal;  //Total number of values in field
			var threshold = value.qSelectionThreshold;  //Threshold in which to display a number count instead of each value
			var selectedStr = value.qSelected;  //When numSelected is less than or equal to threshold, a string of the names of each value selected


			//If numSelected is below or equal to threshold, show string of names of each value selected
			if (numSelected <= threshold) {
				var html = "";
				html += "<span class='br-tag text selected-field-container' id='" + field + "'>";
				html += "<span class='selected-field'>" + field + ": </span>";
				html += selectedStr;
				html += " <span class='clear-field'>X</span>";
				html += "</span>";
				$selections.append(html);
			}
			else if (numSelected === 0) {
				$('#clear-selections2').hide();
			}
			// If numSelected is greater than threshold, show the numSelected of total values
			else {
				var html = "";
				html += "<span class='br-tag text selected-field-container' id='" + field + "'>";
				html += "<span class='selected-field'>" + field + ": </span>";
				html += numSelected + " of " + total;
				html += " <span class='clear-field'>X</span>";
				html += "</span>";
				$selections.append(html);
			}

		});

		//Event listener on .clear-field to clear that field's selections when clicked
		$(".clear-field").click(function () {
			//console.log($(this).parent().attr("id"));
			var field = $(this).parent().attr("id");
			app2.field(field).clear();

		});

		if ($("#tagselections2").html() === "") {
			$("#tagbar2").css("margin-top", "0px");
		} else {
			var offset = $("#tagbar2").offset();
			if ($(window).scrollTop() > offset.top) {
				$("#tagbar2").css("margin-top", $(window).scrollTop() - offset.top);
			};

		}

	});



});

//Mantem a barra de tags acompanhando o scroll da pagina, no caso de ter filtros selecionados
$(function () {
	var offset = $("#tagbar").offset();
	var topPadding = 0;
	var isEmpty = $("#tagselections").html() == "";

	$(window).scroll(function () {
		isEmpty = $("#tagselections").html() == "";
		if ($(window).scrollTop() > offset.top && !isEmpty) {
			$("#tagbar").stop().animate({
				marginTop: $(window).scrollTop() - offset.top + topPadding
			});
		} else {
			$("#tagbar").stop().animate({
				marginTop: 0
			});
		};
	});
});

$('button[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
	console.log('Clicou na aba...');
	e.target; // newly activated tab
	e.relatedTarget; // previous active tab
	console.log('time inicio...');
	setTimeout(() => {
		qlik.resize();
		console.log('Atualizou os objetos!');
	}, '5000');
	console.log('time fim.');
});

