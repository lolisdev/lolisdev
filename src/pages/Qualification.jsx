import Item from '../components/QualificationItem'
import Puc from '../assets/puc-logo.png'
import Unopar from '../assets/unopar-logo.png'
import Descomplica from '../assets/descomplica-logo.png'
import './Qualification.css'

export default function Qualification(props) {
    return (
        <div className="container">
            <div className="row align-items-center formacao">
                <hr className='hr-recuo'/>
                <Item logo={Puc} alt='Logo da Puc-Goiás' instituicao='Pontifícia Universidade Católica de Goiás' curso='Ciência da Computação' ano='2019' />
                <Item logo={Unopar} alt='Logo da Unopar' instituicao='Pontifícia Universidade Católica de Goiás' curso='Pós Graduação em Desenvolvimento Web FullStack' ano='2022' />
                <Item logo={Descomplica} alt='Logo da Descomplica' instituicao='Descomplica' curso='Ciência da Computação' ano='2022' />
                <Item logo={Descomplica} alt='Logo da Descomplica' instituicao='Descomplica' curso='Ciência da Computação' ano='2023' />
            </div>
        </div>
    )
}