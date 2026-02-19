"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useTransition } from "react";
import { toast } from "sonner";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const quoteSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid corporate email"),
  companyName: z.string().min(1, "Company name is required"),
  phone: z.string().min(10, "Valid phone number required"),
  serviceCategory: z.string().min(1, "Please select a category"),
  location: z.string().min(2, "Location is required"),
  tonnage: z.string().optional(),
  startDate: z.string().min(1, "Proposed start date is required"),
  requirements: z.string().min(10, "Please provide more details"),
});

export function QuoteForm() {
  const [pending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof quoteSchema>>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      fullName: "",
      email: "",
      companyName: "",
      phone: "",
      location: "",
      tonnage: "",
      startDate: "",
      requirements: "",
    },
  });

  async function onSubmit(values: z.infer<typeof quoteSchema>) {
    startTransition(async () => {
      try {
        const response = await fetch("/api/quote", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          toast.success("Project data transmitted successfully.");
          form.reset();
        } else {
          toast.error("Transmission failed. Please check connection.");
        }
      } catch (error) {
        toast.error("An unexpected error occurred.");
      }
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
        {/* Step 1: Identity */}
        <div className="space-y-6">
          <h3 className="text-amber-600 font-black italic uppercase tracking-tighter">
            01. Contact Personnel
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Full Name"
                      {...field}
                      className="form-input-amber"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Corporate Email"
                      {...field}
                      className="form-input-amber"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Company Name"
                      {...field}
                      className="form-input-amber"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Phone Number"
                      {...field}
                      className="form-input-amber"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Step 2: Scope */}
        <div className="space-y-6">
          <h3 className="text-amber-600 font-black italic uppercase tracking-tighter">
            02. Project Scope
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="serviceCategory"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="border-0 border-b-2 rounded-none focus:ring-0">
                        <SelectValue placeholder="Select Service Category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="mining">Surface Mining</SelectItem>
                      <SelectItem value="civil">Civil Construction</SelectItem>
                      <SelectItem value="logistics">Heavy Haulage</SelectItem>
                      <SelectItem value="rental">Equipment Rental</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Project Location (State/City)"
                      {...field}
                      className="form-input-amber"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tonnage"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Estimated Tonnage (Optional)"
                      {...field}
                      className="form-input-amber"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="startDate"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Anticipated Start Date"
                      {...field}
                      className="form-input-amber"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Step 3: Requirements */}
        <div className="space-y-6">
          <h3 className="text-amber-600 font-black italic uppercase tracking-tighter">
            03. Technical Requirements
          </h3>
          <FormField
            control={form.control}
            name="requirements"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="List specific machinery needed or describe technical challenges..."
                    {...field}
                    className="bg-slate-50 border-slate-200 rounded-2xl min-h-[150px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button disabled={pending} type="submit" className="w-full md:w-auto ">
          {pending ? "Transmitting..." : "Submit RFQ Package"}
        </Button>
      </form>
    </Form>
  );
}
