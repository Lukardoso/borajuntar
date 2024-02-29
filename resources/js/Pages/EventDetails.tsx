import StandardLayout from "@/Layouts/StandardLayout";
import Event from "@/Components/Event/Event";
import MenuButton from "@/Components/MenuButton";


export default function EventDetails() {
    return (
        <StandardLayout>
            <div className="p-2 sm:p-12 grid sm:grid-cols-[300px_1fr] gap-8">
                <div className="min-h-screen flex flex-col gap-8 items-center p-4 rounded-lg bg-clr-30">
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
                <div className="overflow-x-auto">
                    <div className="hidden md:flex sm:justify-start gap-2 mb-2">
                        <MenuButton href="#">
                            novo convidado
                        </MenuButton>

                        <MenuButton href="#">
                            link compartilhável
                        </MenuButton>

                        <MenuButton href="#">
                            enviar notificação
                        </MenuButton>
                    </div>

                    <div className="min-h-screen p-4 text-center rounded-lg border-x bg-clr-30">
                        <span className="relative flex justify-between">
                            <h1 className="flex-grow text-2xl text-center border-b pb-2">Convidados</h1>
                            <div className="absolute right-0 md:hidden">menu</div>
                        </span>
                        <div className="overflow-auto">
                            <table className="min-w-max sm:w-full mt-8 table-auto border-separate border-spacing-x-4 border-spacing-y-2">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Telefone</th>
                                        <th>Email</th>
                                        <th>Confirmado?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Lucas Cardoso Lannes</td>
                                        <td>33 999782780</td>
                                        <td>lucas@email.com</td>
                                    </tr>
                                    <tr>
                                        <td>Lucas Cardoso Lannes</td>
                                        <td>33 999782780</td>
                                        <td>lucas@email.com</td>
                                    </tr>
                                    <tr>
                                        <td>Lucas Cardoso Lannes</td>
                                        <td>33 999782780</td>
                                        <td>lucas@email.com</td>
                                    </tr>
                                    <tr>
                                        <td>Lucas Cardoso Lannes</td>
                                        <td>33 999782780</td>
                                        <td>lucas@email.com</td>
                                    </tr>
                                    <tr>
                                        <td>Lucas Cardoso Lannes</td>
                                        <td>33 999782780</td>
                                        <td>lucas@email.com</td>
                                    </tr>
                                    <tr>
                                        <td>Lucas Cardoso Lannes</td>
                                        <td>33 999782780</td>
                                        <td>lucas@email.com</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </StandardLayout>
    );
}