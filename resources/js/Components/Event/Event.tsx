export default function Event(
    { eventImg, eventName, date, time, local, invitedQuantity, confirmedPresence }:
        { eventImg: string, eventName: string, date: string, time: string, local: string, invitedQuantity: string, confirmedPresence: string }) {
    return (
        <>
            <div className="w-full sm:w-fit">
                <img src={eventImg} alt="event-picture" className="w-full sm:w-80 sm:h-full aspect-video object-cover rounded" />
            </div>
            <div className="w-full sm:w-fit ml-8 sm:ml-0 my-4 grid gap-2">
                <h2 className="text-2xl text-clr-10">{eventName}</h2>
                <div>
                    <p>data: {date}</p>
                    <p>hora: {time}</p>
                </div>
                <p>local: {local}</p>
                <div>
                    <p>total de convidados: {invitedQuantity}</p>
                    <p>presença confirmada: {confirmedPresence}</p>
                </div>
            </div>
        </>
    );
}