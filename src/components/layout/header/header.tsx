import { Squada_One } from "next/font/google";
import AcessibilityBar from "./AccessibilityBar/acessibilityBar";
import NavigationBar from "./NavigatorBar/NavigationBar";

const squadaOne = Squada_One({
  subsets: ["latin"],
  weight: "400",
});


export default function Header() {
  // Acessibilidade Bar
  // Navbar

  return (
    <div className={`h-[5.5rem] flex-col fixed lg:relative z-50 `}>
      <AcessibilityBar />
      <NavigationBar fonte={squadaOne.className} />
    </div>
  );
}
