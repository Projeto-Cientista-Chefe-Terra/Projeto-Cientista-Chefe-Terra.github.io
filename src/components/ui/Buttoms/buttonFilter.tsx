interface ButtonFilterProps {
  texto: string;
  onClick: () => void;
  selected: number  ;
  setSelected: (index: number) => void;
  index: number
}



export default function ButtonFilter({ texto, onClick, selected, setSelected, index }: ButtonFilterProps) {
  const active = selected === index;
  return index == 0 ? (
    <></>
  ) : (
    <button
      onClick={() => {
        setSelected(active ? 0 : index);
        onClick();
      }}
      className={
        (active ? "bg-cor2b border " : "bg-yellow ") +
        " border-white text-base-dynamic  text-black p-4 rounded-md box-shadow hover:bg-cor6b hover:-translate-y-1 hover:-translate-x-"
      }
    >
      {texto}
    </button>
  );
}