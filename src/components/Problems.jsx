import { Link } from "react-router-dom";
import { FaGhost } from 'react-icons/fa';

function Problems() {
    return (
        <div className="screen-center">
            <div className="card p-4">
                <div className="text-center">
                    <h1 className="display-1 text-primary">
                        <FaGhost />
                    </h1>
                    <h1 className="display-5">
                        <span className="text-danger">Opps!</span> Estamos teniendo problemas.
                    </h1>
                    <p className="display-6 mb-4"> Vuelve mas tarde.</p>
                    <Link
                        to="/"
                        className="btn btn-primary px-5"
                    >
                        <span className="h4"> Ir al inicio </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Problems;
