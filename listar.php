<!DOCTYPE html>
<html>
<head>
	<title>Listar</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
  <link rel="stylesheet" type="text/css" href="estilo/estilo2.css">
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
  <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>
</head>
<body>
	<table border="2" width="100%">
		<tr><td Colspan="6"><h1>Listagem</h1></tr>
		<tr><td>Código<td>Nome<td>mesa</tr>
			<?php
			$codigo="ID";
			 $nome="nome";
			 $mesa="mesa";
			 $comando="select * from pedidos ORDER BY $codigo";
			 $cone=mysqli_connect("localhost","root","","prova")
			 	or die ("Impossivel se conectar ao MysqL");			
			 $consulta=mysqli_query($cone,$comando);
			 $aux=0;
			 while(mysqli_num_rows($consulta) > $aux){
			 	$rs=mysqli_fetch_array($consulta);
			 	echo("<tr><td>$rs[ID]</td>
			 		<td>$rs[nome]</td>
			 		<td>$rs[mesa]</td></tr>");
			 	$aux++;
			 }
			?>
	</table>
</body>
</html>