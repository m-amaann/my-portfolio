"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Email Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your email"
                  {...field}
                  required
                  className="border-b border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-cmaccent dark:focus:border-cmaccent transition-all duration-300 rounded-sm"
                />
              </FormControl>
            </FormItem>
          )}
        />

        {/* Subject Field */}
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input
                  placeholder="Project Inquiry, Job Opportunity, Collaboration"
                  {...field}
                  required
                  className="outline-none border-b border-gray-300 dark:border-gray-600 focus:border-cmaccent dark:focus:border-cmaccent transition-all duration-300 rounded-sm"
                />
              </FormControl>
            </FormItem>
          )}
        />

        {/* Message Field */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Type your message..."
                  {...field}
                  required
                  rows={6}
                  className="outline-none border-b border-gray-300 border-dashed dark:border-gray-600 focus:border-cmaccent dark:focus:border-cmaccent transition-all duration-300 rounded-sm"
                />
              </FormControl>
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            type="submit"
            variant="ghost"
            className="group w-full flex items-center justify-center gap-2 bg-cmaccent dark:bg-cmaccent/80 text-cmsecondary rounded-md outline-none transition-all duration-300 hover:shadow-lg"
            disabled={isLoading}
          >
            {isLoading ? (
              <ThreeDots color="#FFF" height={20} width={20} />
            ) : (
              <>
                Send Now
                <motion.span
                  className="text-xs opacity-70"
                  whileHover={{ x: 3, y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaPaperPlane />
                </motion.span>
              </>
            )}
          </Button>
        </motion.div>
      </form>
    </Form>
  );
};

export default ContactForm;