import { GraduationCap, Award, FlaskConical, UserStar, User, Users, Trophy, Star, ShieldCheck, Rocket, Headset, Smile } from "lucide-react"
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

const statsTraining = [
    {
        icon: <GraduationCap size={50} color="blue" />,
        stat: '20+',
        text: 'Expert-Led Trainings'
    },
    {
        icon: <FlaskConical size={50} color="purple" />,
        stat: '100+',
        text: 'Hands-on Labs'
    },
    {
        icon: <Award size={50} color="purple" />,
        stat: '95%',
        text: 'Placement Assistance'
    },
    {
        icon: <Users size={50} color="purple" />,
        stat: '10K+',
        text: 'Learners Trained'
    },
]

const statsSmallServices = [
    {
        icon: <Star size={30} />,
        stat: 'Expert Team',
        text: 'Industry experts'
    },
    {
        icon: <ShieldCheck size={30} />,
        stat: 'Secure & Reliable',
        text: 'Enterprise grade'
    },
    {
        icon: <Rocket size={30} />,
        stat: 'Scalable Solutions',
        text: 'Built for growth'
    },
    {
        icon: <Headset size={30} />,
        stat: '24/7 Support',
        text: 'Always here to help'
    },
]

const statsServices = [ 
    {
        icon: <Users size={50} color="blue" />,
        stat: '500+',
        text: 'Projects Delivered'
    },
    {
        icon: <Smile size={50} color="blue" />,
        stat: '200+',
        text: 'Happy Clients'
    },
    {
        icon: <Trophy size={50} color="blue" />,
        stat: '10+',
        text: 'Years Experience'
    },
    {
        icon: <UserStar size={50} color="blue" />,
        stat: '50+',
        text: 'Expert Professionals'
    },
    {
        icon: <AiOutlineGlobal size={50} color="blue" />,
        stat: '15+',
        text: 'Countries Served'
    },
]
export { stats, statsSmall, statsTraining, statsSmallServices, statsServices };