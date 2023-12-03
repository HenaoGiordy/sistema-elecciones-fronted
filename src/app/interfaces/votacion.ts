import { Candidato } from "./candidato";

export class Votacion{
    estudiantes !: [];
    candidatos !: [];
    ganador !: Candidato;
    fechaIncio !: Date;
    fechaFin !: Date;
}