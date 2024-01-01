"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm spirited 5th-semester student at {" "}
        <span className="font-medium">Sunan Gunung Djati State Islamic University in Bandung</span>
        , on the exciting journey of earning my Bachelor's degree in{" "}
        <span className="font-medium">Informatics Engineering</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I love the
        feeling of finally figuring out a solution to a problem. I'm currently learning {" "}
        <span className="font-medium">
          React, Express.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies.<span className="italic">When I'm not coding</span>, I usually{" "}
        <span className="font-medium">learning new things</span> from articles, books, or Youtube videos{" "}
      </p>
    </motion.section>
  );
}
