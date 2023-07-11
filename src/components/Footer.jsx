import './Footer.css'

export default function Footer(props) {
    return (
        <footer class="row mt-3 text-white align-self-end justify-content-center d-flex p-0 m-0">
            <div class="col-6 text-end">
                <a href="http:github.com/lolisdev" target="_blank" rel="noreferrer">
                    <i class="social-networking fab fa-github"></i>
                </a>
            </div>
            <div class="col-6 text-start">
                <a href="https:www.linkedin.com/in/luis-carlos-pereira" target="_blank" rel="noreferrer">
                    <i class="social-networking fab fa-linkedin"></i>
                </a>
            </div>
            <div class="col-12">
                <hr class="text-white p-auto" />
            </div>
            <div class="col-12 justify-content-center mt-2">
                <p class="text-center">
                    Copyright 2023 - All rights reserved.
                </p>
            </div>
        </footer>
    )
}