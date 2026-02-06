import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Events from "./components/Events";
import Teams from "./components/Teams";
import Footer from "./components/Footer";
import Resources from "./components/Resources";
import ExecutiveForm from "./components/ExecutiveForm";
import ProjectProposalForm from "./components/ProjectProposalForm";
import NotFound from "./components/NotFound";

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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
