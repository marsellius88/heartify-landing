import FeatureItem from "./FeatureItem";
import matchImage from "../assets/puzzle.png";
import privacyImage from "../assets/compliant.png";
import starImage from "../assets/star.png";
import callImage from "../assets/video-call.png";

export default function Features({ targetRef }) {
  return (
    <section ref={targetRef} className="px-20 py-20">
      <div className="flex flex-col gap-4 items-center text-center mb-15">
        <h3 className="text-4xl font-black">Main Features</h3>
        <p className="px-70">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non rem totam
          laborum exercitationem similique tempore porro?
        </p>
      </div>
      <div className="grid grid-cols-4 gap-4">
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
    </section>
  );
}
