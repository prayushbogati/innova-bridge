import { stats } from "@/lib/stats"
import Stats from "../stats"

export default function StatsBarImpact() {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center lg:items-center gap-5 md:gap-10 p-2">
            {
                stats.map(stat => (
                    <Stats key={stat.text} name={stat.stat} text={stat.text} icon={stat.icon} border={`border border-gray-700`} />
                ))
            }
        </div>
    )
}