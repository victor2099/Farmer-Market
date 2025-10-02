// App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home"; // you already have this
import Signup from "./pages/Signup";
import Dashboard from "../src/pages/Farmerdashboard";
import CreateAccountPage from "./pages/CreateAccountPage";

import "./App.css";

// Example extra pages (create About.jsx, NotFound.jsx later)
//function About() {
//  return <h2>About Page</h2>;
//}

function NotFound() {
  return <h2>404 — Page Not Found</h2>;
}

function App() {
  const [isCollasped, setIsCollasped] = useState(false);

  const handleToggle = () => {
    setIsCollasped((prev) => !prev);
  };

  return (
    <Router>
      {/* Navigation */}
      {/*<nav className="p-4 bg-gray-100 flex gap-4">
        <Link to="/">Home</Link>
      </nav>*/}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/createaccount" element={<CreateAccountPage />} />
        <Route
          path="/farmer"
          element={
            <Dashboard collapsed={isCollasped} onToggle={handleToggle} />
          }
        />
        {/* Catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
