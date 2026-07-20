import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "sonner";
import { Navbar } from "./components/layout/Navbar.jsx";
import { Footer } from "./components/layout/Footer.jsx";
import { PageTransition } from "./components/ui/PageTransition.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Donate from "./pages/Donate.jsx";
import Request from "./pages/Request.jsx";
import FindDonors from "./pages/FindDonors.jsx";
import Eligibility from "./pages/Eligibility.jsx";
import FAQ from "./pages/FAQ.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname]);
  return null;
}

export default function App() {
  const location = useLocation();
  const wrap = (Comp) => (
    <PageTransition>
      <Comp />
    </PageTransition>
  );
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <div className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={wrap(Home)} />
            <Route path="/about" element={wrap(About)} />
            <Route path="/donate" element={wrap(Donate)} />
            <Route path="/request" element={wrap(Request)} />
            <Route path="/find-donors" element={wrap(FindDonors)} />
            <Route path="/eligibility" element={wrap(Eligibility)} />
            <Route path="/faq" element={wrap(FAQ)} />
            <Route path="/contact" element={wrap(Contact)} />
            <Route path="*" element={wrap(NotFound)} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
      <Toaster position="top-center" richColors closeButton theme="light" />
    </div>
  );
}
