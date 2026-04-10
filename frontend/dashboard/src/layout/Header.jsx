import { Database, Calendar, MapPin } from 'lucide-react';

export default function Header() {
    return (
        <header className="bg-white h-16 border-b border-gray-200 flex items-center justify-between px-8 shrink-0 z-10">
            {/* Sección Izquierda: Identificación del Dashboard */}
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-3 border-r border-gray-200 pr-4">
                    <Database className="w-4 h-4 text-slate-500" />
                    <h1 className="text-sm font-bold text-slate-700 tracking-tight">
                        Dashboard: Desapariciones en el Perú
                    </h1>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-xs font-medium">Periodo: 2023 — Feb 2025</span>
                </div>
            </div>

            {/* Sección Derecha: Contexto de Datos */}
            <div className="flex items-center gap-6">
                <div className="hidden sm:flex flex-col items-end">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Fuente de datos</span>
                    <span className="text-xs font-semibold text-slate-600 italic">Registros SIDPOL - PNP</span>
                </div>

                {/* Indicador Geográfico */}
                <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-md">
                    <MapPin className="w-3.5 h-3.5 text-rose-500" />
                    <span className="text-[11px] font-bold text-slate-600 uppercase">Nacional / Lambayeque</span>
                </div>
            </div>
        </header>
    );
}