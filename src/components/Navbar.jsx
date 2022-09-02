import './../scss/components/Navbar.scss';
import logo from '../img/logo.svg';
import { Link } from "react-router-dom";
import { FaChartBar, FaWpforms } from "react-icons/fa";

function Navbar() {
    return (
        <nav
            className="navbar navbar-light text-primary border rounded mb-3 mt-2 px-3 py-1"
        >
            <Link
                to="/"
                className="navbar-brand d-flex align-items-center"
            >
                <img
                    src={logo}
                    alt="logo de My Statistics"
                    className='me-2'
                />
                <span
                    className='h4 text-primary mb-0'
                >
                    My Statistics
                </span>
            </Link>
            <div
                className='d-flex'
            >
                <Link
                    to='/formulario'
                    className="navbar-link ms-4"
                >
                    <FaWpforms />
                    <span className='navbar-link-text'> Formulario </span>
                </Link>
                <Link
                    to='/estadisticas'
                    className="navbar-link ms-4"
                >
                    <FaChartBar />
                    <span className='navbar-link-text'> Estadísticas </span>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
