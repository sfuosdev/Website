import React from "react";
import { StrategyQuestionsProps } from "../../interfaces/strat-q-props";

const StrategyQuestions: React.FC<StrategyQuestionsProps> = ({
  formData,
  handleChange,
}) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">
        Strategy Team Questions
      </h2>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="strat-q1"
        >
          Can you tell us a little bit about yourself?{" "}
          <span className="text-red-500">*</span>
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="strat-q1"
          name="strat_q1"
          value={formData.questions.strat_q1 || ""}
          onChange={handleChange}
          rows={4}
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="strat-q2"
        >
          What interests you about this position?{" "}
          <span className="text-red-500">*</span>
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="strat-q2"
          name="strat_q2"
          value={formData.questions.strat_q2 || ""}
          onChange={handleChange}
          rows={4}
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="strat-q3"
        >
          What is your level of experience in project management? {"\n"}
          Please describe any past experience if applicable (e.g class projects,
          Co-op). <span className="text-red-500">*</span>
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="strat-q3"
          name="strat_q3"
          value={formData.questions.strat_q3 || ""}
          onChange={handleChange}
          rows={4}
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="strat-q4"
        >
          What is your availability? <span className="text-red-500">*</span>
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="strat-q4"
          name="strat_q4"
          value={formData.questions.strat_q4 || ""}
          onChange={handleChange}
          rows={4}
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="strat-q5"
        >
          Can you be in-person if there is in-person events ongoing?{" "}
          <span className="text-red-500">*</span>
        </label>
        <select
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="strat-q5"
          name="strat_q5"
          value={formData.questions.strat_q5 || ""}
          onChange={handleChange}
          required
        >
          <option value="">-- Select Options --</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="maybe">Maybe</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="strat-q6"
        >
          What is your Discord username in our club server?{" "}
          <span className="text-red-500">*</span>
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="strat-q6"
          rows={1}
          name="strat_q6"
          value={formData.questions.strat_q6 || ""}
          onChange={handleChange}
          required
        ></textarea>
      </div>
    </div>
  );
};

export default StrategyQuestions;
