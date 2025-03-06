export default function FeatureItem({ feature }) {
  return (
    <div className="bg-white flex flex-col gap-4 text-center items-center">
      <img className="w-[4rem]" src={feature.image} alt="" />
      <p>{feature.body}</p>
    </div>
  );
}
