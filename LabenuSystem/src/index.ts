import { Estudante } from "./estudante";
import * as moment from 'moment';
import { Docente } from "./docente";
import { ESPECIALIDADES } from './docente'
import { Integral } from "./integral";
import { Noturna } from "./noturno";
import { Missao } from "./missao";

// ESTUDANTE
const novoEstudante: Estudante = new Estudante( 
    '1',
    "Gabi", 
    "gabi@labenu.com",
    moment('10/10/2000', "DD/MM/YYYY"),
    ["Tacar garrafas, Assistir star wars"]
)

// console.log(novoEstudante)

const novoEstudante2: Estudante = new Estudante( 
    '2',
    "Vivi", 
    "viv@labenu.com",
    moment('12/10/2003', "DD/MM/YYYY"),
    ["Cozinhar, Assistir Filmes"]
)
// console.log(novoEstudante2)

// console.log(novoEstudante.idade("1"))
// console.log(novoEstudante.idade("2") )
//DOCENTE
const novoDocente: Docente = new Docente(
    '3',
    'Ivana',
    'ivana@labenu.com',
    moment('10/10/2000', "DD/MM/YYYY"),
    [ESPECIALIDADES.BACKEND, 
    ESPECIALIDADES.CSS]

)
// console.log(novoDocente)
const novoDocente2: Docente = new Docente(
    '4',
    'Natalia',
    'natalia@labenu.com',
    moment('10/10/2000', "DD/MM/YYYY"),
    [ESPECIALIDADES.REDUX, 
    ESPECIALIDADES.PROGRAMACAO_ORIENTADA_A_OBJETO]

)
 //console.log(novoDocente2)
 const novoDocente3: Docente = new Docente(
    '5',
    'Amanda',
    'amanda@labenu.com',
    moment('10/10/2000', "DD/MM/YYYY"),
    [ESPECIALIDADES.BACKEND, 
    ESPECIALIDADES.PROGRAMACAO_ORIENTADA_A_OBJETO,
    ESPECIALIDADES.REACT,
    ESPECIALIDADES.TESTES,
    ESPECIALIDADES.TYPESCRIPT,
    ESPECIALIDADES.REDUX]
)
//console.log(novoDocente3) 
const novoDocente4: Docente = new Docente(
    '6',
    'Milene',
    'milenea@labenu.com',
    moment('10/10/2000', "DD/MM/YYYY"),
    [ESPECIALIDADES.REDUX, 
    ESPECIALIDADES.PROGRAMACAO_ORIENTADA_A_OBJETO]

)
 //console.log(novoDocente2)
//MISSÃO INTEGRAL
const novaTurmaIntegral: Integral = new Integral(
    "JoaoBike",
    "22",
    moment('10/10/2000', "DD/MM/YYYY"),
    moment('10/10/2001', "DD/MM/YYYY"),
    [novoDocente,novoDocente2],
    [novoEstudante, novoEstudante2],
    3)
//console.log(novaTurmaIntegral)
// novaTurmaIntegral.addStudent(novoEstudante)
// novaTurmaIntegral.addTeacher(novoDocente)

//MISSÃO NOTURNA
const novaTurmaNoturna: Noturna = new Noturna (
    "Ana",
    "22",
    moment('10/10/2000', "DD/MM/YYYY"),
    moment('10/10/2001', "DD/MM/YYYY"),
    [novoDocente,novoDocente2],
    [novoEstudante, novoEstudante2],
    3)

//console.log(novaTurmaNoturna)

//novaTurmaNoturna.addStudent(novoEstudante2)
//novaTurmaNoturna.addTeacher(novoDocente2)

//novaTurmaNoturna.setName("Bananinha-na-night"); ---> muda o nome
//console.log(novaTurmaNoturna)
//console.log(novaTurmaNoturna.getName())
//novaTurmaNoturna.addMission(novaTurmaNoturna)

console.log(novaTurmaNoturna.getAllStudents())

//novaTurmaNoturna.limpandoArrayDeEstudantes(2,1)