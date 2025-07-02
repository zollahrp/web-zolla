"use client";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { FaAward } from "react-icons/fa";
import { motion } from "framer-motion";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Achievement() {
  const [data, setData] = useState({ kompetisi: [], organisasi: [] });

  useEffect(() => {
    const fetchData = async () => {
      const { data: all, error } = await supabase
        .from("achievements")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && all) {
        const grouped = {
          kompetisi: all.filter((d) => d.type === "kompetisi"),
          organisasi: all.filter((d) => d.type === "organisasi"),
        };
        setData(grouped);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="achievement" className="bg-white py-20">
      <div className="max-w-screen-xl mx-auto px-8 lg:px-20">
        {/* Title */}
        <motion.div
          className="flex items-center gap-2 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <FaAward className="text-[#FD853A]" size={20} />
          <span className="font-semibold text-black">Achievement</span>
        </motion.div>

        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <span className="text-[#FD853A]">Pencapaian</span> yang saya peroleh
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Kompetisi */}
          <div className="divide-y-2 divide-black">
            {data.kompetisi.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.15,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative pl-12 border-l-2 border-gray-300"
              >
                <div className="absolute -left-[24px] top-1/2 -translate-y-1/2">
                  <img
                    src={item.logo}
                    alt="Logo"
                    className="w-12 h-12 rounded-full border-2 border-[#263650] object-cover bg-white"
                  />
                </div>

                <div className="py-6">
                  <h3 className="font-bold text-black">{item.title}</h3>
                  <p className="italic text-black/70">{item.event}</p>
                  <p className="text-sm text-black/50 mt-1">{item.date}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Organisasi */}
          <div className="divide-y-2 divide-black">
            {data.organisasi.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.15,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative pr-12 border-r-2 border-gray-300 text-right"
              >
                <div className="absolute -right-[24px] top-1/2 -translate-y-1/2">
                  <img
                    src={item.logo}
                    alt="Logo"
                    className="w-12 h-12 rounded-full border-2 border-[#263650] object-cover bg-white"
                  />
                </div>

                <div className="py-6">
                  <h3 className="font-bold text-black">{item.title}</h3>
                  <p className="italic text-black/70">{item.event}</p>
                  <p className="text-sm text-black/50 mt-1">{item.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
