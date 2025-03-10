import downloadAppleImage from "../assets/download-apple.svg";
import downloadGoogleImage from "../assets/download-google.png";

const productItems = ["Premium features", "Subscription tiers"];
const contactItems = [
  "New York, NY 10012, US",
  "info@example.com",
  "+01 234 567 88",
];

export default function Footer() {
  return (
    <footer className="px-4 md:px-20 pt-20">
      <div className="py-5 border-y-1 border-stone-200">
        <div className="grid grid-cols-4 gap-10">
          <div className="col-span-2">
            <p className="text-lg font-bold pb-4 text-gray-800">About</p>
            <p className="text-gray-800">
              Finding love should be simple, fun, and meaningful. Heartify
              connects people through smart matching technology, helping you
              meet like-minded individuals effortlessly. Whether you're looking
              for deep connections or exciting new friendships, we make every
              swipe count. Join us and discover endless possibilities in love!
            </p>
          </div>
          <div>
            <p className="text-lg font-bold pb-4 text-gray-800">Products</p>
            <ul>
              {productItems.map((item, index) => (
                <li key={`product-${index}`} className="mb-1">
                  <a href="#" className="hover:text-[#d01760] text-gray-800">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-lg font-bold pb-4 text-gray-800">Contact</p>
            <ul>
              {contactItems.map((item, index) => (
                <li key={`contact-${index}`} className="mb-1">
                  <a href="#" className="hover:text-[#d01760] text-gray-800">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-row gap-8 items-center pt-8">
          <p className="text-xl font-bold text-gray-800">Download the app!</p>
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={downloadAppleImage}
              alt="Download on the App Store"
              className="h-12"
            />
          </a>
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={downloadGoogleImage}
              alt="Get it on Google Play"
              className="h-12"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:justify-between pt-5 pb-5 lg:pb-1">
        <ul className="flex space-x-5">
          <li>
            <a href="#" className="hover:text-[#d01760] text-gray-800">
              FAQ
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#d01760] text-gray-800">
              Terms
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#d01760] text-gray-800">
              Privacy Policy
            </a>
          </li>
        </ul>
        <p className="mt-2 lg:mt-0 text-gray-800">© 2025 Heartify, All Rights Reserved.</p>
      </div>
    </footer>
  );
}
