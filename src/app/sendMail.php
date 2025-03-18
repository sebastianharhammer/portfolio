<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header('Content-Type: application/json');

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): 
        http_response_code(200);
        exit;
    
    case("POST"): 
        try {
            $json = file_get_contents('php://input');
            $params = json_decode($json);

            if (!$params) {
                throw new Exception('Invalid JSON data');
            }

            $email = filter_var($params->email, FILTER_SANITIZE_EMAIL);
            $name = htmlspecialchars($params->name);
            $message = htmlspecialchars($params->message);
            $checkbox = $params->checkbox;

            $recipient = 'sebastian.harhammer@gmail.com';
            $subject = "Contact From <$email>";
            $emailBody = "From: " . $name . "<br>" . $message;

            $headers = [
                'MIME-Version: 1.0',
                'Content-type: text/html; charset=utf-8',
                'From: noreply@sebastian-harhammer.com',
                'Reply-To: ' . $email
            ];

            if (mail($recipient, $subject, $emailBody, implode("\r\n", $headers))) {
                http_response_code(200);
                echo json_encode(['status' => 'success', 'message' => 'Email sent successfully']);
            } else {
                throw new Exception('Failed to send email');
            }
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
        }
        break;

    default: 
        http_response_code(405);
        echo json_encode(['status' => 'error', 'message' => 'Method not allowed']);
        exit;
} 
