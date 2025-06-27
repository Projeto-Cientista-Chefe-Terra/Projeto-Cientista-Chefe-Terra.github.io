import { SectionModel } from "@/data/sectionIds";

export function listIdByOrder(graph?: SectionModel[]) {
  const list: string[] = [];

  graph!.map((ob) => {
    list.push(ob.id);
    if (ob.subSections) {
      list.push(...listIdByOrder(ob.subSections));
    }
  });
  return list;
}
