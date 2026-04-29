import "./cardDisciplina.css"

interface CardDisciplinaProps{
    nomeDisciplina: string;
    professorDisciplina: string;
    cargaHorariaDisciplina: number;
    concluidaDisciplina?: boolean;
}

function CardDisciplina({nomeDisciplina, professorDisciplina, cargaHorariaDisciplina, concluidaDisciplina = false}:CardDisciplinaProps) {

    return(
        <div className="card_disciplina">
            <h2>{nomeDisciplina}</h2>
            <p>Professor: {professorDisciplina}</p>
            <p>Carga Horária: {cargaHorariaDisciplina} horas</p>
            <p>Status: {concluidaDisciplina ? "✅ Concluída" : "⛔ Não Concluída"}</p>
        </div>
    );
};
export default CardDisciplina;