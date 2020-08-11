import { Missao } from "./missao";
import { Estudante } from "./estudante";
import { Docente } from "./docente";

export class Integral extends Missao {

    constructor(
        nomeDaTurma: string,
        idDaTurma: string,
        dataDeInicio: moment.Moment,
        dataDeTermino: moment.Moment,
        listaDeDocente: Array<Docente> = [],
        listaDeEstudantes: Estudante[] = [],
        modulo : number | undefined = undefined

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
    
}