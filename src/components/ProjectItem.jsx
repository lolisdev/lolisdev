import '../pages/Projects.css'

export default function Projects(props) {
    return (
        <div className="col-12 col-md-7 col-lg-6 mb-3 mb-lg-5 colitem">
            <div className="card card1">
                <img src={props.imagem} className="card-img-top" alt={props.alt || 'Imagem do projeto'} />
                <div className="card-body">
                    <h5 className="card-title">{props.nome}</h5>
                    <p className="card-text">{props.descricao}</p>
                    {Array.isArray(props.link) ?
                        <>
                            <a href={props.link} target="_blank" rel="noreferrer" className="btn btn-dark">Acessar</a>
                            <span> | </span>
                            <a href={props.link} target="_blank" rel="noreferrer" className="btn btn-dark">Acessar</a>
                        </> :
                        <a href={props.link} target="_blank" rel="noreferrer" className="btn btn-dark">Acessar</a>
                    }

                </div>
            </div>
        </div>
    )
}