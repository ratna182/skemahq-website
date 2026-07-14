type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button className="rounded-full bg-black px-8 py-4 text-white transition hover:bg-neutral-800">
      {children}
    </button>
  );
}