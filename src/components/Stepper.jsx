const stepsItem = [
  { title: "Create", body: "Set up your free account in minutes" },
  {
    title: "Find",
    body: "Swipe through profiles and like the ones that you like",
  },
  { title: "Chat", body: "Break the ice with fun conversation starters" },
  {
    title: "Meet",
    body: "When you're ready, take the next step and meet in person",
  },
];

export default function Stepper() {
  return (
    <div className="grid gap-6 mt-16 lg:grid-cols-4">
      {stepsItem.map((item, index) => (
        <div
          key={`step-${index}`}
          className="flex flex-col p-8 space-y-4 rounded-md bg-[#d01760]/15 transition-transform duration-200 hover:scale-105"
        >
          <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-[#d01760] text-white">
            {index + 1}
          </div>
          <p className="text-xl font-semibold">
            <b>{item.title}.</b> {item.body}
          </p>
        </div>
      ))}
    </div>
  );
}
