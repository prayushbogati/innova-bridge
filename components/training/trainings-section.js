import { courses } from "@/lib/trainings"
import Card from "./course-card"

export default function TrainingsSection() {
    const trainings = courses; 
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-5 gap-5">
            {trainings.map(course => (
                <Card key={course.name} name={course.name} desc={course.description} tutor={course.tutor} orgPrice={course.originalPrice} price={course.price} disc={course.discount} />
            ))}
        </div>
    )
}