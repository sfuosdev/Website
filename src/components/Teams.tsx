import React from "react";
import { Link } from "react-router-dom";
import { getBasePath } from "../utils/basePath";

type Executive = {
  name: string;
  role: string;
  team: string;
  description: string;
  photo: string;
  photoPosition?: string;
  email: string;
  phone: string;
  linkedin?: string;
};

const executives: Executive[] = [
  {
    name: "Bedro Park",
    role: "Co-President",
    team: "Presidents",
    description:
      "Bedro helps guide the club's vision and build innovative open-source projects for the SFU community.",
    photo: "bedro-park.jpg",
    email: "bpa51@sfu.ca",
    phone: "236-512-4485",
  },
  {
    name: "Yoonsang You",
    role: "Co-President",
    team: "Presidents",
    description:
      "Yoonsang helps foster collaboration and innovation across the SFU developer community.",
    photo: "yoonsang-you.jpg",
    email: "yya270@sfu.ca",
    phone: "778-899-2628",
    linkedin: "https://www.linkedin.com/in/yoonyou12/",
  },
  {
    name: "Hyunsoo Cho",
    role: "Technology Coordinator",
    team: "Technology Team",
    description:
      "Hyunsoo leads the club's technical direction and supports members as they build high-quality open-source projects.",
    photo: "mehrab-uddin.jpg",
    photoPosition: "center 30%",
    email: "hsc32@sfu.ca",
    phone: "778-862-7857",
  },
  {
    name: "Mehrab Uddin",
    role: "Technology Coordinator",
    team: "Technology Team",
    description:
      "Mehrab coordinates technology initiatives and helps project teams turn ideas into working software.",
    photo: "hyunsoo-cho.jpg",
    photoPosition: "center 30%",
    email: "mua13@sfu.ca",
    phone: "236-688-5061",
  },
  {
    name: "Monir Fathalla",
    role: "Strategy Lead",
    team: "Strategy Team",
    description:
      "Monir develops strategic initiatives that support the club's growth and long-term impact.",
    photo: "monir-fathalla.jpg",
    email: "mfa95@sfu.ca",
    phone: "604-367-4947",
  },
  {
    name: "Elisha Kang",
    role: "Director of Event / Communication",
    team: "Events & Marketing Team",
    description:
      "Elisha leads events and marketing initiatives that bring the SFU open-source community together.",
    photo: "elisha-kang.jpg",
    email: "eck6@sfu.ca",
    phone: "778-522-2614",
  },
];

const teamOrder = [
  "Presidents",
  "Technology Team",
  "Strategy Team",
  "Events & Marketing Team",
];

const Teams = () => {
  const basePath = getBasePath();

  return (
    <div className="mt-[60px] md:mt-[80px]">
      <section
        className="page-hero"
        style={{ backgroundImage: "url('/background/osimage.png')" }}
      >
        <div className="container mx-auto px-6 sm:px-12">
          <h1 className="mb-6 text-6xl font-bold font-club text-white">
            Meet Our Executive Team
          </h1>
          <p className="mb-10 text-xl text-white">
            Get to know the passionate leaders driving innovation and
            collaboration at SFU Open Source Development Club.
          </p>
          <Link
            to="/"
            className="btn btn-primary flex w-56 flex-row rounded px-4 py-2 text-white transition duration-300"
          >
            <span className="mr-4">&gt;</span>./HOME
          </Link>
        </div>
      </section>

      <section className="container mx-auto flex w-full flex-col px-6 py-16 sm:px-12">
        <h2 className="section-title text-center font-club sm:text-left">
          Executive Profiles
        </h2>

        {teamOrder.map((team) => (
          <section key={team} className="mb-10">
            <h3 className="mb-8 text-center text-3xl font-bold font-club text-white sm:text-left">
              {team}
            </h3>
            <div className="flex flex-wrap justify-center gap-8 sm:justify-start">
              {executives
                .filter((executive) => executive.team === team)
                .map((executive) => (
                  <article
                    key={executive.name}
                    className="flex w-[250px] flex-col text-center text-primary-light sm:items-start sm:text-left"
                  >
                    {executive.linkedin ? (
                      <a
                        href={executive.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View ${executive.name}'s LinkedIn profile`}
                      >
                        <img
                          className="mb-4 h-[250px] w-full max-w-[250px] rounded-lg object-cover"
                          style={{ objectPosition: executive.photoPosition }}
                          src={`${basePath}/execs/${executive.photo}`}
                          alt={executive.name}
                        />
                      </a>
                    ) : (
                      <img
                        className="mb-4 h-[250px] w-full max-w-[250px] rounded-lg object-cover"
                        style={{ objectPosition: executive.photoPosition }}
                        src={`${basePath}/execs/${executive.photo}`}
                        alt={executive.name}
                      />
                    )}
                    <h4 className="mb-1 text-xl font-semibold text-white">
                      {executive.name}
                    </h4>
                    <p className="mb-2 text-primary-light">{executive.role}</p>
                    <p className="text-sm text-gray-300">
                      {executive.description}
                    </p>
                    <div className="mt-4 w-full border-t border-white/20 pt-3 text-sm text-gray-300">
                      <p>
                        <span className="font-semibold text-white">Email:</span>{" "}
                        <a
                          href={`mailto:${executive.email}`}
                          className="hover:text-white"
                        >
                          {executive.email}
                        </a>
                      </p>
                      <p className="mt-1">
                        <span className="font-semibold text-white">Phone:</span>{" "}
                        <a
                          href={`tel:${executive.phone}`}
                          className="hover:text-white"
                        >
                          {executive.phone}
                        </a>
                      </p>
                    </div>
                  </article>
                ))}
            </div>
          </section>
        ))}
      </section>
    </div>
  );
};

export default Teams;
