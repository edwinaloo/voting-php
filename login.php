<?php
require 'config.php';

$data = json_decode(file_get_contents("php://input"));

if ($data && isset($data->email, $data->password)) {
    $sql = "SELECT * FROM users WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->execute([$data->email]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($data->password, $user['password'])) {
        echo json_encode(["message" => "Login successful", "user" => $user]);
    } else {
        echo json_encode(["error" => "Invalid credentials"]);
    }
}
?>
