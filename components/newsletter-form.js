import { ArrowRight } from "lucide-react"
import Button from "./button"

export default function NewsLetterForm() {
    return (
        <form className="flex items-center gap-1">
            <input className="bg-white text-black px-2 rounded-md h-10 max-w-full min-w-0" type="email" name="email" placeholder="Enter your email" />

            {/* <button type="submit" className="bg-indigo-700 hover:bg-indigo-600 flex justify-center items-center px-2 ml-1 h-10 rounded-md">
                <ArrowRight />
            </button> */}

            <Button padding='p-2'><ArrowRight /></Button>
        </form>
    )
}