import './Header.css';

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-expand-md fixed-top bg-primary-color" id="navbar">
        <div className="container">
          <a href="https://lolisdev.github.io" className="navbar-brand d-flex align-items-center">
            <i className="fa-solid fa-code showweb"></i>
            <i className="fa-solid fa-code showmobile"></i>
            <span className='light-mode'>Luis Carlos</span>
          </a>
          <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-items"
            aria-controls="navbar-items" aria-expanded="false" aria-label="Toggle navigation">
            <i className="bi bi-list text-white"></i>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbar-items">
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item mx-auto gap-5 gap-md-3 gap-lg-5">
                <a href="#quemsoueu" className="nav-link active text-white montserrat" aria-current="page">Quem sou eu</a>
                <a href="#formacao" className="nav-link active text-white montserrat">Formação</a>
                <a href="#projetos" className="nav-link active text-white montserrat">Projetos</a>
                <a href="#contato" className="nav-link active text-white montserrat">Contato</a>
              </li>
            </ul>
          </div>
          {/* <button className='btn text-dark' onClick={() => {
            alert("Aqui ainda tá em construção, mas por enquanto fica como um Easter Egg!")
          }}>
            <i class="bi bi-brightness-high-fill"></i>
          </button> */}
        </div>
      </nav>
    </header>

  );
}