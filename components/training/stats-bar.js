import Stats from "../stats"
import { statsTraining } from "@/lib/stats";

export default function StatsBar() {
    const stats = statsTraining;
    return (
        <div className="grid grid-cols-2  gap-5 text-sm max-w-full rounded-2xl">
            {
                stats.map(stat => (
                    <Stats key={stat.text} name={stat.stat} text={stat.text} icon={stat.icon} border={`border border-gray-700`}/>
                ))
            }
        </div>
    )
}