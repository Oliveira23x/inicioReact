// Convenção: Nomes de componentes sempre começa com LETRAS MAÍUSCULAS 

function Cabecalho ()
{

    const nomeDoCurso = "Técnico em Desenvolvimento de Sistemas";
    const descricaoCurso = "Lorem ipsum sit amet, consectetur adipisicing elit."
    const anoAtual = new Date().getFullYear();


  return (
  <header>
    <h1>{nomeDoCurso}</h1>
    <p>{descricaoCurso}</p>
    <p>{anoAtual}</p>
  </header>);

}

export default Cabecalho