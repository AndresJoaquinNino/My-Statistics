import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="screen-center">
            <div className="card p-4">
                <div className="text-center">
                    <h1 className="display-1 fw-bold"> 404 </h1>
                    <h1 className="display-4 mb-3">
                        <span className="text-danger">Opps!</span> Pagina no encontrada.
                    </h1>
                    <p className="display-6 mb-4"> La pagina que buscas no existe.</p>
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

export default NotFound;
