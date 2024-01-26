import { FadeContainer, headingFromLeft, popUp } from "./FramerMotion/FramerMotionVariants";
import { motion } from "framer-motion";
import AnimatedHeading from "./FramerMotion/AnimatedHeading";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiPython,
  SiGit,
  SiMysql,
  SiFirebase,
} from "react-icons/si";
import { FaReact, FaBootstrap, FaNodeJs, FaLaravel } from "react-icons/fa";
import * as WindowsAnimation from "../lib/windowsAnimation";

export default function SkillSection({ skills }) {
  function chooseIcon(title) {
    let Icon;
    switch (title) {
      case "python":
        Icon = <SiPython className="w-8 h-8"/>;
        break;
      case "javascript":
        Icon = <SiJavascript className="w-8 h-8"/>;
        break;
      case "html":
        Icon = <SiHtml5 className="w-8 h-8"/>;
        break;
      case "css":
        Icon = <SiCss3 className="w-8 h-8"/>;
        break;
      case "next.js":
        Icon = <SiNextdotjs className="w-8 h-8"/>;
        break;
      case "react.js":
        Icon = <FaReact className="w-8 h-8"/>;
        break;
      case "tailwind css":
        Icon = <SiTailwindcss className="w-8 h-8"/>;
        break;
      case "firebase":
        Icon = <SiFirebase className="w-8 h-8"/>;
        break;
      case "git":
        Icon = <SiGit className="w-8 h-8"/>;
        break;
      case "mysql":
        Icon = <SiMysql className="w-8 h-8"/>;
        break;
      case "bootstrap":
        Icon = <FaBootstrap className="w-8 h-8"/>;
        break;
      case "node.js":
        Icon = <FaNodeJs className="w-8 h-8"/>;
        break;
      case "laravel":
        Icon = <FaLaravel className="w-8 h-8"/>;
        break;
      default:
        break;
    }
    return Icon;
  }
  
  return (
    <section className="mx-5">
      <AnimatedHeading
        className="w-full font-bold text-3xl text-left my-2 font-inter text-black dark:text-white"
        variants={headingFromLeft}
        infinity=""
      >
        My Top Skills
      </AnimatedHeading>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={FadeContainer}
        viewport={{ once: true }}
        className="grid my-10 gap-4 grid-cols-3"
      >
        {skills.map((skill, index) => {
          const Icon = chooseIcon(skill.name.toLowerCase());
          return (
            <motion.div
              variants={popUp}
              key={index}
              title={skill.name}
              onMouseMove={(e) =>
                WindowsAnimation.showHoverAnimation(e, false)
              }
              onMouseLeave={(e) => WindowsAnimation.removeHoverAnimation(e)}
              className="p-4 flex items-center justify-center sm:justify-start gap-4 bg-gray-50 hover:bg-white dark:bg-darkPrimary hover:dark:bg-darkSecondary border rounded-sm border-gray-300 dark:border-neutral-700 transform origin-center md:origin-top group"
            >
              <div className="relative transition group-hover:scale-110 sm:group-hover:scale-100 select-none pointer-events-none">
                {Icon}
              </div>
              <p className="hidden sm:inline-flex text-sm md:text-base font-semibold select-none pointer-events-none">
                {skill.name}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
