import Card from "@/components/ui/Cards/card";
import FAQ from "@/components/ui/FAQ/FAQs";
import PageTitle from "@/components/ui/Titles/pageTitle";
import { FAQContent } from "@/data/FAQs";

export default function CCTResponde() {
  return (
    <div className="mb-auto mt-7 mx-12 lg:mt-12">
      {/* <AudioHandler /> */}

      <PageTitle title="CC Terra Responde !" />

      <Card>
        Respostas rápidas para dúvidas sobre o Cientista Chefe Terra e suporte.
      </Card>
      <div className="w-full mx-auto">
        <FAQ faqs={FAQContent} />
      </div>
    </div>
  );
}
