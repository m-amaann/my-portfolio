

// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { BsArrowRight, BsLinkedin } from "react-icons/bs";
// import { HiDownload } from "react-icons/hi";
// import { FaGithubSquare } from "react-icons/fa";
// import { useSectionInView } from "@/hooks/useSection";
// import { useSection } from "@/hooks/useSection";
// import { slideUpDesc, slideUpHeading } from "@/lib/anim";
// import Image from "next/image";

// export default function Intro() {
//   const { ref } = useSectionInView("Home");
//   const { setActiveSection, setTimeOfLastClick } = useSection();

//   return (
//     <section
//       ref={ref}
//       id="home"
//       className="h-screen relative flex flex-col md:flex-row justify-center items-center"
//     >
//       <div className="flex flex-col items-center px-2 md:pt-20 pb-4">
//         <div className=" w-full max-w-[1490px] max-md:mt-10 max-md:max-w-full">
//           <div className="flex gap-5 max-md:flex-col">
//             <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
//               <div className="flex flex-col self-stretch md:my-auto  max-md:max-w-full">
//                 <div className="text-xl font-semibold sm:justify-items-center text-white max-md:max-w-full">
//                   Hi, I am 👋
//                   <br />
//                   <span className="md:text-[38px] text-3xl font-bold text-[#0458AC] leading-normal tracking-wide	">
//                     Mohamed Amaan
//                   </span>
//                   <br />
//                   <span className="md:text-[44px] text-4xl font-bold text-white leading-normal tracking-wide">
//                     Software Engineer <span>&</span> 
//                   </span>
//                   <br />
//                   <span className="text-[44px] font-bold text-white leading-normal tracking-wide">
//                     Designer
//                   </span>
//                 </div>
//                 <div className="mt-7 text-xl leading-normal text-gray-500 max-md:max-w-full">
//                   A self driven individual, aspiring to explore new horizons in
//                   the field of IT with an appetite for Full Stack Engineer.
//                 </div>

//                 <motion.div
//                   className="flex flex-wrap items-center gap-4 pt-4 text-lg font-medium"
//                   initial="hidden"
//                   animate="visible"
//                   variants={slideUpDesc}
//                   custom={1}
//                 >
//                   <Link
//                     href="#contact"
//                     className="flex justify-center items-center gap-2 py-3 px-6 text-sm sm:text-base transition rounded-full outline-none group focus:scale-105 hover:scale-105 active:scale-105 bg-cmaccent dark:bg-cmaccent/80 text-cmsecondary hover:dark:bg-cmaccent hover:bg-cmaccent/80"
//                     onClick={() => {
//                       setActiveSection("Contact");
//                       setTimeOfLastClick(Date.now());
//                     }}
//                   >
//                     Contact Me{" "}
//                     <BsArrowRight className="transition opacity-70 group-hover:translate-x-1" />
//                   </Link>

//                   <a
//                     className="flex justify-center items-center gap-2 py-3 px-6 text-sm sm:text-base transition bg-white rounded-full outline-none cursor-pointer group focus:scale-105 hover:scale-105 active:scale-105 borderBlack dark:bg-white/10"
//                     href="/mohamedamaan-resume.pdf"
//                     download
//                   >
//                     Download CV <HiDownload className="transition opacity-60" />
//                   </a>

//                   <div className="flex gap-4 items-center justify-center">
//                     <a
//                       className="bg-white p-4 text-gray-700 hover:text-cmaccent flex items-center gap-2 rounded-full focus:scale-105 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
//                       href="https://www.linkedin.com/in/niamatm/"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <BsLinkedin />
//                     </a>

//                     <a
//                       className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-105 hover:scale-105 hover:text-cmaccent active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
//                       href="https://github.com/NimBuzz01"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <FaGithubSquare />
//                     </a>
//                   </div>
//                 </motion.div>
//               </div>
//             </div>
            // <div className="flex-col md:w-1/2 flex md:-mt-28 pb-10 justify-center items-center">
            //   <Image
            //     loading="lazy"
            //     src="/profile/profile-1.png"
            //     width={600}
            //     height={600}
            //     className="object-cover max-md:w-96 max-md:h-96 mb-16 md:mb-0"
            //     alt="Profile Image"
            //   />
            // </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




// OLD CODE

"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/hooks/useSection";
import { useSection } from "@/hooks/useSection";
import { slideUpDesc, slideUpHeading } from "@/lib/anim";
import Image from "next/image";

const words1 = ["Hi", "There,", "I'm"];
const words2 = ["Mohamed", "Amaan"];
const description: string = `A self-driven individual, aspiring to explore new horizons in the field of IT with an appetite for Full Stack Engineering.`;

export default function Intro() {
  const { ref } = useSectionInView("Home");
  const { setActiveSection, setTimeOfLastClick } = useSection();

  const renderText = (words: string[], startDelay: number = 0) =>
    words.map((word, i) => (
      <React.Fragment key={i}>
        {word.split("").map((char, j) => (
          <motion.span
            key={j}
            custom={startDelay + i + j * 0.05}
            variants={slideUpHeading}
            className="tracking-tighter"
          >
            {char}
          </motion.span>
        ))}
        {i < words.length - 1 && <span>&nbsp;</span>}
      </React.Fragment>
    ));

  return (
    <section
      ref={ref}
      id="home"
      className="flex flex-col md:flex-row items-center justify-center px-4 py-8 sm:py-12 md:py-24 min-h-screen"
    >
      <div className="flex flex-col mt-24 w-full md:w-1/2 text-left md:pr-16">
        {/* Content Section */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <motion.div
            className="flex flex-col text-left"
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="flex text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl uppercase font-bold mb-4"
              initial="hidden"
              animate="visible"
            >
              {renderText(words1)} 👋
            </motion.div>
            <motion.div
              className="flex text-xl sm:text-2xl md:text-[38px] font-bold text-[#0458AC] leading-normal tracking-wide uppercase"
              initial="hidden"
              animate="visible"
            >
              {renderText(words2)}
            </motion.div>
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-3xl pt-4  font-bold leading-normal tracking-wide text-black dark:text-white mb-4">
              Software Engineer & UX Designer
            </span>
            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl leading-normal text-gray-500 mb-4"
              initial="hidden"
              animate="visible"
              variants={slideUpDesc}
              custom={0}
            >
              {description}
            </motion.p>
            <motion.div
              className="flex flex-wrap items-center gap-4 text-sm sm:text-base md:text-lg lg:text-xl font-medium"
              initial="hidden"
              animate="visible"
              variants={slideUpDesc}
              custom={1}
            >
              <Link
                href="#contact"
                className="flex items-center gap-2 py-3 px-6 text-xs sm:text-sm md:text-base transition rounded-full bg-cmaccent dark:bg-cmaccent/80 text-cmsecondary hover:bg-cmaccent/80"
                onClick={() => {
                  setActiveSection("Contact");
                  setTimeOfLastClick(Date.now());
                }}
              >
                Contact Me{" "}
                <BsArrowRight className="transition opacity-70 group-hover:translate-x-1" />
              </Link>
              <a
                className="flex items-center gap-2 py-3 px-6 text-xs sm:text-sm md:text-base transition bg-white rounded-full borderBlack dark:bg-white/10"
              href="#contact"
                // download
              >
                Download CV <HiDownload className="transition opacity-60" />
              </a>
              <div className="flex gap-4 items-center">
                <a
                  className="bg-white p-3 text-xs sm:text-sm md:text-base text-gray-700 hover:text-cmaccent rounded-full borderBlack dark:bg-white/10 dark:text-white/60"
                  href="https://www.linkedin.com/in/mohamed-amaan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLinkedin className="hover:text-cmaccent transition-colors duration-100" />
                </a>
                <a
                  className="bg-white p-3 text-xs sm:text-sm md:text-base text-gray-700 rounded-full borderBlack dark:bg-white/10 dark:text-white/60"
                  href="https://github.com/m-amaann"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithubSquare />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center mt-6 sm:mt-8 md:mt-0">
        <div className="w-full h-full flex justify-center items-center overflow-hidden">
          <Image
            src="/profile/PROFILE.png"
            layout="intrinsic"
            width={500}
            height={500}
            className="object-contain w-full h-auto"
            alt="Profile Image"
          />
        </div>
      </div>
    </section>
  );
}



// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { BsArrowRight, BsLinkedin } from "react-icons/bs";
// import { HiDownload } from "react-icons/hi";
// import { FaGithubSquare } from "react-icons/fa";
// import { useSectionInView } from "@/hooks/useSection";
// import { useSection } from "@/hooks/useSection";
// import { slideUpDesc, slideUpHeading } from "@/lib/anim";
// import Image from "next/image";

// const words1 = ["Hi", "There,", "I'm"];
// const words2 = ["Mohamed", "Amaan"];
// const description: string = `A self-driven individual, aspiring to explore new horizons in the field of IT with an appetite for Full Stack Engineering.`;

// export default function Intro() {
//   const { ref } = useSectionInView("Home");
//   const { setActiveSection, setTimeOfLastClick } = useSection();

//   const renderText = (words: string[], startDelay: number = 0) =>
//     words.map((word, i) => (
//       <React.Fragment key={i}>
//         {word.split("").map((char, j) => (
//           <motion.span
//             key={j}
//             custom={startDelay + i + j * 0.05}
//             variants={slideUpHeading}
//             className="tracking-tighter"
//           >
//             {char}
//           </motion.span>
//         ))}
//         {i < words.length - 1 && <span>&nbsp;</span>}
//       </React.Fragment>
//     ));

//   return (
//     <section
//       ref={ref}
//       id="home"
//       className="flex flex-col md:flex-row items-center justify-center px-4 py-12 md:py-24 h-screen"
//     >
//       <div className="flex flex-col md:flex-row items-center md:items-start w-full md:w-3/4 md:pr-16">
//         <div className="w-full md:w-1/2 text-left">
//           <motion.div
//             className="flex flex-col text-left"
//             initial="hidden"
//             animate="visible"
//           >
//             <motion.div
//               className="flex w-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase font-bold mb-4"
//               initial="hidden"
//               animate="visible"
//             >
//               {renderText(words1)} 👋
//             </motion.div>
//             <motion.div
//               className="flex text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase font-bold mb-2"
//               initial="hidden"
//               animate="visible"
//             >
//               {renderText(words2)}
//             </motion.div>
//             <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-normal tracking-wide text-black dark:text-white mb-4">
//               Software Engineer from Sri Lanka
//             </span>
//             <motion.p
//               className="text-sm sm:text-base md:text-lg lg:text-xl leading-normal text-gray-500 mb-4"
//               initial="hidden"
//               animate="visible"
//               variants={slideUpDesc}
//               custom={0}
//             >
//               {description}
//             </motion.p>
//             <motion.div
//               className="flex flex-wrap items-center gap-4 text-sm sm:text-base md:text-lg lg:text-xl font-medium"
//               initial="hidden"
//               animate="visible"
//               variants={slideUpDesc}
//               custom={1}
//             >
//               <Link
//                 href="#contact"
//                 className="flex items-center gap-2 py-3 px-6 text-xs sm:text-sm md:text-base transition rounded-full bg-cmaccent dark:bg-cmaccent/80 text-cmsecondary hover:bg-cmaccent/80"
//                 onClick={() => {
//                   setActiveSection("Contact");
//                   setTimeOfLastClick(Date.now());
//                 }}
//               >
//                 Contact Me{" "}
//                 <BsArrowRight className="transition opacity-70 group-hover:translate-x-1" />
//               </Link>
//               <a
//                 className="flex items-center gap-2 py-3 px-6 text-xs sm:text-sm md:text-base transition bg-white rounded-full borderBlack dark:bg-white/10"
//                 href="/niamatmarjan-resume.pdf"
//                 download
//               >
//                 Download CV <HiDownload className="transition opacity-60" />
//               </a>
//               <div className="flex gap-4 items-center">
//                 <a
//                   className="bg-white p-3 text-xs sm:text-sm md:text-base text-gray-700 hover:text-cmaccent rounded-full borderBlack dark:bg-white/10 dark:text-white/60"
//                   href="https://www.linkedin.com/in/mohamed-amaan"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <BsLinkedin className="hover:text-cmaccent transition-colors duration-100" />
//                 </a>
//                 <a
//                   className="bg-white p-3 text-xs sm:text-sm md:text-base text-gray-700 rounded-full borderBlack dark:bg-white/10 dark:text-white/60"
//                   href="https://github.com/m-amaann"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FaGithubSquare />
//                 </a>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//         <div className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
//           <Image
//             loading="lazy"
//             src="/profile/profile-1.png"
//             width={500}
//             height={500}
//             className="object-cover w-full h-auto md:w-96"
//             alt="Profile Image"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
