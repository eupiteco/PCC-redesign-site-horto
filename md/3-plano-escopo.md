# Plano de escopo

> Strategy becomes scope when you translate user needs and product objectives into specific requirements for what content and functionality the product will offer to users.

> Defining your requirements drives ambiguity out of the design process

> If you knnow what your goals are, you'll know then they've been reached.

Garret XX afirma que o escopo surge a aprtir da tradução das necessidades de usuários e objetivos do produto em conteúdo e elementos funcionais do mesmo. No plano de escopo serão descritos o conteúdo que será veiculadoe os requisitos organizacionais e funcionais do _site_ do Horto Medicinal.

## Conteúdo

Por tratar-se de um produto já existente, o _site_ do Horto Medicinal já possui um conteúdo próprio bastante completo. No entanto este conteúdo encontra-se bastante desorganizado, dificultando o acesso à informação. Em relação ao conteúdo, este projeto se limitará à reorganização do conteúdo já existene e não irá focar na criação de conteúdos novos.

## Requisitos de projeto

Os requisitos de projeto são de importância fundamental para organizar o seu desenvolvimento poseterior. Eles funcionam como um guia para as etapas subsequentes da metodologia.
Neste trabalho os requisitos serão divididos em duas categorias. A categoria de **organização do conteúdo** irá tratar das soluções estéticas e organizacionais que atendam às necessidades levantadas na etapa XX Plano de estratégia. Os **elementos funcionais** buscarão sanar tais necessidades levando em conta a interação do usuário e os elementos que a facilitam.

### Organização do conteúdo

A organização do conteúdo será feita seguindo o caminho do usuário da página inicial à página e às informações pelas quais está buscando.

A página inicial do _site_ precisa ser entendida com facilidade para o usuário e destacar a busca pro plantas, pois essa é a principal função do site; esta necessidade pode ser suprida por um layout arejado com poucos elementos e um elemento interativo central. Também é preciso garantir acesso às funções administrativas e às sessões sobre o horto sem que estas ofusquem o elemento principal da página. Estas informações podem ficar organizadas em um menu na parte superior da tela, conform algumas soluções apontadas na seção XX Análise de referências.

O resultado da busca por plantas precisa evidenciar a imagem o os nomes das plantas, pois são as informações que irão guiar a escolha do usuário. A organização dos resultados na forma de _cards_ contempla estas necessidades além de otimizar o espaço da tela e organizar os resultados em blocos visuais.

Na página de informações da planta, os nomes e a imagem devem continuar destacados para fazer uma ligação estétiva entre a busca e a página acessada; visualizar a imagem em tamanho maior também tem a função de confirmar a espécie da planta pesquisada. Em razão dos dois públicos-alvo distintos, as informações devem ser organizadas em duas áreas específicas, semelhante à organização do site MSKCC analisado na seção XX Análise de similares; como o Grupo Pessoal possui um grupo maior de usuários e precisa acessar a informação rapidamente, a área destinada a este grupo deve ter maior destaque e vir em primeiro lugar na página.

1. _Página inicial_
	1. Layout com poucos elementos
	2. Destaque para a função de busca
	3. Menu superior que chame pouca atenção com funções secundárias

2. _Resultados da busca_ - Organização em _cards_ com imagem e texto

3. _Página da planta_
	1. Destaque para a imagem e os nomes científico e populares
	2. Divisão entre conteúdo voltado para o Grupo Pessoal e o Grupo Profissional
	3. O conteúdo par ao Grupo pessoal é prioritário e deve aparecer primeiro na página
	4. O item de sugestões deve estar presente junto da área do Grupo profissional

### Requisitos estéticos

Nos requisitos estéticos serão descritas as fontes utilizadas, a diagramação , a paleta de cores e o tipo de imagens utulizados nas etapas subsequentes a esta.

Em relação às fontes, será utilizada uma família sem serifa por adequar-se melhor à leitura em telas e por ser a fonte de texto de todas as alternativas pesquisadas durante o capítulo XX Plano de estratégia. Não serão utilizadas famílias diferentes para títuloe e elementos textuais destacados em função do ruído que podem gerar, estes elementor serão compostos com uma variação em negrito da fonte de texto. O grande volume de nomes científicos e técnicos em outros idiomas também requer que haja uma variação em itálico da fonte de texto.

A diagramação deverá ser flexível para exibir telas com conteúdos centralizados e com conteúdos divididos verticalmente, facilitando a disposição de dos diversos elementos que compõe as páginas. Para possibilitar uma variedade maior de layouts, o grid deve ter um número de colunas múltiplo de 2 e 3.

Para a paleta de cores, será utilizada uma escala de cinzas, evitando o branco e o preto puros pois o grande contraste cansaria facilmente o usuário que esteja fazendo uma leitura mais loga no site. Elementos destacados serão contemplados com uma cor saturada.

Para o tipo de imagem utilizado no site, a fotografia é a que melhor cumpre a função de identificação das plantas. Esta decisão também se apoia nas alternativas descritas na seção XX Análise de similares em que a maioria dos sites apresentou a fotografia como recurso imagético.

1. _Fontes_
	1. Corpo de texto: sem serifa regular
	2. Nomes científicos: itálico regular
	3. Títulos: negrito

2. _Diagramação_ - Grade modular com número colunas múltiplo de 2 e 3

3. _Cores_ - Escalas de cinza com cores saturadas para destaque

4. _Imagens_ - Fotos em close das plantas

### Elementos funcionais

Os elementos funcionais comportam os recrusos através dos quais o usuário interage com a página, enviando e recebendo informações. Para o _site_ do Horto Medicinal, estes elementos foram separados entre os de navegação, em que há interação com o conteúdo disposto, e os de administração, através dos quais é feita a alteração, adição e remoção dos conteúdos.

Para a navegação é essencial poder transitar entre as diferentes áreas do site com facilidade, para isso será necessário um menu no topo da tela que esteja fora da tela quando não é necessário e que apareça assim que o usuário começar a procurá-lo, movendo o mouse para o topo da tela ou rolando a página para cima. para ampliar o alcance deste menu sem que ele fique poluído ou sobrecarregado com elementos, páginas e conteúdos abaixo da hierarquia principal devem estar aninhados no menu e mostrados usando _popups_; para que este recurso não seja difícil de utilizar, é necessário que não haja muitos níveis hierárquicos de organização. A busca do _site_ deve ser versátil e funcional, pois é o principal recurso de acesso às informações sobre as plantas, além da busca textual é necessário poder buscar por categorias como classificação botânica, sintomas sobre os quais age, lista de nomes poupulares científicos etc.; é necessário que o gerenciador de conteúdo suporte a utilização de categorias e etiquetas que possibilitem esse tipo de busca.

As funções administrativas requerem uma interface à parte, acessível através de um mecanismo de login. Esta interface não será operada por especialistas da área, então ela precisa ser intuitiva e de aprendizado fácil. Para que encontrar com facilidade o conteúdo a ser editado nesta interface, ele deve ser exibido da forma mais semelhante possível à forma que aparece no _site_. A adição de novas plantas será muito facilitada pela possibilidade de criar e utilizar padrões de postagem com capmos pré-definidos.

1. _Navegação_
	1. Menu aparente sempre que o usuário rolar a página para cima
	2. _Popups_ no menu que permitam acessar todas as áreas do site
	3. Sumários com _links_ na tela inicial das páginas de plantas.
	4. Poucos níveis de hierarquia entre as páginas para facilitar a navegação
	5. Sistema de classificação por categorias e etiquetas.

2. _Administração_
	1. Tecnologia fácil de aprender a usar
	2. Similaridade entre a aparência do conteúdo em edição e do disposto na página
	3. Padrões para a postagem de novas plantas
