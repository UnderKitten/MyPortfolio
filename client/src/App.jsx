import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import ProjectDetail from "./Pages/ProjectDetail";
import Resume from "./Pages/Resume";
import NotFound from "./Pages/NotFound";

import { HashRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
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
    </>
  );
};

export default App;
