
interface PSectionProps {
  children: React.ReactNode;
  id?: number;
}


export default function PSection({ children, id }: PSectionProps) {
  return (
    <p className="mb-2 indent-8 text-justify text-base-dynamic" key={id}>
      {children}
    </p>
  );
}