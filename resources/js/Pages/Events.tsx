import Event from "@/Components/Event/Event";
import StandardLayout from "@/Layouts/StandardLayout";


export default function Events() {
    return (
        <>
            <StandardLayout>
                <div>
                    <div className="mt-8 ml-8">
                        <p>Olá [usuário], aqui estão todos os seus eventos:</p>
                    </div>

                    <div id="events" className="flex flex-col gap-4 place-items-center mt-12">
                        <Event
                            eventName = "The Event"
                            date = "20/02/2024"
                            time = "20:00"
                            local = "Chácara dos Eventos"
                            invitedQuantity = "50"
                            confirmedPresence = "35"
                        />

                        <Event
                            eventName = "The Event"
                            date = "20/02/2024"
                            time = "20:00"
                            local = "Chácara dos Eventos"
                            invitedQuantity = "50"
                            confirmedPresence = "35"
                        />

                        <Event
                            eventName = "The Event"
                            date = "20/02/2024"
                            time = "20:00"
                            local = "Chácara dos Eventos"
                            invitedQuantity = "50"
                            confirmedPresence = "35"
                        />
                    </div>

                </div>
            </StandardLayout>
        </>
    )
}