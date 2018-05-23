# Plano de estrutura l[plano-de-estrutura]

c[garret02] define o plano de estrutura como o início da tomada de decisões que irão definir os aspectos visuais e informacionais do _site_. Este plano está dividido em duas sessões distintas: o **design de interação**, em que será estudada e definida a interação do usuário com o _site_, e a **arquitetura da informação**, que trata de como a informação é disposta para o usuário. Neste trabalho as duas etapas foram realizadas em paralelo pois se influenciam de forma recíproca.

## Design de interação l[dsn-interacao]

Nesta etapa o autor propõe a criação de um modelo conceitual e um sistema de tratamento de erros. O modelo conceitual deve ser baseado em elementos familiares aos usuários e que tenham relação com o tipo de _site_ que está sendo construído. Como exemplo são mencionados o carrinho de compras, bastante comum em lojas virtuais, e a revista ou jornal, que são bastante referenciados em sites de notícias. O tratamento de erros tem a função de garantir uma boa experiência de usuário ao utilizar o produto desenvolvido, ele é organizado em três momentos: prevenção, correção e recuperação.

### Modelo conceitual l[mod-conceitual]

A criação de um modelo conceitual do _site_ do Horto do HU iniciou com uma análise de duas referências da sessão r[analise-de-similares]: Memorial Sloan Kettering Cancer Center (MSKCC) e National Center for Complementary and Integrative Health (NCCIH).

O MSKCC, por tratar-se de um hospital, emula virtualmente a recepção do usuário no mesmo. Frases dirigidas diretamente ao usuário como pode ser observado na figura XX e telas que se alternam sequencialmente vão oferecendo os serviços da instituição. Ao acessar diferentes partes do _site_ a linguagem continua sendo dirigida ao usuário que é guiado como se estivesse passando por alas do hospital para encontrar o serviço desejado. O _layout_ também é receptivo, utilizando fotos e blocos de cor para preencher as telas.

O NCCIH é o setor do governo estadunidense que trata de práticas integrativas e complementares e seu _site_ tem a estrutura de um catálogo de serviços ou material informacional institucional. Os dizeres são na 1a pessoa do plural, sempre referentes ao próprio NCCIH. A navegação é bastante simples com poucos níveis de hierarquia, sempre dois ou três apenas. O _layout_ com fundo branco e blocos de texto/imagem remete à aparência de um informativo impresso ou um jornal.

Para o projeto tema deste trabalho, por este ter como principal função ser um repositório de informação para consulta, decidiu-se por um modelo conceitual de biblioteca. O usuário poderá acessar o _site_, fazer uma consulta ao acervo e obter as informações que lhe são interessantes sem auxílio de outra pessoa.

A partir deste modelo conceitual, o autor utilizou _sites_ de bibliotecas brasileiras e estrangeiras como referência para a construção deste projeto. As bibliotecas públicas pesquisadas, Biblioteca Nacional, Biblioteca de Nova York e Biblioteca de Londres, pouco acrescentaram pois suas páginas tinha a função de um painel de avisos sobre atividades culturais do museu e não focavam em mecanismos de busca no seu acervo. Para este estudo as bibliotecas universitárias se mostraram muito mais interessantes por colocar a busca como principal <??> dos seus _sites_.

Nas figuras ref[bu-cuny], ref[bu-camb], ref[bu-ufpr], o menu superior, quando presente, diz respeito às universidades; desta forma o conteúdo das bibliotecas fica hierarquicamente dentro da informação de suas respectivas universidades. Nas três figuras também é possível notar o destaque dado á ferrramenta de pesquisa, ela encontra-se no topo das páginas e com margens grandes que ajudam a destacá-la. Todas as buscas podem ser feitas de forma geral ou por dados específicos das obras como título, autor etc. O restante das páginas é composto por links para serviços da bibilioteca e uma seção de notíciascom estrutura semelhante à de  um blog.

![arq-info-img](../tex/images/similares/bu-cuny.png "Site da biblioteca da Universidade da Cidade de Nova York (CUNY)") l[bu-cuny]

![arq-info-img](../tex/images/similares/bu-cambridge.png "Biblioteca da Universidade de Cambridge") l[bu-camb]

![arq-info-img](../tex/images/similares/bu-ufpr.png "Biblioteca da Universidade Federal do Paraná (UFPR)") l[bu-ufpr]

Os resultados de busca são exibidos em páginas distintas dos portais das bibliotecas pois são gerenciados por sistemas diferentes. Os títulos encontrados são organizados em fichas horizontais com a imagem da obra e informações que auxiliem na identificação da mesma. Esta forma de organização já foi analisada na sessão ref[analise-de-tendencias] Análise de Tendências, item ref[youtube---busca]. A página de resultados também oferece opções de busca avançada a partir de informações como data, língua da publicação etc.

### Tratamento de erros l[trt-erros]

O tratamento de erros do _site_ do Horto do HU foi dividido em duas áreas principais: erros decorrentes da busca textual e erros decorrentes do preenchimento de formulários no site; ambas serão tratadas segundo a sequência de prevenção, correção e recuperação.

Na busca textual, a situação de erro que ocorre é a busca não retornar resultados a partir dos termos utilizados. Para a prevenção desse tipo de erro, será utilizado um texto curto indicando que a busca é sobre plantas, sintomas e doenças. Em caso de erro, é possível indicar erros de digitação e termos popularmente pesquisados para a correção. A recuperação será realizada através de links para categorias de pesquisa (_tags_) e retorno para a página inicial; também continuará disponível o campo de busca para novas tentativas.

No preenchimento de formulários, os erros podem ocorrer por preenchimento incorreto ou não preenchimento de algum campo. A prevenção deste tipo de erro será a indicação clara do que deve ser preenchido em cada campo e de quais campos são obrigatórios. Em caso de erro, o usuário é levado de volta à página do formulário com os campos que necessitam de alteração em destaque para que sejam corrigidos. A recuperação será realizada com um link para cancelar o preenchimento e retornar à página anterior ou página inicial do _site_

## Arquitetura da informação l[arq-informacao]

Segundo c[garret02], a arquitetura da informação trata das formas de organização do conteúdo em seções, páginas e componentes, todos representados por nós. Nesta etapa será produzido um diagrama indicando a relação entre os nós do _site_ e o caminho do usuário entre eles. 

Para a organização utilizou-se a técnica de _cardsorting_ em que os nós são representados por cartões e apresentados a pessoas que correspondem aos perfis de público-alvo para que os organizem. As diferentes organizações registradas são analisadas para a construção da arquitetura final da página.

![arq-info-img](../tex/images/diagramas/v3.png "Esquema estrutural do site")

As informações do _site_ foram organizadas de duas formas: **categorias** e **seções**. As categorias classificam e agrupam as informações em relação ao seu conteúdo, as seções as agrupam levando em conta a navegação: quais informações estarão em uma mesma tela ou área do site.

As categorias criadas são _plantas_, _institucional_, _administração_ e _ferramentas de busca_. _Plantas_ é a principal categoria deste projeto, nela estão reunidas as informações sobre identificação, uso pessoal e profissional e o glossário. _Ferramentas de bsuca_ agrupa três diferentes mecanismos para acessar as informações sobre plantas: busca textual, _tags_ ou etiquetas temáticas com sintomas e ações farmacológicas e por fim uma lista completa das plantas de acordo com seu nome científico. Em _institucional_ estão as informações ligadas diretamente ao Horto Medicinal: sobre o Horto, contato e redes sociais, orientações para o uso seguro, formulário de sugestões e um alerta indicando que o _site_ é apenas para fins informativos e que não substitui auxílio profissional. A categoria _administração_ reúne as páginas e ferramentas dedicadas à gestão do conteúdo e dos administradores do _site_.

Para agrupar as informações em blocos de navegação foram definidas três seções: _Início_, _Fichas informativas_ e _Painel Administrativo_. O início funciona como a entrada do site, ele contém informações sobre o Horto Medicinal, suas redes sociais, as ferramentas de busca e um campo para login administrativo; ela está ligada diretamente às páginas de contato e uso seguro. Através das ferramentas de busca ela leva à seção de _fichas informativas_ que abre com o alerta de finalidade do _site_, contém as informações de identificação das plantas, seu uso pessoal, uso profissional e leva às páginas de glossário, uso seguro e ao formulário de sugestões. O _painel administrativo_ é acessado a partir do campo de login na página inicial e contém ferramentas para registro de novos administradores e edição de conteúdo.

![arq-info-img](../tex/images/diagramas/detalhamento.png "Detalhamento dos elementos interativos do site.")
# Plano de esqueleto l[plano-de-esqueleto]

Em c[garret02] o plano de esqueleto é descrito como a etapa em que traduzimos o acúmulo conceitual das etapas anteriores em protótipos de baixa e média fidelidade, organizando os elementos na página. Para este trabalho, serão desenvolvidos XX modelos de página em duas áreas distintas. Na área _usuário final_ estarão as páginas inicial, artigo, etiquetas, resultados da busca, erro de busca, ficha da planta, termo legal, ficha da planta e formulário de sugestão. Na área _ferramentas administrativas_ estarão as páginas de painel administrativo, lista de plantas publicadas e edição de fichas das plantas.

## Grid

Para iniciar a estruturação do _layout_, foi criado um grid com 1280px de largura, 12 colunas de 92px (7,18%) e _gutter_ de 16px (1,25%). Este grid se adapta de forma proporcional em telas menores e mantém a largura de 1280px em telas maiores. Idealmente este _layout_ funciona em telas com largura mínima de 768px, para dispositivos mais estreitos é necessário desenvolver um grid específico com colunas e medidas diferenciadas. Conforme mencionado no item ref[delimitacoes], este trabalho não tem a intenção de desenvolver uma versão para dispositivos com telas mais estreitas que 768px. Para este trabalho serão estruturadas a página inicial, os resultados das buscas e a ficha de plantas por entender que são os itens mais importantes e mais complexos do _site_.

O grid não tem a função de encaixar todas os elementos de cada página, mas sim de auxiliar na criação de _layouts_ com diferentes números de colunas e elementos com a largura padronizada. Elementos podem estar alinhados apenas à esquerda ou a direita, alinhados com o centro da página e estar alinhados com margens em relação às colunas do grid.

Para a construção do grid, dos _wireframes_ e dos protótipos de baixa fidelidade para testes de usabilidade foi utilizado o _software_ Pencil, desenvolvido e distribuído sob os termos da _GNU Public License version 2_ (http://www.gnu.org/licenses/gpl-2.0.html <++> incluir na bib), caracterizando-o como _software_ livre.

![arq-info-img](../wireframes/grid.png "Grid para construção dos esqueletos.")

## Páginas para o usuário final

### Elementos fixos

As páginas serão compostas por dois cabeçalhos e um rodapé fixos e corpos de conteúdo diferentes em cada tela. 

O primeiro cabeçalho é o cabeçalho padrão do _site_ da UFSC, como o horto está vinculado à universidade e estará dentro do domínio .ufsc.br, entendeu-se necessária a inclusão deste cabeçalho. O segundo cabeçalho contém a logo do horto na primeira linha e o menu principal na segunda. A logo  leva sempre à página inicial. O primeiro item do menu, uso seguro de plantas, fica destacado pois é uma seção bastante referenciada nas fichas de plantas e <++> contém informações importantes para o usuário, principalmente o público que faz uso pessoal de plantas medicinais. O ícone de busca à direita expande para um campo de busca; quando não há outro campo de busca no corpo da página, o campo do ícone fica expandido por padrão.

O rodapé contém uma logo da UFSC que leva à sua página principal, um mapa do _site_ e informações para contato.

### Página inicial

A página inicial é composta por três áreas distintas, ferramentas de busca, resumo sobre o Horto e contato. Nas ferramentas de busca há um campo textual destacado e _links_ auxiliares que levam às listas de plantas, usos populares e ações medicinais. Em seguida, o resumo sobre o horto é constituído por uma foto que ocupa toda a largura da tela com um resumo e um link para o artigo **Sobre o horto**. Por fim, o contato é composto por um _link_ para a rede social do Horto e outro para o endereço de email.

![arq-info-img](../wireframes/v3/pages/inicio.png "Layout de baixa fidelidade da página inicial.") l[wire-inicio]

### Artigo

O modelo _artigo_ será utilizado para comportar textos longos como **sobre o Horto** e **uso seguro de plantas**. Ele é composto de um rótulo destacado, um botão para download em PDF do artigo, o corpo de texto e imagens e uma sessão com as referências citadas e eventuais _links_ para as mesmas.

![arq-info-img](../wireframes/v3/pages/artigo.png "Layout de baixa fidelidade do modelo de artigo.")

### Etiquetas

o modelo de _etiquetas_ irá organizar as listas de **usos populares** e **ações medicinais**. As etiquetas com as palavras-chave ficarão dispostas em ordem alfabética e separadas por linhas horizontais de acordo com a letra inicial, um alfabeto no topo da página auxiliará na navegação. Cada etiqueta levará a uma lista com as plantas marcada com a palavra-chave contida.

![arq-info-img](../wireframes/v3/pages/etiquetas.png "Layout de baixa fidelidade da lista de etiquetas.")

### Resultado das buscas

O _resultado das buscas_ pode ser acessado de três diferentes formas, a partir de uma busca textual, de uma etiqueta ou do link para a **lista de plantas**. Nos dois primeiros casos, os resultados são filtrados pelo termo buscado ou pela etiqueta, no terceiro todas as plantas cadastradas são listadas.
No topo da tela há um campo para novas buscas e opções para busca avançada. Os resultados são mostrados em _cards_ com uma foto, nome científico, nomes populares, usos populares, ações medicinais e data da última atualização desta informação.

![arq-info-img](../wireframes/v3/pages/resultados_busca.png "Layout de baixa fidelidade dos resultados da busca.")

### Erro na busca

O modelo _erro na busca_ é utilizado para situações em que a busca textual não retorna resultados. Ela apresenta uma mensagem no topo alertando sobre o erro; abaixo estão um campo de busca com opções avançadas e _links_ para as listas de usos populares, ações medicinais e plantas para o usuário poder tentar uma nova busca.

![arq-info-img](../wireframes/v3/pages/erro_busca.png "Layout de baixa fidelidade do erro na busca.")

### Termo legal

Esta tela aparecerá sempre que o usuário acessar uma _ficha de planta_. Ele contém um texto isentando o Horto legalmente do uso indevido de plantas medicinais. Para diversas pesquisas recorrentes em um único uso, uma caixa pode ser marcada para que essa mensagem não seja mostrada até o final do acesso ao _site_.

![arq-info-img](../wireframes/v3/pages/termo_legal.png "Layout de baixa fidelidade do termo legal.")

### Ficha de planta

A _ficha de planta_ está dividida em informações para identificação da planta, informações para uso pessoal e informações para uso profissional. Na área de identificação da planta, a organização e o conteúdo se assemelham bastante aos _cards_ do _resultado das buscas_, funcionando como uma confirmação visual de que a ficha acessada corresponde à planta desejada; as diferenças são adição de mais fotos da planta que podem ser acessadas em um sistema de _slides_, o acréscimo de um pequeno texto com a descrição botânica das plantas e um _link_ para editar a ficha da planta; este _link_ leva a uma tela de _login_ caso o usuário ainda não tenha se identificado como administrador. As áreas de informação pessoal e profissional estão organizadas em diferentes tópicos que podem ser expandidos revelando o seu conteúdo, este sistema facilita a navegação na tela pois permite ver mais tópicos de uma só vez.

![arq-info-img](../wireframes/v3/pages/ficha_da_planta.png "Layout de baixa fidelidade da ficha da planta.")

### Sugestão

O formulário de sugestão tem a função de ser um canal de colaboração dos usuários para manter o _site_ sempre atualizado. Para identificação do usuário é pedido nome, email e profissão; uma lista de botões de opção permite o usuário indicar sobre qual informação é a sua contribuição, que é descrita em um campo de texto. Também há um campo não obrigatório de anexo de arquivos.

![arq-info-img](../wireframes/v3/pages/sugesto.png "Layout de baixa fidelidade do formulário de sugestão.")

![arq-info-img](../wireframes/v3/pages/confirmao_sugesto.png "Layout de baixa fidelidade da confirmação de envio da sugestão.")

## Ferramentas administrativas

### Elementos fixos

Como elemento fixo das ferramentas administrativas há um menu lateral com _links_ para o painel, listas de plantas e artigos publicados, gerenciamento de usuários e preferências do _site_.

### Painel administrativo

O _painel administrativo_ é acessado a partir do _login_ no segundo cabeçalho das páginas para o suário final, funcionando com página inicial das ferramentas administrativas. Na parte superior há botões para as ações mais recorrentes de adicionar e editar artigos ou fichas de planta. Em seguida está uma lista com as plantas recentemente atualizadas na forma de _cards_ semelhantes aos _resultados da busca_.

![arq-info-img](../wireframes/v3/pages/painel_administrativo.png "Layout de baixa fidelidade do painel administrativo.")

### Lista de plantas publicadas

Esta página é acessada a partir do _painel administrativo_ através do botão "editar planta" ou do _link_ "Plantas" no menu lateral. Ela consiste de uma tabela com os nomes científicos das plantas publicadas e a data em que foi realizada a última alteração. A coluna de nomes funciona como _link_ para as páginas de edição das respectivas plantas.

![arq-info-img](../wireframes/v3/pages/lista_edio.png "Layout de baixa fidelidade das plantas publicadas.")

### Edição da ficha de planta

A _edição da ficha de planta_ é um formulário com um campo editável para cada um dos itens presentes no modelo _ficha de planta_, ela pode ser acessada a partir da _lista de plantas publicadas_ ou pelo link para edição presente na páginas de _ficha de planta_. Os campos editáveis estão separados em identificação da planta, informações para uso pessoal e informações para uso profissional, isto ajuda a encontrar a informação que deseja editar com mais facilidade. Ao final de cada uma das três áreas há um botão que confirma e publica as alterações realizadas, assim ele está sempre aparente facilitando edições rápidas e pontuais. 

![arq-info-img](../wireframes/v3/pages/edio_planta.png "Layout de baixa fidelidade da edição da ficha de planta.")
# Testes de usabilidade

Antes de iniciar a etapa final do projeto, o plano de superfície, foram realizados testes de usabilidade para validar a disposição dos _layouts_ no plano de esqueleto com usuários em potencial do site. Para estes testes as situações hipotéticas apresentadas no item XX jornadas de usuário foram adaptadas a um formato de narrativa para ajudar na imersão das pessoas nas situações apresentadas. As telas também foram reformuladas para aproximar-se mais de uma página _web_ esteticamente; em diálogo com a orientadora do projeto, entendeu-se a importância dessa reformulação para que a estética dos _wireframes_ não se tornasse um ruído durante os testes.

![arq-info-img](../wireframes/testes-v1/img-telas.png "Algumas das telas utilizadas nos testes de usabilidade") l[usabilidade-telas-img]

## Seleção dos participantes
Participaram dos testes 4 pessoas dos diferentes públicos-alvo: grupo pessoal grupo profissional e administradores. Duas pessoas estudantes da área da saúde, sendo uma atualmente corresponsável pela atualização das informações no _site_ atual do Horto Medicinal, uma pessoa estudante de engenharia e uma professora da área da saúde e corresponsável pela atualização das informações no _site_. Duas pessoas na faixa etária de 18 a 24 anos, uma entre 25 e 32 anos e uma entre 41 e 55 anos. Três homens e uma mulher. Usuários de diferentes públicos-alvo realizaram testes diferentes. Para facilitação dos testes o autor atuou sozinho cumprindo todas as funções necessárias.


## Descrição das tarefas

### Buscar uma planta a partir de sintomas - grupo pessoal

Este teste foi realizado com as 4 pessoas por entender que todas fazem uso pessoal independentemente de outros usos do _site_. A tarefa consistia em encontrar uma planta a partir de sintomas característicos de gripe. Todas as pessoas completaram a tarefa sem maiores dificuldades. Uma acessou a lista de usos populares, duas acessaram a lista de plantas e uma acessou o campo de busca. Todas descreveram os termos utilizados para as listas como confusos ou imprecisos, foi proposta uma alteração para _lista de sintomas_ e _lista de usos_.

### Enviar uma sugestão através do formulário - grupo profissional

Esta tarefa foi realizada pelas pessoas que são estudantes ou profissionais da área da saúde. Pediu-se que o usuário encontrasse o formulário de sugestões e enviasse uma sugestão através dele. Um usuário não encontrou o formulário, procurando-o na área de contato. Outro disse só ter encontrado por que na narrativa apresentada foi mencionado que a sugestão era sobre uma planta específica. Em função destes ocorridos, decidiu-se por apresentar na área de contato um botão para os formulários e adicionar ao formulário um campo para seleção da planta.

### Editar uma ficha de planta - administradores

Esta tarefa foi proposta às pessoas corresponsáveis pela atualização das informações no _site_ do horto. Pediu-se aos usuários que acessarem o painel administrativo do site e editassem a ficha de uma planta. Todas as pessoas puderam completar a tarefa sem dificuldades.

## Comentários e observações (Que nome colocar??)

Após realizadas as tarefas o facilitador dialogou com os usuários coletando comentários e também registrou algumas alterações necessárias após observar terceiros interagindo com a página. A lista a seguir resume as alterações necessárias de forma semelhante à descrita na seção XX plano de escopo

* Incluir no menu superior um link ou botão explícito para a página inicial.
* Reduzir a altura do menu superior pois estava ocupando espaço dos conteúdos específicos de cada página e dificultando sua visualização.
* Inclusão de ícones para indicar o nível de estudos disponíveis para cada planta, Tanto para a quantidade de informação disponível quanto para indicar se foram obtidas com testes _in vitro_, em animais ou em humanos.
# Plano de superfície l[plano-de-superficie] 

c[garret02] define o plano de superfície como a etapa em que estética e funcionalidade se unem para produzir um _design_ que agrada os sentidos enquanto alcança os objetivos de todos os planos anteriores. Nesta etapa será desenvolvido o protótipo de alta fidelidade do _site_, definindo as cores, as formas e a tipografia fazendo o acabamento estético dos _wireframes_. Como as páginas todas foram apresentadas no capítulo r[plano-de-esqueleto] Plano de esqueleto, será feita descrição apenas da página inicial uma vez que foi alterada significativamente após os testes de usabilidade. Os demais elementos gráficos serão apresentados em um guia de estilos.
O site em sua versão final com todas as telas pode ser encontrado no apêndice <++>.

## Telas l[sup-telas]

![arq-info-img](img/superficie/img-telas.png "Protótipo de alta fidelidade do site")

### Padrão folha

Com o intuito de criar unidade e diferenciar o _site_ criou-se um padrão para as caixas e botões inspirado no formato de folha. O padrão consiste em arrendondar os cantor superior esquerdo e inferior direito dos elementos, conforme demonstrado na figura r[padrao-folha-img].

![arq-info-img](img/superficie/padrao-folha-img.png "Elementos estilizados com o padrão folha")l[padrao-folha-img]

### Menu superior

![arq-info-img](img/superficie/menu-img.png "Versão final do menu superior")l[menu-img]

No menu superior a logo do Horto Medicinal foi reposicionado na mesma linha dos demais elementos para reduzir a sua altura. A cor de fundo foi trocada pois o contraste com o azul da barra superior estava muito exaustivo; para manter a divisão entre este elemento e o resto do conteúdo foi utilizada uma linha de dois _pixels_ na borda inferior. Por fim a opção de uso seguro foi separada dos demais elementos pois o seu destaque estava se confundindo com um indicador da página em que o usuário se encontrava, dificultando a navegação.

### Página inicial l[sup-pag-inicial]

A página inicial foi a com alterações mais drásticas desde os teste de usabilidade, inclusive na disposição dos elementos. A alteração que foi comum a todas as áreas foi a padronização dos seus títulos com o elemento de folha e a inclusão de um título na área sobre o Horto.

#### Ferramentas de busca

![arq-info-img](img/superficie/busca-img.png "Versão final da área de ferramentas de busca")l[busca-img]

O título da sessão foi reposicionado e estilizado de acordo como o padrão descrito no item l[sup-pag-inicial]. Os botões que levam às listas estavam se assemelhando a opções de busca avançada nos _layouts_ dos _wireframes_, por isso a tela foi dividida entre a busca textual e o acesso às listas, igualando-as hierarquicamente e explicitando que são duas formas diferentes de acessar as informações sobre plantas, não partes de um mesmo mecanismo de buscas. 

#### Contato

![arq-info-img](img/superficie/contato-img.png "Versão final da área de ferramentas de contato")l[contato-img]

Na área de contato foi adicionado um _link_ para o formulário de sugestões sobre plantas e o _link_ para a página do _Facebook_ foi substituído por um _widget_ da página do Horto. Na coluna da esquerda foram posicionados o título e os _links_ para _email_ e o formulário, na direita ficou o _widget_.

## Guia de estilos l[guia-de-estilos]

### Cores

![arq-info-img](img/superficie/paleta-img.png "Paleta de cores para a versão final do site")l[paleta-img]

Na versão final do _site_ foram utilizadas sete cores divididas em três grupos conforme mostrado na figura r[paleta-img]. A seleção iniciou com as cores __$light-gray__ e __$dark-gray__ de apoio e a cor __$action-color__ da sessão de usuário final. Estas seriam, respectivamente, a cor para o fundo, o texto e a cor de destaque; portanto é fundamental a harmonia entre estas cores. Os tons foram escolhidos para que o contraste não fosse irritante ou exaustivo para o usuário, esta escolha fica explícita na imagem r[contraste-img] em que é possível ver a alteração das cores da versão dos testes de usabilidade para a versão final. As demais cores de destaque foram definidas utilizando um algoritmo que adiciona preto à cor desejada. A __$adm-action-color__ foi obtida adicionando 40% de preto; para as cores __-hover__ foi adicionado 20% de preto em relação às cores base. A __$medium-gray__ é o cinza 50%.

![arq-info-img](img/superficie/contraste-img.png "comparação entre as cores das versões para teste de usabilidade e final")l[contraste-img]

### Tipografia

![arq-info-img](img/superficie/tipografia-img.png "Tabela tipográfica da versão final")l[tipografia-img]

A tipografia selecionada foi a família Roboto. A família foi criada para o sistema operacional Android e atualmente é desenvolvida e atualizada com código aberto. Ela está presente em todos os serviços da Google, é constantemente revisada e não possui custos de uso. Trata-se de uma família grande, com seis pesos regulares e seis itálicos, sem serifa e desenhada para ser usada em meios digitais.

### Ícones

![arq-info-img](img/superficie/icones-img.png "Ícones utilizados na versão final.")l[icones-img]

Para o site não foram criados ícones específicos, utilizou-se ícones apenas para funções já comuns no meio digital como pesquisar, editar e baixar. Os ícones utilizados são da coleção coleção Feather Icons, desenvolvida com código aberto e disponibilizada de forma gratuita. Também foi importante para a seleção que os ícones fossem disponibilizados em formato SVG, o que permite alterar suas cores e espessura de linha de forma dinâmica.

### Botões
![arq-info-img](img/superficie/botoes-img.png "Botões utilizados na versão final.")l[botoes-img]

Os botões foram utilizados para os elementos interativos do site e, dentro da área para usuário final, nas etiquetas. Embora todos tenham o mesmo tamanho de fonte e de margens internas, foram definidos três modelos diferentes quanto às cores e a interação: __padrão__, __cancelar__ e __etiqueta__.

O botão __padrão__ possui fundo com cor de destaque, fonte clara, um tom mais escuro na borda de baixo que emula uma tridimensionalidade e o seu fundo escurece com a sobreposição do mouse. Com a cor de destaque no fundo, esses botões facilmente chamam a atenção nos fundos claros do _site_.

O botão __cancelar__ tem o fundo transparente e o texto com a cor de destaque, que escurece com a sobre posição do _mouse_. A diferença de estilo foi para que se diferencie visualmente quando aparece junto a outros botões; sendo uma função secundária, não é necessário o mesmo nível de destaque.

![arq-info-img](img/superficie/etiquetas-img.png "Etiquetas em seu contexto de uso")l[etiquetas-img]

A __etiqueta__ ficou a cor de fundo e de texto padrão do _site_, sendo sua borda colorida e a borda esquerda ligeiramente mais larga; com a sobreposição do _mouse_ a borda esquerda aumenta. O estilo foi definido pensando minimizar a exaustão visual e facilitar a visualização da __etiqueta__ selecionada pelo usuário, pois quando está na tela ela aparece em grande número e com bastante proximidade, como pode-se observar na imagem r[etiquetas-img].

### Tabelas

![arq-info-img](img/superficie/tabelas-img.png "Tabelas utilizadas no painel administrativo")l[tabelas-img]

As tabelas foram utilizadas na área administrativa para organizar informações sobre as postagens e sugestões enviadas. Para manter o _layout_ arejado as únicas divisórias visíveis são linhas horizontais de um _pixel_ as divisórias verticais são feitas apenas com o alinhamento das colunas. Na ferramenta de sugestões do painel administrativo as sugestões não lidas são marcadas com negrito e um tom da cor de destaque misturada a branco no fundo, como é possível observar na imagem r[tabelas-img]

### Formulários

![arq-info-img](img/superficie/forms-img.png "Formulário de envio de sugestão")l[forms-img]
Os elementos de formulário foram utilizados para compor a página de sugestões, as opções de busca avançada e a página de edição das fichas de planta. Os elementos estilizados foram as legendas, os campos de texto e os botões de rádio, os demais elementos serão alterados de acordo com as preferências do sistema operacional do usuário. Os campos de texto tiveram os cantos arredondados de acordo com o padrão de folha e as margens internas foram ampliadas para facilitar a legibilidade, quando selecionado pelo usuário a borda e a sombra das caixas alteram para a cor destaque. Os botões de rádio ficaram com a cor de destaque na borda, fundo branco e um tom escuro da cor destaque na seleção.
# Apêndice X: Versão final do site

## Área de usuário final

### Página inicial

![arq-info-img](img/superficie/telas/index.png "Página inicial")

### Página de etiquetas

![arq-info-img](img/superficie/telas/etiquetas.png "Página de etiqutas")

### Resultados da busca

![arq-info-img](img/superficie/telas/resultados.png "Resultados da busca")

### Aviso legal

![arq-info-img](img/superficie/telas/aviso-legal.png "Aviso legal")

### Ficha da planta

![arq-info-img](img/superficie/telas/ficha.png "Ficha de planta")

### Formulário de sugestão

![arq-info-img](img/superficie/telas/sugestao.png "Formulário de sugestão")

### Confirmação de envio do formulário

![arq-info-img](img/superficie/telas/confirmacao.png "Confirmação de envio do formulário")

## Área administrativa

### Login

![arq-info-img](img/superficie/telas/login.png "Login")

### Painel administrativo

![arq-info-img](img/superficie/telas/painel-adm.png "Painel administrativo")

### Lista de edição

![arq-info-img](img/superficie/telas/lista-edicao.png "Lista de edição")

### Edição de planta

![arq-info-img](img/superficie/telas/ficha-adm.png "Edição de planta")
