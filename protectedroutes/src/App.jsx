import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobSearch from "./pages/JobSearch";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JobSearch />} />
      </Routes>
    </Router>
  );
};

export default App;
