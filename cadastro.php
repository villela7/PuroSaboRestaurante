<!DOCTYPE html>
<html>
<head>
	<title>Cadastro no banco de dados</title>
	<meta charset="utf-8">
</head>
<body>
	<?php
	$N=$_POST["nome"];
	$E=$_POST["mesa"];
	$comando="insert into pedidos (nome,mesa) values ('$N','$E');";
	$host="localhost"; $user="root"; $password="";
	$db="prova";
	$cone=mysqli_connect($host,$user,$password,$db) or die("impossível conectar ao MysqL");
	$ins=mysqli_query($cone,$comando);
	if ($ins) {
		echo ("<script>alert('Pedido realizado com sucesso');window.location.href='pagina1.html'</script>");
	}
	else{
		echo ("impossível realizar pedido!");
	}
	?>
</body>
</html>