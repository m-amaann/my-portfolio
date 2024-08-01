// import { useInView, motion } from "framer-motion";
// import { useRef } from "react";
// import SectionHeading from "../section-heading";
// import ColorCard from "../color-card";
// import Handwritten from "../ui/handwritten";
// import { aboutMe } from "@/lib/data";
// import { useSectionInView } from "@/hooks/useSection";
// import { opacity, slideUp } from "@/lib/anim";

// export default function About() {
//   const phrase = aboutMe.longDesc;
//   const description = useRef(null);
//   const isInViewDesc = useInView(description);

//   const aboutUI = useRef(null);
//   const isInViewUI = useInView(aboutUI);

//   const { ref } = useSectionInView("About");

//   return (
//     <motion.section
//       ref={ref}
//       className="mb-24 mt-8 md:mt-0 lg:mt-0 text-center leading-8 sm:mb-40 scroll-mt-28"
//       initial={{ opacity: 0, y: 100 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 3.175 }}
//       id="about"
//     >
//       <SectionHeading>About Me</SectionHeading>
//       <div ref={description}>
//         <div className="relative flex flex-col items-center gap-12 mt-12 lg:items-start lg:flex-row">
//           <p className="gap-2 m-0 leading-10 text-lg sm:text-xl md:text-xl lg:text-2xl">
//             {phrase.split(" ").map((word, index) => {
//               return (
//                 <span
//                   className="relative inline-flex overflow-hidden"
//                   key={index}
//                 >
//                   <motion.span
//                     variants={slideUp}
//                     custom={index}
//                     animate={isInViewDesc ? "open" : "closed"}
//                     key={index}
//                     className="mr-1 sm:mb-2"
//                   >
//                     {word}
//                   </motion.span>
//                 </span>
//               );
//             })}
//           </p>
//           <motion.p
//             variants={opacity}
//             className="w-4/5 m-0 font-light sm:text-lg"
//             animate={isInViewDesc ? "open" : "closed"}
//           >
//             {aboutMe.shortDesc}
//           </motion.p>
//         </div>
//       </div>
//     </motion.section>
//   );
// }





import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "../section-heading";
import { useSectionInView } from "@/hooks/useSection";
import { opacity, slideUp } from "@/lib/anim";

export default function About() {
  const description = useRef(null);
  const isInViewDesc = useInView(description);

  const aboutUI = useRef(null);
  const isInViewUI = useInView(aboutUI);

  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-18 mt-16 md:mt-24 lg:mt-24 text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <div ref={description}>
        <div className="relative flex flex-col items-center gap-12 mt-12 lg:items-start lg:flex-row">
          <p className="gap-2 m-0 leading-10 text-lg sm:text-xl md:text-xl lg:text-2xl">
            <span className="relative inline-flex overflow-x-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{
                  delay: 3.5,
                  duration: 0.5,
                }}
              >
                I am a highly dedicated and
              </motion.span>
            </span>{" "}
            <span className="relative inline-flex overflow-x-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{
                  delay: 3.55,
                  duration: 0.5,
                }}
              >
                skilled Software Engineer with
              </motion.span>
            </span>{" "}
            <span className="relative inline-flex overflow-x-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{
                  delay: 3.6,
                  duration: 0.5,
                }}
              >
                extensive experience in building
              </motion.span>
            </span>{" "}
            <span className="relative inline-flex overflow-x-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{
                  delay: 3.65,
                  duration: 0.5,
                }}
              >
                high-quality web and mobile
              </motion.span>
            </span>{" "}
            <span className="relative inline-flex overflow-x-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{
                  delay: 3.7,
                  duration: 0.5,
                }}
              >
                applications.
              </motion.span>
            </span>{" "}
          </p>
        </div>
        <div className="relative flex flex-col items-center gap-12 mt-12 lg:items-start lg:flex-row">
          <p className="gap-2 m-0 leading-10 text-lg sm:text-xl md:text-xl lg:text-2xl">
            <span className="relative inline-flex overflow-x-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{
                  delay: 3.75,
                  duration: 0.5,
                }}
              >
                I specialize in backend development,
              </motion.span>
            </span>{" "}
            <span className="relative inline-flex overflow-x-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{
                  delay: 3.8,
                  duration: 0.5,
                }}
              >
                working with Java, the MERN stack,
              </motion.span>
            </span>{" "}
            <span className="relative inline-flex overflow-x-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{
                  delay: 3.85,
                  duration: 0.5,
                }}
              >
                and Next.js. With a deep
              </motion.span>
            </span>{" "}
            <span className="relative inline-flex overflow-x-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{
                  delay: 3.9,
                  duration: 0.5,
                }}
              >
                understanding of Java data
              </motion.span>
            </span>{" "}
            <span className="relative inline-flex overflow-x-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{
                  delay: 3.95,
                  duration: 0.5,
                }}
              >
                structures and Spring Boot,
              </motion.span>
            </span>{" "}
            <span className="relative inline-flex overflow-x-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{
                  delay: 4.0,
                  duration: 0.5,
                }}
              >
                I create robust and scalable
              </motion.span>
            </span>{" "}
            <span className="relative inline-flex overflow-x-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{
                  delay: 4.05,
                  duration: 0.5,
                }}
              >
                solutions.
              </motion.span>
            </span>
          </p>
        </div>
        <div className="relative flex flex-col items-center gap-12 mt-12 lg:items-start lg:flex-row">
          <p className=" m-0 leading-10 text-lg sm:text-xl md:text-xl lg:text-2xl">
            <span className="relative inline-flex overflow-x-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{
                  delay: 4.1,
                  duration: 0.5,
                }}
              >
                My goal is to join an
              </motion.span>
            </span>{" "}
            <span className="relative inline-flex overflow-x-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{
                  delay: 4.15,
                  duration: 0.5,
                }}
              >
                innovative company where I can
              </motion.span>
            </span>{" "}
            <span className="relative inline-flex overflow-x-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{
                  delay: 4.2,
                  duration: 0.5,
                }}
              >
                tackle real-world challenges and
              </motion.span>
            </span>{" "}
            <span className="relative inline-flex overflow-x-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{
                  delay: 4.25,
                  duration: 0.5,
                }}
              >
                deliver user-centric applications.
              </motion.span>
            </span>{" "}
            <span className="relative inline-flex overflow-x-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{
                  delay: 4.3,
                  duration: 0.5,
                }}
              >
                Let's connect and explore how I
              </motion.span>
            </span>{" "}
            <span className="relative inline-flex overflow-x-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{
                  delay: 4.35,
                  duration: 0.5,
                }}
              >
                can contribute to your company's
              </motion.span>
            </span>{" "}
            <span className="relative inline-flex overflow-x-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{
                  delay: 4.4,
                  duration: 0.5,
                }}
              >
                success.
              </motion.span>
            </span>
          </p>
        </div>
      </div>
    </motion.section>
  );
}
