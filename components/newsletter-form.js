import { ArrowRight } from "lucide-react"

export default function NewsLetterForm() {
    return (
        <form className="flex items-center">
            <input className="bg-white text-black px-2 rounded-md h-10 max-w-full" type="email" name="email" placeholder="Enter your email" />

            <button type="submit" className="bg-indigo-700 hover:bg-indigo-600 flex justify-center items-center px-2 ml-1 h-10 rounded-md">
                <ArrowRight />
            </button>
        </form>
    )
}