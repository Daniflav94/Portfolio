import appfilmes from "../assets/image/app-filmes.jpeg";
import toDoList from "../assets/image/toDoList.png";
import toDoListGif from "../assets/midia/toDoListGif.gif";
import appFilmesGif from "../assets/midia/appFilmesGif.gif";
import bibliotech from "../assets/image/bibliotech.png";
import bibliotechGif from "../assets/midia/bibliotechGif.gif";
import petMatch from "../assets/image/pet-match.png";
import petMatchGif from "../assets/midia/pet-match.gif";
import cloneCinema from "../assets/image/clone-cinema.png";
import cloneCinemaGif from "../assets/midia/cloneCinema.gif";
import gestaoAtivos from "../assets/image/gestao-ativos.png";
import gestaoAtivosGif from "../assets/midia/gestao-ativos.gif";

export const projects = [
  {
    id: 1,
    image: petMatch,
    title: "Pet-Match",
    stacks: ["react", "node", "typescript", "express", "jest"],
    github: "https://github.com/Daniflav94/Pet-Match_Fullstack",
    deploy: "https://pet-match-10c87.web.app/",
    description:
      "Aplicação desenvolvida para facilitar a adoção de pets. Os usuários podem ver todos os pets disponíveis, utilizar filtros, favoritar pets e solicitar adoção. A ong cadastrada como admin consegue administrar os seus pets e recebe notificações pela aplicação e também via email quando um usuário solicitar adoção, podendo aceitar ou recusar. O usuário também é notificado por email e pela aplicação. Caso queira testar a aplicação, utilizar os acessos: como usuário - dani@email.com, senha: 123456; como admin - clube@email.com, senha: 123456",
    video: petMatchGif,
    date: "05/2024",
  },
  {
    id: 2,
    image: gestaoAtivos,
    title: "Gestão de ativos",
    stacks: ["react", "node", "typescript", "express"],
    github: "https://github.com/Daniflav94/Gestao-Ativos",
    deploy: "https://gestao-ativos-smoky.vercel.app/",
    description:
      "Aplicação web desenvolvida para gerenciar ativos, no qual é possível cadastrar os ativos e colaboradores e fazer apontamentos como: trocar status do ativo para alocado e relacionar com um colaborador e também mudar status para manutenção ou desabilitado. Todos os apontamentos são salvos e os mais recentes são exibidos em uma tabela, na qual o usuário poderá realizar diversos filtros e gerar um relatório em pdf dos resultados. Para testar a aplicação utilize - login: prod1@email.com, senha: 123456",
    video: gestaoAtivosGif,
    date: "06/2024",
  },
  {
    id: 3,
    image: appfilmes,
    title: "TMDB Filmes",
    stacks: ["angular", "firebase", "typescript"],
    github: "https://github.com/Daniflav94/App-filmes",
    deploy: "https://api-filmes-1c278.web.app/filmes",
    description:
      "Aplicação web de filmes personalizável que consome a API do The Movie Database, onde o usuário pode se cadastrar e fazer login, salvar filmes, avaliar, favoritar e fazer pesquisas. Caso queira testar a aplicação, utilize essas credenciais: email: teste2024@email.com, senha: 123456",
    video: appFilmesGif,
    date: "02/2023",
  },
  {
    id: 4,
    image: toDoList,
    title: "Lista de Tarefas",
    stacks: ["angular", "java", "spring", "typescript"],
    github: "https://github.com/Daniflav94/Lista-tarefas-2.0",
    description:
      "Aplicação web de lista de tarefas completa que possui autenticação, listas principais já prontas e opção de criar novas listas, com possibilidade de personalizar a imagem de fundo de cada uma. As tarefas possuem opção de inserir data e repetição diária, semanal ou mensal, também é possível editar as informações inseridas, adicionar anotações e excluir uma tarefa.",
    video: toDoListGif,
    date: "03/2023",
  },
  {
    id: 5,
    image: bibliotech,
    title: "Bibliotech",
    stacks: ["angular", "firebase", "typescript"],
    github: "https://github.com/Daniflav94/App-bibliotech",
    deploy: "https://app-bibliotech.web.app/home",
    description:
      "Esse projeto foi desenvolvido em equipe durante o bootcamp Java Fullstack, se trata de uma aplicação web para administração de biblioteca, onde é possível cadastrar livros e fazer empréstimos. O usuário/bibliotecário pode visualizar as informações de empréstimos de livros em tabela, editar o empréstimo ou alterar na tabela o status para devolvido.",
    video: bibliotechGif,
    date: "11/2022",
  },
  {
    id: 6,
    image: cloneCinema,
    title: "Clone Cinearaújo",
    stacks: ["html", "css", "javascript"],
    github: "https://github.com/Daniflav94/Site_Clone_Cinema",
    deploy: "https://daniflav94.github.io/Site_Clone_Cinema/",
    description:
      "Aplicação clone do site de cinema da minha cidade Cinearaújo, desenvolvido no início dos meus estudos para praticar HTML e CSS.",
    video: cloneCinemaGif,
    date: "10/2022",
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
    stack: "StyledComponentsIcon",
    delay: 0.25,
  },
  {
    stack: "JSIcon",
    delay: 0.3,
  },
  {
    stack: "TSIcon",
    delay: 0.35,
  },
  {
    stack: "ReactIcon",
    delay: 0.4,
  },
  {
    stack: "ReactNativeIcon",
    delay: 0.45,
  },
  {
    stack: "ReduxIcon",
    delay: 0.5,
  },
  {
    stack: "JestIcon",
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
  {
    stack: "DockerIcon",
    delay: 1.1,
  },
];
