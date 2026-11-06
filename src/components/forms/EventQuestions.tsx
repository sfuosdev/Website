import React from "react";
import { EventQuestionsProps } from "../../interfaces/event-q-props";

const EventQuestions: React.FC<EventQuestionsProps> = ({
  formData,
  handleChange,
}) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">
        Event Team Questions
      </h2>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="event-q4"
        >
          Please share links to your portfolio or LinkedIn.{" "}
          <span className="text-red-500">*</span>
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="event-q4"
          name="event_q4"
          value={formData.questions.event_q4 || ""}
          onChange={handleChange}
          rows={1}
          required
          placeholder="https://..."
        ></textarea>
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="event-q10"
        >
          Please tell us your Discord username in our club server.{" "}
          <span className="text-red-500">*</span>
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="event-q10"
          name="event_q10"
          value={formData.questions.event_q10 || ""}
          onChange={handleChange}
          rows={1}
          required
        ></textarea>
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="event-q11"
        >
          Do you have any questions for us? (Optional)
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="event-q11"
          name="event_q11"
          value={formData.questions.event_q11 || ""}
          onChange={handleChange}
          rows={4}
        ></textarea>
      </div>

    </div>
  );
};

export default EventQuestions;
