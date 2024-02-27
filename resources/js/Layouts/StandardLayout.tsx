import { ReactNode } from "react";
export default function StandardLayout({children}: {children: ReactNode}) {
    return (
        <>
            <div className="bg-clr-60 text-counter-clr-60">
                <div id="navbar" className="min-h-fit flex flex-wrap justify-between p-4 bg-clr-30 text-counter-clr-30">
                    <div>
                        LOGO
                    </div>
                    <div className="list-none flex flex-wrap gap-4">
                        <li>item a</li>
                        <li>item a</li>
                        <li>item a</li>
                        <li>item a</li>
                    </div>
                    <div>
                        <p>usuário</p>
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