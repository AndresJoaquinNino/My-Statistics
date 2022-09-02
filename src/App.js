import './scss/main.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from './components';
import { Home, FormPage, Stats, NotFound } from "./pages";

function App() {
    return (
        <BrowserRouter>
            <div className="main-content">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/formulario" element={<FormPage />} />
                    <Route path="/estadisticas" element={<Stats />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
