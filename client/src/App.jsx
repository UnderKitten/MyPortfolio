import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import { lazy } from "react";

const Projects = lazy(() => import("./Pages/Projects"));
const ProjectDetail = lazy(() => import("./Pages/ProjectDetail"));
const Resume = lazy(() => import("./Pages/Resume"));
const NotFound = lazy(() => import("./Pages/NotFound"));

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppDataProvider } from "./Contexts/AppDataProvider";

const App = () => {
  return (
    <>
      <AppDataProvider>
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Router>
      </AppDataProvider>
    </>
  );
};

export default App;
