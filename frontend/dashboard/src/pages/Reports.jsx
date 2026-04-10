import React from 'react';

export default function Reports() {
    const data = [
        { year: '2025', month: 'Febrero', total: '$12,400' },
        { year: '2025', month: 'Enero', total: '$10,200' },
        { year: '2024', month: 'Diciembre', total: '$15,800' },
    ];

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <table className="w-full text-left border-collapse">
                <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                    <th className="p-4 font-semibold text-gray-600">Año</th>
                    <th className="p-4 font-semibold text-gray-600">Mes</th>
                    <th className="p-4 font-semibold text-gray-600 text-right">Monto</th>
                </tr>
                </thead>
                <tbody>
                {data.map((row, i) => (
                    <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                        <td className="p-4 text-gray-700">{row.year}</td>
                        <td className="p-4 text-gray-700">{row.month}</td>
                        <td className="p-4 text-gray-900 font-medium text-right font-mono">{row.total}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}