// import Image from "next/image";
import React from "react";
import { Timeline } from "@/Components/ui/timeline";

function TimelineDemo() {
  const data = [
    {
      title: "THIRAN 2025",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xl font-normal mb-8">
            Blockathon 2025 is a premier 48-hour hackathon where tech enthusiasts
            collaborate, innovate, and bring groundbreaking ideas to life. Dive
            into an intense coding journey and build the future of technology!
          </p>
        </div>
      ),
    },
    {
      title: "Registration",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xl font-normal mb-8">
            Registration for Blockathon 2025 is now live! Secure your spot in
            this exhilarating 48-hour event and showcase your skills on a global stage.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-lg font-normal mb-8">
            Registration Deadline: 31st January 2025
          </p>
        </div>
      ),
    },
    {
      title: "Hackathon Days",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-2xl font-normal mb-8">
            Mark your calendars! Blockathon kicks off on:
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-lg font-bold mb-2">
            Start: 20th February 2025, 9:00 AM
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-lg font-bold mb-8">
            End: 22nd February 2025, 9:00 AM
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-lg font-normal">
            Participate in a high-energy environment, collaborate with industry
            experts, and bring your innovative solutions to the forefront!
          </p>
        </div>
      ),
    },
    {
      title: "Awards & Recognition",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-lg font-normal mb-4">
            Stand out from the crowd and win exciting prizes and industry recognition!
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg">
              🏆 Total Prize Pool: ₹45,000
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg">
              🎓 Internship opportunities with top companies
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg">
              🌟 Certificates for all participants
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg">
              🚀 Career-building opportunities with industry leaders
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

export default TimelineDemo;
