import coupleImage from "../assets/background.jpg";

export default function Hero() {
  return (
    <div
      style={{ backgroundImage: `url(${coupleImage})` }}
      className="w-full h-screen flex bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="mx-auto my-auto flex flex-col gap-8 items-center z-10">
        <h2 className="text-6xl font-bold text-white">Meet Your True Love!</h2>
        <button className="px-6 py-3 text-xl text-white font-bold bg-red-400 rounded-full hover:bg-red-500">
          Create Account
        </button>
      </div>
    </div>
  );
}
