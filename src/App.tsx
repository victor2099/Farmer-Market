// App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home"; // you already have this
import Signup from "./pages/Signup";

import CreateAccountPage from "./pages/CreateAccountPage";

import "./App.css";
import FarmBusinessDetails from "./pages/FarmBusinessDetails";
import VerificationDetails from "./pages/VerificationDetails";

// Example extra pages (create About.jsx, NotFound.jsx later)
//function About() {
//  return <h2>About Page</h2>;
//}

function NotFound() {
  return <h2>404 — Page Not Found</h2>;
}

function App() {
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
        <Route path="/businessdetails" element={< FarmBusinessDetails />} />
        <Route path="verifyd" element={ < VerificationDetails /> }/>
        {/* Catch-all */}
        <Route path="*" element={<NotFound />} />
       
      </Routes>
    </Router>
  );
}

export default App;
