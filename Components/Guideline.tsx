import React from "react";

const Guideline = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center py-16 px-6">
      <div className="max-w-6xl w-full space-y-12 flex justify-evenly gap-10">
        {/* Team Registration Section */}
        <div className="bg-gray-800 rounded-xl shadow-lg p-4 text-center md:text-left">
          <h2 className="text-2xl font-bold text-blue-400 mb-6">
            Team Registration and Idea Submission
          </h2>
          <ul className="list-disc list-inside space-y-4 text-base text-gray-300">
            <li>No Registration fee for Idea Submission.</li>
            <li>
              Only the team leader has to register their team using the link provided in the website. The team name should be unique and must not contain the institute name at any form.
            </li>
            <li>
              Team Size is strictly restricted to 4 mandatory members (including team lead) from the same college/university.
            </li>
            <li>
              Each Participant should be a part of a single team only. Teams having the same participant, participating in more than one team will be disqualified.
            </li>
            <li>Entire communication will be with the team leader only.</li>
            <li>The change in team members and team leader will not be entertained.</li>
            <li>Submit the idea only on the relevant given Themes.</li>
            <li>
              The shortlisted teams in Phase III should present the ideas with their full team as per the PPT template, through Google Meet/Zoom to the jury members.
            </li>
            <li>
              Participants should follow the Code of Conduct with respectful and inclusive environment. Any form of plagiarism, unethical, or disruptive behaviours will result in disqualification.
            </li>
          </ul>
        </div>

        {/* Idea Selection Criteria Section */}
        <div className="flex flex-row gap-8">
          <div className="bg-gray-800 rounded-xl shadow-lg p-4 flex-1 w-[500px]">
            <h2 className="text-xl font-bold text-blue-400 mb-6">
              Idea Selection Criteria
            </h2>
            <ul className="list-disc list-inside space-y-4 text-base text-gray-300">
              <li>
                Ideas will be evaluated by the specialized Startup founders, Directors and Industry Experts.
              </li>
              <li>
                Evaluation Criteria includes:
                <ul className="list-disc list-inside ml-6 space-y-2">
                  <li>Novelty of the idea</li>
                  <li>Focus on any SDG Goals and Complexity</li>
                  <li>
                    Feasibility, sustainability, scale of impact, user experience, potential for future work progression and commercialization.
                  </li>
                </ul>
              </li>
              <li>
                The jury members decisions are final and binding for all awards and recognitions.
              </li>
            </ul>
          </div>

          {/* Note Section */}
          <div className="bg-blue-800 rounded-xl shadow-lg p-4 flex-1">
            <h2 className="text-2xl font-bold text-white mb-6">Note</h2>
            <ul className="list-disc list-inside space-y-4 text-base text-gray-200">
              <li>
                If your team is shortlisted for the Grand Finale (scheduled for February 20, 2025), each participant will be required to pay a registration fee of ₹300.
              </li>
              <li>
                This fee covers the cost of food and refreshments during the event. Further details will be provided by the Hackathon Coordination Team.
              </li>
              <li>
                The jury members decisions are final and binding for all awards and recognitions.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guideline;
