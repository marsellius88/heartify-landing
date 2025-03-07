import Stepper from "./Stepper";

export default function HowItWorks() {
  return (
    <section className="px-20 py-20">
      <div className="container mx-auto">
        <span className="block mb-2 text-xs font-medium tracking-widest text-center uppercase">
          How it works
        </span>
        <h2 className="text-5xl font-bold text-center">
          Simple Steps to Meet Someone Special
        </h2>
        <Stepper />
      </div>
    </section>
  );
}
