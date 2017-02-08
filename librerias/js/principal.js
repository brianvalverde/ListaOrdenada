
miarray=[];
function AddNumber(Number){
	Number = parseInt(Number)
	if(Number >= 0){
		if(isExists(Number)) addToArray(Number)
	}
	
	console.log();
	$("#agregado2 label").remove();
	$("#agregado2").append("<label style='color:#4caf50;padding-left:4rem;font-weight:600;'> Lista ordenada: "+miarray.sort(MenorAMayor)+"</label>");
}

function addToArray(Number){
	miarray.push(Number);
	$("#agregado label").remove();
	$("#agregado").append("<label style='color:#4caf50;padding-left:4rem;font-weight:600;'> Número "+Number+" agregado correctamente!!</label>");
}

function isExists(Number){
	return !(miarray.indexOf(Number) >= 0)
}

function MenorAMayor(elem1, elem2) {return elem1-elem2;}
function MayorAmenor(elem1, elem2) {return elem2-elem1;}