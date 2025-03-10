import Card from "./Card";

const pricingItems = [
  {
    title: "Basic",
    price: "0",
    features: [
      "Unlimited swipes",
      "Match and chat with users",
      "Basic profile customization",
    ],
  },
  {
    title: "Premium",
    price: "9.99",
    features: [
      "See who liked you first",
      "Get unlimited rewinds & super likes",
      "Boost your profile for more visibility",
    ],
  },
];

export default function Membership() {
  return (
    <section className="px-4 md:px-20 py-20 bg-[#d01760]/15">
      <div className="gap-6 grid md:grid-cols-2 lg:grid-cols-4">
        <div className="md:col-span-2 flex flex-col justify-center">
          <span className="block mb-2 text-xs font-medium tracking-widest text-center lg:text-left uppercase">
            Membership Plans
          </span>
          <h2 className="text-5xl font-bold text-center lg:text-left mb-8">
            Unlock More Possibilities in Love
          </h2>
          <button className="self-center lg:self-start px-6 py-3 mb-5 lg:mb-0 text-xl text-white font-bold bg-[#d01760] rounded-full hover:brightness-85 cursor-pointer">
            Get Started
          </button>
        </div>
        {pricingItems.map((item, index) => (
          <Card key={`pricing-${index}`} effect={true}>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold sm:text-4xl">
                <a className="text-gray-800" href="#">{item.title}</a>
              </h3>
            </div>
            <div className="mb-4 space-x-2">
              <span className="text-4xl font-bold text-gray-800">${item.price}/mo</span>
            </div>
            <ul className="mb-6 space-y-2">
              {item.features.map((featureItem) => (
                <li key={featureItem} className="flex items-center gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-5 h-5 text-gray-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-600">{featureItem}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
}
