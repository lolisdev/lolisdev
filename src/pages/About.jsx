import './About.css';
import Perfil from '../assets/perfil3.jpg'
import { motion } from "framer-motion";
import { useState } from "react";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

export default function Curso(props) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);

    return (
        <div className="container" id="about">
            <div className="row quemsoueu">
                <div className="col align-self-center">
                    <div className="row">
                        <div className="col-12 pt-md-3">
                            <p className=" h1 text-center pt-5"><span className="text-danger">WEB </span>
                                <span className="text-white">DEVELOPER</span></p>
                        </div>
                        <div className="col-12 showmobile">
                            <motion.div
                                initial={false}
                                animate={
                                    isLoaded && isInView
                                        ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                                        : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                                }
                                transition={{ duration: 1.5, delay: 1 }}
                                viewport={{ once: true }}
                                onViewportEnter={() => setIsInView(true)}
                            >
                                <p className="text-center pt-3 d-flex justify-content-center">
                                    <img src={Perfil} alt="Imagem de Perfil" className="w-75 rounded-circle p-2 imgcinza" onLoad={() => setIsLoaded(true)} />
                                </p>
                            </motion.div>
                        </div>
                        <div className="col-12 pt-md-5 pt-4">
                            <p className="text-white text-center">Olá, sou o Luis. Seja bem vindo(a)! Sou graduado em <strong>Ciência da Computação</strong> com especialização na área de Desenvolvimento Web <strong>Full Stack</strong> e <strong>Cloud Computing.</strong></p>
                        </div>
                    </div>
                </div>

                <div className="col align-self-center pt-5 showweb justify-content-center">
                    <motion.div
                        initial={false}
                        animate={
                            isLoaded && isInView
                                ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                                : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                        }
                        transition={{ duration: 1.5, delay: 1 }}
                        viewport={{ once: true }}
                        onViewportEnter={() => setIsInView(true)}
                    >
                        <img src={Perfil} alt="Imagem de Perfil" className="w-75 rounded-circle imgcinza m-5" onLoad={() => setIsLoaded(true)} />
                    </motion.div>
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