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

                <div id="footer" className="flex flex-wrap justify-between gap-4 p-4 mt-8 bg-clr-30 text-counter-clr-30">
                    <div>footer</div>
                </div>
            </div> 
        </>
    );
}