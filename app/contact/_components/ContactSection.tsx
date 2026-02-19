"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import React, { useTransition } from "react";
import * as z from "zod";
import {
  IconMapPin,
  IconHeadset,
  IconMail,
  IconClock,
  IconSend,
  IconBriefcase,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { ADDRESS, EMAIL, PHONE } from "@/constants";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  firstName: z.string().min(2, "Required"),
  lastName: z.string().min(2, "Required"),
  email: z.string().email("Invalid corporate email"),
  phone: z.string().min(10, "Phone required"),
  subject: z.enum(["tenders", "logistics", "general", "rental"]),
  message: z.string().min(10, "Please provide more project detail"),
});

export const ContactSection = () => {
  const [pending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { subject: "general" },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          body: JSON.stringify(values),
        });
        if (res.ok) toast.success("Message Dispatched to Forbliz Operations.");
      } catch (error) {
        toast.error("Network error. Please try again.");
      }
    });
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <h2 className="text-amber-600 font-black uppercase tracking-[0.4em] text-sm mb-4">
            Connect with us
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-none uppercase italic">
            Command <br className="hidden lg:block" />
            <span className="text-slate-400">Center.</span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* 1. Physical Presence & Details */}
          <div className="lg:col-span-1 space-y-4">
            <div className="p-8 bg-slate-900 rounded-[2rem] text-white relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                <h4 className="text-xl font-black uppercase italic text-amber-500">
                  Headquarters
                </h4>

                <div className="flex gap-4">
                  <IconMapPin className="text-amber-500 shrink-0" />
                  <p className="text-sm font-medium text-gray-300">{ADDRESS}</p>
                </div>

                <div className="flex gap-4">
                  <IconHeadset className="text-amber-500 shrink-0" />
                  <a
                    href={`tel:${PHONE}`}
                    className="text-sm font-medium text-gray-300"
                  >
                    {PHONE}
                  </a>
                </div>

                <div className="flex gap-4">
                  <IconMail className="text-amber-500 shrink-0" />
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-sm font-medium text-gray-300"
                  >
                    {EMAIL}
                  </a>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center gap-3">
                  <IconClock size={18} className="text-emerald-500" />
                  <span className="text-[10px] font-black uppercase tracking-widest">
                    Site Ops: 24/7 Deployment
                  </span>
                </div>
              </div>
              {/* Subtle background decoration */}
              <div className="absolute -bottom-10 -right-10 opacity-10 text-white scale-150 rotate-12">
                <IconMapPin size={160} />
              </div>
            </div>

            {/* Careers CTA */}
            <div className="p-8 hidden border-2 border-dashed border-slate-200 rounded-[2rem] group hover:border-amber-500 transition-colors">
              <IconBriefcase className="text-slate-400 group-hover:text-amber-600 mb-4 transition-colors" />
              <h5 className="font-black uppercase italic text-slate-900">
                Join the Crew
              </h5>
              <p className="text-sm text-slate-500 mt-2 mb-4">
                We are always looking for certified operators and engineers.
              </p>
            </div>
          </div>

          {/* 2. Communication Form */}
          <div className="lg:col-span-2 bg-slate-50 rounded-[2.5rem] p-6 md:p-12">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[10px] uppercase font-black tracking-widest text-slate-500">
                          First Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John"
                            {...field}
                            className="rounded-xl border-slate-200"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[10px] uppercase font-black tracking-widest text-slate-500">
                          Last Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Doe"
                            {...field}
                            className="rounded-xl border-slate-200"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[10px] uppercase font-black tracking-widest text-slate-500">
                          Corporate Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="john@company.com"
                            {...field}
                            className="rounded-xl"
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
                        <FormLabel className="text-[10px] uppercase font-black tracking-widest text-slate-500">
                          Phone
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="+234..."
                            {...field}
                            className="rounded-xl"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-[10px] uppercase font-black tracking-widest text-slate-500">
                        Department
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-wrap gap-3"
                        >
                          {["tenders", "logistics", "general", "rental"].map(
                            (s) => (
                              <FormItem
                                key={s}
                                className="flex items-center space-x-0 space-y-0"
                              >
                                <FormControl>
                                  <RadioGroupItem
                                    value={s}
                                    className="peer hidden"
                                  />
                                </FormControl>
                                <FormLabel className="cursor-pointer px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-500 peer-data-[state=checked]:bg-slate-900 peer-data-[state=checked]:text-amber-500 transition-all">
                                  {s.toUpperCase()}
                                </FormLabel>
                              </FormItem>
                            ),
                          )}
                        </RadioGroup>
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[10px] uppercase font-black tracking-widest text-slate-500">
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe project scope..."
                          {...field}
                          className="rounded-xl min-h-[150px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  disabled={pending}
                  type="submit"
                  className="w-full md:w-auto "
                >
                  {pending ? "Dispatching..." : "Dispatch Message"}
                  <IconSend size={18} />
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};
