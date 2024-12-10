import React, { useState } from 'react'
import Event from './Event';
import { EventType } from '../interfaces/event-type';

const upcomingEventsList: EventType[] = [
];

const pastEventsList: EventType[] = [
  {
    title: "Fall 2024 Icebreaker Event",
    description: "At the beginning of the Fall 2024 semester, the we hosted an amazing icebreaker event to kick off the semester! We introduced the club, our executives, shared our vision, and highlighted exciting projects we'll be working on this term. Our project leads gave insightful presentations, sparking enthusiasm among attendees. It was fantastic to welcome so many passionate students eager to dive into open-source development. The pizza and drinks were a hit, making the evening even more memorable!",
    imgURLs: [
      "events/f24-icebreaker-1.jpg",
      "events/f24-icebreaker-2.jpg",
      "events/f24-icebreaker-3.jpg",
      "events/f24-icebreaker-4.jpg",
      "events/f24-icebreaker-5.jpg",
      "events/f24-icebreaker-6.jpg",
    ],
  },
  {
    title: "March Speaker Series",
    description: "The March Speaker Series was a fantastic success! We were thrilled to host guest speaker David Hobbs, who shared invaluable industry insights and actionable career tips with our members. His engaging session left attendees inspired and motivated as they plan their career journeys. A heartfelt thank you to everyone who joined us and made this event so special!",
    imgURLs: [
      "events/mar-speaker-series-1.jpg",
    ],
  },
  {
    title: "February Speaker Series",
    description: "The February Speaker Series was an incredible experience! We were honored to host Charles Tong, who shared valuable insights into the intersection of Tech and Business. His engaging talk provided our members with fresh perspectives and practical knowledge to apply in their journeys. A big thank you to everyone who attended and contributed thoughtful questions, making the event even more impactful. The energy and enthusiasm of our members makes these events so special!",
    imgURLs: [
      "events/feb-speaker-series-1.jpg",
      "events/feb-speaker-series-2.jpg",
      "events/feb-speaker-series-3.jpg"
    ],
  }
];

const Events = () => {
  const [activeTab, setActiveTab] = useState('PAST');

  const renderEventsList = () => {
    let eventsList = [];
    let message = '';

    if (activeTab === 'UPCOMING') {
      eventsList = upcomingEventsList;
      message = eventsList.length === 0 ? 'No upcoming events at the moment.' : '';
    } else {
      eventsList = pastEventsList;
      message = eventsList.length === 0 ? 'No past events available.' : '';
    }

    if (eventsList.length === 0 && message) {
      return <p>{message}</p>;
    }

    return eventsList.map((event, index) => (
      <Event
        key={index}
        title={event.title}
        description={event.description}
        imgURLs={event.imgURLs}
      />
    ));
  };

  return (
    <div className="mt-[60px] md:mt-[80px]">
      {/* Hero Section */}
      <section className="bg-gradient-2 py-32 flex flex-col justify-center items-start">
        <div className="container mx-auto px-6 sm:px-12">
          <h1 className="text-6xl font-bold font-club mb-6 text-white">Events</h1>
          <p className="text-xl mb-10 text-white">
            Explore the dynamic events hosted by the SFU Open Source Development Club, where innovation meets collaboration. From hands-on workshops to inspiring talks, our events empower students, foster skill development, and build connections within the global open-source community.
          </p>
          <a href="/" className="btn btn-primary flex flex-row px-4 py-2 rounded w-56 text-white transition duration-300">
            <p className="mr-4">&gt;</p>./HOME
          </a>
        </div>
      </section>

      {/* Projects and Beyond Section */}
      <section id="about" className="container mx-auto flex flex-col w-full py-16 px-6 sm:px-12">
        <h2 className="section-title text-left font-club">We Touch Grass. We Meet People.</h2>

        {/* Content Wrapper */}
        <div className="flex flex-col space-y-8 md:flex-row md:space-x-8 md:space-y-0">
          {/* Left Side (text) */}
          <div className="md:w-1/2">
            <p className="text-lg mb-6">
              At the <strong className="text-primary">SFU Open Source Development Club</strong>, we believe in connecting beyond the screen. Through our <strong className="text-primary">engaging events</strong>, we create spaces for members to meet, network, and grow both <strong className="text-primary">personally</strong> and <strong className="text-primary">professionally</strong>. Whether it&lsquo;s through fun <strong className="text-primary">social gatherings</strong> or insightful <strong className="text-primary">guest talks</strong>, we foster a sense of <strong className="text-primary">community</strong> that values <strong className="text-primary">authentic connections</strong> and <strong className="text-primary">shared experiences</strong>. Our events go beyond learning—they&lsquo;re about building lasting <strong className="text-primary">relationships</strong>, celebrating <strong className="text-primary">diversity</strong>, and creating a welcoming environment where everyone feels they belong.
            </p>
          </div>

          {/* Right Side (button links) */}
          <div className="md:w-1/2 flex flex-col items-start md:items-end space-y-6">
            <a href="#projects-section" className="flex flex-row px-4 py-2 rounded w-full max-w-[325px] btn btn-primary text-left text-white transition duration-300" onClick={() => setActiveTab('UPCOMING')}>
              <p className="mr-4">&gt;</p>./UPCOMING_EVENTS
            </a>
            <a href="#projects-section" className="flex flex-row px-4 py-2 rounded w-full max-w-[325px] btn btn-primary text-left text-white transition duration-300" onClick={() => setActiveTab('PAST')}>
              <p className="mr-4">&gt;</p>./PAST_EVENTS
            </a>
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      <section id="projects-section" className="container mx-auto py-12 px-6 sm:px-12">
        <h2 className="section-title text-left font-club">Our Events</h2>
        <div className="flex space-x-4 mb-8">
          <span className={`px-4 py-2 btn text-center text-white transition duration-300 cursor-pointer ${activeTab === 'UPCOMING' ? 'bg-[#D55FFF]' : 'bg-[#636C9E]'}`} onClick={() => setActiveTab('UPCOMING')}>UPCOMING</span>
          <span className={`px-4 py-2 btn text-center text-white transition duration-300 cursor-pointer ${activeTab === 'PAST' ? 'bg-[#D55FFF]' : 'bg-[#636C9E]'}`} onClick={() => setActiveTab('PAST')}>PAST</span>
        </div>

        <div className="space-y-12">
          {renderEventsList()}
        </div>

      </section>

      {/* Join Us CTA Banner Section */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold font-club mb-6 text-white">Start Your Journey With Us</h2>
          <div className="flex justify-center">
            <a href="/projects" className="flex flex-row px-4 py-2 rounded w-full max-w-[255px] btn btn-primary text-left text-white transition duration-300">
              <p className="mr-4">&gt;</p>./START_UR_JOURNEY
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Events