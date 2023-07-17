import './Header.css';
import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
};

export default function Header() {

  const stroke = '#FFF'

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-expand-md fixed-top" id="navbar">
        <div className="container">
          <a href="https://lolisdev.github.io" className="navbar-brand d-flex align-items-center">
            <motion.svg
              width="100"
              height="50"
              viewBox="400 0 500 300"
              initial="hidden"
              animate="visible"
            >
              <motion.line
                x1="490"
                x2="400"
                y1="90"
                y2="170"
                stroke={stroke}
                variants={draw}
                custom={1}
              />
              <motion.line
                x1="490"
                x2="400"
                y1="230"
                y2="170"
                stroke={stroke}
                variants={draw}
                custom={1}
              />

              <motion.line
                x1="550"
                x2="610"
                y1="270"
                y2="18"
                stroke={stroke}
                variants={draw}
                custom={1}
              />

              <motion.line
                x1="660"
                x2="750"
                y1="70"
                y2="150"
                stroke={stroke}
                variants={draw}
                custom={1}
              />
              <motion.line
                x1="660"
                x2="750"
                y1="210"
                y2="150"
                stroke={stroke}
                variants={draw}
                custom={1}
              />
            </motion.svg>
            {/* <i className="fa-solid fa-code showmobile"></i> */}
            <span>Luis Carlos</span>
          </a>
          <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-items"
            aria-controls="navbar-items" aria-expanded="false" aria-label="Toggle navigation">
            <i className="bi bi-list text-white"></i>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbar-items">
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item mx-auto gap-5 gap-md-3 gap-lg-5">
                <a href="#about" className="nav-link active text-white montserrat" aria-current="page">Quem sou eu</a>
                <a href="#qualification" className="nav-link active text-white montserrat">Formação</a>
                <a href="#projects" className="nav-link active text-white montserrat">Projetos</a>
                <a href="#contact" className="nav-link active text-white montserrat">Contato</a>
              </li>
            </ul>
          </div>
          {/* <button className='btn text-dark' onClick={alert("oi")}>
            <i class="bi bi-brightness-high-fill"></i>
          </button> */}
        </div>
      </nav>
    </header>

  );
}