"use client"
import { useForm } from "react-hook-form"
import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useCallback } from "react"
import "../styles/contact.css"

const formSchema = z.object({
    name: z.string().min(5, {message: "Name should be at least 5 characters long"}).max(50, {message:"Enter a valid name less than 50 characters"}),
    phoneNumber: z.string().min(8, {message:"Phone number must be at least 8 character long"}).max(15, {message: "Phone number should not exceed 15 characters"}),
    email: z.string().email(),
    message: z.string(), 
})
const Contacts = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
    })

    const onSubmit = useCallback((values: z.infer<typeof formSchema>) => {
        console.log(values)
    }, [])
  return (
    <>
        <div className="flex justify-center items-center min-h-screen">
            <Card className="w-[60%] md:w-[50%] lg:w-[40%]">
                <CardHeader>
                    <CardTitle>Contact</CardTitle>
                    <CardDescription>Enter your contacts here</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3">
                            <FormField control={form.control} name="name" render={({field})=> (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                    <Input placeholder="Enter name here..." {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}/>
                            <FormField control={form.control} name="email" render={({field})=> (
                                <FormItem>
                                    <FormLabel>Email Address</FormLabel>
                                    <FormControl>
                                    <Input placeholder="Enter email here..." {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}/>
                            <FormField control={form.control} name="phoneNumber" render={({field})=> (
                                <FormItem>
                                    <FormLabel>Phone Number</FormLabel>
                                    <FormControl>
                                    <Input placeholder="Enter phoneNumber here..." {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}/>
                            <FormField control={form.control} name="message" render={({field})=> (
                                <FormItem>
                                    <FormLabel>Message</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Enter your message here..." {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}/>
                            <Button className="self-center"  type="submit">Submit</Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
        
    </>
  )
}

export default Contacts