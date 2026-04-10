import React from 'react';

export default function Overview() {
    return (
        <div className="max-w-xl bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-800 mb-6">Preferencias del Sistema</h3>
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="font-medium text-gray-900">Actualización en tiempo real</p>
                        <p className="text-sm text-gray-500">Sincronizar datos de 2025 automáticamente</p>
                    </div>
                    <input type="checkbox" className="w-5 h-5 accent-blue-600" defaultChecked />
                </div>
                <button className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    Guardar Preferencias
                </button>
            </div>
        </div>
    );
}