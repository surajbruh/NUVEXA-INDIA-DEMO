import { PageContext } from "./contexts/PageContext";
import { Routes, Route, useLocation } from "react-router-dom";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

function App() {
  const { pathname } = useLocation();

  const endpoint = pathname.split("/").filter(Boolean).pop() || "home";
  const pageTitle = endpoint.charAt(0).toUpperCase() + endpoint.slice(1);

  return (
    <>
      <ScrollToTop />
      <PageContext.Provider value={pageTitle}>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </PageContext.Provider>
    </>
  );
}

export default App;
