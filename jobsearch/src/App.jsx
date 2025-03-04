import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { JobProvider } from "./context/JobProvider"
import JobSearch from "./pages/JobSearch"

const App = () => (
  <Router>
    <JobProvider>
      <Routes>
        <Route path="/" element={<JobSearch />} />
      </Routes>
    </JobProvider>
  </Router>
);

export default App;