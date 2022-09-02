import './../scss/components/Footer.scss';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer">
            <footer className="w-100 pt-3 mb-1">
                <ul className="nav justify-content-center border-bottom pb-2 mb-3">
                    <li className="nav-item">
                        <Link
                            to="/"
                            className="nav-link px-2 text-light">
                            Inicio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link px-2 text-light">Features</div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link px-2 text-light">Precios</div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link px-2 text-light">FAQs</div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link px-2 text-light">Acerca</div>
                    </li>
                </ul>
                <p className="text-center text-light">© 2022 Company, Inc</p>
            </footer>
        </div>
    );
}

export default Footer;