import '../pages/Qualification.css'

export default function Item(props) {
    return (
        <div className="row item-lista">
            <div className="col-4 d-flex justify-content-end" id="col-puc">
                <img className="logo" src={props.logo} alt={props.alt} />
            </div>
            <div className="col">
                <p>
                    Instituição de Ensino: {props.instituicao}
                </p>
                <p>
                    Curso: {props.curso}
                </p>
                <p>
                    Ano de Conclusão: {props.ano}
                </p>
            </div>
            <hr />
        </div>
    )
}