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
  SiOpenai,
  SiKubernetes,
  SiAngular,
  SiNestjs,
  SiMongodb,
  SiKotlin,
  SiSwift,
  SiTerraform,
  SiGithubactions,
  SiDotnet,
} from "react-icons/si";
import { FaReact, FaBootstrap, FaNodeJs, FaLaravel, FaJava } from "react-icons/fa";
import * as WindowsAnimation from "../lib/windowsAnimation";

export default function SkillSection({ skills, title = "My Top Skills" }) {
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
        Icon = <FaJava className="w-8 h-8 text-[#ED8B00]"/>;
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
      case "angular":
        Icon = <SiAngular className="w-8 h-8 text-[#DD0031]"/>;
        break;
      case "nestjs":
      case "nest.js":
        Icon = <SiNestjs className="w-8 h-8 text-[#E0234E]"/>;
        break;
      case "mongodb":
        Icon = <SiMongodb className="w-8 h-8 text-[#47A248]"/>;
        break;
      case "kotlin":
        Icon = <SiKotlin className="w-8 h-8 text-[#7F52FF]"/>;
        break;
      case "swift":
        Icon = <SiSwift className="w-8 h-8 text-[#FA7343]"/>;
        break;
      case "kubernetes":
      case "k8s":
        Icon = <SiKubernetes className="w-8 h-8 text-[#326CE5]"/>;
        break;
      case "terraform":
        Icon = <SiTerraform className="w-8 h-8 text-[#7B42BC]"/>;
        break;
      case "github actions":
        Icon = <SiGithubactions className="w-8 h-8 text-[#2088FF]"/>;
        break;
      case "asp.net core":
      case "asp.net":
      case ".net":
        Icon = <SiDotnet className="w-8 h-8 text-[#512BD4]"/>;
        break;
      case "claude":
        Icon = (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-8 h-8 fill-[#D97757]">
            <path d="m19.6 66.5 19.7-11 .3-1-.3-.5h-1l-3.3-.2-11.2-.3L14 53l-9.5-.5-2.4-.5L0 49l.2-1.5 2-1.3 2.9.2 6.3.5 9.5.6 6.9.4L38 49.1h1.6l.2-.7-.5-.4-.4-.4L29 41l-10.6-7-5.6-4.1-3-2-1.5-2-.6-4.2 2.7-3 3.7.3.9.2 3.7 2.9 8 6.1L37 36l1.5 1.2.6-.4.1-.3-.7-1.1L33 25l-6-10.4-2.7-4.3-.7-2.6c-.3-1-.4-2-.4-3l3-4.2L28 0l4.2.6L33.8 2l2.6 6 4.1 9.3L47 29.9l2 3.8 1 3.4.3 1h.7v-.5l.5-7.2 1-8.7 1-11.2.3-3.2 1.6-3.8 3-2L61 2.6l2 2.9-.3 1.8-1.1 7.7L59 27.1l-1.5 8.2h.9l1-1.1 4.1-5.4 6.9-8.6 3-3.5L77 13l2.3-1.8h4.3l3.1 4.7-1.4 4.9-4.4 5.6-3.7 4.7-5.3 7.1-3.2 5.7.3.4h.7l12-2.6 6.4-1.1 7.6-1.3 3.5 1.6.4 1.6-1.4 3.4-8.2 2-9.6 2-14.3 3.3-.2.1.2.3 6.4.6 2.8.2h6.8l12.6 1 3.3 2 1.9 2.7-.3 2-5.1 2.6-6.8-1.6-16-3.8-5.4-1.3h-.8v.4l4.6 4.5 8.3 7.5L89 80.1l.5 2.4-1.3 2-1.4-.2-9.2-7-3.6-3-8-6.8h-.5v.7l1.8 2.7 9.8 14.7.5 4.5-.7 1.4-2.6 1-2.7-.6-5.8-8-6-9-4.7-8.2-.5.4-2.9 30.2-1.3 1.5-3 1.2-2.5-2-1.4-3 1.4-6.2 1.6-8 1.3-6.4 1.2-7.9.7-2.6v-.2H49L43 72l-9 12.3-7.2 7.6-1.7.7-3-1.5.3-2.8L24 86l10-12.8 6-7.9 4-4.6-.1-.5h-.3L17.2 77.4l-4.7.6-2-2 .2-3 1-1 8-5.5Z"/>
          </svg>
        );
        break;
      case "codex":
        Icon = <SiOpenai className="w-8 h-8"/>;
        break;
      case "minimax":
        Icon = (
          <img
            src="/assets/minimax-icon.png"
            alt="Minimax"
            className="w-8 h-8 object-contain dark:invert"
          />
        );
        break;
      case "opencode":
        Icon = (
          <img
            src="/assets/opencode-logo.png"
            alt="OpenCode"
            className="w-8 h-8 object-contain dark:invert"
            style={{ imageRendering: "pixelated" }}
          />
        );
        break;
      case "k8sgpt":
        Icon = <SiKubernetes className="w-8 h-8 text-[#326CE5]"/>;
        break;
      case "goose":
        Icon = (
          <img
            src="/assets/goose-logo-dark.png"
            alt="Goose"
            className="w-8 h-8 object-contain dark:invert"
          />
        );
        break;
      case "playwright":
        Icon = (
          <img
            src="/assets/playwright-logo.svg"
            alt="Playwright"
            className="w-8 h-8 object-contain"
          />
        );
        break;
      case "maestro":
        Icon = (
          <img
            src="/assets/maestro-logo.svg"
            alt="Maestro"
            className="w-8 h-8 object-contain dark:invert"
          />
        );
        break;
      case "cursor":
        Icon = (
          <img
            src="/assets/cursor-logo.svg"
            alt="Cursor"
            className="w-8 h-8 object-contain"
          />
        );
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
        {title}
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
