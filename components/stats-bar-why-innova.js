import Stats from "./stats"
import { statsSmall } from "@/lib/stats";

export default function StatsBarWhyInnova() {
    const stats = statsSmall;
    return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 text-sm max-w-full py-5 mb-5 rounded-2xl">
            {
                stats.map(stat => (
                    <Stats key={stat.text} name={stat.stat} text={stat.text} icon={stat.icon} />
                ))
            }
        </div>
    )
}