import { useRef } from "react";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import Membership from "./components/Membership";

function App() {
  const targetRef = useRef();

  return (
    <>
      <Navbar targetRef={targetRef} />
      <main>
        <Hero />
        <div>
          <Features targetRef={targetRef} />
          <Testimonials />
          <HowItWorks />
          <Membership />
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
