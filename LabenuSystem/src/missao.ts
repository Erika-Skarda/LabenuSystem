import * as moment from 'moment';
import { Docente } from './docente';
import { Estudante } from './estudante';
import { FileManager } from './fileManager';
// → Criar estudante ok

// → Criar docente ok

// → Criar turma ok

// → Adicionar estudante na turma ok

// → Adicionar docente na turma ok

// → Pegar a idade de algum estudante a partir do id ok

export abstract class Missao {
   
    // private fileManager: FileManager;
        // arrayDeMissoes:Missao[]
    constructor(
        private nomeDaTurma: string,
        private idDaTurma: string,
        private dataDeInicio: moment.Moment,
        private dataDeTermino: moment.Moment,
        private listaDeDocente: Docente[],
        private listaDeEstudantes: Estudante[],
        private modulo: number | undefined = undefined

    ) {
        this.nomeDaTurma = nomeDaTurma,
        this.idDaTurma = idDaTurma,
        this.dataDeInicio = dataDeInicio,
        this.dataDeTermino = dataDeTermino,
        this.modulo = modulo
    }
    
    public getId(): string {
        return this.idDaTurma;
      }
    
      public getName(): string {
        return this.nomeDaTurma;
      }
    
      public getStartDate(): moment.Moment {
        return this.dataDeInicio;
      }
    
      public getEndDate(): moment.Moment {
        return this.dataDeTermino;
      }
    
      public getCurrentModule(): number | undefined {
        if(this.modulo) {
          return this.modulo

        } else {

          return undefined
        }     
      }
       public getAllTeachers(): Docente[] {

         const fileManager = new FileManager("todosDocentes.json")
         
         return fileManager.readFile() 
       
       }

        public addTeacher(novoDocente: Docente) : void {
          if(this.listaDeDocente.find((docente) => docente.id === novoDocente.id)) {
            console.log(`O docente já existe`)
          } else {

         
          try{
             this.listaDeDocente = this.getAllTeachers()
    
             this.listaDeDocente.push(novoDocente)
             const fileManager = new FileManager("todosDocentes.json")
             fileManager.writeFile(this.listaDeDocente)

          } catch(error) {

            console.log(error)
          }
        }
      }
       public getAllStudents(): Estudante[] {

        const fileManager = new FileManager("todosEstudantes.json")
        // console.log(this.listaDeEstudantes)
        return fileManager.readFile() 
        
       }

       public addStudent(novoEstudante: Estudante): void {


         const existe = this.listaDeEstudantes.find((estudante:any) => {

          return novoEstudante.id === estudante.id
         })

         if(existe) {

          console.log(`${novoEstudante.nome} já existe`)

         } else {

          try {
            
            this.listaDeEstudantes = this.getAllStudents();

            this.listaDeEstudantes.push(novoEstudante);
            const fileManager = new FileManager("todosEstudantes.json");

            fileManager.writeFile(this.listaDeEstudantes);

          } catch (err) {
            console.error(err);
          }
       }
      }
      public setName(novoNomeDaTurma: string) : void {
        this.nomeDaTurma = novoNomeDaTurma;
      }

      public getAllMissions(): Missao[]{

        const fileManager = new FileManager("todasMissoes.json")
         const missoes = fileManager.readFile()
        return missoes
        
      }

      public addMission(novaTurma:Missao) : void {

        // let arrayMissoes:Missao[] = []
        // let arrayMissoes = this.getAllMissions()
        // arrayMissoes.push(novaTurma)

        // this.arrayDeMissoes = this.getAllMissions()
        // this.arrayDeMissoes.push(novaTurma)

        // this.getAllMissions().push(novaTurma)
        try {
            
          const fileManager = new FileManager("todasMissoes.json");

          fileManager.writeFile(novaTurma);

        } catch (err) {
          console.error(err);
        }
      }

      public limpandoArrayDeEstudantes(numero: number,numeroApagar:number): void {
        console.log(this.listaDeEstudantes)

        this.listaDeEstudantes.splice(numero,numeroApagar)

        console.log("nova lista de estudantes" + this.listaDeEstudantes)

      }

      
} 