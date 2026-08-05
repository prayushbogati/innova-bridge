import DevOps from '@/assets/logos/dev-ops.png'
import Kubernetes from '@/assets/logos/kubernets.png'
import RedHat from '@/assets/logos/red-hat.png'
import Jenkins from '@/assets/logos/jenkins.png'

import List from '@/components/list'

import { UserStar, FlaskConical, CodeXml, Clock, BriefcaseBusiness, GraduationCap, Users, Briefcase, UsersRound, Goal, Eye, Gem, CircleCheck } from "lucide-react"
import { AiOutlineGlobal } from "react-icons/ai"

const cards = [
    {
        logo: DevOps,
        title: 'DevOps Foundation',
        desc: 'Learn CI/CD, automation, monitoring and DevOps culture.',
    },
    {
        logo: Kubernetes,
        title: 'Kubernetes Administration',
        desc: 'Master Container Orcheastration, KBs concepts & hands-on labs.',
    },
    {
        logo: RedHat,
        title: 'Red Hat OpenShift',
        desc: 'Deploy, manage and scale applications on OpenShift.',
    },
    {
        logo: Jenkins,
        title: 'CI/CD with Jenkins',
        desc: 'Build robust pipelines and automate deployments.',
    },
]

const cardsSmall = [
    {
        icon: <FlaskConical size={40} />,
        title: 'Hands-on Labs',
        desc: '100+ real-time labs with step-by-step guidance.',
    },
    {
        icon: <UserStar size={40} />,
        title: 'Expert Trainers',
        desc: 'Learn from certified professionals with industry experience.',
    },
    {
        icon: <CodeXml size={40} />,
        title: 'Real-world Projects',
        desc: 'Work on end-to-end projects used in real-world scenarios.',
    },
    {
        icon: <BriefcaseBusiness size={40} />,
        title: 'Placement Assistance',
        desc: 'Resume support, mock interviews & placement guidance.',
    },
    {
        icon: <Clock size={40} />,
        title: 'Flexible Learning',
        desc: 'Weekend batches, self-paced and corporate training.',
    },
    {
        icon: <AiOutlineGlobal size={40} />,
        title: 'Global Community',
        desc: 'Join a network of learners and DevOps professionals.',
    },
]

const cardsWhyInnova = [
    {
        icon: <GraduationCap size={40} />,
        title: 'Industry-Focused Curriculum',
        desc: 'Our training is designed with industry experts to meet real-world demands.',
    },
    {
        icon: <FlaskConical size={40} />,
        title: '100% Hands-on Labs',
        desc: 'Access real-time cloud instances and practice in a risk-free environment.',
    },
    {
        icon: <Users size={40} />,
        title: 'Expert Mentorship',
        desc: 'Learn from certified professionals with years of industry experience.',
    },
    {
        icon: <Briefcase size={40} />,
        title: 'Placement Assistance',
        desc: 'Resume building, mock interviews and job referrals to help you succeed.',
    },
    {
        icon: <Clock size={40} />,
        title: 'Updated & Relevant',
        desc: 'We keep our content updated with the latest tools and technologies.',
    },
    {
        icon: <UsersRound size={40} />,
        title: 'Community Support',
        desc: 'Be a part of an active community that supports your growth.',
    },
]

const cardsAbout = [
    {
        icon: <Goal size={40} color="blue" />,
        title: 'Our Mission',
        desc: 'To deliver industry-focused training and hands-on experience that transforms learners into job-ready professionals.',
    },
    {
        icon: <Eye size={40} color="green" />,
        title: 'Our Vision',
        desc: 'To be the most trusted learning partner in Nepal and beyond for DevOps and Cloud technologies.',
    },
    {
        icon: <Gem size={40} color="purple" />,
        title: 'Our Values',
        desc: <ul className="flex flex-col gap-1">
            <List iconSize={15} desc='Quality Education' />
            <List iconSize={15} desc='Practical Learning' />
            <List iconSize={15} desc='Integrity & Trust' />
            <List iconSize={15} desc='Student Success' />
        </ul>,
    }
]
export { cards, cardsSmall, cardsAbout, cardsWhyInnova };