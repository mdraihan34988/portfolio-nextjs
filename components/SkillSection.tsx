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
  SiTypescript,
  SiExpress,
  SiPhp,
  SiSpringboot,
  SiPostgresql,
  SiDocker,
  SiAmazonaws,
  SiGooglecloud,
  SiRedis,
  SiApachekafka,
  SiMicrosoftsqlserver,
  SiRedux,
  SiSocketdotio,
} from "react-icons/si";
import { FaReact, FaBootstrap, FaNodeJs, FaLaravel, FaJava } from "react-icons/fa";
import * as WindowsAnimation from "../lib/windowsAnimation";

export default function SkillSection({ skills }) {
  function chooseIcon(title) {
    let Icon;
    switch (title) {
      case "python":
        Icon = <SiPython className="w-8 h-8"/>;
        break;
      case "javascript":
      case "js":
        Icon = <SiJavascript className="w-8 h-8"/>;
        break;
      case "typescript":
      case "ts":
        Icon = <SiTypescript className="w-8 h-8"/>;
        break;
      case "html":
      case "html5":
        Icon = <SiHtml5 className="w-8 h-8"/>;
        break;
      case "css":
      case "css3":
        Icon = <SiCss3 className="w-8 h-8"/>;
        break;
      case "next.js":
      case "nextjs":
        Icon = <SiNextdotjs className="w-8 h-8"/>;
        break;
      case "react.js":
      case "reactjs":
      case "react":
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
      case "mssql":
      case "sql server":
      case "microsoft sql server":
        Icon = <SiMicrosoftsqlserver className="w-8 h-8"/>;
        break;
      case "postgresql":
      case "postgres":
        Icon = <SiPostgresql className="w-8 h-8"/>;
        break;
      case "bootstrap":
        Icon = <FaBootstrap className="w-8 h-8"/>;
        break;
      case "node.js":
      case "nodejs":
        Icon = <FaNodeJs className="w-8 h-8"/>;
        break;
      case "express.js":
      case "express":
        Icon = <SiExpress className="w-8 h-8"/>;
        break;
      case "laravel":
        Icon = <FaLaravel className="w-8 h-8"/>;
        break;
      case "php":
        Icon = <SiPhp className="w-8 h-8"/>;
        break;
      case "spring boot":
        Icon = <SiSpringboot className="w-8 h-8"/>;
        break;
      case "java":
        Icon = <FaJava className="w-8 h-8"/>;
        break;
      case "aws":
      case "amazon web services":
        Icon = <SiAmazonaws className="w-8 h-8"/>;
        break;
      case "google cloud":
      case "google cloud run":
      case "gcp":
        Icon = <SiGooglecloud className="w-8 h-8"/>;
        break;
      case "docker":
        Icon = <SiDocker className="w-8 h-8"/>;
        break;
      case "redis":
        Icon = <SiRedis className="w-8 h-8"/>;
        break;
      case "kafka":
      case "apache kafka":
        Icon = <SiApachekafka className="w-8 h-8"/>;
        break;
      case "redux toolkit":
      case "redux":
        Icon = <SiRedux className="w-8 h-8"/>;
        break;
      case "socket.io":
      case "socketio":
        Icon = <SiSocketdotio className="w-8 h-8"/>;
        break;
      default:
        Icon = (
          <span className="flex h-8 w-8 items-center justify-center rounded bg-gray-200 text-sm font-bold text-gray-700 dark:bg-gray-700 dark:text-gray-100">
            {title.charAt(0).toUpperCase()}
          </span>
        );
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
        className="grid my-10 gap-4 grid-cols-2 md:grid-cols-3"
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
