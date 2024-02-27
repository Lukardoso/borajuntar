import Event from "@/Components/Event/Event";
import StandardLayout from "@/Layouts/StandardLayout";


export default function Events() {
    return (
        <>
            <StandardLayout>
                <div>
                    <div id="events" className="mx-8 flex flex-col gap-4 place-items-center mt-12">
                        <Event
                            eventImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhrNJV3THc_Zhmc-XfIfp6-FwtAPhAdqQsLuj1qY67rmMezzWZkmXh57iE65EWiZF-n1E&usqp=CAU"
                            eventName = "The Event"
                            date = "20/02/2024"
                            time = "20:00"
                            local = "Chácara dos Eventos"
                            invitedQuantity = "50"
                            confirmedPresence = "35"
                        />

                        <Event
                            eventImg="https://miun.imagevault.media/publishedmedia/co81r635gbhgo2ahfuci/Yran-4start.webp"
                            eventName = "The Event"
                            date = "20/02/2024"
                            time = "20:00"
                            local = "Chácara dos Eventos"
                            invitedQuantity = "50"
                            confirmedPresence = "35"
                        />

                        <Event
                            eventImg="https://www.parents.com/thmb/--pZafKsgGSb8NrJVrV7lqJId9g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/BirthdayParty-GettyImages-1600792233-c2a961509556414f9f41b92b8471a551.jpg"
                            eventName = "The Event"
                            date = "20/02/2024"
                            time = "20:00"
                            local = "Chácara dos Eventos"
                            invitedQuantity = "50"
                            confirmedPresence = "35"
                        />

                        <Event
                            eventImg="https://images.squarespace-cdn.com/content/v1/6470deb8c3f1b31719eaba2e/1685118682807-26OQEGRSRZQJMOTZ7AFL/Mermaid+Party+6.jpg"
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