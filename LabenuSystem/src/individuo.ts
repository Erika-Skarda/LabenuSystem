import * as moment from 'moment';

export interface Individuo {

    id: string,
    nome: string,
    email: string,
    dataDeNascimento: moment.Moment

}