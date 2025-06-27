interface FontButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
}

export default function FontButton({ children, onClick }: FontButtonProps) {
  return (
    <button onClick={onClick} className="px-1 py-1 h-full text-sm-dynamic ">
      <div className="card-shadow bg-white rounded-lg text-black">
        {children}
      </div>
    </button>
  );
}
