import React from 'react';

export default function Analytics() {
    return (
        <div className="grid gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-4">Análisis de Crecimiento (2023-2025)</h3>
                <div className="space-y-4">
                    {['2023', '2024', '2025'].map((year) => (
                        <div key={year} className="flex items-center gap-4">
                            <span className="w-12 text-sm font-medium text-gray-500">{year}</span>
                            <div className="flex-1 bg-gray-100 h-3 rounded-full overflow-hidden">
                                <div
                                    className="bg-blue-600 h-full rounded-full"
                                    style={{ width: year === '2024' ? '80%' : year === '2025' ? '40%' : '60%' }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}