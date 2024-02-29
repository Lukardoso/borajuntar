export default function Event(
    { eventImg, eventName, date, time, local, invitedQuantity, confirmedPresence }:
        { eventImg: string, eventName: string, date: string, time: string, local: string, invitedQuantity: string, confirmedPresence: string }) {
    return (
        <>
            <div className="w-full sm:w-fit">
                <img src={eventImg} alt="event-picture" className="w-full sm:w-64 sm:h-40 object-cover rounded" />
            </div>
            <div className="w-full sm:w-fit grid gap-2 [&>*]:border-b">
                <h2 className="text-2xl text-clr-10">{eventName}</h2>
                <p className="space-x-8"><span>data: {date}</span><span>hora: {time}</span></p>
                <p>local: {local}</p>
                <div>
                    <p>total de convidados: {invitedQuantity}</p>
                    <p>presença confirmada: {confirmedPresence}</p>
                </div>
            </div>
        </>
    );
}