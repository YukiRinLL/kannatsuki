import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StarfieldBackground from "@/components/StarfieldBackground";
import ClickTextEffect from "@/components/effects/ClickTextEffect";
import TitleAnimation from "@/components/effects/TitleAnimation";
import Home from "@/pages/Home";
import History from "@/pages/History";
import Members from "@/pages/Members";
import Tools from "@/pages/Tools";
import { useTheme } from "@/hooks/useTheme";

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const setTheme = useTheme((s) => s.set);

  useEffect(() => {
    const theme = location.pathname === "/history"
      ? "blue"
      : location.pathname === "/tools"
      ? "tools"
      : location.pathname === "/members"
      ? "japan"
      : "red";
    setTheme(theme);
    document.documentElement.setAttribute("data-page", location.pathname === "/history" ? "history" : "decorated");
  }, [location.pathname, setTheme]);

  return (
    <>
      <StarfieldBackground />
      <ClickTextEffect />
      <TitleAnimation />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/members" element={<Members />} />
        <Route path="/tools" element={<Tools />} />
      </Routes>
      <Footer />
    </>
  );
}
