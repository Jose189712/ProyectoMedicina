<?php
include'conexion.php';

$codigo=$_POST['codigo'];
$password=$_POST['password'];
$consulta = "select nombre,contraseña from usuarios where codigo='$codigo' AND contraseña='$password'";
$resultado = mysqli_query($conn, $consulta);
$datos = $resultado->fetch_assoc();
if(empty($datos["nombre"])){    
    echo "Los datos que ingresaste no estan registrados";        
}else{    
    echo $datos["nombre"]."<br><br>";
    echo $datos["contraseña"]."<br><br>";
}
?>