import React from 'react';
import SectionHeading from '../section-heading';
import { useSectionInView } from '@/hooks/useSection';
import { services } from '@/lib/data';
import Image from 'next/image';
import { motion } from "framer-motion";
import { slideUp } from "@/lib/anim";

export default function Services() {
    const { ref } = useSectionInView("Services");
    return (
        <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            ref={ref}
            id="services"
            className="scroll-mt-28 w-full mb-28 sm:mb-40"
        >
            <SectionHeading>What I Am Providing</SectionHeading>
            <motion.div 
                variants={slideUp}
                className="flex flex-col items-center justify-center gap-8 px-4 md:px-0"
            >
                <div className="flex flex-wrap justify-center gap-8">
                    {services.map((service, index) => (
                        <div 
                            key={index} 
                            className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full sm:w-80 md:w-72 lg:w-80 h-auto transition-transform transform duration-500 hover:shadow-md dark:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
                        >
                          <div className="relative w-16 h-16 mb-4"> {/* Fixed size container */}
                                <Image
                                    src={service.emoji}
                                    alt={service.heading}
                                    layout="fill" 
                                    className="rounded-lg object-cover hover:-rotate-12 transition-transform duration-500 repeat-infinite" 
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-center text-gray-900 dark:text-gray-100">
                                {service.heading}
                            </h3>
                            <p className="text-gray-600 text-center text-sm dark:text-gray-300">
                                {service.detail}
                            </p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </motion.section>
    );
}
