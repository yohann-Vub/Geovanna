<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chapeuzinho Vermelho - História Interativa</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            background-color: #f0f0f0;
        }
        h1 {
            text-align: center;
            color: #b30000;
        }
        .section {
            display: none;
        }
        .section.active {
            display: block;
        }
        button {
            background-color: #4CAF50;
            color: white;
            border: none;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            margin-top: 10px;
        }
        button:hover {
            background-color: #45a049;
        }
    </style>
    <script>
        function goToSection(sectionId) {
            // Esconde todas as seções
            const sections = document.querySelectorAll('.section');
            sections.forEach(section => section.classList.remove('active'));

            // Exibe a seção desejada
            const section = document.getElementById(sectionId);
            if (section) {
                section.classList.add('active');
            }
        }
    </script>
</head>
<body>
    <h1>Chapeuzinho Vermelho</h1>
    <main>

        <!-- Introdução -->
        <div id="inicio" class="section active">
            <p>Você é Chapeuzinho Vermelho, indo visitar sua avó. Sua mãe lhe pediu para não sair do caminho, mas há dois caminhos na floresta. O que você escolhe?</p>
            <button onclick="goToSection('caminhoPrincipal')">Seguir pelo caminho principal</button>
            <button onclick="goToSection('atalho')">Explorar um atalho pela mata densa</button>
        </div>

        <!-- Caminho Principal -->
        <div id="caminhoPrincipal" class="section">
            <p>Você segue pelo caminho principal e ouve passos atrás de você. O que faz?</p>
            <button onclick="goToSection('olharParaTras')">Olhar para trás</button>
            <button onclick="goToSection('continuarAndando')">Continuar andando</button>
        </div>

        <div id="olharParaTras" class="section">
            <p>Você vê o lobo à distância. O que faz?</p>
            <button onclick="goToSection('andarMaisRapido')">Andar mais rápido</button>
            <button onclick="goToSection('conversarLobo')">Conversar com o lobo</button>
        </div>

        <div id="andarMaisRapido" class="section">
            <p>Você despista o lobo e chega antes à casa da sua avó.</p>
            <button onclick="goToSection('naCasaAvoAntes')">Ir para a casa da avó</button>
        </div>

        <div id="conversarLobo" class="section">
            <p>Você conta que está indo para a casa da avó. O lobo corre para chegar antes de você.</p>
            <button onclick="goToSection('naCasaAvoDepois')">Ir para a casa da avó</button>
        </div>

        <div id="continuarAndando" class="section">
            <p>O lobo aparece ao seu lado e pergunta para onde você está indo. O que responde?</p>
            <button onclick="goToSection('contarAvo')">Contar que está indo para a casa da avó</button>
            <button onclick="goToSection('dizerPasseando')">Dizer que está apenas passeando</button>
        </div>

        <div id="contarAvo" class="section">
            <p>O lobo corre para chegar antes de você.</p>
            <button onclick="goToSection('naCasaAvoDepois')">Ir para a casa da avó</button>
        </div>

        <div id="dizerPasseando" class="section">
            <p>O lobo perde o interesse e você chega antes à casa da avó.</p>
            <button onclick="goToSection('naCasaAvoAntes')">Ir para a casa da avó</button>
        </div>

        <!-- Atalho -->
        <div id="atalho" class="section">
            <p>Você entra no atalho e vê dois caminhos. Qual você escolhe?</p>
            <button onclick="goToSection('direita')">Seguir à direita</button>
            <button onclick="goToSection('esquerda')">Seguir à esquerda</button>
        </div>

        <div id="direita" class="section">
            <p>Você encontra o lobo. Ele pergunta o que está fazendo. O que diz?</p>
            <button onclick="goToSection('contarAvo')">Dizer que está indo para a casa da avó</button>
            <button onclick="goToSection('dizerPerdida')">Dizer que está perdida</button>
        </div>

        <div id="dizerPerdida" class="section">
            <p>O lobo te deixa seguir e você chega antes à casa da avó.</p>
            <button onclick="goToSection('naCasaAvoAntes')">Ir para a casa da avó</button>
        </div>

        <div id="esquerda" class="section">
            <p>Você ouve um som estranho. O que faz?</p>
            <button onclick="goToSection('correr')">Correr rapidamente</button>
            <button onclick="goToSection('investigar')">Investigar o som</button>
        </div>

        <div id="correr" class="section">
            <p>Você corre e chega antes do lobo à casa da sua avó.</p>
            <button onclick="goToSection('naCasaAvoAntes')">Ir para a casa da avó</button>
        </div>

        <div id="investigar" class="section">
            <p>O lobo descobre que você está indo para a casa da avó e chega antes.</p>
            <button onclick="goToSection('naCasaAvoDepois')">Ir para a casa da avó</button>
        </div>

        <!-- Na casa da avó -->
        <div id="naCasaAvoAntes" class="section">
            <p>Você chega antes do lobo e encontra sua avó. Mas algo parece estranho...</p>
            <button onclick="goToSection('confrontoFinal')">Confronto final</button>
        </div>

        <div id="naCasaAvoDepois" class="section">
            <p>O lobo já está na casa da avó disfarçado. Ele te espera com um sorriso.</p>
            <button onclick="goToSection('confrontoFinal')">Confronto final</button>
        </div>

        <!-- Confronto final -->
        <div id="confrontoFinal" class="section">
            <p>O lobo avança em direção a você. O que faz?</p>
            <button onclick="goToSection('lenhadorAjuda')">Gritar por ajuda</button>
            <button onclick="goToSection('enganarLobo')">Enganar o lobo</button>
        </div>

        <div id="lenhadorAjuda" class="section">
            <p>O lenhador aparece, enfrenta o lobo, e salva você e sua avó. Final feliz!</p>
        </div>

        <div id="enganarLobo" class="section">
            <p>Você engana o lobo, distrai-o com doces, e escapa com sua avó. Final feliz!</p>
        </div>

    </main>
</body>
</html>
