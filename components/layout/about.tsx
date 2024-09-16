import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../section-heading";
import { FaCertificate } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { useSectionInView } from "@/hooks/useSection";
import Image from 'next/image';
import Link from "next/link";

export default function About() {
  const { ref } = useSectionInView("About");

  // State to track the active tab
  const [activeTab, setActiveTab] = useState("contact");

  return (
    <motion.section
      ref={ref}
      className="mb-24 my-8 leading-8 sm:mb-40 -mt-12 px-4 md:px-8 lg:px-0"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      {/* Container for Image and Text */}
      <div className="flex flex-col md:flex-row gap-8 items-start lg:mx-28 md:mx-12 mx-2">
        
        {/* Image Section */}
        <div className="w-full md:w-1/3">
          <div className="w-full aspect-w-1 aspect-h-1 rounded-2xl bg-gradient-to-br from-transparent to-transparent grid place-items-center pt-4 overflow-hidden">
            <Image
              className="rounded-2xl"
              src="/profile/picture-2.jpg"
              alt="Me"
              width={600}
              height={600}
              layout="responsive"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="text-white md:px-6 lg:px-8 flex flex-col justify-start md:w-2/3">
          <p className="mt-6 text-gray-600 leading-relaxed pb-4 text-left">
            As a Software Engineer with 1.5 years of working experience, I am a self-driven individual with a passion for exploring new horizons in the IT field. My expertise lies in crafting dynamic and engaging interfaces through writing clean code and utilizing cutting-edge development tools and techniques. With a strong foundation in both web and mobile development, I excel at creating user-centric applications that deliver seamless experiences.
          </p>

          {/* Tab Navigation */}
          <div className="tabs flex justify-start gap-4 mt-6 mb-6">
            <button
              className={`px-4 py-2 rounded-md ${
                activeTab === "contact"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setActiveTab("contact")}
            >
              Contact Info
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                activeTab === "certifications"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setActiveTab("certifications")}
            >
              Certifications
            </button>
          </div>

          {/* Content based on selected tab */}
          <div className="tab-content">
            {activeTab === "contact" && (
              <motion.div
                key="contact"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="text-black text-left"
              >
                <h5 className="text-lg font-semibold mb-4">Contact Information</h5>
                <ul className="space-y-3 text-gray-600">
                  <li>
                    <strong>Current Living: </strong>Colombo, Sri Lanka
                  </li>
                  <li>
                    <strong>Nationality: </strong>Sri Lankan
                  </li>
                  <li>
                    <strong>Age: </strong>23
                  </li>
                </ul>
              </motion.div>
            )}

            {activeTab === "certifications" && (
              <motion.div
                key="certifications"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="text-black text-left"
              >
                <h5 className="text-lg font-semibold mb-4">Certifications</h5>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-3 sm:gap-4">
                    <FaCertificate className="text-blue-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl" />
                    <span className="flex flex-col">
                      <strong>BEng (Hons) in Software Engineering: </strong>
                      <Link href="https://drive.google.com/file/d/1udVbaISge3fOqVxl0Q1uKg4HjHt71vxz/view?usp=sharing" target="_blank" className="text-blue-500 hover:underline">
                        View Certification <HiExternalLink className="inline ml-1 text-blue-500" />
                      </Link>
                    </span>
                  </li>
                  <li className="flex items-center gap-3 sm:gap-4">
                    <FaCertificate className="text-blue-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl" />
                    <span className="flex flex-col">
                      <strong>Udemy - Spring Boot Complete Certification: </strong>
                      <Link href="https://www.udemy.com/certificate/UC-ce0e9057-f1b9-4c77-8dd2-643d57455685/" target="_blank" className="text-blue-500 hover:underline">
                        View Certificate <HiExternalLink className="inline ml-1 text-blue-500" />
                      </Link>
                    </span>
                  </li>
                  <li className="flex items-center gap-3 sm:gap-4">
                    <FaCertificate className="text-blue-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl" />
                    <span className="flex flex-col">
                      <strong>Udemy - Java Absolute Complete Course: </strong>
                      <Link href="https://www.udemy.com/certificate/UC-448bc9f7-0204-4159-ad23-168483d5bb6a/" target="_blank" className="text-blue-500 hover:underline">
                        View Certificate <HiExternalLink className="inline ml-1 text-blue-500" />
                      </Link>
                    </span>
                  </li>
                  <li className="flex items-center gap-3 sm:gap-4">
                    <FaCertificate className="text-blue-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl" />
                    <span className="flex flex-col">
                      <strong>Java Programming: </strong>
                      <Link href="https://www.educba.com/certificate/?c=009KXKRQ0" target="_blank" className="text-blue-500 hover:underline">
                        View Certificate <HiExternalLink className="inline ml-1 text-blue-500" />
                      </Link>
                    </span>
                  </li>
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
