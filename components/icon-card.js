export default function IconCard({ icon, title, desc }) {
    return (
        <div className="border border-gray-200 max-lg:items-center flex flex-col gap-2 m-2 p-5 rounded-xl bg-gray-100 max-w-full">
            <div className="text-indigo-700">{icon}</div>

            <div className="lg:text-left">
                <h2 className="text-md font-bold mb-2">{title}</h2>
                <div className="text-sm">{desc}</div>
            </div>
        </div>
    )
}