import { UserStar } from "lucide-react"
import { Users } from "lucide-react"
import { GraduationCap } from "lucide-react"

import Stats from "./stats"

export default function StatsBarSmall() {
    const stats = [
        {
            icon: <Users size={40} color="purple" />,
            stat: '10,000+',
            text: 'Students Trained'
        },
        {
            icon: <GraduationCap size={40} color="blue" />,
            stat: '200+',
            text: 'Batches Completed'
        },
        {
            icon: <UserStar size={40} color="green" />,
            stat: '50+',
            text: 'Expert Trainers'
        }
    ]
    return (
        <div className="flex flex-row justify-center items-center gap-5 md:gap-10 max-md:my-10 mt-10 text-sm w-9/10 mx-auto bg-white p-3 rounded-2xl">
            {
                stats.map(stat => (
                    <Stats key={stat.text} name={stat.stat} text={stat.text} icon={stat.icon} />
                ))
            }
        </div>
    )
}