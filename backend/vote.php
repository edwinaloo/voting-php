<?php
require 'config.php';

$data = json_decode(file_get_contents("php://input"));

if ($data && isset($data->user_id, $data->candidate_id)) {
    // Check if the user has already voted
    $stmt = $conn->prepare("SELECT * FROM votes WHERE user_id = ?");
    $stmt->execute([$data->user_id]);
    if ($stmt->rowCount() > 0) {
        echo json_encode(["error" => "You have already voted"]);
        exit;
    }

    // Record the vote
    $stmt = $conn->prepare("INSERT INTO votes (user_id, candidate_id) VALUES (?, ?)");
    $stmt->execute([$data->user_id, $data->candidate_id]);
    
    echo json_encode(["message" => "Vote recorded successfully"]);
} else {
    echo json_encode(["error" => "Invalid input"]);
}
?>
