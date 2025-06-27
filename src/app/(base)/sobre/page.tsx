// import AudioHandler from "@/components/testes/audioPlayer";
import ScrollSpy from "@/components/ui/ScrollSpy/scrollSpy";
import SectionContent from "@/components/ui/SectionContent/sectionContent";
import PageTitle from "@/components/ui/Titles/pageTitle";

export default function Sobre() {
  return (
    <div className="mb-auto mx-6 mt-7 lg:mx-12 lg:mt-12">
      {/* <AudioHandler /> */}
      
        <PageTitle title="Sobre" />
      
      <div></div>
      <div className="mx-auto mt-6 flex max-w-screen-xl lg:flex-row flex-col ">
        <div className="lg:w-3/12">
          <ScrollSpy className="sticky top-16 flex flex-col rounded-xl bg-cor5b p-4  box-shadow" />
        </div>
        <div className="lg:w-9/12 lg:px-12">
          <SectionContent />
        </div>
      </div>
      <div className="my-12" id="Spacer"></div>
    </div>
  );
}
