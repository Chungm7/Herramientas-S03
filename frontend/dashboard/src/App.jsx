import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// Importa tus componentes (asegúrate de crearlos o renombrarlos)
// import Layout from './components/Layout';
// import Overview from './pages/Overview';
// import Reports from './pages/Reports';
// import Analytics from './pages/Analytics';
// import Settings from './pages/Settings';

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

                    {/* Análisis detallado (Gráficos, comparativas) */}
                    <Route path="analytics" element={<Analytics />} />

                    {/* Configuración del Dashboard o Perfil */}
                    <Route path="settings" element={<Settings />} />

                    {/* Ruta 404 - Por si escriben cualquier cosa en la URL */}
                    <Route path="*" element={<Navigate to="/overview" replace />} />

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;