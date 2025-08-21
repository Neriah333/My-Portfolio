import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-150 flex flex-col justify-center px-6 bg-gray-200 dark:bg-gray-900 bg-[url('/images/image2.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }} // 👈 re-triggers when scrolling back
        className=" mt-80 text-4xl font-bold text-gray-900 dark:text-white"
      >
        Hello,
      </motion.h1>

      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false }}
        className="text-4xl font-bold text-gray-900 dark:text-white"
      >
        I’m Pheobe Nyawanda
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: false }}
        className="max-w-2xl mt-4 text-gray-700 dark:text-gray-300"
      >
        {/* You can add a short intro here */}
      </motion.p>
    </section>
  );
}
