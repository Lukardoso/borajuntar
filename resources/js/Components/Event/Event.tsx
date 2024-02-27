export default function Event(
    {eventName, date, time, local, invitedQuantity, confirmedPresence}:
    {eventName: string, date: string, time: string, local: string, invitedQuantity: string, confirmedPresence: string}) {
        return (
            <>
                
                <div className="flex flex-wrap gap-4 border p-4 rounded shadow-md bg-clr-30 text-counter-clr-30 cursor-pointer">
                    <div>
                        <img src="https://as2.ftcdn.net/v2/jpg/00/91/03/83/1000_F_91038333_C6b2EeBuxMcVjJpvdtdG2dMZijoSUkDX.jpg" alt="event-picture" className="w-64 rounded" />
                    </div>
                    <div>
                        <h2>{eventName}</h2>
                        <p>data: {date}</p>
                        <p>hora: {time}</p>
                        <p>local: {local}</p>
                        <p>total de convidados: {invitedQuantity}</p>
                        <p>presença confirmada: {confirmedPresence}</p>
                    </div>
                </div>
            </>
        );
    }