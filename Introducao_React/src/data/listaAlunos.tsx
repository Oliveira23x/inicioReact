interface Aluno {
     id: number;
     nome: string;
     curso: string;
     ativo: boolean

}

 export const alunos: Aluno [] =[
     {    id: 1, 
          nome: "Diego Oliveira",
          curso: "Desenvolvimento de Sistemas",
          ativo: false

     },
{
          id: 2, 
          nome: "Felipe Campos",
          curso: "Desenvolvimento de Sistemas",
          ativo: true

},

     {    id: 3, 
          nome: "Beatriz Santos",
          curso: "Desenvolvimento de Sistemas",
          ativo: false

     }
];