<?php
require 'config.php';

$sql = "SELECT * FROM candidates";
$stmt = $conn->prepare($sql);
$stmt->execute();
$candidates = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($candidates);
?>
