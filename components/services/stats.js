export default function Stats({ name, text, icon, border }) {
    return (
        <div className={`flex flex-col lg:flex-row items-center md:gap-3 px-3 py-2 ${border ? border : null} rounded-lg max-w-full`}>
            {icon}
            <div className="max-lg:text-center">
                <h2 className="font-bold">{name}</h2>
                <p className="text-sm">{text}</p>
            </div>
        </div>
    )
}