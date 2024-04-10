import appfilmes from "../assets/image/app-filmes.jpeg";
import toDoList from "../assets/image/toDoList.png";
import toDoListGif from "../assets/midia/toDoListGif.gif";
import appFilmesGif from "../assets/midia/appFilmesGif.gif";
import bibliotech from "../assets/image/bibliotech.png";
import bibliotechGif from "../assets/midia/bibliotechGif.gif";
import livraria from "../assets/image/livraria.png";
import livrariaGif from "../assets/midia/livraria.gif";
import cloneCinema from "../assets/image/clone-cinema.png";
import cloneCinemaGif from "../assets/midia/cloneCinema.gif";

export const projects = [
  {
    id: 1,
    image: appfilmes,
    title: "TMDB Filmes",
    stacks: ["angular", "firebase", "typescript"],
    github: "https://github.com/Daniflav94/App-filmes",
    deploy: "https://api-filmes-1c278.web.app/filmes",
    description:
      "Aplicação web de filmes personalizável que consome a API do The Movie Database, onde o usuário pode se cadastrar e fazer login, salvar filmes, avaliar, favoritar e fazer pesquisas. Caso queira testar a aplicação, utilize essas credenciais: email: teste2024@email.com, senha: 123456",
    video: appFilmesGif,
    date: "02/2023"
  },
  {
    id: 2,
    image: toDoList,
    title: "Lista de Tarefas",
    stacks: ["angular", "java", "spring", "typescript"],
    github: "https://github.com/Daniflav94/Lista-tarefas-2.0",
    description:
      "Aplicação web de lista de tarefas completa que possui autenticação, listas principais já prontas e opção de criar novas listas, com possibilidade de personalizar a imagem de fundo de cada uma. As tarefas possuem opção de inserir data e repetição diária, semanal ou mensal, também é possível editar as informações inseridas, adicionar anotações e excluir uma tarefa.",
    video: toDoListGif,
    date: "03/2023"
  },
  {
    id: 3,
    image: bibliotech,
    title: "Bibliotech",
    stacks: ["angular", "firebase", "typescript"],
    github: "https://github.com/Daniflav94/App-bibliotech",
    deploy: "https://app-bibliotech.web.app/home",
    description:
      "Esse projeto foi desenvolvido em equipe durante o bootcamp Java Fullstack, se trata de uma aplicação web para administração de biblioteca, onde é possível cadastrar livros e fazer empréstimos. O usuário/bibliotecário pode visualizar as informações de empréstimos de livros em tabela, editar o empréstimo ou alterar na tabela o status para devolvido.",
    video: bibliotechGif,
    date: "11/2022"
  },
  {
    id: 4,
    image: livraria,
    title: "Minha Livraria",
    stacks: ["angular", "typescript"],
    github: "https://github.com/Daniflav94/Livraria",
    description:
      "Página da web que possibilita adicionar informações de livros através de um formulário e exibi-los em formato de card, com capa, título, autor e uma nota pessoal. Foram utilizados as ferramentas do Angular: DataBinding, Diretivas e Comunicação entre componentes para fazer a interação entre os dados inseridos no formulário e a exibição dos cards e para adicionar a opção de excluir um card.",
    video: livrariaGif,
    date: "11/2022"
  },
  {
    id: 5,
    image: cloneCinema,
    title: "Clone Cinearaújo",
    stacks: ["html", "css", "javascript"],
    github: "https://github.com/Daniflav94/Site_Clone_Cinema",
    deploy: "https://daniflav94.github.io/Site_Clone_Cinema/",
    description:
      "Aplicação clone do site de cinema da minha cidade Cinearaújo, desenvolvido no início dos meus estudos para praticar HTML e CSS.",
    video: cloneCinemaGif,
    date: "10/2022"
  },
];

export const stacksFront = [
  {
    stack: "HTMLIcon",
    delay: 0.1,
  },
  {
    stack: "CSSIcon",
    delay: 0.15,
  },
  {
    stack: "TailwindIcon",
    delay: 0.2,
  },
  {
    stack: "JSIcon",
    delay: 0.25,
  },
  {
    stack: "TSIcon",
    delay: 0.3,
  },
  {
    stack: "ReactIcon",
    delay: 0.35,
  },
  {
    stack: "ReactNativeIcon",
    delay: 0.4,
  },
  {
    stack: "ReduxIcon",
    delay: 0.45,
  },
  {
    stack: "JestIcon",
    delay: 0.5,
  },
  {
    stack: "GraphQLIcon",
    delay: 0.55,
  },
  {
    stack: "AngularIcon",
    delay: 0.6,
  },
];

export const stacksBack = [
  {
    stack: "NodeIcon",
    delay: 0.65,
  },
  {
    stack: "NestIcon",
    delay: 0.7,
  },
  {
    stack: "ExpressIcon",
    delay: 0.75,
  },
  {
    stack: "PrismaIcon",
    delay: 0.8,
  },
  {
    stack: "JavaIcon",
    delay: 0.85,
  },
  {
    stack: "SpringIcon",
    delay: 0.9,
  },
  {
    stack: "MySQLIcon",
    delay: 0.95,
  },
  {
    stack: "PostgresIcon",
    delay: 1,
  },
  {
    stack: "FirebaseIcon",
    delay: 1.05,
  },
];
