import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StarfieldBackground from "@/components/StarfieldBackground";
import ClickTextEffect from "@/components/effects/ClickTextEffect";
import TitleAnimation from "@/components/effects/TitleAnimation";
import Home from "@/pages/Home";
import History from "@/pages/History";
import Members from "@/pages/Members";
import { useTheme } from "@/hooks/useTheme";

export default function App() {
  const theme = useTheme((s) => s.theme);

  // 初回マウント時に data-theme を確実に適用
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <Router>
      <StarfieldBackground />
      <ClickTextEffect />
      <TitleAnimation />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/members" element={<Members />} />
      </Routes>
      <Footer />
    </Router>
  );
}
