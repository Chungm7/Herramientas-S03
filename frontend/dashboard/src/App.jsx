import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Overview from './pages/Overview';
import Reports from './pages/Reports';
import Analytics from "./pages/Analytics.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* El Layout envuelve todas las rutas */}
                <Route path="/" element={<Layout />}>

                    {/* Redirección por defecto a la vista general */}
                    <Route index element={<Navigate to="/overview" replace />} />

                    {/* Vista Principal */}
                    <Route path="overview" element={<Overview />} />

                    {/* Histórico 2023-2025 y Reportes */}
                    <Route path="reports" element={<Reports />} />


                    {/* Configuración del Dashboard o Perfil */}
                    <Route path="analytics" element={<Analytics />} />

                    {/* Ruta 404 - Por si escriben cualquier cosa en la URL */}
                    <Route path="*" element={<Navigate to="/overview" replace />} />

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;