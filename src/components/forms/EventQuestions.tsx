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
          htmlFor="event-q1"
        >
          Can you tell us a little bit about yourself?{" "}
          <span className="text-red-500">*</span>
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="event-q1"
          name="event_q1"
          value={formData.questions.event_q1 || ""}
          onChange={handleChange}
          rows={4}
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="event-q2"
        >
          What makes you the best fit for this position?{" "}
          <span className="text-red-500">*</span>
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="event-q2"
          name="event_q2"
          value={formData.questions.event_q2 || ""}
          onChange={handleChange}
          rows={4}
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="event-q3"
        >
          What do you want to achieve or learn from this role?{" "}
          <span className="text-red-500">*</span>
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="event-q3"
          name="event_q3"
          value={formData.questions.event_q3 || ""}
          onChange={handleChange}
          rows={4}
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="event-q4"
        >
          Please share links to your portfolio or LinkedIn?{" "}
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
          htmlFor="event-q5"
        >
          What is your process in planning events? What would be your approach
          to engage with participants before, during, and after the event?{" "}
          <span className="text-red-500">*</span>
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="event-q5"
          name="event_q5"
          value={formData.questions.event_q5 || ""}
          onChange={handleChange}
          rows={4}
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="event-q6"
        >
          How do you handle conflicts or issues that arise during the events?{" "}
          {"\n"}What steps do you take to ensure a positive and inclusive
          atmosphere for all participants?{" "}
          <span className="text-red-500">*</span>
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="event-q6"
          name="event_q6"
          value={formData.questions.event_q6 || ""}
          onChange={handleChange}
          rows={4}
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="event-q7"
        >
          How do you tailor your content to different social media platforms
          (e.g Instagram, LinkedIn) to maximize engagement?{" "}
          <span className="text-red-500">*</span>
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="event-q7"
          name="event_q7"
          value={formData.questions.event_q7 || ""}
          onChange={handleChange}
          rows={4}
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="event-q8"
        >
          What kind of events would you like to organize for the club?{" "}
          <span className="text-red-500">*</span>
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="event-q8"
          name="event_q8"
          value={formData.questions.event_q8 || ""}
          onChange={handleChange}
          rows={4}
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="event-q9"
        >
          What is your availability? <span className="text-red-500">*</span>
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="event-q9"
          name="event_q9"
          value={formData.questions.event_q9 || ""}
          onChange={handleChange}
          rows={1}
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="event-q10"
        >
          Please tell us your Discord username in our club server?{" "}
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
    </div>
  );
};

export default EventQuestions;
