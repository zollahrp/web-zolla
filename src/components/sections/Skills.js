"use client";
import { FaJava, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPhp,
  SiReact,
  SiNextdotjs,
  SiUnity,
  SiLaravel,
  SiTailwindcss,
  SiFigma,
  SiCanva,
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiAdobephotoshop,
} from "react-icons/si";
import { TbReportSearch } from "react-icons/tb";
import { GiBrain } from "react-icons/gi";
import { MdOutlineMenuBook, MdOutlineCampaign } from "react-icons/md";

const skills = [
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "PHP", icon: <SiPhp /> },
  { name: "Java", icon: <FaJava /> },
  { name: "React JS", icon: <SiReact /> },
  { name: "Next JS", icon: <SiNextdotjs /> },
  { name: "Unity", icon: <SiUnity /> },
  { name: "Laravel", icon: <SiLaravel /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Figma", icon: <SiFigma /> },
  { name: "Canva", icon: <SiCanva /> },
  { name: "After Effect", icon: <SiAdobeaftereffects /> },
  { name: "Premier Pro", icon: <SiAdobepremierepro /> },
  { name: "Photoshop", icon: <SiAdobephotoshop /> },
  { name: "Research", icon: <TbReportSearch /> },
  { name: "Critical Thinking", icon: <GiBrain /> },
  { name: "Scientific Writing", icon: <MdOutlineMenuBook /> },
  { name: "Business Model Canvas", icon: <MdOutlineCampaign /> },
  { name: "Pitching & Presentation", icon: <MdOutlineCampaign /> },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-white py-20">
      <div className="max-w-screen-xl mx-auto px-8 lg:px-20">
        {/* Title */}
        <motion.div
          className="flex items-center gap-2 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <FaTools className="text-[#FD853A]" size={20} />
          <span className="font-semibold text-black">Skills</span>
        </motion.div>

        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <span className="text-[#FD853A]">Keahlian</span>{" "}
          <span className="text-black">yang Saya Miliki</span>
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: i * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="group aspect-square border-2 border-black/20 rounded-2xl text-center flex flex-col items-center justify-center transition-all duration-300 hover:border-[#FD853A] hover:text-[#FD853A] cursor-pointer"
            >
              <div className="text-4xl mb-2 transition-all duration-300 group-hover:scale-110">
                {skill.icon}
              </div>
              <p className="font-medium text-black group-hover:text-[#FD853A] transition-colors duration-300">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
