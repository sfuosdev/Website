import { ProjectType } from "../interfaces/project-type";

export const onGoingProjectsList: ProjectType[] = [
  {
    title: "SFU Course Planner for CS",
    description:
      "A full-stack web application to help SFU Computing Science students plan their courses, track degree requirements, check prerequisites, and organize their academic schedules. The project includes account services, a visual course planner, prerequisite checking, degree progress tracking, and course availability.",
    imgURL: "projects/sfu-course-planner.jpg",
    githubURL: "https://github.com/sfuosdev/sfu-cs-course-planner",
  },
  {
    title: "API Token Usage Tracker",
    description:
      "A full-stack web application that tracks API token usage, visualizes usage statistics, and estimates monthly costs for developers. Planned features include token usage tracking, API cost analysis, monthly bill estimation, and a dashboard with charts.",
    imgURL: "projects/api-token-usage-tracker.jpg",
    githubURL: "https://github.com/sfuosdev/API-token-usage-tracker",
  },
  {
    title: "SFU Room Finder",
    description:
      "A full-stack mobile application that provides indoor navigation within the SUB, guiding users from their current location to a desired destination using GPS and indoor maps. The project includes room search, live location, and shortest-path routing.",
    imgURL: "projects/sfu-room-finder.jpg",
  },
  {
    title: "GitHub Bot + CI/CD",
    description:
      "A custom GitHub Action that runs a build, test, and deployment pipeline while using an LLM to summarize pull requests, leave inline review comments, and explain failed builds.",
    imgURL: "projects/github-bot-cicd.jpg",
    githubURL: "https://github.com/sfuosdev/Github-CI-CD-bot",
  },
  {
    title: "Python Code Visualizer",
    description:
      "A tool for understanding how a Python codebase fits together without AI. It generates interactive UML class diagrams, traces method and function dependencies, supports multi-file projects, and provides zoom and filtering tools.",
    imgURL: "projects/python-code-visualizer.jpg",
  },
  {
    title: "Cardiovascular Health Predictor",
    description:
      "A statistical modeling project using scikit-learn to analyze health indicators, train and evaluate prediction models, visualize risk factors, identify influential features, and provide interpretable risk scores.",
    imgURL: "projects/cardiovascular-health-predictor.jpg",
    githubURL: "https://github.com/sfuosdev/Health-predictor-model",
  },
];
