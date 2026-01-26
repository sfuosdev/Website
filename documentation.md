# Documentation of SFU OS Dev Website

This markdown file is for documentation for our club website

## Router

This file is responsible for routing each components.

```tsx
// App.tsx
function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/events" element={<Events />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/forms/executive" element={<ExecutiveForm />} />
            <Route
              path="/forms/project-proposal"
              element={<ProjectProposalForm />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
```

## Sections

There are 5 sections / page in our club website: About us, Projects, Events, Teams, Resources.

### About us page

About us page is description of our club and button to join our club officially via SFSS go website.

### Project page

Project page is the page that shows what types of projects that we have done so far. There are two types of lists: `pastProjects.ts` and `onGoingProjects.ts` in `src/lists` folder. The list can be updated through by adding items into the list.

ProjectType requires 4 items:

- title: project title
- description: description of the project
- imgURL: URL of project image (can be icon or meeting photos, etc)
- githubURL: URL of the GitHub repository

```ts
//src/lists/onGoingProjects.ts
export const onGoingProjectsList: ProjectType[] = [
  {
    title: "Financial Fast Feed",
    description:
      "Financial Fast Feed aggregates and summarizes news from 9 different financial sources, including Crypto, Economic, and Stock Market updates. Powered by GPT-3.5, it offers quick insights into market trends and financial news, helping users stay informed with concise summaries from diverse perspectives.",
    imgURL: "projects/financial-fast-feed.jpg",
    githubURL: "https://github.com/sfuosdev/financial-fast-feed",
  },
];
```

### Event Page

Event page is the page that we have been hosted previously. Similar to Project page, the events can be updated by `pastProjects.ts` and `upComingEvents.ts` in `src/lists` folder.

EventTypes requires 3 items:

- title: title of the event
- description: description of the event
- imgURL: list of images URL

```ts
export const upcomingEventsList: EventType[] = [
  {
    title: "Fall 2024 Icebreaker Event",
    description:
      "At the beginning of the Fall 2024 semester, the we hosted an amazing icebreaker event to kick off the semester! We introduced the club, our executives, shared our vision, and highlighted exciting projects we'll be working on this term. Our project leads gave insightful presentations, sparking enthusiasm among attendees. It was fantastic to welcome so many passionate students eager to dive into open-source development. The pizza and drinks were a hit, making the evening even more memorable!",
    imgURLs: [
      "events/f24-icebreaker-4.jpg",
      "events/f24-icebreaker-1.jpg",
      "events/f24-icebreaker-2.jpg",
      "events/f24-icebreaker-3.jpg",
      "events/f24-icebreaker-5.jpg",
      "events/f24-icebreaker-6.jpg",
    ],
  },
];
```

### Team page

Teams page is the page that displays of our club executives.

### Resource Page

Resource page is the page for our resources such as our documentation tool, GitHub organization page, and links that directs to our club Discord server.

There are buttons for executive application and project proposal application.

#### Executive application

The general question such as full name, SFU email, etc are required to input. This section can be edit in `ExecutiveForm.tsx` in `src/components` folder.

`ExecutiveForm.tsx` contains the common questions such as asking full name, major, email, etc.

Team-based questions can be found in `src/components/forms` folder.

#### Project Proposal application

- Currently under construction
