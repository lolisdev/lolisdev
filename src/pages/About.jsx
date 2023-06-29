import './About.css';
import Perfil from '../assets/perfil3.jpg'

export default function Curso(props) {
    return (
        <div className="container">
            <div className="row quemsoueu">
                <div className="col align-self-center">
                    <div className="row pt-md-5">
                        <div className="col-12 pt-md-5">
                            <p className=" h1 text-center pt-5"><span className="text-danger">WEB</span>
                            <span className="text-white">DEVELOPER</span></p>
                        </div>
                        <div className="col-12 showmobile">
                            <p className="text-center pt-3">
                                <img src={Perfil} alt='Imagem de Perfil' className="w-75 rounded-circle p-2 imgcinza" />
                            </p>
                        </div>
                        <div className="col-12 pt-md-5 pt-4">
                            <p className="text-white">Olá, sou o Luis. Seja bem vindo(a)! Sou graduado em <strong>Ciência da Computação</strong> com especialização na área de Desenvolvimento Web <strong>Full Stack</strong> e <strong>Cloud Computing.</strong></p>
                        </div>
                    </div>
                </div>

                <div className="col align-self-center pt-5 showweb mt-5 d-flex justify-content-center">
                    <img src={Perfil} alt="Imagem de Perfil" className="w-75 rounded-circle imgcinza m-5" />
                </div>

                <div className="row text-white align-self-end justify-content-center d-flex p-0 m-0">
                    <div className="col-6 text-end">

                        {/* <a href="http://github.com/lolisdev" target="_blank">
                            <i className="fab fa-github"></i>
                        </a> */}
                    </div>
                    <div className="col-6 text-start">
                        {/* <a href="https://www.linkedin.com/in/luis-carlos-pereira" target="_blank">
                            <i className="fab fa-linkedin"></i>
                        </a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}