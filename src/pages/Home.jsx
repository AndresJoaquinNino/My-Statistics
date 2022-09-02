import './../scss/pages/Home.scss';
import chart from '../img/chart.png';
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <div className='home'>
                <header className='home-header'>
                    Registro de Datos, Estadísticas y Más
                </header>
                <p className='home-text'>
                    Bienvenido a <b className='text-primary'>My Statistics</b>.
                    Nuestro equipo se encarga de registrar todo tipo de datos y de mostrar
                    estadísticas de ellos para facilitar su manejo.
                </p>
                <div className='home-cta'>
                    <Link
                        to='/estadisticas'
                        className="btn border border-2 px-3"
                    >
                        <span className="text-primary h5 mb-0">
                            Ver Estadísticas
                        </span>
                    </Link>
                    <Link
                        to='/formulario'
                        className="btn btn-primary px-3"
                    >
                        <span className="h5 mb-0">
                            Registrar Datos
                        </span>
                    </Link>
                </div>
                <div className="home-image-container">
                    <img src={chart} alt="Gráfico" className='home-image' />
                </div>
            </div>
        </>
    );
}

export default Home;


// <div className='home'>
// <div className='home_hero-section'>

// </div>


// </div >