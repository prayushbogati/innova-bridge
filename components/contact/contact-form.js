'use client'

import { LockKeyhole } from "lucide-react"
import Input from "../input"
import Button from "@/components/button"
import { handleFormData } from "@/lib/contact-form-action"
import { useActionState } from "react"

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
    const [state, formAction] = useActionState(handleFormData, { message: null });

    return (
        <form action={formAction}>
            <div className="flex flex-col lg:grid grid-cols-2 gap-y-5 gap-x-5">
                <Input title='name' id='name' type='text' name='name' placeholder='Enter your full name' isRequired={true} />
                <Input title='email' id='email' type='email' name='email' placeholder='Enter your email address' isRequired={true} />
                <Input title='phone' id='phone' type='text' name='phone' placeholder='Enter your phone number' isRequired={false} />

                <div>
                    <label htmlFor="subject">Subject *</label><br />
                    <select id='subject' name="subject" className="bg-white border border-gray-300 px-3 py-2 h-10 rounded-md text-sm w-full">
                        <option value="" disabled>Select a subject</option>
                        <option value="general-inquiry">General Inquiry</option>
                        <option value="training-info">Training Information</option>
                        <option value="support">Support</option>
                        <option value="partnership">Partnership</option>
                        <option value="other">Other</option>
                    </select>
                </div>

            </div>
            <div className="pt-3">
                <label htmlFor="message">Message *</label><br />
                <textarea name="message" id="message" rows={5} placeholder="Write your message here..." className="border border-gray-300 rounded-md w-full max-h-50 px-3 py-2 text-sm bg-white"></textarea>
            </div>

            <div className="py-3">
                <Button type="submit" padding='p-2'>Send Message</Button>
            </div>

            {state.message && (
                <p className={`text-xl ${state.success ? 'text-green-600' : 'text-red-500'}`}>
                    {state.message}
                </p>
            )}
            <p className="flex gap-2 text-sm items-center"><LockKeyhole size={15} /><span> We respect your privacy. Your information will never be shared.</span></p>
        </form>
    )
}