export default function FeatureItem({ feature }) {
  return (
    <div className="bg-white flex flex-col gap-1 text-center items-center">
      <img className="w-[4rem]" src={feature.image} alt="" />
      <h4 className="text-xl font-bold mt-3 text-gray-800">{feature.title}</h4>
      <p className="text-gray-600">{feature.body}</p>
    </div>
  );
}
