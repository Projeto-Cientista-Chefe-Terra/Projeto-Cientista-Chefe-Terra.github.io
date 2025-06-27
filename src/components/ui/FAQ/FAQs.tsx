"use client";

import { useState } from "react";
import FAQItem from "./FAQItem";
import { FAQProps } from "@/data/FAQs";

export default function FAQ({ faqs }: { faqs: FAQProps[] }) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <ul>
      {faqs.map((faq, index) => {
        return (
          <FAQItem
            key={index}
            faq={faq}
            selected={selected}
            setSelected={setSelected}
            index={index}
          />
        );
      })}
    </ul>
  );
}
