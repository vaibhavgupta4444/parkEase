"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { email, z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import axios from "axios"
import { toast } from "sonner"

const formSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email." }),
    password: z.string().min(6, { message: "Password must be at least 6 characters." }),
})

const SignIn = () => {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const response = await axios.post(`${backendUrl}/api/v1/users/login`, {
                email: values.email,
                password: values.password
            });

            
        } catch (error) {
            let errorMessage = "Sign In failed";
            if (axios.isAxiosError(error)) {
                errorMessage = error.response?.data?.message ?? error.message ?? errorMessage;
            } else if (error instanceof Error) {
                errorMessage = error.message;
            }
            toast.error(errorMessage);
        }
    }

    return (
        <div className="min-h-screen flex flex-col lg:flex-row">
            {/* Left visual column: marketing content above illustration */}
            <div className="lg:w-1/2 hidden bg-[#1F2937] text-white lg:flex flex-col items-center justify-center p-4 gap-8">
                <div className="text-left">
                    <h3 className="font-bold text-5xl leading-[1.15]">Ready to Charge?</h3>
            
                    <ul className="mt-6 space-y-4 text-base text-[#D7EAFB]">
                        <li className="flex items-start gap-3">
                          
                            <span>🎯<strong>Quick access</strong> to your saved favorite spots</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span>⚡<strong>Instant booking</strong> with stored payment methods</span>
                        </li>
                        
                        <li className="flex items-start gap-3">
                          
                            <span>🔄<strong>Sync across devices</strong> — park from anywhere</span>
                        </li>
                    </ul>
                </div>

                <div className="max-w-md w-full flex items-center justify-center">
                    <img
                        src="/chargingPoint.png"
                        alt="parking illustration"
                        className="max-w-md w-full h-auto rounded-lg shadow-xl"
                    />
                </div>
            </div>

            {/* Right form column */}
            <div className="lg:w-1/2 w-full flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
                <header className="mb-6 text-center">
                <h1 className="text-[#1F2937] font-bold text-6xl leading-[1.2]">ParkEase</h1>
                <h2 className="mt-2 text-[#1F2937] font-semibold text-4xl leading-[1.3]">Welcome back</h2>
                <p className="mt-3 text-sm text-[#475569]">Sign in to find and book your perfect parking spot.</p>
            </header>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-[#F1F5F9]">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm font-medium text-[#1F2937]">Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="you@domain.com" {...field} />
                                    </FormControl>
                                    <FormMessage className="text-amber-600" />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm font-medium text-[#1F2937]">Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="Enter a secure password" {...field} />
                                    </FormControl>
                                    <FormMessage className="text-amber-600" />
                                </FormItem>
                            )}
                        />

                        <div className="pt-2">
                            <Button
                                type="submit"
                                className="w-full bg-[#10B981] text-white hover:bg-[#0f9a6f] shadow-md"
                            >
                                Sign in
                            </Button>
                        </div>

                        <div className="text-center text-sm text-[#475569] mt-2">
                            <span>Don't have an account? </span>
                            <a href="/sign-up" className="font-medium text-[#3B82F6] hover:underline">
                                Sign up
                            </a>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
        </div>
    </div>
    )
}

export default SignIn