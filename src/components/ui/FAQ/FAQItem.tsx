import { FAQProps } from "@/data/FAQs";
import { useRef } from "react";


interface FAQItemProps {
  key: number;
  faq: FAQProps;
  selected: number | null;
  setSelected: (index: number | null) => void;
  index: number;
}

export default function FAQItem({
  faq,
  index,
  selected,
  setSelected,
}: FAQItemProps) {
  const isOpen = selected === index;
  const Icon = isOpen ? "On" : "Off";

  const contentRef = useRef<HTMLDivElement>(null);
  return (
    <li className="rounded-md mb-4 box-shadow bg-cor5b" role="TEste">
      <button
        onClick={() => setSelected(isOpen ? null : index)}
        className={` w-full flex justify-between items-center py-5 px-5 font-bold text-lg-dynamic text-black ${
          isOpen ? "[&_svg]:-rotate-180" : ""
        } `}
      >
        {faq.question}
        <p>
          {Icon ? (
            <svg
              className="rotate-0 transform text-black transition-all duration-300"
              fill="none"
              height="24"
              width="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          ) : (
            "nada"
          )}
        </p>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ height: isOpen ? contentRef.current?.scrollHeight : 0 }}
      >
        <div
          ref={contentRef}
          className="pb-5 text-gray-800 px-5 text-base-dynamic"
        >
          {faq.answer}
          <ul className={`list-disc ${faq.ulList ? "pt-4" : ""} pl-12 `}>
            {faq.ulList?.map((i, index) => {
              return <li key={index}>{i}</li>;
            })}
          </ul>
          <ol className={`list-decimal pl-12 ${faq.olList ? "pt-4" : ""}`}>
            {faq.olList?.map((i, index) => {
              return <li key={index}>{i}</li>;
            })}
          </ol>
        </div>
      </div>
    </li>
  );
}
