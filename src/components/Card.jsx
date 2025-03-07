export default function Card({ children }) {
  return (
    <div className="p-7 bg-white border-1 border-stone-200 rounded-md shadow-sm">
      {children}
    </div>
  );
}
