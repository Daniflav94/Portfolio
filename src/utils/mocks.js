import appfilmes from "../assets/image/app-filmes.jpeg";
import toDoList from "../assets/image/toDoList.png";
import appFilmesVideo from "../assets/midia/app-filmes.mp4"

export const projects = [
  {
    image: appfilmes,
    title: "TMDB Filmes",
    stacks: ["angular", "firebase", "typescript"],
    github: "https://github.com/Daniflav94/App-filmes",
    deploy: "https://api-filmes-1c278.web.app/filmes",
    description:
      "Aplicação web de filmes personalizável que consome a API do The Movie Database, onde o usuário pode se cadastrar e fazer login, salvar filmes, avaliar, favoritar e fazer pesquisas.",
    video: appFilmesVideo,
  },
  {
    image: toDoList,
    title: "Lista de Tarefas",
    stacks: ["angular", "java", "spring", "typescript"],
    github: "https://github.com/Daniflav94/App-filmes",
    deploy: "https://api-filmes-1c278.web.app/filmes",
    description:
      "Aplicação web de lista de tarefas completa que possui autenticação, listas principais já prontas e opção de criar novas listas, com possibilidade de personalizar a imagem de fundo de cada uma. As tarefas possuem opção de inserir data e repetição diária, semanal ou mensal, também é possível editar as informações inseridas, adicionar anotações e excluir uma tarefa.",
    video: "",
  },
];

export const stacksFront = [
    {
        stack: 'HTMLIcon',
        delay: 0.1
    },
    {
        stack: 'CSSIcon',
        delay: 0.15
    },
    {
        stack: 'TailwindIcon',
        delay: 0.2
    },
    {
        stack: 'JSIcon',
        delay: 0.25
    },
    {
        stack: 'TSIcon',
        delay: 0.3
    },
    {
        stack: 'ReactIcon',
        delay: 0.35
    },
    {
        stack: 'ReactNativeIcon',
        delay: 0.4
    },
    {
        stack: 'ReduxIcon',
        delay: 0.45
    },
    {
        stack: 'JestIcon',
        delay: 0.5
    },
    {
        stack: 'GraphQLIcon',
        delay: 0.55
    },
    {
        stack: 'AngularIcon',
        delay: 0.6
    },
]

export const stacksBack = [
    {
        stack: 'NodeIcon',
        delay: 0.65
    },
    {
        stack: 'NestIcon',
        delay: 0.7
    },
    {
        stack: 'JavaIcon',
        delay: 0.75
    },
    {
        stack: 'SpringIcon',
        delay: 0.8
    },
    {
        stack: 'MySQLIcon',
        delay: 0.85
    },
    {
        stack: 'PostgresIcon',
        delay: 0.9
    },
    {
        stack: 'FirebaseIcon',
        delay: 0.95
    },
]


