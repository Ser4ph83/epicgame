<?php
    // Configuração do Banco de dados no xampp
    $host = "localhost";
    $user = "root";
    $senha = "";
    $banco = "game_db";

    // Conectar ao banco de dados
    $conn = new mysqli($host, $user, $senha, $banco);

    // Verificar a conexão se esta tudo certo
    if ($conn->connect_error) {
        die("Conexão nao deu certo meu camarada: " . $conn->connect_error);
    }

    // Receber os dados do formulario no html
    $gilo = $_POST['username']; 
    $pimenta = $_POST['password']; 
    $cebola = $_POST['email']; 

    // Verificar se os dados foram recebidos
    if (empty($gilo) || empty($pimenta) || empty($cebola)) {
        echo "Por favor preencha os campos !";
        exit;
    }

    // Preparar a query (consulta) para inserir os dados no banco de dados
    $stmt = $conn->prepare("INSERT INTO usuarios(nome, senha, email) VALUES (?, ?, ?)");

    // Verificar se a query foi preparada corretamente
    if(!$stmt) {
        die("Erro na query de preparação: " . $conn->error);
    }

    // 🔥 AQUI É A PARTE QUE INSERE DE VERDADE 🔥
    $stmt->bind_param("sss", $gilo, $pimenta, $cebola);

    if ($stmt->execute()) {
        header("Location: login.html");
        exit;
    } else {
        echo "Erro ao inserir: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
?>
