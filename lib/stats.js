import { GraduationCap, Award, FlaskConical, UserStar, User } from "lucide-react"
import { AiOutlineGlobal } from "react-icons/ai"

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

const statsSmall = [
    {
        icon: <User size={50} color="purple" />,
        stat: '10,000+',
        text: 'Students Trained'
    },
    {
        icon: <GraduationCap size={50} color="blue" />,
        stat: '200+',
        text: 'Batches Completed'
    },
    {
        icon: <UserStar size={50} color="green" />,
        stat: '50+',
        text: 'Expert Trainers'
    }
]

export { stats, statsSmall };