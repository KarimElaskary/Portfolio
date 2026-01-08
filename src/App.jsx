import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./components/Header";
import AllProjects from "./AllProjects";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-projects" element={<AllProjects />} />
      </Routes>
    </>
  );
}

export default App;
