import PopUpLayout from "./PopUpLayout"
import PrimaryInput from "../PrimaryInput"


export default function EditEvent() {
    return (
        <PopUpLayout popUpName="Editar Evento">
            <div className="grid gap-4">
                <PrimaryInput inputId="eventName" label="Nome do Evento" />
                <PrimaryInput inputId="date" label="Data" type="date" />
                <PrimaryInput inputId="hour" label="Hora" type="time" />
                <PrimaryInput inputId="local" label="Local" />
            </div>
        </PopUpLayout>    
    )
}