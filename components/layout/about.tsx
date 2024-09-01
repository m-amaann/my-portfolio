import { motion } from "framer-motion";
import SectionHeading from "../section-heading";
import { BsBookmarkStar } from "react-icons/bs";
import { GiGraduateCap } from 'react-icons/gi';
import { TfiWorld } from "react-icons/tfi";
import { useSectionInView } from "@/hooks/useSection";
import Image from 'next/image';
export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-24 mt-8 text-center leading-8 sm:mb-40 scroll-mt-28 px-4 md:px-0 justify-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4 lg:gap-4 md:mx-14 lg:mx-16 items-center justify-center">
        <div className="w-4/3 md:w-2/3 lg:w-1/2 mx-auto">
          <div className="w-[90%] aspect-w-1 aspect-h-1 rounded-2xl bg-gradient-to-br from-transparent via-[#c9e3f9] to-transparent grid place-items-center pt-4 overflow-hidden">
            <Image
              className="rounded-2xl transition-all duration-400 ease-in-out hover:repeat-infinite hover:scale-110"
              src="/profile/image.png"
              alt="Me"
              width={300}
              height={300}
              layout="responsive"
            />
          </div>
        </div>

        <div className="text-white">
          <p className="mt-6 text-gray-400 leading-relaxed pb-4" style={{ textAlign: 'justify' }}>
            As a Software Engineer with 1.5 years of working experience, I am a self-driven individual with a passion for exploring new horizons in the IT field. My expertise lies in crafting dynamic and engaging interfaces through writing clean code and utilizing cutting-edge development tools and techniques. With a strong foundation in both web and mobile development, I excel at creating user-centric applications that deliver seamless experiences.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            <article className="dark:bg-[#0458AC] bg-[#c9e3f9] border border-transparent rounded-xl p-4 text-center transition-all duration-400 ease-in-out hover:bg-transparent hover:border-blue-400">
              <GiGraduateCap className="text-blue-400 text-xl mb-4" />
              <h5 className="text-base">Degree</h5>
              <small className="text-xs text-gray-400">BEng (Hons) Software Engineering<br /><i>London Metropolitan University (UK)</i></small>
            </article>

            <article className="dark:bg-[#0458AC] bg-[#c9e3f9] border border-transparent rounded-xl p-4 text-center transition-all duration-400 ease-in-out hover:bg-transparent hover:border-blue-400">
              <BsBookmarkStar className="text-blue-400 text-xl mb-4" />
              <h5 className="text-base mb-2">GPA</h5>
              <div className="text-xs text-gray-400">
                3.8 <br />First Class Honours
              </div>
            </article>

            <article className="dark:bg-[#0458AC] bg-[#c9e3f9] border border-transparent rounded-xl p-4 text-center transition-all duration-400 ease-in-out hover:bg-transparent hover:border-blue-400">
              <TfiWorld className="text-blue-400 text-xl mb-4" />
              <h5 className="text-base mb-2">Domains</h5>
              <small className="text-xs text-gray-400">
                <ul>
                  <li>Mobile Applications</li>
                  <li>DevOps</li>
                </ul>
              </small>
            </article>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
