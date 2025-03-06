import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div>
          <Features />
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
