import { atom } from "recoil";
import { IWorkFlow } from "../Interface/IWorkFlow";
import { v4 as uuidv4 } from "uuid";
import { IFiltroDeWF } from "../Interface/IFiltroDeWF";
import { FaseStep } from "../Enum/FaseStep";

export const listaWFState = atom<IWorkFlow[]>({
  key: "listaWFState",
  default: [
    {
      id: uuidv4(),
      titulo: "TDD: fundamentos do desenvolvimento orientado a testes",
      descricao:"TDD é uma sigla para Test Driven Development, ou Desenvolvimento Orientado a Testes.  A ideia do TDD é que você trabalhe em ciclos. Estes ciclos ocorrem na seguinte ordem:  Primeiro, escreva um teste unitário que inicialmente irá falhar, tendo em vista que o código ainda não foi implementado; Crie o código que satisfaça esse teste, ou seja: implemente a funcionalidade em questão.  Essa primeira implementação deverá satisfazer imediatamente o teste que foi escrito no ciclo anterior; Quando o código estiver implementado e o teste satisfeito, refatore o código para melhorar pontos como legibilidade. Logo após, execute o teste novamente.  A nova versão do código também deverá passar sem que seja necessário modificar o teste escrito inicialmente.",
      dataEntrega: new Date(),
      arquivo: "C:\\fakepath\\027.svg",
      step: FaseStep.todo,
    },
    {
      id: uuidv4(),
      titulo: "POO: o que é programação orientada a objetos?",
      descricao: "Enquanto uma linguagem de programação é a implementação de fato de uma ferramenta para desenvolver um software, o paradigma de programação é o modelo conceitual e o conjunto de padrões e metodologias que serão aplicadas no uso de uma linguagem para o desenvolvimento de um software.   A POO é um paradigma de programação que se propõe a abordar o design de um sistema em termos de entidades, os objetos, e relacionamentos entre essas entidades.",
      dataEntrega: new Date(),
      arquivo: "C:\\fakepath\\027.svg",
      step: FaseStep.doing,
    },
    {
      id: uuidv4(),
      titulo: "Rest API",
      descricao: "Rest API é o conjunto de boas práticas utilizadas nas requisições HTTP realizadas por uma API em uma aplicação web. Entenda como funciona essa tecnologia, quais os tipos de APIs existentes e sua importância em um site.",
      dataEntrega: new Date(),
      arquivo: "C:\\fakepath\\027.svg",
      step: FaseStep.doing,
    },
    {
      id: uuidv4(),
      titulo: "NoSQL, Bancos de dados não relacionais",
      descricao:"O banco de dados não relacional funciona de forma totalmente diferente dos bancos relacionais. Nesse modelo, o esquema de tabela é inexistente em prol de uma estrutura de pares-chave ou valores simples — como encontrados nos arquivos JSON, por exemplo.",
      dataEntrega: new Date(),
      arquivo: "C:\\fakepath\\027.svg",
      step: FaseStep.done,
    },
    {
      id: uuidv4(),
      titulo: "SQL, a Structured Query Language",
      descricao: "SQL é Linguagem de Consulta Estruturada, em português. É uma linguagem de programação utilizada para trabalhar com banco de dados relacionais. Um banco de dados relacional armazena os dados em formatos similares a tabelas, com as quais é possível construir relações entre si, facilitando a inserção e a recuperação das informações.",
      dataEntrega: new Date(),
      arquivo: "C:\\fakepath\\027.svg",
      step: FaseStep.done,
    },
    {
      id: uuidv4(),
      titulo: "Node.js JavaScript fora do navegador",
      descricao: "O Node.js é um ambiente de execução de JavaScript que estende sua capacidade para o lado do servidor. Ele foi construído a partir da máquina virtual do V8, a mesma que é utilizada para executar o Javascript no Chrome. O Node é orientado a eventos, seguindo um modelo de I/O (entrada e saída) sem bloqueio. Isso significa que ele é assíncrono e não se bloqueia para uma requisição (passando imediatamente para a próxima).",
      dataEntrega: new Date(),
      arquivo: "C:\\fakepath\\027.svg",
      step: FaseStep.approved,
    },
  ],
});

export const filtroDeWF = atom<IFiltroDeWF>({
  key: "filtroDeWF",
  default: {},
});
