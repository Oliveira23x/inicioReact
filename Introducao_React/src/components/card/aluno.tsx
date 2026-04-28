import "./Card.css"

function Card() {

        const nomeAluno = "Diego Oliveira"
        const cursoAluno  = "TDS02"
        const ativo = true;

    return(
        <div className="card_aluno">
            <h2>{nomeAluno}</h2>
            <p>{cursoAluno}</p>
            <p>Status aluno:{ativo ? "✅" : "⛔"}:</p>
        </div>
    );


}
export default Card;