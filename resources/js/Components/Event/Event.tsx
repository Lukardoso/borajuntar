export default function Event(
    {eventName, date, time, local, invitedQuantity, confirmedPresence}:
    {eventName: string, date: string, time: string, local: string, invitedQuantity: string, confirmedPresence: string}) {
        return (
            <>
                
                <div className="grid border p-4 rounded shadow-md">
                    <div>
                        <img src="" alt="" />
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