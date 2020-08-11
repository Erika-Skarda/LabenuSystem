import { FileManager } from "./fileManager";
import { Estudante } from "./estudante";

const jsonEstudantes = new FileManager("todosEstudantes.json");
const jsonDocentes = new FileManager("todosDocentes.json");
const jsonMissoes = new FileManager("todosMissoes.json");

// export class MainTaskManager {
//     private estudante: Estudante[]: 
// }