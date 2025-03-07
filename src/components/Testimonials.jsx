import TestimonialItem from "./TestimonialItem";

export default function Testimonials() {
  return (
    <section className="px-20 py-20 bg-red-100">
      <div className="grid grid-cols-3 gap-4 ">
        <TestimonialItem
          testimonial={{
            name: "Jessica & Mark",
            body: "I never believed in online dating until I found this app. After just a few weeks of swiping, I matched with someone who completely changed my life. We connected instantly, and now we’re in a happy relationship. Thank you for making this possible!",
          }}
        />
        <TestimonialItem
          testimonial={{
            name: "Ryan",
            body: "I was skeptical at first, but this app’s smart matching system helped me find someone who truly shares my interests. We started with late-night chats, then video calls, and now we’re planning our first trip together. It’s amazing how love can begin with just a swipe!",
          }}
        />
        <TestimonialItem
          testimonial={{
            name: "Samantha",
            body: "Safety was my biggest concern when it came to online dating, but this app made me feel secure. The verified profiles, privacy controls, and friendly community allowed me to meet genuine people. I met my boyfriend here, and I couldn’t be happier!",
          }}
        />
      </div>
    </section>
  );
}
