"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { ThreeDots } from 'react-loader-spinner';

const formSchema = z.object({
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(1),
});

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    const { error } = await sendEmail(values);

    setIsLoading(false);

    if (error) {
      toast.error(error);
      return;
    }

    toast.success("Email sent successfully!");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Email"
                  {...field}
                  required
                  className="outline-none border-b"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Subject   (e.g. Hiring, Project proposal and etc)"
                  {...field}
                  required
                  className="outline-none border-b"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Type your message"
                  {...field}
                  required
                  rows={10}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          variant="ghost"
          className="group w-full flex items-center justify-center gap-2 bg-cmaccent dark:bg-cmaccent/80 text-cmsecondary rounded-md outline-none transition-all hover:dark:bg-cmaccent hover:bg-cmaccent/80"
          disabled={isLoading}
        >
          {isLoading ? (
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              
              <ThreeDots color="#FFF" height={20} width={20} />
            </motion.div>
          ) : (
            <>
              Send Now
              <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
