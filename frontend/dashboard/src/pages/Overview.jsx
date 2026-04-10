import React from 'react';

const Overview = () => {
    // Datos de ejemplo basados en tu rango 2023-2025
    const stats = [
        { id: 1, label: 'Ventas Totales 2024', value: '$45,200', change: '+12%' },
        { id: 2, label: 'Proyección 2025', value: '$52,000', change: '+15%' },
        { id: 3, label: 'Registros Ene-Feb', value: '1,240', change: '+5%' },
        { id: 4, label: 'Estado del Sistema', value: 'Activo', change: 'OK' },
    ];

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h2>

            {/* Grid de Tarjetas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat) => (
                    <div key={stat.id} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 transition-hover hover:shadow-md">
                        <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                        <div className="flex items-end justify-between mt-2">
                            <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                            <span className={`text-sm font-semibold ${stat.change.includes('+') ? 'text-green-600' : 'text-blue-600'}`}>
                {stat.change}
              </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Espacio para Gráfico o Tabla */}
            <div className="mt-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-4">Resumen Comparativo (2023 - 2025)</h3>
                <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center border-dashed border-2 border-gray-200">
                    <p className="text-gray-400 font-mono">[ Aquí puedes integrar Recharts o Chart.js ]</p>
                </div>
            </div>
        </div>
    );
};

export default Overview;