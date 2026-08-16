import StatsBar from "@/components/training/stats-bar"
import TrainingsSection from "@/components/training/trainings-section"
import Button from "@/components/button"
import { MessageCircleMore, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function TrainingPage() {
    return (
        <div>
            <div className="bg-indigo-950 text-white px-10 lg:px-20 py-10 max-w-full">
                {/* hero-section */}
                <div className="flex gap-20 items-center">
                    <div className="lg:max-w-1/2 max-lg:text-center">
                        <h1 className="text-4xl font-bold mb-3 ">Industry-Focused Trainings to Accelerate Your DevOps Career</h1>
                        <p className="text-lg">Learn from experts, practice in real-time labs and get certified.</p>
                    </div>
                    <div className="max-lg:hidden max-w-1/2">
                        <StatsBar />
                    </div>
                </div>
            </div>

            <div className="px-5 lg:px-20 py-10">

                <TrainingsSection />

                <div className="flex flex-col lg:flex-row max-lg:gap-5 max-lg:text-center lg:justify-between items-center mt-5 mb-10 lg:max-w-3/5 mx-auto bg-gray-200 p-5 rounded-xl">
                    <div className="flex flex-col lg:flex-row gap-2 items-center">
                        <MessageCircleMore size={40} color="indigo" />
                        <div>
                            <h2 className="font-bold">Not sure which training is right for you?</h2>
                            <p className="text-sm">Talk to our training advisor and get personalized guidance.</p>
                        </div>
                    </div>

                    <div className="text-sm">
                        <Button padding={`px-3 py-2`}>
                            <Link href={`/contact`} className="flex gap-2 items-center">
                                Schedule a Free Consultation <span><ArrowRight size={20} /></span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}