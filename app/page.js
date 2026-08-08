import Link from "next/link"
import Image from "next/image"

import { ArrowRight, Video } from "lucide-react"

import StatsBar from "@/components/stats-bar"
import HeroImg from "@/assets/images/hero-img.png"
import LogoBar from "@/components/home/logo-bar"
import Button from "@/components/button"

import Card from "@/components/card"
import IconCard from "@/components/icon-card"

import { cards, cardsSmall } from "@/lib/cards"

export default function Home() {
  return (
    <div>
      {/* hero */}
      <div className="bg-indigo-950 text-white px-10 py-10">
        <div className="flex justify-center lg:items-center">
          {/* left part */}
          <div className="flex flex-col lg:items-start max-lg:items-center max-lg:text-center lg:max-w-2/5 max-w-full mx-10">
            <p className="inline-block text-sm bg-slate-900 py-2 px-3 rounded-2xl mb-1">#1 DevOps & Open Source Training Institute</p>
            <h1 className="text-5xl font-bold leading-13">Build. Deploy. Automate. <br /><span className="text-indigo-600">Succeed.</span></h1>
            <p className="my-5">Master DevOps with industry-focused training, real-time labs and expert mentorship.</p>

            <div className="flex flex-col items-center gap-5 sm:flex-row">

              {/* ------------buttons used previously before button component was created---------- */}
              {/* <div className="flex items-center gap-2 bg-indigo-800 hover:bg-indigo-700 py-3 px-5 rounded-xl font-bold">
                <Link href=''>Explore Trainings</Link>
                <ArrowRight size={30} />
              </div> */}
              {/* <div className="flex items-center gap-2 border border-gray-600 hover:bg-indigo-900 py-3 px-5 rounded-xl font-bold">
                <Link href=''>Book a Free Demo</Link>
                <Video size={30} />
              </div> */}

              <Button padding='p-3'>Explore Trainings <span><ArrowRight size={25} /></span></Button>

              <Button border='border border-gray-600' color='bg-indigo-950' hover='bg-indigo-900' padding='p-3'>Book a Free Demo <span><Video size={25} /></span></Button>

            </div>
          </div>

          {/* right part */}
          <div className="max-lg:hidden md:max-w-3/5 ml-30">
            <Image width={500} height={150} src={HeroImg} alt="testImg" className="h-auto w-auto" />
          </div>
        </div>

        {/* stats bar */}
        <div className="px-10 mt-10">
          <StatsBar />
        </div>
      </div>

      <div className="my-10 px-10 lg:px-20">
        {/* logo bar section */}
        <div>
          <h2 className="text-center text-xl mb-5">Technologies we teach</h2>
          <LogoBar />
        </div>

        {/* training programmes section*/}
        <div className="flex flex-col items-center text-center my-10">
          <p className="text-indigo-700 text-sm font-bold tracking-widest mb-2">TRAINING PROGRAMS</p>
          <h1 className="text-3xl font-bold max-w-xl leading-10">Industry-Relevant Training to Accelerate Your DevOps Career</h1>

          {/* card section */}
          <div className="flex flex-col lg:flex-row my-10 justify-center gap-5">
            {
              cards.map(card => (
                <Card key={card.title} image={card.logo} title={card.title} desc={card.desc} />
              ))
            }
          </div>

          <div className="flex items-center text-sm border border-indigo-700 text-indigo-700 transition-all duration-200 ease-in-out hover:font-bold rounded-sm py-2 px-3 mb-10">
            <Link href='/training' className="mr-1">View All Trainings </Link>
            <ArrowRight size={15} />
          </div>

          {/* why choose us? */}
          <div className="flex flex-col lg:flex-row my-10 max-lg:gap-10 bg-gray-200 p-10 rounded-xl items-center">
            <div className="lg:max-w-1/3 lg:text-left flex flex-col gap-4 lg:border-r lg:border-gray-300 lg:pr-10 items-center lg:items-start">
              <p className="text-indigo-700 font-bold tracking-widest text-sm bg-gray-100 px-2 py-1 rounded-xl">WHY CHOOSE INNOVA BRIDGE</p>
              <h2 className="font-bold text-xl leading-8">Learn. Practice. Grow. Succeed Together.</h2>
              <p>We combine expert-led training with real-world projects and hands-on labs to ensure you're job-ready from day one.</p>

              <div className="text-sm">
                <Button color='bg-indigo-950' hover='bg-indigo-900' padding='px-3 py-2'>View All Trainings <span><ArrowRight size={15} /></span></Button>
              </div>
            </div>

            <div className="flex flex-col lg:grid lg:grid-cols-3 lg:max-w-2/3 lg:pl-10">
              {
                cardsSmall.map(card => (
                  <IconCard key={card.title} icon={card.icon} title={card.title} desc={card.desc} />
                ))
              }
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
