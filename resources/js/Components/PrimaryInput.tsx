export default function PrimaryInput({inputId, label, type = 'text' , value}: {inputId: string, label: string, type?: string, value?: string}) {
    return (
        <label htmlFor={inputId} className="grid">
            {label}: 
            <input type={type} id={inputId} value={value} className="py-1 rounded" />
        </label>
    )
}