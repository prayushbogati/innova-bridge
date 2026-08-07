import { stats } from "@/lib/stats"
import Stats from "./stats"

export default function StatsBar() {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center gap-5 md:gap-10">
            {
                stats.map(stat => (
                    <Stats key={stat.text} name={stat.stat} text={stat.text} icon={stat.icon} />
                ))
            }
        </div>
    )
}