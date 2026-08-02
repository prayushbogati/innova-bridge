import DevOps from '@/assets/logos/dev-ops.png'
import Kubernetes from '@/assets/logos/kubernets.png'
import RedHat from '@/assets/logos/red-hat.png'
import Jenkins from '@/assets/logos/jenkins.png'

import { UserStar } from "lucide-react"
import { FlaskConical } from "lucide-react"
import { AiOutlineGlobal } from "react-icons/ai"
import { CodeXml } from 'lucide-react'
import { Clock } from 'lucide-react'
import { BriefcaseBusiness } from 'lucide-react'

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
        icon: <FlaskConical size={40}/>,
        title: 'Hands-on Labs',
        desc: '100+ real-time labs with step-by-step guidance.',
    },
    {
        icon: <UserStar size={40}/>,
        title: 'Expert Trainers',
        desc: 'Learn from certified professionals with industry experience.',
    },
    {
        icon: <CodeXml size={40}/>,
        title: 'Real-world Projects',
        desc: 'Work on end-to-end projects used in real-world scenarios.',
    },
    {
        icon: <BriefcaseBusiness size={40}/>,
        title: 'Placement Assistance',
        desc: 'Resume support, mock interviews & placement guidance.',
    },
    {
        icon: <Clock size={40}/>,
        title: 'Flexible Learning',
        desc: 'Weekend batches, self-paced and corporate training.',
    },
    {
        icon: <AiOutlineGlobal size={40}/>,
        title: 'Global Community',
        desc: 'Join a network of learners and DevOps professionals.',
    },
]

export { cards, cardsSmall };