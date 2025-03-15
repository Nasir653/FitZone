import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./SharedComponants/Navbar";
import Hero from "./componants/Hero";
import Services from "./componants/Services";
import About from "./componants/About";
import Contact from "./componants/Contact";
import Pricing from "./componants/Pricing";
import Footer from "./SharedComponants/Footer";


function App() {
  return (
    <>      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Pricing" element={<Pricing />} />
      </Routes>

      <Footer />
    </>

  );
}

export default App;
