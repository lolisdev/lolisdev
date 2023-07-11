import './Body.css'

export default function Footer(props) {
    return (
        <div className='light-mode'>
            {props.children}
        </div>
    )
}