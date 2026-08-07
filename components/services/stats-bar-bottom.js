import { statsServices } from "@/lib/stats"
import Stats from "./stats"

export default function StatsBarBottom() {
    const stats = statsServices;
    return (
        <div className="max-lg:hidden absolute flex flex-row items-center justify-center gap-5 md:gap-10 p-2 bg-white text-black rounded-xl text-xl">
            {
                stats.map(stat => (
                    <Stats key={stat.text} name={stat.stat} text={stat.text} icon={stat.icon} />
                ))
            }
        </div>
    )
}