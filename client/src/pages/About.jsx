import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-80 flex flex-col justify-center items-center bg-white dark:bg-gray-900 px-6 py-12"
    >
      <div className="max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          About Me
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          I’m deeply curious about technology and passionate about discovering
          different Enterprise Resource Planning (ERP) systems and how they
          transform business operations. I enjoy exploring the inner workings of
          various digital tools, understanding their potential, and finding ways
          they can be applied in real-world scenarios.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Beyond ERP systems, I love keeping up with the latest tech trends and
          experimenting with new platforms and tools. For me, learning is a
          continuous journey and technology is the perfect playground.
        </p>
      </div>
    </section>
  );
}
