-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 05-Set-2020 às 02:04
-- Versão do servidor: 10.4.13-MariaDB
-- versão do PHP: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `pi2020`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `pragas`
--

CREATE TABLE `pragas` (
  `id` int(11) NOT NULL,
  `nome` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `img` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `nivel` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `combate` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `dados` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `obs` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `locallat` float NOT NULL,
  `locallong` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `pragas`
--

INSERT INTO `pragas` (`id`, `nome`, `img`, `nivel`, `combate`, `dados`, `obs`, `locallat`, `locallong`) VALUES
(1, 'Broca da Cana - Diatraea saccharalis', 'https://www.agrolink.com.br/upload/problemas/Diatraea_saccharalis86.jpg', 'leve', 'liberação de parasitóides como a Cotesia flavipes. Não adotar medidas que causem desequilíbrio nas populações de parasitóides e predadores, sendo necessário racionalizar o uso de produtos químicos', 'A broca-da-cana é uma mariposa da espécie Diatraea saccharalis, que está presente em todo o Brasil e causa grandes prejuízos na cultura da cana-de-açúcar, afetando a produtividade do canavial e também a qualidade da produção de açúcar e etanol. Os primeiros sintomas ocorrem no terceiro mês após o plantio ou logo depois do corte da cana, durante a formação dos internódios (gomos).', 'encontrada na fazenda 1 dia 10/01/2020', -19.0002, -46.4546),
(2, 'Cigarrinha das Raízes - Mahanarva fimbriolata ', 'https://amtecagr.files.wordpress.com/2016/01/cigarrinha-das-raizes-cana-mahanarva-fimbriolata.jpg?w=1000', 'leve', 'aplicação do fungo Metarhizium anisopliae quando forem encontradas populações acima de 3 ninfas por metro linear', 'avistada recentemente na fazenda 4', 'alguma informação inseria pelos responsáveis do assunto ', -19.4578, -46.1455),
(3, 'Migdolus fryanus - Migdolus', 'https://www.cerambycids.com/brazil/mzsp/images/Migdolusbrachypterus.jpg', 'grave', 'aplicação de inseticidas por ocasião do preparo do solo, em operação conjunta com a subsolagem (subsolador-aplicador) ou aração (arado de aiveca, com aplicador de inseticida), na época seca, quando se observa maior ocorrência de larvas nas camadas superficiais do solo', 'recentemente vista no lugar x precisamos agir mais rápido', 'fulano de tal disse que essa é brabo', -18.1235, -46.4546),
(4, 'Sphenophorus levis', 'https://gebio.com.br/site/wp-content/uploads/2019/08/gebio-2.jpg', 'MUITO GRAVE', 'consiste na destruição antecipada das soqueiras com o erradicador de soqueiras. A seguir a área deverá ser mantida livre de plantas hospedeiras da praga e o próximo plantio deverá ser realizado o mais tarde possível', 'PERÍODO DE INFESTAÇÃO junho-julho', 'dificilmente combatida E ENCONTRADA NA ULTIMA SAFRA PELO FULANO DE TAL', -18.4569, -46.1455),
(5, 'Broca Gigante', 'https://3.bp.blogspot.com/-AE6QozXekEQ/Ul_hPq13FJI/AAAAAAAAADM/mTSK1L-RSyU/s1600/Larva-da-Broca.jpg', 'IZI DE COMBATER ', 'A termonebulização é uma técnica que consiste na transformação de um inseticida diluído em óleo em uma névoa e a sua aplicação no interior do formigueiro, utilizando equipamentos denominados termonebulizadores', 'A broca-gigante (Telchin licus), em sua forma larval, causa danos na cana. Nessa fase chega a medir 8 cm de comprimento e 1,2 cm de largura. É branca com uma única mancha castanha.\r\nO inseto não desaparece após o corte da cana-de-açúcar e permanece alimentando-se dos rizomas e das raízes. Assim como a broca-da-cana, a broca-gigante também causa o fenômeno do “coração morto”.', 'dificilmente combatida em períodos de seca ', -19.7895, -46.4546),
(6, 'Lagarta Elasmo', 'https://i.ytimg.com/vi/lWZ5coUvYkk/maxresdefault.jpg', 'leve', 'uso de sementes com tratamento industrial, especialmente com a nova tecnologia Fortenza Duo, da Syngenta, é uma grande defesa contra essa praga. E traz um excelente resultado para o produtor', 'essa praga fica entre as piores ja registradas na agricultura ', 'dificilmente combatida e foi avistadas larvas nas ultimas safras ', -20.7895, -46.1455),
(7, 'Cupins- Isoptera', 'https://boaspraticasagronomicas.com.br/wp-content/uploads/2019/02/2019-02-13-Interna-BOAS-PragaDaCana5.jpg', 'grave', 'O conhecimento das espécies, os níveis de infestação, determinados por levantamentos populacionais, são fundamentais dentro de um programa de manejo integrado de pragas de solo, reduzindo o uso de cupinicidas a 10-20% apenas da área de plantio, sendo que o uso indiscriminado desses inseticidas de solo causa o desequilíbrio nos inimigos naturais da broca da cana.', 'São insetos sociais que vivem em colônias organizadas. Perdas ocorrem com falhas na brotação das soqueiras e redução da longevidade do canavial. A maioria das espécies de cupins não é agressiva à cultura, ao contrário é benéfica. Podem reduzir em até 10 t de cana/ha/ano, além de ocasionarem redução da longevidade do canavial.', 'encontrado geralmente em períodos de seca', -18.4572, -46.4565),
(8, 'Formigas Gigantes (Atta capiguara ou Atta bisphaerica)', 'https://boaspraticasagronomicas.com.br/wp-content/uploads/2019/02/2019-02-13-Interna-BOAS-PragaDaCana4.jpg', 'gravíssimo ', 'A termonebulização é uma técnica que consiste na transformação de um inseticida diluído em óleo em uma névoa e a sua aplicação no interior do formigueiro, utilizando equipamentos denominados termonebulizadores.', 'As formigas cortadeiras de maior importância para a cultura da cana-de-açúcar pertencem ao gênero Atta, conhecidas como saúvas, sendo A. bisphaerica e A. capiguara as de maior importância econômica. As saúvas são responsáveis por perdas médias na produtividade agrícola que variam de 1,6 a 3,2 toneladas de cana por ninho, a cada ciclo.', 'geralmente encontrada no período em que a cana esta mais pequena', -19.1235, 46.1465);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `pragas`
--
ALTER TABLE `pragas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `pragas`
--
ALTER TABLE `pragas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
