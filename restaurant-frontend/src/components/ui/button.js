export function Button({ children, onClick, variant }) {
  const style =
    variant === "destructive"
      ? "bg-red-500 hover:bg-red-600"
      : "bg-blue-500 hover:bg-blue-600";

  return (
    <button
      onClick={onClick}
      className={`${style} text-white px-4 py-2 rounded`}
    >
      {children}
    </button>
  );
}
