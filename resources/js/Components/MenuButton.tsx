import { ReactNode } from "react";
import EditEvent from "./PopUps/EditEvent";

export default function MenuButton({children, href, onClick, isVisible = 'hidden'}: {children: ReactNode, href: string, onClick?: any, isVisible?: string}) {
    return (
        <div>
            <a href={href}>
                <button onClick={onClick} className="px-4 py-1 rounded-lg shadow-md hover:shadow-none bg-clr-30 hover:brightness-95 text-counter-clr-30 hover:scale-95 ease-in-out duration-300">
                    {children}
                </button>
            </a>
            <div className={`${isVisible} absolute left-0 top-0 backdrop-blur-lg bg-clr-60/15 w-full h-full z-10`}>
                <EditEvent />
            </div>
        </div>
    );
}