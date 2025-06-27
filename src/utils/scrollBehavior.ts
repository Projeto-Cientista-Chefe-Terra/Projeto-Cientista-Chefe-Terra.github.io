export const scrollToSection = (sectionId: string, margin: number) => {
  const element = document.getElementById(sectionId);
  if (element) {
    //Adjust the margin Top value as needed
    const marginTop = margin;
    const scrollToY =
      element.getBoundingClientRect().top + window.scrollY - marginTop;
    window.scrollTo({ top: scrollToY, behavior: "smooth" });
  }
};
