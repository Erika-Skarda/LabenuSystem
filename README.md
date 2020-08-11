#  <img  width='30' src='https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5efbb5055f2478ba2bc322d0_icone_gif.gif'> Labenu | Full-Stack Web Development Bootcamp
Desenvolvimento de aplicações completas, incluindo frontend Web com React e backend com Node.js.
<br><br>

## Projeto: LabenuSystem
Sistema de gerenciamento de estudantes, docentes e turmas organização Labenu.


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

#### Desafios

Para todos os desafios abaixo, se esforce para usar o máximo os conceitos de OO que vimos neste módulo. Além disso, faça na ordem:

1. Caso ainda não tenha feito, crie uma classe (`MainTaskManager`) que será responsável por rodar o seu código principal.


2. Adicione mais duas funções para a classe `MainTaskManager`

    a. Imprimir todos os alunos no console, no formato:

    ```
    Nome: <NOME DO ALUNO>
    Email: <EMAIL DO ALUNO>
    Curso: <CURSO DO ALUNO>
    Turma: <TURMA DO ALUNO>
    Idade: <IDADE DO ALUNO>
    ```

    b. Imprimir todos os professores no console

    ```
    Nome: <NOME DO PROFESSOR>
    Email: <EMAIL DO PROFESSOR>
    Idade: <IDADE DO PROFESSOR>
    Especialiadades: OO, React e HTML
    ```

3. Modifique a origem do seu "banco de dados", agora, use um arquivo TXT. 
4. Crie um script que receba dois argumentos: um para imprimir todos os alunos e outro para todos os professores. Siga esse formato

    ```bash
    npm run print teachers
    npm run print students
    ```
<br><br>
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
