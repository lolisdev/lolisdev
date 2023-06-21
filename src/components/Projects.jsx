import './About.css';

export default function Projects(props) {
    return (
        <div className="row projetos">
            <div className="col align-self-center">
                <div className="cards">
                    <div className="container-fluid cf">
                        <div className="row justify-content-evenly pt-5">
                            <div className="col-12 col-md-7 col-lg-6 mb-3 mb-lg-5 colitem">
                                <div className="card card1">
                                    <img src="./img/encurtar.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Plataforma para encurtar links</h5>
                                        <p className="card-text">Site para encurtar links desenvolvido com <strong>HTML, CSS e Javascript</strong> puro.</p>
                                        <a href="http://encurtar.glitch.me" target="_blank" rel="noreferrer" className="btn btn-dark">Acessar</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-8 col-lg-6 mb-3 mb-lg-5 colitem">
                                <div className="card card1">
                                    <img src="./img/pergresp.PNG" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Perguntas e Respostas</h5>
                                        <p className="card-text">Aplicativo de perguntas e respostas desenvolvido em <strong>NodeJS</strong>.</p>
                                        <a href="http://pergunte-me.glitch.me" rel="noreferrer" target="_blank" className="btn btn-dark">Acessar</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-8 col-lg-6 mb-3 mb-lg-5 colitem">
                                <div className="card card1">
                                    <img src="./img/discord.png" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Bot para Discord</h5>
                                        <p className="card-text">Desenvolvido com <strong>NodeJS</strong> para sortear participantes de um canal.</p>
                                        <a href="http://bot-datapage.glitch.me" rel="noreferrer" target="_blank" className="btn btn-dark">Acessar</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-8 col-lg-6 mb-3 mb-lg-5 colitem">
                                <div className="card card1">
                                    <img src="./img/calc.png" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Calculadora MacOS</h5>
                                        <p className="card-text">Desenvolvida em <strong>ReactJS</strong> e <strong>VueJS</strong> baseada na calculadora do MacOS.</p>
                                        <a href="https://calculadora-react.glitch.me" rel="noreferrer" target="_blank" className="btn btn-dark">Acessar em ReactJS</a>
                                        <a href="https://calculadora-vuejs.glitch.me" rel="noreferrer" target="_blank" className="btn btn-dark">Acessar em VueJS</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-8 col-lg-6 mb-3 mb-lg-5 colitem">
                                <div className="card card1">
                                    <img src="./img/portfolio.PNG" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Portfolio Profissional</h5>
                                        <p className="card-text">Portfólio desenvolvido com <strong>HTML, CSS, Jquery</strong> e <strong>Bootstrap</strong>.</p>
                                        <a href="http://lolisdev.github.io" rel="noreferrer" target="_blank" className="btn btn-dark">Acessar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}