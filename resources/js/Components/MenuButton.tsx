import { ReactNode } from "react";

export default function MenuButton({children, href}: {children: ReactNode, href: string}) {
    return (
        <a href={href}>
            <button className="px-4 py-1 rounded-lg shadow-md hover:shadow-none bg-clr-30 hover:brightness-95 text-counter-clr-30 hover:scale-95 ease-in-out duration-300">
                {children}
            </button>
        </a>
    );
}