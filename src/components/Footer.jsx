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
    <footer className="px-20 pt-20">
      <div className="py-5 border-y-1 border-stone-200">
        <div className="grid grid-cols-4 gap-10">
          <div className="col-span-2">
            <p className="text-lg font-bold pb-4">About</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non rem
              totam laborum exercitationem similique tempore porro? Nobis non
              incidunt officia ullam laborum ipsum? Id suscipit pariatur animi,
              perspiciatis in cumque. Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
          </div>
          <div>
            <p className="text-lg font-bold pb-4">Products</p>
            <ul>
              {productItems.map((item, index) => (
                <li key={`product-${index}`} className="mb-1">
                  <a href="#" className="hover:text-[#d01760]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-lg font-bold pb-4">Contact</p>
            <ul>
              {contactItems.map((item, index) => (
                <li key={`contact-${index}`} className="mb-1">
                  <a href="#" className="hover:text-[#d01760]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-row gap-8 items-center pt-8">
          <p className="text-xl font-bold">Download the app!</p>
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
      <div className="flex justify-between pt-5 pb-1">
        <ul className="flex space-x-5">
          <li>
            <a href="#" className="hover:text-[#d01760]">
              FAQ
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#d01760]">
              Terms
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#d01760]">
              Privacy Policy
            </a>
          </li>
        </ul>
        <p>© 2025 Heartify, All Rights Reserved.</p>
      </div>
    </footer>
  );
}
