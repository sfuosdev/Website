import React from "react";

interface TechnologyQuestionsProps {
  formData: any;
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
          htmlFor="tech-q1"
        >
          Can you tell us a little bit about yourself?{" "}
          <span className="text-red-500">*</span>
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="tech-q1"
          name="tech_q1"
          value={formData.questions.tech_q1 || ""}
          onChange={handleChange}
          rows={4}
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="tech-q2"
        >
          What interests you about this position?{" "}
          <span className="text-red-500">*</span>
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="tech-q2"
          name="tech_q2"
          value={formData.questions.tech_q2 || ""}
          onChange={handleChange}
          rows={4}
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="tech-q3"
        >
          What programming languages and frameworks have you worked with
          previously? <span className="text-red-500">*</span>
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="tech-q3"
          name="tech_q3"
          value={formData.questions.tech_q3 || ""}
          onChange={handleChange}
          rows={4}
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="tech-q4"
        >
          What is your experience with version control systems such as Git and
          GitHub / GitLab? {"\n"}
          Can you provide examples of how you collaborated with others?{" "}
          <span className="text-red-500">*</span>
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="tech-q4"
          name="tech_q4"
          value={formData.questions.tech_q4 || ""}
          onChange={handleChange}
          rows={4}
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="tech-q5"
        >
          How are you familar with cloud computing tools and platforms such as
          AWS, Supabase, and Firebase? <span className="text-red-500">*</span>
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="tech-q5"
          name="tech_q5"
          value={formData.questions.tech_q5 || ""}
          onChange={handleChange}
          rows={4}
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="tech-q6"
        >
          What do you want to achieve or learn from this role?
          <span className="text-red-500">*</span>
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="tech-q6"
          name="tech_q6"
          value={formData.questions.tech_q6 || ""}
          onChange={handleChange}
          rows={4}
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="tech-q7"
        >
          What is your availability for fall semester?
          <span className="text-red-500">*</span>
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="tech-q7"
          name="tech_q7"
          value={formData.questions.tech_q7 || ""}
          onChange={handleChange}
          rows={4}
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="tech-q8"
        >
          Is there anything else you would like us to know?
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
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="tech-q9"
        >
          What is your Discord user name in our club server
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
          Please provide a link to your GitHub or Portfolio.{" "}
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
    </div>
  );
};

export default TechnologyQuestions;
