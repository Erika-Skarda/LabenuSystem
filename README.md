#  <img  width='30' src='https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5efbb5055f2478ba2bc322d0_icone_gif.gif'> Labenu | Full-Stack Web Development Bootcamp
Desenvolvimento de aplicações com backend com Node.js.

<br><br>

## Projeto: LabenuSystem
Sistema de gerenciamento de estudantes, docentes e turmas organização Labenu.


 <p align="center" >
  <img width="20%" src="https://i.imgur.com/MagoMtL.png" />
</p>

<p align="center">

  <img src="https://img.shields.io/static/v1?label=redux&message=library&color=yellow&style=for-the-badge&logo=REDUX"/>
  <img src="https://img.shields.io/static/v1?label=javascript&message=language&color=green&style=for-the-badge&logo=JAVASCRIPT"/>
  <img src="https://img.shields.io/static/v1?label=typescript&message=language&color=blue&style=for-the-badge&logo=TYPESCRIPT"/>

</p>

#### Requisitos obrigatórios
Ele deve possuir, ao menos, as 3 entidades importantes:

1. Estudantes 

    Representa estudantes da nossa instituição. Eles devem possuir: id, nome, email, data de nascimento e os principais hobbies dele. 

2. Docente

    Representa docentes da nossa instituição. Eles devem possuir: id, nome, email, data de nascimento e todas as especialidades dele. Há 7 especialidades: React, Redux, CSS, Testes, Typescript, Programação Orientada a Objetos e Backend

3. Turma

    Toda turma é composta das seguintes características: id, nome, data de início, data de término, lista de professores responsáveis, uma lista de alunos e módulo atual em que a turma está.

    O módulo pode assumir os valores de 1 a 7 ou `undefined`, indicando que as aulas dessa turma ainda não começaram. Para esse exercício, vamos considerar que existam dois tipos de turma: integral ou noturna. Há uma restrição para o nome das turmas noturnas: tem que terminar com `-na-night`.

As funcionalidades básicas são:

→ Criar estudante;

→ Criar docente;

→ Criar turma;

→ Adicionar estudante na turma;

→ Adicionar docente na turma; e

→ Pegar a idade de algum estudante a partir do id

## Como rodar a aplicação

No terminal, clone o projeto:
```
git clone 
```

Entre na pasta do projeto:
```
cd labenuSystem
```

Instale as dependências:
```
npm install
```

Execute a aplicação:
```
npm start 
```

<br>
