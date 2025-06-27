'use client'

import { PiLinkSimpleBold } from "react-icons/pi";

export default function CopyButton({ text }: { text: string }) {
  return (
    <button
      title="Cópiar link do site"
      onClick={() => {
        navigator.clipboard.writeText(text);
      }}
    >
      <PiLinkSimpleBold size={28} />
    </button>
  );
}
