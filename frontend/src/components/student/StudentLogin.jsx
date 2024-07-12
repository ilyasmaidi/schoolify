"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "../ui/button.jsx";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form.jsx";
import { Input } from "../ui/input.jsx";

// Define the schema using zod
const formSchema = z.object({
  email: z.string().email().min(2).max(50),
  password: z.string().min(8).max(30),
});

export default function StudentLogin() {
  // Use useForm hook with zodResolver
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues:{
      username : '',
      password : ''
    }
  });

  // Define a submit handler
  function onSubmit(values) {
    // Do something with the form values
    // ✅ This will be type-safe and validated
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="you@example.com" {...field} />
              </FormControl>
              <FormDescription>
                Please enter your email address.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="********" {...field} />
              </FormControl>
              <FormDescription>
                Please enter your password.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
