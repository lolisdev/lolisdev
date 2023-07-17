import Encurtar from '../assets/encurtar.jpg'
import Discord from '../assets/discord.png'
import Calc from '../assets/calc.png'
import Perguntas from '../assets/perguntas.png'
import Portfolio from '../assets/portfolio.png'
import Cadastro from '../assets/cadastronext.png'
import ProjectItem from '../components/ProjectItem'

export default function Projects(props) {
    return (
        <div className="container" id="projects">
            <div className="row projetos">
                <div className="col align-self-center">
                    <div className="cards">
                        <div className="container-fluid cf">
                            <div className="row justify-content-evenly pt-5">
                                <ProjectItem imagem={Encurtar} nome='Plataforma para encurtar links'
                                    descricao='Site para encurtar links desenvolvido com HTML, CSS e Javascript puro.'
                                    link='http://encurtar.glitch.me' />

                                <ProjectItem imagem={Perguntas} nome='Perguntas e Respostas'
                                    descricao='Aplicativo de perguntas e respostas desenvolvido em NodeJS.'
                                    link='http://pergunte-me.glitch.me' />

                                <ProjectItem imagem={Discord} nome='Bot para Discord'
                                    descricao='Desenvolvido com NodeJS para sortear participantes de um canal.'
                                    link='http://bot-datapage.glitch.me' />

                                <ProjectItem imagem={Calc} nome='Calculadora MacOS'
                                    descricao='Desenvolvida em ReactJS e VueJS baseada na calculadora do MacOS.'
                                    link={['https://calculadora-react.glitch.me', 'https://calculadora-vue.glitch.me']} />

                                <ProjectItem imagem={Calc} nome='Chatbot WhatsApp'
                                    descricao='Cliente Chatbot WhatsApp multi-função desenvolvido em NodeJS.'
                                    link='wa.me/556299999999' />

                                <ProjectItem imagem={Cadastro} nome='Cadastro Web'
                                    descricao='Cadastro simples de pessoas utilizando o framework NextJS.'
                                    link='http://crud-next-flame.vercel.app' />

                                <ProjectItem imagem={Portfolio} nome='Portfolio Profissional'
                                    descricao='Portfólio desenvolvido com HTML, CSS, Jquery e Bootstrap.'
                                    link='http://lolisdev.github.io' />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}