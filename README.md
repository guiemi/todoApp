# todoApp

# Introdução

O todoApp é um to-do list feito usando React. Ele permite ao usuário adicionar, visualizar e completar tarefas. Ele também mostra dinamicamente a lista das tarefas completadas.

![todo](https://github.com/guiemi/todoApp/blob/master/media/todoApp_screenshot.png)

## Instalação / pré-requisitos

* O único requisito necessário é que você tenha instalados o **npm** (Node Package Manager) e o Node.js. Para baixá-lo na sua máquina, visite o [nodejs.org/pt-br](https://nodejs.org/pt-br/).

# O todoApp

## Como funciona

Seu funcionamento é **straight to the point**, facilitando ao usuário a criação de listas rápidas de tarefas. Depois de adicionada a tarefa, ela é mostrada imediatamente abaixo na tela. E, para melhor visualização do fluxo **daquilo que já foi feito x o que ainda precisa ser feito**, as tarefas já completadas são mostradas dinamicamente imediatamente abaixo da *to-do list* principal.

![todo-hd](https://github.com/guiemi/todoApp/blob/master/media/todo-hd.gif)



# Diário de Bordo

## Dia 1/4 (quinta): primeiros passos

### Aprendendo os fundamentos do React

No primeiro dia eu **aprendi os básicos sobre** `props` **e** `states`. Visualizei de forma geral o "dialeto" que o React usa **a partir da sintaxe do JavaScript**. Outro aspecto importante do primeiro dia foi aprender o fluxo de código dentro da **organização de pastas e arquivos** dessa library.

Utilizei o tutorial **[Create a Simple Todo app in React](https://medium.com/@kris101/create-a-simple-todo-app-in-react-72d9341a7e6c)** (de autoria de Krissanawat Kaewsanmuang) para me familiarizar melhor com o React.

## Dia 2/4 (sexta): estados

### Aprendendo sobre estados

Na sexta-feira, li sobre estados (o funcionamento do `setState`). Entendi melhor também como configurar os estados das funções para que um item marcado como "completed" apareça na lista de "Tasks done".

A aplicação ganhou uma nova feature: uma tarefa, ao ser marcada como completada, é movida para uma lista de "Tasks done".

## Dia 3/4 (sábado): desacoplamento de componentes e layout

### Reorganizando a estrutura do código

No sábado, estudei a disposição dos diretórios do React para uma melhor organização dos componentes. Criei uma branch a partir da master afim de desacoplar o App.js, inserindo cada componente em uma pasta dedicada, porém não alcancei os resultados desejados e, então, passei para a próxima tarefa que era estruturar o layout.

### Adicionando CSS ao layout

Preferi usar o CSS *vanilla* (e Flexbox) para desenhar o layout, primeiramente porque estou praticando flexbox; e também porque talvez eu perdesse tempo lendo sobre como implementar o Bootstrap, o Miligram ou outro *framework* CSS neste projeto. Por ser um app simples, o uso do CSS puro inicialmente me pareceu ser a melhor decisão.

## Dia 4/4 (domingo)

### Finalizando a documentação

No último dia, finalizei a escrita e a revisão da documentação do projeto: adicionei um *screenshot* e um *gif* do app ao README e também inseri uma seção de "próximos passos", que em breve será transformada em *issues* no GitHub.

# Próximos passos
- [x] ~~Enviar as tarefas completadas automaticamente para uma lista de "*Tasks completed*"~~
- [x] ~~Mostrar dinamicamente a lista de tarefas completadas somente se ela não estiver vazia~~
- [ ] Adicionar a opção de editar/apagar uma tarefa na lista principal
- [ ] Adicionar a opção de apagar todas as tarefas já concluídas
- [ ] Adicionar a opção de apagar todas as tarefas de todas as listas
- [ ] Desacoplar os componentes do App.js e organizá-los em pastas dedicadas

# Referências

* **Artigo**: [Create a Simple Todo app in React](https://medium.com/@kris101/create-a-simple-todo-app-in-react-72d9341a7e6c) (Medium)
* **Tutorial em vídeo**: https://www.youtube.com/watch?v=e_ZibOe77yo&t=577s 
* Arrow functions: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions
* **React.js Cheatsheet**: https://devhints.io/react
* **Artigo**: [Understanding React setState](https://css-tricks.com/understanding-react-setstate/) (CSS-TRICKS)
* **Talk**: [The introduction to Reat you've been missing](https://www.youtube.com/watch?v=SAIdyBFHfVU) (Kent C. Dodds @UtahJS)
* **Paleta de cores**: [#1443225](https://colorhunt.co/palette/143225) (ColorHunt)