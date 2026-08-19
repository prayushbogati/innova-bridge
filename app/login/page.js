'use client'

// import { useState } from "react"
import Button from "@/components/button";
import { useActionState } from "react";
import { Login } from "@/actions/auth-action";

export default function LoginPage() {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [isLoading, setIsLoading] = useState(false);
    const [formState, formAction] = useActionState(Login, { errors: null })

    return (
        <div className="min-h-[60vh] lg:min-h-[80vh] flex items-center justify-center bg-gray-100 px-5">
            <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

                <form className="space-y-4" action={formAction}>
                    <div>
                        <label htmlFor="email" className="text-sm">Email</label>
                        <input
                            type="email"
                            className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            id="email"
                            name="email"
                        // onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="text-sm">Password</label>
                        <input
                            type="password"
                            className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            id="password"
                            name="password"
                        // onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {/* <button
                        disabled={isLoading}
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition"
                    >
                        {isLoading ? "Loading..." : "Login"}
                    </button> */}

                    {formState.error && <p className="text-red-500 text-sm text-center">{formState.error}</p>}

                    <Button padding={`py-2`} type='submit'>Login</Button>

                </form>
            </div>
        </div>
    )
}