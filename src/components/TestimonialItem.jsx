import DividerWithIcon from "./DividerWithIcon";

export default function TestimonialItem({ testimonial }) {
  return (
    <div className="p-7 bg-white border-1 border-stone-200 rounded-md shadow-sm">
      <p className="text-lg font-bold text-stone-700">{testimonial.name}</p>
      {/* <hr class="my-2.5 h-[1px] border-t-0 bg-stone-200" /> */}
      <DividerWithIcon />
      <p className="text-stone-600">{testimonial.body}</p>
    </div>
  );
}
