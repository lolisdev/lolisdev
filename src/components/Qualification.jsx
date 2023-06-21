import './Qualification.css';

export default function Qualification(props) {
    return (
        <div className="row align-items-center formacao">
            <div className="col">
                <div className="row item-lista">
                    <div className="col-4 d-flex justify-content-end" id="col-puc">
                        <img className="logo" id="puc-logo" src="/img/puc-logo.png" alt="Logo da PUC-Goiás" />
                    </div>
                    <div className="col">
                        <p>
                            Instituição de Ensino: PUC-Goiás
                        </p>
                        <p>
                            Curso: Graduação em Ciência da Computação
                        </p>
                        <p>
                            Ano de Conclusão: 2019
                        </p>
                    </div>
                </div>

                <div className="row item-lista">
                    <div className="col-4 d-flex justify-content-end" id="col-unopar">
                        <img className="logo" id="unopar-logo" src="/img/unopar-logo.png" alt="Logo da Unopar" />
                    </div>
                    <div className="col">
                        <p>
                            Instituição de Ensino: Unopar
                        </p>
                        <p>
                            Curso: Pós Graduação em Desenvolvimento Web FullStack
                        </p>
                        <p>
                            Ano de Conclusão: 2022
                        </p>
                    </div>
                </div>

                <div className="row item-lista">
                    <div className="col-4 d-flex justify-content-end" id="col-desc">
                        <img className="logo" id="desc-logo" src="/img/descomplica-logo.png" alt="Logo da Descomplica" />
                    </div>
                    <div className="col">
                        <p>
                            Instituição de Ensino: Descomplica
                        </p>
                        <p>
                            Curso: Pós Graduação em Projetos de Cloud Computing
                        </p>
                        <p>
                            Ano de Conclusão: 2022
                        </p>
                    </div>
                </div>

                <div className="row item-lista">
                    <div className="col-4 d-flex justify-content-end" id="col-desc">
                        <img className="logo" id="desc-logo" src="/img/descomplica-logo.png" alt="Logo da Descomplica" />
                    </div>
                    <div className="col">
                        <p>
                            Instituição de Ensino: Descomplica
                        </p>
                        <p>
                            Curso: Pós Graduação em Projetos em Aplicações Móveis
                        </p>
                        <p>
                            Ano de Conclusão: 2023
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}