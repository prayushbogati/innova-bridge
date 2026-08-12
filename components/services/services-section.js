import { services } from "@/lib/services"
import ServiceCard from "./service-card"

export default function ServicesSection() {
    return (
        <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(service => (
                <ServiceCard key={service.name} name={service.name} desc={service.description} icon={service.icon} img={service.image} slug={service.slug} />
            ))}
        </div>
    )
}