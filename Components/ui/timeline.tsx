"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight); // Update to use scrollHeight
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0%", "end 20%"], // Adjust for smoother transitions
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans px-4 md:px-10 overflow-x-hidden"
      ref={containerRef}
    >
      {/* Header Section */}
      <div className="max-w-5xl mx-auto py-12 md:py-20 px-4 md:px-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-black dark:text-white">
          Timeline for Blockathon
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base text-center max-w-md mx-auto mb-10">
          Stay updated with the latest events in Blockathon.
        </p>
      </div>

      {/* Timeline Section */}
      <div ref={ref} className="relative max-w-5xl mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center gap-6 py-8 md:py-12"
          >
            {/* Timeline Marker */}
            <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-500 flex items-center justify-center">
              <span className="h-4 w-4 md:h-6 md:w-6 rounded-full bg-white"></span>
            </div>
            {/* Timeline Content */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-base md:text-lg font-bold text-neutral-800 dark:text-neutral-300 mb-2">
                {item.title}
              </h3>
              <div className="text-sm md:text-base text-neutral-600 dark:text-neutral-400">
                {item.content}
              </div>
            </div>
          </div>
        ))}

        {/* Animated Progress Line */}
        <div
          style={{
            height: height,
          }}
          className="absolute left-[28px] md:left-6 top-0 w-[2px] bg-neutral-200 dark:bg-neutral-700 overflow-hidden"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute w-[2px] bg-gradient-to-b from-purple-500 via-blue-500 to-transparent"
          />
        </div>
      </div>
    </div>
  );
};
