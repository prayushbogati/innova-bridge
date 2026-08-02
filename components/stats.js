export default function Stats({ name, text, icon }) {
    return (
        <div className="flex flex-col lg:flex-row items-center md:gap-3">
            {icon}
            <div className="max-lg:text-center">
                <h2 className="text-xl font-bold">{name}</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}