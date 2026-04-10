import React from 'react';
// Usamos iconos estándar que no fallan en ninguna versión de Lucide
import { ExternalLink, Info, Shield } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-gray-200 px-8 py-4 shrink-0">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">

                {/* Sección Izquierda */}
                <div className="flex items-center gap-2 text-gray-500 text-xs font-medium">
                    <span>© {currentYear} Dashboard de Desapariciones.</span>
                    <span className="hidden md:inline text-gray-300">|</span>
                    <span>Análisis de datos para fines informativos.</span>
                </div>

                {/* Sección Central: Origen de la Data */}
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-wider font-bold text-gray-400">
                    <div className="flex items-center gap-1.5">
                        <Shield className="w-3.5 h-3.5" />
                        <span>Fuente de datos: SIDPOL - PNP</span>
                    </div>
                </div>

                {/* Sección Derecha */}
                <div className="flex items-center gap-6">
                    <a
                        href="https://www.gob.pe/pnp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors text-xs font-semibold"
                    >
                        <span>Portal Oficial PNP</span>
                        <ExternalLink className="w-3 h-3" />
                    </a>

                    {/* Cambié Github por Info para evitar el error de importación */}
                    <div className="flex items-center gap-1 text-gray-400 text-xs font-semibold">
                        <Info className="w-3.5 h-3.5" />
                        <span>Visualización Informativa</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}