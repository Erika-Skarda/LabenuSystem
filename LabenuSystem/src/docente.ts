import { Individuo } from "./individuo";
import * as moment from 'moment';

export enum ESPECIALIDADES {
    REACT = "React", 
    REDUX = "Redux",
    CSS = "CSS",
    TYPESCRIPT = "Typescript",
    TESTES = "Testes",
    PROGRAMACAO_ORIENTADA_A_OBJETO = "Programacao Orientada a Objetos",
    BACKEND = "Backend"

         
 } 
export class Docente implements Individuo {

    constructor (
       public id: string,
       public nome: string,
       public email: string,
       public dataDeNascimento: moment.Moment,
       public especialidades: ESPECIALIDADES[]
       
        ) {

          this.id = id,
          this.nome = nome,
          this.email = email,
          this.dataDeNascimento = dataDeNascimento,
          this.especialidades = especialidades
        }
       
 }