import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Layout from "./components/layout/Layout";

import Home from "./pages/home/Home";
import Service from "./pages/services/Service";
import Impact from "./pages/impact/Impact";
import LiveJob from "./pages/livejob/LiveJob";
import AboutUs from "./pages/about-us/AboutUs";
import Contact from "./pages/contact/Contact";

import ComminityResourses from "./pages/comminity-resourses/ComminityResourses";
import BlogDescription from "./pages/comminity-resourses/BlogDescription";

/* scroll top on route change */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="/about-us" element={<AboutUs />} />

          <Route path="/services" element={<Service />} />

          <Route path="/impact" element={<Impact />} />

          <Route path="/live-jobs" element={<LiveJob />} />

          <Route
            path="/communities-resources"
            element={<ComminityResourses />}
          />

          <Route
            path="/communities-resources/:slug"
            element={<BlogDescription />}
          />

          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
