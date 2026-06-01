import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderSection from "./components/organisms/HeaderSection/HeaderSection";

import RegisterPage from "./pages/RegisterPage";
import StepOnePlansPage from "./pages/StepOnePlansPage";
import StepTwoResumePage from "./pages/StepTwoResumePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderSection />
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/plans" element={<StepOnePlansPage />} />
          <Route path="/resume" element={<StepTwoResumePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
