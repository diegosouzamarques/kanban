# App Kanban construído com React e TypeScript

Projeto construído com React e TypeScript, exibindo algumas funcionalidades
possíveis sem muito custo de implementação e manutenção.

## Apresentação funcionalidades

App apresenta CRUD de tarefas em forma de card's para o fluxo do Kanban

### Listagem 
Existe duas listagens de card's, uma ampla monstrando visualmente em que 
Etapa(Step) esta cada um, em forma Dashboard, e a outra em histórico,
nas duas visões podendo editar e visualizar detalhes.


### Cadastro Card
No cadastro de card contém as informações básicas para cadastro,
contendo campos obrigatórios com validação e monstrando ao usuário
a necessidade do preenchimento.   

![](/gifs/validacao.gif)


### Alteração Card
Nas listagens é possivel acessar a alteração de um card já cadastrado,
no Dashboard apenas clicando sobre o card temos uma tela modal com as 
informações e botão para atualizar. Já na tela de histórico existe um botão
que exibe a mesma modal possibilidando o acesso a alteração.

![](/gifs/atualizacao.gif)

### Deleção Card
No histórico é possivel realizar esta ação clicando no botão correspondente
e confirmar a deleção.

![](/gifs/delete.gif)


### Avanço de Status Card
Na tela de Dashboard é possível realizar a Transferência de status
do card apenas arrastando.

![](/gifs/arrastar.gif)


## Deploy
Acesso ao deploy clicando [aqui](https://kanban-diegosouzamarques.vercel.app/)

# Autores
[<img src="https://avatars.githubusercontent.com/u/71080010?v=4" width=115><br><sub>Diego de Souza Marques</sub>](https://github.com/diegosouzamarques) 


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
