import { Missao } from "./missao";
import { Estudante } from "./estudante";
import { Docente } from "./docente";

export class Noturna extends Missao {

    constructor(
        nomeDaTurma: string ,
        idDaTurma: string,
        dataDeInicio: moment.Moment,
        dataDeTermino: moment.Moment,
        listaDeDocente: Docente[] = [],
        listaDeEstudantes: Estudante[] = [],
        modulo : number | undefined= undefined

    ) {
        super(
            
            nomeDaTurma,
            idDaTurma,
            dataDeInicio,
            dataDeTermino,
            listaDeDocente,
            listaDeEstudantes,
            modulo
             
        )

    }
    
    public setName(name: string) : void {

        if (name.indexOf("-na-night") !== -1) {
          super.setName(name);

        } else {
            console.log("O nome da turma precisa ter -na-night ")
        }
      }
}