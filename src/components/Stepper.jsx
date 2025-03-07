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
    <div className="grid gap-4 mt-16 lg:grid-cols-4">
      {stepsItem.map((item, index) => (
        <div
          key={`step-${index}`}
          className="flex flex-col p-8 space-y-4 rounded-md bg-red-100"
        >
          <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-red-300 text-white">
            {index + 1}
          </div>
          <p className="text-2xl font-semibold">
            <b>{item.title}.</b> {item.body}
          </p>
        </div>
      ))}
    </div>
  );
}
