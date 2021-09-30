### ☁️ zen note ☁️

Aplicação desenvolvida para o checkpoint da disciplina FrontendII, do curso Certified Tech Developer na Digital House Brasil.
O desafio é construir uma aplicação utilizando HTML, CSS e Javascript, que contenha as especificações propostas no enunciado e que consuma uma API e renderize as informação requisitadas em tela.

A solução aqui proposta é uma aplicação to-do mobile first responsiva que cria, categoriza e gerencia notas pessoais. Foi utilizado Sass para estilização, consumo de API externa via fetch, manipulação de DOM e métodos nativos javascript.

O código base foi desenvolvido em grupo, participaram Larissa Nunes, Felipe Soares, Rodrigo Brasil e Carlindo Junior. 
Contribuições com melhorias e dicas são muito bem vidas. O código é aberto e livre para utilização.

Link para aplicação: https://tuliopxavier.github.io/zennote/

<hr>
<img src="./assets/img/zen-note-interface.png" alt="two mobile application interfaces with light and dark themes"/>
<hr>

### Instruções e requisitos do entregável
	

- A primeira página deve ter um formulário com os inputs: 
Data de criação: o usuário não poderá alterar esse input, mas ele deve ser exibido.
Data limite da tarefa: data que o usuário deseja terminar aquela tarefa.
Descrição: texto da tarefa.
Botão de submit.

- Validações:
Nenhum campo pode ser vazio.
IMPORTANTE: Quando o usuário não preencher corretamente deve ser exibido um alerta indicando que existem erros na criação da tarefa.
OPCIONAL: a data limite da tarefa deve ser hoje ou no futuro.

- Funcionalidades:
Quando o usuário clicar em submit, se ele passar pela validação, a anotação deve ser exibida na tela por meio de um card.
No card da anotação deve ter um botão para excluir a anotação. Quando ele for clicado deverá ser exibido um aviso confirmando a intenção de excluir a anotação. Se o usuário confirmar a intenção de excluir, o card desta nota deve desaparecer.
Ainda no card da anotação deverá existir um checkbox que ao ser clicado faz o texto daquela anotação ficar tachado. Tarefa concluida.
Opcional: Escolher cor do fundo do card - (versão dark)

- Agora nós vamos criar uma outra página, onde iremos consumir uma api de lista de tarefas.
O end-point https://jsonplaceholder.typicode.com/todos/ responde com um JSON com 200 tarefas. Essas 200 tarefas devem ser consumidas pelo JS e renderizadas também como cards na página.
Nas tarefas onde o atributo “completed": true” o texto do atributo title deve estar tachado. Pois significa que a tarefa ja foi completada.
Nas tarefas onde o atributo “completed": false” o texto do atributo title deve estar em negrito. Pois significa que a tarefa está a fazer. 
Exiba também o conteúdo do atributo “id”.

- ENTREGA:
Devem ser entregues os arquivos HTML5, CSS3 e Javascript do projeto via Git/Github.
