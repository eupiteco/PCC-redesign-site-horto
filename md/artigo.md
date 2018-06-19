# Criação de *layout* e *styleguide* para um site utilizando software livre 

## Introdução

// O que é esse artigo, quais as etapas de projeto serão abordadas

### Software Livre 

// Mais coisas aqui?

// Pesquisar outros autores que trabalham este tema

Também vale ressaltar que para este projeto serão avaliados e utilizados sempre que possível _softwares_ livres em detrimento dos proprietários. De acordo com a_ Free Software Foundation_[4], para ser livre o software precisa atender a quatro liberdades:

* _A liberdade de executar o programa como você desejar, para qualquer propósito (liberdade 0)._

* _A liberdade de estudar como o programa funciona, e adaptá-lo às suas necessidades (liberdade 1). Para tanto, acesso ao código-fonte é um pré-requisito._

* _A liberdade de redistribuir cópias de modo que você possa ajudar ao próximo (liberdade 2)._

* _A liberdade de distribuir cópias de suas versões modificadas a outros (liberdade 3)._

A mesma fundação também afirma que "_Usar _software_ livre é tomar uma decisão política e ética que garante o direito de aprender e compartilhar com outras pessoas o que é aprendido. _Software_ livre tornou-se a fundação de uma sociedade de aprendizado em que o conhecimento é compartilhado de forma que outros possam criar a partir deste conhecimento e aproveitar-se dos benefícios_." [5]

A partir desta perspectiva, pode-se entender o software livre como ideal para a atividade de pesquisa, pois facilita àqueles que queiram reproduzir a metodologia deste projeto o acesso a esses softwares, porque indivíduos e grupos interessados em desenvolvimento e/ou adaptação dos _softwares_ podem encontrar na pesquisa uma documentação precisa e detalhada do seu uso em projetos de design e porque os resultados da avaliação dos softwares quanto a sua adequação a atividade projetual poderão ser enviados diretamente aos desenvolvedores para implementar as alterações cabíveis em futuras versões dos programas.

## Uso dos softwares na produção do *layout* e *styleguide*

Nesta sessão serão abordados os programas utilizados, suas possibilidades e barreiras assim como as alternativas que foram pesquisadas para a realização de tarefas. 

### Sistema operacional

Este projeto foi realizado no sistema operacional Ubuntu 16.04, uma distribuição de GNU/Linux criada em 2004 com o intuito de ser uma distribuição GNU/Linux composta inteiramente com _software_ livre, gratuita e com uma interface amigável para a realização tanto de tarefas do dia a dia quanto para necessidades específicas de produção gráfica, programação, gerenciamento de servidores etc. https://www.ubuntu.com/about <++> bib. Atualmente o Ubuntu conta com uma série de variações e sistemas operacionais derivados que também poderiam ter sido utilizados para este projeto como: Ubuntu MATE, Ubuntu Budgie, Mint e ElementaryOS.

![arq-info-img](image/finais/oss.png "Capturas de tela de diversos sistemas operacionais livres baseados em Ubuntu") l[oss-img]

### Arquitetura da informação

Os diagramas de estrutura foram criados com o _software_ para criação de esquemas e diagramas __Dia__, os esqueletos com o criador de _wireframes_ __Pencil Project__, para os testes de usabilidade foi utilizado o _software_ de criação gráfica vetorial __Inkscape__, a etapa de superfície foi desenvolvida diretamente em _html_ e _css_ pois o autor já possuía conhecimento e prática com estas tecnologias. 

O _software_ __Dia__ é bastante eficiente para a criação de diversos tipos de diagramas e mapas de fluxo. Ele possui uma dinâmica de uso bastante particular mas que foi aprendida com facilidade logo no primeiro uso. Possui diversas bibliotecas com formas e ícones prontos e também permite a criação de novas formas. Também é possível exportar os diagramas para diversos formatos de imagem e vetor.

### *Wireframes*

O programa __Pencil Project__ possui uma interface simples e eficiente. Ele possui bibliotecas de elementos gráficos para protótipos de aplicativos tanto para computadores quanto para dispositivo móveis. Para _web_ possui apenas uma biblioteca de elementos simples que podem ser vistos nas imagens da sessão r[plano-de-esqueleto] Plano de esqueleto e a importação de novos elementos gráficos não é suportada oficialmente pelo _software_ apesar de o autor ter encontrado em pesquisas formas de fazê-lo. Mesmo estando na versão 3.0 na finalização deste trabalho, o programa ainda apresentava alguns _bugs_ principalmente em relação ao alinhamento e posicionamento dos elementos. Um ponto positivo deste software é exportar protótipos interativos em diversos formatos. Neste trabalho foram exportadas páginas HTML funcionais ligadas entre si.

![arq-info-img](image/finais/dia-pencil.png "Janelas dos softwares Dia, à esquerda, e Pencil Project Project à direita.")l[dia-pencilimg]

### *Testes de usabilidade*

Devido à limitação estética do __Pencil Project__ e à necessidade de protótipos mais finalizados para os testes de usuário, as telas foram recriadas no _software_ __Inkscape__ a partir das imagens dos esqueletos. Como o __Inkscape__ trabalha com o formato .svg, um formato universal de arquivos de vetor suportado por todos os navegadores atuais, é possível criar imagens interativas que abrem em navegadores. Ainda que não exista uma ferramenta específica para isto no programa, a ligação entre as páginas é criada com bastante facilidade a partir dos recursos que o programa possui. A grande desvantagem deste método é que os navegadores não suportam texto em caixas limitadas, então todos os textos necessitam ser convertidos em curvas para que apareçam da forma desejada nos testes de usabilidade.

![arq-info-img](image/finais/inkscape.png "Janela do software Inkscape")l[inkscape-img]

### Protótipo final

A etapa de superfície foi toda desenvolvida diretamente em HTML/CSS por produzir um protótipo mais próximo do que será o _site_ após a sua implementação e por uma experiência anterior do auto nesta área. Para isto foi utilizado o editor de textos __vim__ e os preprocessadores __pug__ para HTML e __sass__ para CSS. Outro editor de texto voltado para escrita de código, livre e com uma interface mais amigável, é o editor Atom, que poderia ser utilizado igualmente neste projeto.

![arq-info-img](image/finais/vim-atom.png "Janelas dos sotwares Vim, à esquerda, e Pencil Project à direita")l[vim-atom]

Para pessoas que não queiram trabalhar diretamente com HTML e CSS existem dois softwares de prototipação digital de alto nível inteiramente livres e de código aberto, Akira e Alva. Ainda estavam na fase inicial de desenvolvimento em maio de 2018 mas já podem ser baixados para testes e avaliação embora seus desenvolvedores não recomendem para uso profissional. Nesse caso a melhor alternativa encontrada foi o _software_ __Gravity Designer__, de código proprietário, com versões gratuitas para _web_, Linux, Windows e Mac que são suficientes para a criação dos protótipos.

## Conclusão

// Mais coisas aqui

O projeto inteiro foi realizado com _softwares_ livres, sem que fosse necessário recorrer a alternativas de código aberto não-livres ou proprietárias.

Vale mencionar também que, com exceção da etapa de superfície, as demais poderiam ter sido realizadas diretamente com __Inkscape__. As vantagens desse uso seriam aprender a usar apenas um _software_ facilitar na transição entre o esqueleto e os testes de usabilidade, pois não haveria conflitos de compatibilidade de arquivos.

