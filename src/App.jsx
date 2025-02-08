import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProposalForm from "./components/ProposalForm";
import ProposalPage from "./components/ProposalPage";
import SuccessPage from "./components/SuccessPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProposalForm />} />
        <Route path="/proposal/:id" element={<ProposalPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;
