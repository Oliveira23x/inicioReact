interface Disciplina {
    id: number;
    nomeDisciplina: string;
    professorDisciplina: string;
    cargaHorariaDisciplina: number;
    concluidaDisciplina: boolean;
}
 export const disciplinas: Disciplina [] = [
     {    id: 1, 
          nomeDisciplina: "Matemática",
          professorDisciplina: "Prof. Silva",
          cargaHorariaDisciplina: 80,
          concluidaDisciplina: true
     },
        {    id: 2,
            nomeDisciplina: "Português",
            professorDisciplina: "Prof. Souza",
            cargaHorariaDisciplina: 60,
            concluidaDisciplina: false
        },
        {    id: 3,
            nomeDisciplina: "História",
            professorDisciplina: "Prof. Oliveira",
            cargaHorariaDisciplina: 40,
            concluidaDisciplina: true
        }
];