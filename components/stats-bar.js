import { GraduationCap } from "lucide-react"
import { Award } from "lucide-react"
import { UserStar } from "lucide-react"
import { FlaskConical } from "lucide-react"
import { AiOutlineGlobal } from "react-icons/ai"
import Stats from "./stats"

export default function StatsBar() {
    const stats = [
        {
            icon: <GraduationCap size={50} color="blue" />,
            stat: '10K+',
            text: 'Students Trained'
        },
        {
            icon: <UserStar size={50} color="purple" />,
            stat: '50+',
            text: 'Expert Trainers'
        },
        {
            icon: <Award size={50} color="lightGreen" />,
            stat: '95%',
            text: 'Placement Assistance'
        },
        {
            icon: <FlaskConical size={50} color="purple" />,
            stat: '100+',
            text: 'Hands-on Labs'
        },
        {
            icon: <AiOutlineGlobal size={50} color="blue" />,
            stat: 'Global',
            text: 'Learning Community'
        },
    ]
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center lg:items-center gap-5 md:gap-10 px-10">
            {
                stats.map(stat => (
                    <Stats key={stat.text} name={stat.stat} text={stat.text} icon={stat.icon} />
                ))
            }
        </div>
    )
}