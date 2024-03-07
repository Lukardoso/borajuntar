import { ReactNode } from "react";
export default function StandardLayout({children}: {children: ReactNode}) {
    return (
        <>
            <div className="bg-gradient-to-b from-clr-60 to-40% text-counter-clr-60">
                <div id="navbar" className="min-h-fit flex flex-wrap justify-between p-4 shadow-md bg-clr-30 text-counter-clr-30">
                    <div id="logo" className="uppercase text-2xl font-extrabold text-clr-10">
                        BORAJUNTAR
                    </div>
                    <div className="hidden lg:flex flex-wrap gap-12 list-none">
                        <li>item a</li>
                        <li>item a</li>
                        <li>item a</li>
                        <li>item a</li>
                    </div>
                    <div>
                        <p className="text-clr-10 font-bold">usuário</p>
                    </div>
                </div>

                <div id="content" className="min-h-screen">{children} </div>

                <div id="footer" className="min-h-72 mt-12 flex flex-col sm:flex-row justify-evenly gap-12 p-4 sm:pt-24 bg-gradient-to-br from-clr-60 text-counter-clr-60 text-center sm:text-left">
                    <div id="contact">
                        <h2 className="uppercase font-bold">Contato:</h2>
                        <ul>
                            <li>Telefone: (33) 9 9978-2780</li>
                            <li>Email: contato@wwlucas.dev</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="uppercase font-bold">Mais de Nosso Serviços:</h2>
                        <ul>
                            <li><a href="#">LuggFinder</a></li>
                            <li><a href="#">SimpleFinance</a></li>
                            <li><a href="#">Pokebatlle</a></li>
                        </ul>
                    </div>

                    <div className="text-center">
                        <h1 className="text-3xl font-bold">&lt;ww/ucas&gt;</h1>
                        <p>desenvolvedor e analista de software</p>
                    </div>
                </div>
            </div> 
        </>
    );
}