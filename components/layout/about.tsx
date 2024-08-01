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
import { aboutMe } from "@/lib/data";
import { useSectionInView } from "@/hooks/useSection";
import { opacity, slideUp } from "@/lib/anim";

export default function About() {
  const phrase = aboutMe.longDesc;
  const description = useRef(null);
  const isInViewDesc = useInView(description);

  const aboutUI = useRef(null);
  const isInViewUI = useInView(aboutUI);

  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-24 mt-16 md:mt-32 lg:mt-32 text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <div ref={description}>
        <div className="relative flex flex-col items-center gap-12 mt-12 lg:items-start lg:flex-row">
          <p className="gap-2 m-0 leading-10 text-lg sm:text-xl md:text-lg lg:text-xl">
            {phrase.split(" ").map((word, index) => {
              return (
                <span
                  className="relative inline-flex overflow-hidden"
                  key={index}
                >
                  <motion.span
                    variants={slideUp}
                    custom={index}
                    animate={isInViewDesc ? "open" : "closed"}
                    key={index}
                    className="mr-1 sm:mb-2"
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </p>
          <motion.p
            variants={opacity}
            className="w-4/5 m-0 font-light sm:text-lg"
            animate={isInViewDesc ? "open" : "closed"}
          >
            {aboutMe.shortDesc}
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
}
