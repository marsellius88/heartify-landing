import { useRef } from "react";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non rem
            totam laborum exercitationem similique tempore porro? Nobis non
            incidunt officia ullam laborum ipsum? Id suscipit pariatur animi,
            perspiciatis in cumque!
          </p>
        </div>
      </main>
    </>
  );
}

export default App;
