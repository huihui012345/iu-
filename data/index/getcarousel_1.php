<?php
require_once("../init.php");
$sql="select * from iu_index_carousel_1";
$result=mysqli_query($conn,$sql);
echo json_encode(mysqli_fetch_all($result,1));
?>