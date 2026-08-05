export default function IconCard({ icon, title, desc }) {
    return (
        <div className="border border-gray-200 flex flex-col gap-3 items-center max-lg:text-center m-2 p-5 rounded-xl bg-gray-100 max-w-full">
            <div className="text-indigo-700">{icon}</div>

            <div>
                <h2 className="text-md font-bold mb-2">{title}</h2>
                <div className="text-sm">{desc}</div>
            </div>
        </div>
    )
}