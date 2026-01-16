import React, { useState } from "react";
import Event from "./Event";
import { upcomingEventsList } from "../lists/upcomingEvents";
import { pastEventsList } from "../lists/pastEvents";

const Events = () => {
  const [activeTab, setActiveTab] = useState("PAST");
  const [isExpanded, setIsExpanded] = useState(false);

  const renderEventsList = () => {
    let eventsList = [];
    let message = "";

    if (activeTab === "UPCOMING") {
      eventsList = upcomingEventsList;
      message =
        eventsList.length === 0 ? "No upcoming events at the moment." : "";
    } else {
      eventsList = pastEventsList;
      message = eventsList.length === 0 ? "No past events available." : "";
    }

    if (eventsList.length === 0 && message) {
      return <p>{message}</p>;
    }

    const displayedEvents = isExpanded ? eventsList : eventsList.slice(0, 3);

    return (
      <>
        {displayedEvents.map((event, index) => (
          <Event
            key={index}
            title={event.title}
            description={event.description}
            imgURLs={event.imgURLs}
          />
        ))}
        {eventsList.length > 4 && (
          <div className="flex justify-center w-full">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="btn btn-primary text-white px-6 py-2 rounded transition duration-300"
            >
              {isExpanded ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </>
    );
  };

  return (
    <div className="mt-[60px] md:mt-[80px]">
      {/* Hero Section */}
      <section
        className="py-32 flex flex-col justify-center items-start bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background/event.png')" }}
      >
        <div className="container mx-auto px-6 sm:px-12">
          <h1 className="text-6xl font-bold font-club mb-6 text-white">
            Events
          </h1>
          <p className="text-xl mb-10 text-white">
            Explore the dynamic events hosted by the SFU Open Source Development
            Club, where innovation meets collaboration. From hands-on workshops
            to inspiring talks, our events empower students, foster skill
            development, and build connections within the global open-source
            community.
          </p>
          <a
            href="/"
            className="btn btn-primary flex flex-row px-4 py-2 rounded w-56 text-white transition duration-300"
          >
            <p className="mr-4">&gt;</p>./HOME
          </a>
        </div>
      </section>
      {/* Projects and Beyond Section */}
      <section
        id="about"
        className="container mx-auto flex flex-col w-full py-16 px-6 sm:px-12"
      >
        <h2 className="section-title text-left font-club">
          We Touch Grass. We Meet People.
        </h2>

        {/* Content Wrapper */}
        <div className="flex flex-col space-y-8 md:flex-row md:space-x-8 md:space-y-0">
          {/* Left Side (text) */}
          <div className="md:w-1/2">
            <p className="text-lg mb-6">
              At the{" "}
              <strong className="text-primary">
                SFU Open Source Development Club
              </strong>
              , we believe in connecting beyond the screen. Through our{" "}
              <strong className="text-primary">engaging events</strong>, we
              create spaces for members to meet, network, and grow both{" "}
              <strong className="text-primary">personally</strong> and{" "}
              <strong className="text-primary">professionally</strong>. Whether
              it&lsquo;s through fun{" "}
              <strong className="text-primary">social gatherings</strong> or
              insightful <strong className="text-primary">guest talks</strong>,
              we foster a sense of{" "}
              <strong className="text-primary">community</strong> that values{" "}
              <strong className="text-primary">authentic connections</strong>{" "}
              and <strong className="text-primary">shared experiences</strong>.
              Our events go beyond learning—they&lsquo;re about building lasting{" "}
              <strong className="text-primary">relationships</strong>,
              celebrating <strong className="text-primary">diversity</strong>,
              and creating a welcoming environment where everyone feels they
              belong.
            </p>
          </div>

          {/* Right Side (button links) */}
          <div className="md:w-1/2 flex flex-col items-start md:items-end space-y-6">
            <a
              href="#projects-section"
              className="flex flex-row px-4 py-2 rounded w-full max-w-[325px] btn btn-primary text-left text-white transition duration-300"
              onClick={() => {
                setActiveTab("UPCOMING");
                setIsExpanded(false);
              }}
            >
              <p className="mr-4">&gt;</p>./UPCOMING_EVENTS
            </a>
            <a
              href="#projects-section"
              className="flex flex-row px-4 py-2 rounded w-full max-w-[325px] btn btn-primary text-left text-white transition duration-300"
              onClick={() => {
                setActiveTab("PAST");
                setIsExpanded(false);
              }}
            >
              <p className="mr-4">&gt;</p>./PAST_EVENTS
            </a>
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      <section
        id="projects-section"
        className="container mx-auto py-12 px-6 sm:px-12"
      >
        <h2 className="section-title text-left font-club">Our Events</h2>
        <div className="flex space-x-4 mb-8">
          <span
            className={`px-4 py-2 btn text-center text-white transition duration-300 cursor-pointer ${
              activeTab === "UPCOMING" ? "bg-[#D55FFF]" : "bg-[#636C9E]"
            }`}
            onClick={() => {
              setActiveTab("UPCOMING");
              setIsExpanded(false);
            }}
          >
            UPCOMING
          </span>
          <span
            className={`px-4 py-2 btn text-center text-white transition duration-300 cursor-pointer ${
              activeTab === "PAST" ? "bg-[#D55FFF]" : "bg-[#636C9E]"
            }`}
            onClick={() => {
              setActiveTab("PAST");
              setIsExpanded(false);
            }}
          >
            PAST
          </span>
        </div>

        <div className="space-y-12">{renderEventsList()}</div>
      </section>

      {/* Join Us CTA Banner Section */}
      {/* <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold font-club mb-6 text-white">
            Start Your Journey With Us
          </h2>
          <div className="flex justify-center">
            <a
              href="/projects"
              className="flex flex-row px-4 py-2 rounded w-full max-w-[255px] btn btn-primary text-left text-white transition duration-300"
            >
              <p className="mr-4">&gt;</p>./START_UR_JOURNEY
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Events;
