import Link from "next/link"
import Image from "next/image"

import { ArrowRight, CirclePlay } from "lucide-react"

import StatsBarSmall from "@/components/stats-bar-small"
import StatsBar from "@/components/stats-bar"
import IconCard from "@/components/icon-card"
import Button from "@/components/button"
import { cardsAbout } from "@/lib/cards"
import HeroImg from "@/assets/images/group-img.png"
import BuildingImg from "@/assets/images/buiding-img.png"

export default function AboutPage() {
    const cards = cardsAbout;
    return (
        <div className="px-10 lg:px-20 py-10">
            <div className="flex">
                {/* left part */}
                <div className="flex flex-col items-center text-center lg:text-left lg:items-start max-md:items-center max-md:text-center max-w-full lg:max-w-2/5 lg:pr-5">
                    <p className="text-sm bg-gray-200 text-indigo-800 font-bold py-2 px-3 rounded-2xl mb-1 tracking-wider">ABOUT INNOVA BRIDGE</p>
                    <h1 className="text-5xl font-bold leading-13">Building Careers.<br /><span className="text-indigo-800">Bridging Possibilities.</span></h1>
                    <p className="my-5 leading-7 text-gray-800">Innova Bridge is a leading IT training and innovation hub that empowers individuals with real-world skills in DevOps, Cloud, and Modern Technologies to build successful careers.</p>

                    <div className="flex flex-col items-center gap-5 sm:flex-row">
                        {/* <div className="flex items-center gap-2 bg-indigo-800 hover:bg-indigo-700 py-3 px-5 rounded-xl font-bold text-white">
                            <Link href=''>Explore Trainings</Link>
                            <ArrowRight size={30} />
                        </div> */}

                        <Button padding='p-3'>Explore Trainings <span><ArrowRight size={25} /></span></Button>

                        <div className="flex items-center border border-gray-600
                        bg-white transition-all ease-in-out duration-200 hover:scale-102 p-3 rounded-xl font-bold gap-5">
                            <CirclePlay size={25} color="purple" />
                            <Link href=''>Watch Our Story</Link>
                        </div>
                    </div>
                </div>

                {/* right part */}
                <div className="flex flex-col max-lg:hidden md:max-w-3/5">
                    <div className="h-20"></div>
                    <div>
                        <div className="relative">
                            <Image width={2000} height={150} src={HeroImg} alt="testImg" className="rounded-2xl" />

                            <div className="absolute -bottom-15 max-w-full">
                                <StatsBarSmall />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* stats bar */}
            <div className="bg-white mt-10 p-5 rounded-xl">
                <StatsBar />
            </div>

            {/* mission and values */}
            <div className="flex my-10 justify-center lg:justify-between">
                <div className="max-lg:hidden relative">
                    <Image src={BuildingImg} width={400} height={100} alt="building image" className='rounded-2xl' />

                    <p className="bg-gray-950 absolute max-w-full mx-auto bottom-0 p-2 text-lg italic text-center rounded-b-2xl text-white">"We don't just teach technology, we build careers and shape futures."</p>
                </div>

                {/* cards */}
                <div className="lg:max-w-3/5 flex flex-col gap-2 max-lg:text-center lg:grid lg:grid-cols-3">
                    {cards.map(card => (
                        <IconCard key={card.title} icon={card.icon} title={card.title} desc={card.desc} />
                    ))}
                </div>
            </div>
        </div>
    )
}