import Card from "./Card";
import DividerWithIcon from "./DividerWithIcon";

export default function TestimonialItem({ testimonial }) {
  return (
    <Card>
      {/* <div className="h-[18rem]"> */}
        <p className="text-lg font-bold text-stone-700">{testimonial.name}</p>
        {/* <hr class="my-2.5 h-[1px] border-t-0 bg-stone-200" /> */}
        <DividerWithIcon />
        <p className="text-stone-600">{testimonial.body}</p>
      {/* </div> */}
    </Card>
  );
}
