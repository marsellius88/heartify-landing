import FeatureItem from "./FeatureItem";
import matchImage from "../assets/puzzle.png";
import privacyImage from "../assets/compliant.png";
import starImage from "../assets/star.png";
import callImage from "../assets/video-call.png";

export default function Features({ targetRef }) {
  return (
    <section ref={targetRef} className="px-20 pt-20 pb-30">
      <div className="container mx-auto">
        <span className="block mb-2 text-xs font-medium tracking-widest text-center uppercase">
          Key Features
        </span>
        <h2 className="text-5xl font-bold text-center">
          The Future of Dating Starts Here
        </h2>
        <div className="grid grid-cols-4 mt-16 gap-6">
          <FeatureItem
            feature={{
              image: matchImage,
              body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            }}
          />
          <FeatureItem
            feature={{
              image: privacyImage,
              body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            }}
          />
          <FeatureItem
            feature={{
              image: starImage,
              body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            }}
          />
          <FeatureItem
            feature={{
              image: callImage,
              body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            }}
          />
        </div>
      </div>
    </section>
  );
}
