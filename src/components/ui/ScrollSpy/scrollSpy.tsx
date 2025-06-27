"use client";

import React, { useEffect, useState } from "react";
import { sectionContents, SectionModel } from "@/data/sectionIds";
import ScrollSpyItem from "./scrollSpyItem";
import { listIdByOrder } from "@/utils/graph";

interface ScrollSpyProps {
  className: string;
  children?: React.ReactNode;
}

export default function ScrollSpy({ className }: ScrollSpyProps) {
  const [activeLink, setActiveLink] = useState("t_1");

  const idList = listIdByOrder(sectionContents);

  //Function to smoothly scroll to a section by its ID
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      //Adjust the margin Top value as needed
      const marginTop = 110;
      const scrollToY =
        element.getBoundingClientRect().top + window.scrollY - marginTop;
      window.scrollTo({ top: scrollToY, behavior: "smooth" });
    }
  };

  //Function to determine the active section while scrolling
  const determineActiveSection = () => {
    for (let i = idList.length - 1; i >= 0; i--) {
      const section = document.getElementById(idList[i]);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          //Set the active link based on the section ID
          setActiveLink(idList[i]);
          break;
        }
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      //Call the function to determine the active section while scrolling
      determineActiveSection();
    };

    window.addEventListener("scroll", handleScroll);

    //Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const renderItems = (section: SectionModel, i: number) => (
    <ul key={section.id + i}>
      <li className="mt-2 ">
        <ScrollSpyItem
          label={section.label}
          actived={activeLink === section.id}
          onclick={() => scrollToSection(section.id)}
        />
      </li>
      {section.subSections?.map((s) =>
        renderSubItems(s, s.id, "font-normal ms-4 italic text-sm-dynamic")
      )}
    </ul>
  );

  const renderSubItems = (
    subSection: SectionModel,
    i: string,
    extraCN?: string
  ) => {
    let subItems = <div></div>;

    subItems = (
      <ul key={"vai " + i}>
        <li className="">
          <p key={subSection.id}>
            <ScrollSpyItem
              label={subSection.sigla ?? subSection.label}
              actived={activeLink === subSection.id}
              className={extraCN}
              onclick={() => scrollToSection(subSection.id)}
            />
          </p>
          {subSection.subSections?.map((s) =>
            renderSubItems(s, i, "ps-6 text-lg-dynamic")
          )}
        </li>
      </ul>
    );

    return subItems;
  };

  return (
    <div className={`${className}`}>
      <nav>{sectionContents.map((section, i) => renderItems(section, i))}</nav>
    </div>
  );
}
