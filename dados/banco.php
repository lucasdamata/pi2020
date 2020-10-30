<?php
header("Access-Control-Allow-Origin: *", false);
header('Content-Type: text/html; charset=utf-8');
header('Access-Control-Allow-Methods: "GET, PUT, POST, DELETE, OPTIONS');



$host = "mysql:host=localhost;dbname=pi2020";
$usuario = "root";
$senha = "";
try {
	$conexao = new PDO($host, $usuario, $senha);
	$sql = $conexao->prepare('SELECT * FROM `pragas`');

		$sql->execute();

		$dados = "[";

		while($lista = $sql->fetch()){
			if ($dados != "[") {
				$dados .= ",";
			}
			$dados .= '{"codigo": "'.$lista["id"].'",';
			$dados .= '"nome": "'.$lista["nome"].'",';
			$dados .= '"img": "'.$lista["img"].'",';
			$dados .= '"combate": "'.$lista["combate"].'"}';
		}
		$dados .= "]";
		echo $dados;



} catch (Exception $ex) {
	echo "erro ao listar: ". $ex->getMessage();
};
