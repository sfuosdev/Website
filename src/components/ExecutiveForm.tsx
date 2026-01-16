import React, { useState } from "react";
import { FormData } from "../interfaces/exec-form-data-type";
import TechnologyQuestions from "./forms/TechnologyQuestions";
import StrategyQuestions from "./forms/StrategyQuestions";
import EventQuestions from "./forms/EventQuestions";

const ExecutiveForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    studentId: "",
    yearOfStudy: "",
    faculty: "",
    major: "",
    coopTerm: "",
    firstChoiceTeam: "",
    questions: {},
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    if (
      name.startsWith("tech_") ||
      name.startsWith("strat_") ||
      name.startsWith("event_")
    ) {
      setFormData((prev) => ({
        ...prev,
        questions: {
          ...prev.questions,
          [name]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isConfirmed = window.confirm(
      "Did you confirm that all your answers are final and ready for submission?"
    );

    if (isConfirmed) {
      console.log(JSON.stringify(formData, null, 2));
      alert("Application submitted! Check console for JSON.");
    }
  };

  return (
    <div className="container mx-auto py-32 px-6 sm:px-12">
      <h1 className="text-4xl font-bold font-club mb-6 text-center text-white">
        Executive Application
      </h1>

      {/* Role Descriptions */}
      <div className="max-w-4xl mx-auto mb-12 text-white">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-bold mb-2 text-blue-400">
              Technology Team
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              Responsible for developing and maintaining the club's website,
              projects, and technical workshops. Ideal for those passionate
              about coding and software development.
            </p>
            <div className="text-sm text-gray-300">
              <p className="font-semibold mb-1">Good to have:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Experience with React, TypeScript, or Python</li>
                <li>Knowledge of Git/GitHub</li>
                <li>Previous project experience</li>
              </ul>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-bold mb-2 text-green-400">
              Strategy Team
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              Focuses on club growth, partnerships, and long-term planning.
              Great for those interested in business development, marketing, and
              leadership.
            </p>
            <div className="text-sm text-gray-300">
              <p className="font-semibold mb-1">Good to have:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Strong communication skills</li>
                <li>Interest in marketing or finance</li>
                <li>Leadership experience</li>
              </ul>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-bold mb-2 text-purple-400">
              Event Team
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              Organizes hackathons, workshops, and social events. Perfect for
              those who love planning, logistics, and creating engaging
              experiences for members.
            </p>
            <div className="text-sm text-gray-300">
              <p className="font-semibold mb-1">Good to have:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Organizational skills</li>
                <li>Creativity</li>
                <li>Experience planning events</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md text-black">
        <form onSubmit={handleSubmit}>
          {/* Personal Information */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">
              Personal Information
            </h2>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="fullName"
              >
                Full Name (Preferred Name is okay){" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                type="text"
                placeholder="e.g John Doe"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                SFU Email <span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="e.g john@sfu.ca"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="studentId"
              >
                Student ID <span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="studentId"
                name="studentId"
                value={formData.studentId}
                onChange={handleChange}
                type="text"
                placeholder="301..."
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="yearOfStudy"
              >
                Year of Study <span className="text-red-500">*</span>
              </label>
              <select
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="yearOfStudy"
                name="yearOfStudy"
                value={formData.yearOfStudy}
                onChange={handleChange}
                required
              >
                <option value="">-- Select Year --</option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5+">5th+</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="faculty"
              >
                Faculty <span className="text-red-500">*</span>
              </label>
              <select
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="faculty"
                name="faculty"
                value={formData.faculty}
                onChange={handleChange}
                required
              >
                <option value="">-- Select Faculty --</option>
                <option value="applied-sciences">
                  Faculty of Applied Sciences
                </option>
                <option value="arts-social-sciences">
                  Faculty of Arts and Social Sciences
                </option>
                <option value="business">Beedie School of Business</option>
                <option value="communication-art-technology">
                  Faculty of Communication, Art and Technology
                </option>
                <option value="education">Faculty of Education</option>
                <option value="environment">Faculty of Environment</option>
                <option value="health-sciences">
                  Faculty of Health Sciences
                </option>
                <option value="science">Faculty of Science</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="major"
              >
                Major / Field of Study <span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="major"
                name="major"
                value={formData.major}
                onChange={handleChange}
                type="text"
                placeholder="e.g Computer Science"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Will you be on Co-op term? <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-col space-y-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="coopTerm"
                  value="yes"
                  checked={formData.coopTerm === "yes"}
                  onChange={handleChange}
                  className="mr-2"
                  required
                />
                <span className="text-gray-700">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="coopTerm"
                  value="no"
                  checked={formData.coopTerm === "no"}
                  onChange={handleChange}
                  className="mr-2"
                  required
                />
                <span className="text-gray-700">No</span>
              </label>
            </div>
          </div>
          <div className="mb-4">
            {" "}
            <p>
              - Below this section, there will be specific questions based on
              the team you select.
            </p>{" "}
            <p>
              - Please note that the answer that you input will not be saved
              until you submit the form.
            </p>
          </div>

          {/* Team Selection */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">
              Team Selection
            </h2>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="team"
              >
                Select a Team <span className="text-red-500">*</span>
              </label>
              <select
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstChoiceTeam"
                name="firstChoiceTeam"
                value={formData.firstChoiceTeam}
                onChange={handleChange}
                required
              >
                <option value="">-- Select Team --</option>
                <option value="technology">Technology Team</option>
                <option value="strategy">Strategy Team</option>
                <option value="event">Event Team</option>
              </select>
            </div>
          </div>

          {/* Conditional Questions */}
          {formData.firstChoiceTeam === "technology" && (
            <TechnologyQuestions
              formData={formData}
              handleChange={handleChange}
            />
          )}
          {formData.firstChoiceTeam === "strategy" && (
            <StrategyQuestions
              formData={formData}
              handleChange={handleChange}
            />
          )}
          {formData.firstChoiceTeam === "event" && (
            <EventQuestions formData={formData} handleChange={handleChange} />
          )}
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline transition duration-300"
              type="submit"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExecutiveForm;
