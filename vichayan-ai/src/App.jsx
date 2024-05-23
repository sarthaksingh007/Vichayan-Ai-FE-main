import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import SecondApp from "./pages/SecondApp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<SecondApp />} />
      </Routes>
    </Router>
  );
}

export default App;
