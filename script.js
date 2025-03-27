<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Oriental Pod - Loja de Pods Premium</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        header {
            background-color: #333;
            color: #fff;
            padding: 10px 0;
            text-align: center;
        }
        .navbar {
            display: flex;
            justify-content: center;
            gap: 30px;
            list-style: none;
            padding: 0;
        }
        .navbar li {
            display: inline;
        }
        .navbar a {
            color: #fff;
            text-decoration: none;
            font-size: 18px;
        }
        .navbar a:hover {
            color: #d3a233;
        }
        .hero {
            background-image: url('https://via.placeholder.com/1600x600.png?text=Oriental+Pod');
            background-size: cover;
            text-align: center;
            color: white;
            padding: 100px 20px;
        }
        .hero h1 {
            font-size: 3em;
            margin-bottom: 20px;
        }
        .hero p {
            font-size: 1.2em;
        }
        .products {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            padding: 40px 10px;
        }
        .product-card {
            background-color: #fff;
            width: 300px;
            padding: 20px;
            margin: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
        }
        .product-card img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 8px;
        }
        .product-card h3 {
            margin-top: 20px;
            font-size: 1.5em;
        }
        .product-card p {
            font-size: 1.2em;
            color: #777;
        }
        .cta-button {
            background-color: #d3a233;
            color: #fff;
            padding: 15px 30px;
            text-decoration: none;
            font-size: 1.2em;
            border-radius: 5px;
            transition: background-color 0.3s ease;
        }
        .cta-button:hover {
            background-color: #b88c1a;
        }
        footer {
            background-color: #333;
            color: #fff;
            padding: 20px;
            text-align: center;
        }
    </style>
</head>
<body>

<header>
    <h1>Oriental Pod</h1>
    <ul class="navbar">
        <li><a href="#">Início</a></li>
        <li><a href="#">Produtos</a></li>
        <li><a href="#">Sobre Nós</a></li>
        <li><a href="#">Contato</a></li>
    </ul>
</header>

<section class="hero">
    <h1>Descubra a experiência única de um Pod Premium</h1>
    <p>Inovação e sofisticação em cada detalhe. Encontre o pod perfeito para você.</p>
    <a href="#products" class="cta-button">Veja nossos Produtos</a>
</section>

<section id="products" class="products">
    <div class="product-card">
        <img src="https://via.placeholder.com/300.png?text=Pod+1" alt="Pod 1">
        <h3>Pod Relax</h3>
        <p>Um pod ideal para momentos de relaxamento e meditação.</p>
        <a href="#" class="cta-button">Comprar</a>
    </div>
    <div class="product-card">
        <img src="https://via.placeholder.com/300.png?text=Pod+2" alt="Pod 2">
        <h3>Pod Energia</h3>
        <p>Recarregue suas energias com este pod energizante.</p>
        <a href="#" class="cta-button">Comprar</a>
    </div>
    <div class="product-card">
        <img src="https://via.placeholder.com/300.png?text=Pod+3" alt="Pod 3">
        <h3>Pod Zen</h3>
        <p>Para quem busca paz e tranquilidade durante o dia.</p>
        <a href="#" class="cta-button">Comprar</a>
    </div>
</section>

<footer>
    <p>&copy; 2025 Oriental Pod - Todos os direitos reservados</p>
</footer>

</body>
</html>
