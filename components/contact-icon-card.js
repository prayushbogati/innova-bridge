export default function ContactIconCard({ icon, title, desc }) {
    return (
        <div className="border border-gray-200 max-lg:items-center flex max-lg:flex-col items-center justify-center gap-5 m-2 p-5 rounded-xl max-w-full max-h-full">
            <div className="text-indigo-700">{icon}</div>

            <div className="lg:text-left">
                <h2 className="text-md font-bold mb-1">{title}</h2>
                <div className="text-sm">{desc}</div>
            </div>
        </div>
    )
}