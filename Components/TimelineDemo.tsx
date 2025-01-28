import React from "react";
import { Timeline } from "@/Components/ui/timeline";

function TimelineDemo() {
  const data = [
    {
      title: "Phase 1: Idea Submission",
      content: (
        <div>
          <ul className="list-inside list-disc space-y-2 text-neutral-700 dark:text-neutral-300">
            <li>Submit the Idea through PPT in the Google form</li>
            <li>Deadline (Online): February 02, 2025.</li>
            <li>
              Results Announcement: February 05, 2025 (via email to the top 50
              teams).
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Phase 2: Prototype Presentation",
      content: (
        <div>
          <ul className="list-inside list-disc space-y-2 text-neutral-700 dark:text-neutral-300">
            <li>Date (Online): February 08, 2025.</li>
            <li>
              Shortlisted teams must present their idea/prototype with their
              entire team using via Google Meet to the jury members.
            </li>
            <li>
              Participants are required to adhere to a Code of Conduct and
              maintain a respectful and inclusive environment. Any form of
              plagiarism, unethical, or disruptive behavior will result in
              immediate disqualification.
            </li>
            <li>
              Participants retain full ownership of the intellectual property
              (IP) rights to their projects. However, organizers may request
              access to project details or code for evaluation, validation, or
              showcasing purposes.
            </li>
          </ul>
          <p>Results Announcement: February 12, 2025 (via email to the top 25 teams).</p>
        </div>
      ),
    },
    {
      title: "Phase III: Final Blockathon",
      content: (
        <div>
          <p>Date (Offline-Top 25 Teams): February 20, 2025,</p>
          <ul className="list-inside list-disc space-y-2 text-neutral-700 dark:text-neutral-300">
            <li>Prototype Development.</li>
            <li>Presentation and Demo.</li>
            <li>Prizes and awards will be distributed to the winning teams based on the judging criteria.</li>
          </ul>
          <p>Additional Guidelines for Phase III</p>
          <ul className="list-inside list-disc space-y-2 text-neutral-700 dark:text-neutral-300">
            <li>
              In case of disputes or concerns, the decisions made by the organizers and judging panel are final. Disagreements or issues will be resolved through an arbitration process defined by the organizers.
            </li>
            <li>
              Organizers reserve the right to make changes to the blockathon rules, format, or prizes during the event based on recommendations from the jury. Any modifications will be clearly and promptly communicated to participants.
            </li>
            <li>
              Participants may be required to provide consent for their photographs, videos, or project details to be used by the organizers for promotional or media purposes.
            </li>
          </ul>
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
    <section id="timeline" className="w-full">
      <Timeline data={data} />
    </section>
  );
}

export default TimelineDemo;
