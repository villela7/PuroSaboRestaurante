function somar1(){
	var v1=document.getElementById("quant1").value;
	if(v1<0){
		alert("Escolha uma quantidade válida");
	}else{
	soma1="R$"+v1*6+",00";
	document.getElementById("resultado1").innerHTML=soma1;
}
}
function somar2(){
	var v2=document.getElementById("quant2").value;
	if(v2<=0){
		alert("Escolha uma quantidade válida");
	}else{
	soma2="R$"+v2*3+",00";
	document.getElementById("resultado2").innerHTML=soma2;
}
}
function somar3(){
	var v3=document.getElementById("quant3").value;
	if(v3<0){
		alert("Escolha uma quantidade válida");
	}else{
	soma3="R$"+v3*12+",00";
	document.getElementById("resultado3").innerHTML=soma3;
}
}
function somar4(){
	var v4=document.getElementById("quant4").value;
	if(v4<0){
		alert("Escolha uma quantidade válida");
	}else{
	soma4="R$"+v4*20+",00";
	document.getElementById("resultado4").innerHTML=soma4;
}
}
function somar5(){
	var v5=document.getElementById("quant5").value;
	if(v5<0){
		alert("Escolha uma quantidade válida");
	}else{
	soma5="R$"+v5*35+",00";
	document.getElementById("resultado5").innerHTML=soma5;
}
}
function somar6(){
	var v6=document.getElementById("quant6").value;
	if(v6<0){
		alert("Escolha uma quantidade válida");
	}else{
	soma6="R$"+v6*17+",00";
	document.getElementById("resultado6").innerHTML=soma6;
}
}
function somar7(){
	var v7=document.getElementById("quant7").value;
	if(v7<0){
		alert("Escolha uma quantidade válida");
	}else{
	soma7="R$"+v7*40+",00";
	document.getElementById("resultado7").innerHTML=soma7;
}
}
function somar8(){
	var v8=document.getElementById("quant8").value;
	if(v8<0){
		alert("Escolha uma quantidade válida");
	}else{
	soma8="R$"+v8*9+",00";
	document.getElementById("resultado8").innerHTML=soma8;
}
}
function somar9(){
	var v9=document.getElementById("quant9").value;
	if(v9<0){
		alert("Escolha uma quantidade válida");
	}else{
	soma9="R$"+v9*5+",00";
	document.getElementById("resultado9").innerHTML=soma9;
}
}

function calculartudo() {
	var v1 = document.getElementById("quant1").value;
	var v2 = document.getElementById("quant2").value;
	var v3 = document.getElementById("quant3").value;
	var v4 = document.getElementById("quant4").value;
	var v5 = document.getElementById("quant5").value;
	var v6 = document.getElementById("quant6").value;
	var v7 = document.getElementById("quant7").value;
	var v8 = document.getElementById("quant8").value;

	var total = parseFloat(v1*6)+parseFloat(v2*3)+parseFloat(v3*12)+parseFloat(v4*20)+parseFloat(v5*35)+parseFloat(v6*17)+parseFloat(v7*40)+parseFloat(v8*9);
	var preco = "R$"+total;
	document.getElementById("totaltudo").innerHTML=preco;
}