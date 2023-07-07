import './Header.css';

export default function Header() {
  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      
    </div>*/
    <header>
      <nav className="navbar navbar-expand-lg fixed-top bg-primary-color" id="navbar">
        <div className="container">
          <a href="https://lolisdev.github.io" className="navbar-brand d-flex align-items-center">
            <i className="fa-solid fa-code showweb"></i>
            <i className="fa-solid fa-code showmobile"></i>
            <span>Luis Carlos</span>
          </a>
          <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-items"
            aria-controls="navbar-items" aria-expanded="false" aria-label="Toggle navigation">
            <i className="bi bi-list text-white"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbar-items">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <li className="nav-item">
              <a href="#quemsoueu" className="nav-link active text-white montserrat" aria-current="page">Quem sou eu</a>
              <a href="#formacao" className="nav-link active text-white montserrat">Formação</a>
              <a href="#projetos" className="nav-link active text-white montserrat">Projetos</a>
              <a href="#contato" className="nav-link active text-white montserrat">Contato</a>
            </li>
          </div>
        </div>
      </nav>
    </header>

  );
}