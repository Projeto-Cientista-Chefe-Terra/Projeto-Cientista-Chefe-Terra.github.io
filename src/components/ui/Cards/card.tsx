
interface CardProps {
  className?: string;
  color?: string;
  children?: React.ReactNode;
}


export default function Card({ className, color, children }: CardProps) {
  return (
    <div
      className={` ${
        color ? color : "bg-orange"
      } p-5 rounded-2xl box-shadow mb-5 text-black ${className}`}
    >
      {children}
    </div>
  );
}