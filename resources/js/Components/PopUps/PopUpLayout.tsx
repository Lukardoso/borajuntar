import { ReactNode, useState } from "react";
import PrimaryButton from "../PrimaryButton";

export default function PopUpLayout({children, popUpName}: {children: ReactNode, popUpName: string}) {
    const [isVisible, setVisible] = useState('grid');
    const changeVisibility = (visibility: string) => {
        setVisible(visibility);
    };

    return (
        <div className={`${isVisible} h-full w-full place-items-center p-4 absolute top-0 z-10 backdrop-blur bg-clr-60/30`}>
            <div className="w-full sm:w-2/5 p-4 rounded-md bg-clr-30 shadow-xl">
                <h1 className="mb-4 uppercase text-clr-10 font-bold">{popUpName}</h1>
                <div>
                    {children}
                </div>
                <div className="mt-4 flex gap-4">
                    <PrimaryButton>
                        Salvar
                    </PrimaryButton>

                    <PrimaryButton onClick={() => changeVisibility('hidden')}> 
                        Cancelar
                    </PrimaryButton>
                </div>
            </div>
        </div>
    );
}