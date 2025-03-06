import TestimonialItem from "./TestimonialItem";

export default function Testimonials() {
  return (
    <section className="grid grid-cols-3 gap-4 px-20 py-20 bg-red-100">
      <TestimonialItem
        testimonial={{
          name: "Valencia",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aperiam cupiditate iusto molestias reprehenderit dolorum eum commodi magni, possimus veniam quod dolores. Accusantium adipisci quidem sunt molestiae explicabo nam amet!",
        }}
      />
      <TestimonialItem
        testimonial={{
          name: "David & Ana",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aperiam cupiditate iusto molestias reprehenderit dolorum eum commodi magni, possimus veniam quod dolores. Accusantium adipisci quidem sunt molestiae explicabo nam amet!",
        }}
      />
      <TestimonialItem
        testimonial={{
          name: "Eva",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aperiam cupiditate iusto molestias reprehenderit dolorum eum commodi magni, possimus veniam quod dolores. Accusantium adipisci quidem sunt molestiae explicabo nam amet!",
        }}
      />
    </section>
  );
}
