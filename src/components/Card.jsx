export default function Card({ children, effect = false }) {
  let classes = "p-7 bg-white border-1 border-stone-200 rounded-md shadow-sm";

  if (effect) {
    classes = classes + " transition-transform duration-200 hover:scale-105";
  }

  return <div className={classes}>{children}</div>;
}
