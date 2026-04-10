import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default function Layout() {
    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden">

            {/* Contenedor principal */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header />

                {/* Área con scroll independiente:
                   El Footer debe ir DENTRO de este 'main' para que
                   solo sea visible al final del scroll.
                */}
                <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
                    {/* Cambiamos p-6 por p-4 en móvil para ganar espacio lateral.
       Añadimos md:p-6 para tablets y lg:p-8 para monitores.
    */}
                    <div className="max-w-[1600px] mx-auto flex flex-col min-h-full">
                        <div className="flex-1">
                            <Outlet />
                        </div>
                        <div className="mt-8 md:mt-12">
                            <Footer />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}