export default function Input({ title, type, name, placeholder, id, isRequired }) {
    return (
        <div>
            <label htmlFor={id} className="capitalize">{title}{isRequired && ' *'}</label><br />
            <input id={id} type={type} name={name} placeholder={placeholder} required={isRequired} className="p2 border border-gray-300 rounded-md py-2 px-3 text-sm h-10 w-full" />
        </div>
    )
}