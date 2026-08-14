import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Landing from "./pages/Landing";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import LearningSession from "./pages/LearningSession";
import Progress from "./pages/Progress";
import TextbookScannerPage from "./pages/TextbookScanner";
import Profile from "./pages/Profile";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-surface-base">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/learning" element={<LearningSession />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/scanner" element={<TextbookScannerPage />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;