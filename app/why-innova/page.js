import Image from "next/image"
import { Phone, ArrowRight, Video } from "lucide-react"

import HeroImg from "@/assets/images/about-hero-image.png"
import CardImg1 from "@/assets/images/card-img-1.png"
import StatsBarWhyInnova from "@/components/stats-bar-why-innova"
import IconCard from "@/components/icon-card"
import Button from "@/components/button"
import StatsBarImpact from "@/components/stats-bar-impact"
import List from "@/components/list"
import LogoBar from "@/components/why-innova/logo-bar"
import { cardsWhyInnova } from "@/lib/cards"

export default function WhyInnova() {
    const cards = cardsWhyInnova;
    return (
        <div>
            {/* hero */}
            <div className="bg-indigo-950 text-white px-10 py-10 max-w-full">
                <div className="flex items-center gap-10">
                    {/* left part */}
                    <div className="min-w-0 flex flex-col lg:items-start max-lg:items-center max-lg:text-center lg:max-w-2/5 max-w-full mx-10">
                        <p className="text-sm text-indigo-700 font-bold rounded-2xl mb-1 tracking-wider">WHY INNOVA BRIDGE
                        </p>
                        <h1 className="text-4xl md:text-5xl font-bold leading-13">More Than Training. A Path to<span className="text-indigo-600"> Transformation.</span></h1>
                        <p className="my-5">Innova Bridge is not just a training institute. We are your growth partner in the DevOps and Cloud-native journey.</p>

                        <StatsBarWhyInnova />

                        <div className="flex flex-col items-center gap-5 sm:flex-row">
                            {/* <div className="flex items-center gap-2 bg-indigo-700 hover:bg-indigo-600 py-3 px-5 rounded-xl font-bold">
                                <Link href=''>Explore Our Trainings</Link>
                                <ArrowRight size={30} />
                            </div>

                            <div className="flex items-center justify-center gap-5 border border-gray-600 hover:bg-indigo-900 py-3 px-5 rounded-xl font-bold">
                                <Phone size={30} />
                                <Link href=''>Talk to Advisor</Link>
                            </div> */}

                            <Button padding='p-3'>Explore Our Trainings <span> <ArrowRight size={25} /></span></Button>

                            <Button padding='p-3' color='bg-indigo-950' hover='bg-indigo-900' border='border border-gray-600'><span><Phone size={25} /></span> Talk to Advisor</Button>
                        </div>

                    </div>

                    {/* right part */}
                    <div className="min-w-0 max-lg:hidden md:max-w-3/5">
                        <Image width={1000} height={150} src={HeroImg} alt="testImg" />
                    </div>
                </div>
            </div>

            <div className="px-20 py-10 flex flex-col">

                {/* card section */}
                <div className="flex flex-col items-center text-center ">
                    <p className="text-sm text-indigo-800 font-bold uppercase mb-2 tracking-wider">what makes us different</p>
                    <h1 className="capitalize text-3xl font-bold">the innova advantage</h1>
                    <div className="flex flex-col lg:flex-row my-5">
                        {cards.map(card => (
                            <IconCard key={card.title} icon={card.icon} title={card.title} desc={card.desc} />
                        ))}
                    </div>
                </div>

                {/* star bar section */}
                <div className="bg-indigo-950 text-white p-5 rounded-xl">
                    <h2 className="text-xl font-bold mb-2 max-lg:text-center">Our Impact So Far</h2>
                    <StatsBarImpact />
                </div>

                {/* why choose innova section */}
                <div className="my-10 flex flex-col md:flex-row items-center gap-10">
                    <div className="md:max-w-2/5 flex flex-col max-md:items-center max-md:text-center lg:justify-between">
                        <p className="text-sm text-indigo-800 font-bold uppercase tracking-wider">what makes us different</p>
                        <h1 className="capitalize text-2xl font-bold my-2">We Focus on Your Complete <span className="text-indigo-800">Growth</span></h1>
                        <p>From the first day of training to your dream job, we are with you at every step of your DevOps journey.</p>

                        <ul className="my-5 text-sm flex flex-col gap-5">
                            <List iconSize={20} desc='Clear learning paths for beginners to advanced' />
                            <List iconSize={20} desc='Practical knowledge through real-world projects' />
                            <List iconSize={20} desc='Soft skills and interview preparation' />
                            <List iconSize={20} desc='Career guidance and long-term support' />
                        </ul>

                        <div className="text-sm max-w-1/2">
                            <Button padding='px-3 py-2'>Start Your Journey<span> <ArrowRight size={25} /></span></Button>
                        </div>
                    </div>

                    <div className="max-md:hidden max-w-3/5 w-full h-80 flex items-center justify-center relative">
                        <Image src={CardImg1} sizes={20} fill alt="card image" className="object-cover rounded-xl" />

                        <div className="bg-white text-black z-10 absolute -bottom-5 max-w-full w-7/10 p-3 text-sm rounded-lg">
                            <p>review content...</p>
                            <h3 className="font-bold">John Doe</h3>
                            <p>position</p>
                        </div>
                    </div>
                </div>

                {/* logo bar */}
                <div className="my-10 text-center">
                    <p className="text-sm text-indigo-800 font-bold uppercase tracking-wider">trusted by leading companies</p>
                    <h1 className="capitalize text-2xl font-bold my-2">our learners work at</h1>
                    <LogoBar />
                </div>
            </div>

        </div>
    )
}