import StatsBarTop from "@/components/services/stats-bar-top"
import StatsBarBottom from "@/components/services/stats-bar-bottom"
import ServicesSection from "@/components/services/services-section"

export default function ServicesPage() {
    return (
        <div>
            {/* hero */}
            <div className="bg-indigo-950 text-white px-10 lg:px-20 py-10 max-w-full">
                <div className="flex flex-col max-lg:items-center max-lg:text-center">
                    <div>
                        <p className="uppercase mb-1 text-indigo-700 font-bold">our services</p>
                        <h1 className="text-4xl font-bold">Solutions That Drive Innovation & Growth</h1>
                        <p className="my-2">We deliver cutting-edge technology services and solutions that help businesses modernize, secure, and scale.</p>
                    </div>
                    <div>
                        <StatsBarTop />
                    </div>
                    <div className="relative">
                        <StatsBarBottom />
                    </div>
                </div>
            </div>

            <div className="px-5 lg:px-20 py-10 lg:mt-15">
                {/* cards section */}

                <ServicesSection />

            </div>
        </div>
    )
}