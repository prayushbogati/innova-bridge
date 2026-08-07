import Stats from "./stats";
import { statsSmallServices } from "@/lib/stats";

export default function StatsBarTop() {
    const stats = statsSmallServices;
    return (
        <div className="grid grid-cols-2 md:flex md:flex-row items-center gap-5 text-sm max-w-full py-5 rounded-2xl">
            {
                stats.map(stat => (
                    <Stats key={stat.text} name={stat.stat} text={stat.text} icon={stat.icon} />
                ))
            }
        </div>
    )
}