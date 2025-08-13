import React from "react";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-100 flex flex-col justify-center px-6 bg-gray-200 dark:bg-gray-900 bg-[url('/images/image3.jpg')] bg-cover bg-center bg-no-repeat"
    >
      
      
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        Hello,
      </h1>
      <h1 className="text-4xl font-bold ">I’m Pheobe Nyawanda</h1>
      <p className="  max-w-2xl">
        I’m a passionate software developer specializing in building web applications
        using modern technologies like React, Node.js, and the MERN Stack.
      </p>
    
    </section>
  );
}
