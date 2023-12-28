"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className=" text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            Hello, I&apos;m {""}
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Moe Wai",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web developer",
                1000,
                // "We produce food for Guinea Pigs",
                // 1000,
                // "We produce food for Chinchillas",
                // 1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          {/* <p className="text-[#ADB7BE] text-base sm:text-lg  mb-6 lg:text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
            nihil expedita voluptas ea vel dolores?
          </p> */}
          <div>
            <button className=" px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black">
              Hire me
            </button>
            <Link
              href="https://drive.google.com/file/d/1J-yorGgpx9LNN_sQ2g50_Ut7cQX0s_mG/view?usp=sharing"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] relative lg:w-[400px] lg:h-[400px]">
            <Image
              src="/memoji.png"
              alt="hero image"
              width={300}
              height={300}
              className="absolute tansform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
