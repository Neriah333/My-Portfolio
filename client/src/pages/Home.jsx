import React from "react";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gray-50 dark:bg-gray-900"
    >
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        Hello, I’m <span className="text-blue-500">Pheobe Nyawanda</span>
      </h1>
      <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
        I’m a passionate software developer specializing in building web applications
        using modern technologies like React, Node.js, and the MERN Stack.
      </p>
    
    </section>
  );
}
