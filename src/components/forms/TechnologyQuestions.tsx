import React from "react";
import type { FormData } from "../../interfaces/exec-form-data-type";

interface TechnologyQuestionsProps {
  formData: FormData;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const TechnologyQuestions: React.FC<TechnologyQuestionsProps> = ({
  formData,
  handleChange,
}) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">
        Technology Team Questions
      </h2>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="tech-q9"
        >
          What is your Discord user name in our OS Dev Discord server?
          <span className="text-red-500">*</span>
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="tech-q9"
          name="tech_q9"
          value={formData.questions.tech_q9 || ""}
          onChange={handleChange}
          rows={1}
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="tech-q10"
        >
          Please provide a link to your GitHub.{" "}
          <span className="text-red-500">*</span>
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="tech-q10"
          name="tech_q10"
          value={formData.questions.tech_q10 || ""}
          onChange={handleChange}
          type="text"
          placeholder="https://github.com/..."
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="tech-q8"
        >
          Do you have any questions for us? (Optional)
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="tech-q8"
          name="tech_q8"
          value={formData.questions.tech_q8 || ""}
          onChange={handleChange}
          rows={4}
        ></textarea>
      </div>
    </div>
  );
};

export default TechnologyQuestions;
