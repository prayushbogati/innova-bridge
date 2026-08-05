import { LockKeyhole } from "lucide-react"
import Input from "./input"
import Button from "@/components/button"

export default function ContactForm() {
    // inputs array skipped here!
    // const inputs = [
    //     {
    //         title: 'Your Name*',
    //         type: 'text',
    //         name: 'name',
    //         placeholder: 'Enter your full name',
    //         id: 'name',
    //         isRequired: true,
    //     },
    //     {
    //         title: 'Your Email*',
    //         type: 'email',
    //         name: 'email',
    //         placeholder: 'Enter your email address',
    //         id: 'email',
    //         isRequired: true,
    //     },
    //     {
    //         title: 'Phone Number',
    //         type: 'text',
    //         name: 'phone',
    //         placeholder: 'Enter your phone number',
    //         id: 'phone',
    //         isRequired: false,
    //     },
    //     {
    //         title: 'Your Name*',
    //         type: 'text',
    //         name: 'name',
    //         placeholder: 'Enter your full name',
    //         id: 'name',
    //         isRequired: true,
    //     },
    // ]

    return (
        <form>
            <div className="flex flex-col lg:grid grid-cols-2 gap-y-5 gap-x-5">
                <Input title='name' type='text' name='name' placeholder='Enter your full name' isRequired={true} />
                <Input title='email' type='email' name='email' placeholder='Enter your email address' isRequired={true} />
                <Input title='phone' type='text' name='phone' placeholder='Enter your phone number' isRequired={false} />

                <div>
                    <label htmlFor="subject">Subject *</label><br />
                    <select id='subject' name="subject" className="border border-gray-300 px-3 py-2 h-10 rounded-md text-sm w-full">
                        <option value="" className="text-sm bg-gray-100">test-subject</option>
                        <option value="" className="text-sm bg-gray-100">test-subject</option>
                        <option value="" className="text-sm bg-gray-100">test-subject</option>
                        <option value="" className="text-sm bg-gray-100">test-subject</option>
                    </select>
                </div>

            </div>
            <div className="pt-3">
                <label htmlFor="message">Message *</label><br />
                <textarea name="message" id="message" cols={60} rows={5} placeholder="Write your message here..." className="border border-gray-300 rounded-md w-full max-h-50 px-3 py-2 text-sm"></textarea>
            </div>

            <div className="py-3">
                <Button type="submit" padding='p-2'>Send Message</Button>
            </div>
            <p className="flex gap-2 text-sm items-center"><LockKeyhole size={15} /><span> We respect your privacy. Your information will never be shared.</span></p>
        </form>
    )
}