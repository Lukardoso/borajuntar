import Event from "@/Components/Event/Event";
import StandardLayout from "@/Layouts/StandardLayout";


export default function Events() {
    return (
        <>
            <StandardLayout>
                <div>
                    <div id="events" className="mx-8 flex flex-col gap-4 place-items-center mt-12">
                        <div className="lg:px-8 flex flex-wrap gap-4 p-4 rounded-lg shadow-md bg-clr-30 text-counter-clr-30 cursor-pointer hover:opacity-70">
                            <Event
                                eventImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhrNJV3THc_Zhmc-XfIfp6-FwtAPhAdqQsLuj1qY67rmMezzWZkmXh57iE65EWiZF-n1E&usqp=CAU"
                                eventName="The Event"
                                date="20/02/2024"
                                time="20:00"
                                local="Chácara dos Eventos"
                                invitedQuantity="50"
                                confirmedPresence="35"
                            />
                        </div>

                        <div className="lg:px-8 flex flex-wrap gap-4 p-4 rounded-lg shadow-md bg-clr-30 text-counter-clr-30 cursor-pointer hover:opacity-70">
                            <Event
                                eventImg="https://images.squarespace-cdn.com/content/v1/6470deb8c3f1b31719eaba2e/1685118682807-26OQEGRSRZQJMOTZ7AFL/Mermaid+Party+6.jpg"
                                eventName="The Event"
                                date="20/02/2024"
                                time="20:00"
                                local="Chácara dos Eventos"
                                invitedQuantity="50"
                                confirmedPresence="35"
                            />
                        </div>

                        <div className="lg:px-8 flex flex-wrap gap-4 p-4 rounded-lg shadow-md bg-clr-30 text-counter-clr-30 cursor-pointer hover:opacity-70">
                            <Event
                                eventImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhrNJV3THc_Zhmc-XfIfp6-FwtAPhAdqQsLuj1qY67rmMezzWZkmXh57iE65EWiZF-n1E&usqp=CAU"
                                eventName="The Event"
                                date="20/02/2024"
                                time="20:00"
                                local="Chácara dos Eventos"
                                invitedQuantity="50"
                                confirmedPresence="35"
                            />
                        </div>
                    </div>
                </div>
            </StandardLayout>
        </>
    )
}