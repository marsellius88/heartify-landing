import FeatureItem from "./FeatureItem";
import puzzleImage from "../assets/puzzle.png";
import padlockImage from "../assets/padlock.png";
import chatImage from "../assets/chat.png";
import rocketImage from "../assets/rocket.png";

export default function Features({ targetRef }) {
  return (
    <section ref={targetRef} className="px-4 md:px-20 pt-20 pb-30">
      <div className="container mx-auto">
        <span className="block mb-2 text-xs font-medium tracking-widest text-center uppercase">
          Key Features
        </span>
        <h2 className="text-5xl font-bold text-center">
          The Future of Dating Starts Here
        </h2>
        <div className="mt-16 gap-6 grid sm:grid-cols-2 md:grid-cols-4">
          <FeatureItem
            feature={{
              image: puzzleImage,
              title: "Smart Matching",
              body: "Our AI connects you with people who truly match your interests.",
            }}
          />
          <FeatureItem
            feature={{
              image: padlockImage,
              title: "Privacy & Security",
              body: "Your data is safe with us. Only connect with verified users.",
            }}
          />
          <FeatureItem
            feature={{
              image: chatImage,
              title: "Fun & Interactive Chat",
              body: "Text, voice, and video chat to get to know your matches better.",
            }}
          />
          <FeatureItem
            feature={{
              image: rocketImage,
              title: "Boost Your Profile",
              body: "Stand out and get more matches with our premium features.",
            }}
          />
        </div>
      </div>
    </section>
  );
}
