import "./Card.css"

interface CardProps{
    nomeAluno: string; // Texto Obrigatório
    cursoAluno: string;
    statusAluno?: boolean; //Opcional
}

function Card({nomeAluno, cursoAluno, statusAluno = true}:CardProps) {

        

    return(
        <div className="card_aluno">
            <h2>{nomeAluno}</h2>
            <p>{cursoAluno}</p>
            <p>Status aluno:{statusAluno ? "✅" : "⛔"}:</p>
        </div>
    );


}
export default Card;