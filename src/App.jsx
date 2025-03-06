import { useRef } from "react";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

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
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
