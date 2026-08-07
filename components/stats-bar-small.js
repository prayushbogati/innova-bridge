import Stats from "./stats"
import { statsSmall } from "@/lib/stats";

export default function StatsBarSmall() {
    const stats = statsSmall;
    return (
        <div className="flex flex-row justify-center items-center gap-5 md:gap-10 max-md:my-10 mt-10 text-sm w-9/10 mx-auto bg-white p-1 rounded-2xl">
            {
                stats.map(stat => (
                    <Stats key={stat.text} name={stat.stat} text={stat.text} icon={stat.icon} />
                ))
            }
        </div>
    )
}