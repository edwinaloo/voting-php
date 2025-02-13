<?php
require 'config.php';

$data = json_decode(file_get_contents("php://input"));

if ($data && isset($data->name, $data->email, $data->password)) {
    $hashed_password = password_hash($data->password, PASSWORD_DEFAULT);
    $sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->execute([$data->name, $data->email, $hashed_password]);

    echo json_encode(["message" => "User registered successfully"]);
} else {
    echo json_encode(["error" => "Invalid input"]);
}
?>
