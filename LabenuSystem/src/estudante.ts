import { Individuo } from "./individuo";
import * as moment from 'moment'

export class Estudante implements Individuo {
    
    constructor(
        public id: string,
        public nome: string,
        public email: string,
        public dataDeNascimento: moment.Moment,
        public hobbies: string[]
     
      ) {
          this.id = id,
          this.nome = nome,
          this.email = email,
          this.dataDeNascimento = dataDeNascimento,
          this.hobbies = hobbies

        }

      public getAge(): number {

      const hoje = moment()
      const idade = hoje.diff(this.dataDeNascimento,"years")
       return idade

      }
      public idade(id: string): any{
        if(this.id === id){
            return moment().diff(this.dataDeNascimento, "years");
        }else{
            return "não há estudante cadastrado."
        }
    }      
}