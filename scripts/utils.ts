import { getCollection } from 'astro:content';

export function sortByCustomOrder<T extends { id: string; }>(
  items: T[],
  customOrder: string[]
): T[] {
  const orderMap = new Map(customOrder.map((id, i) => [id, i]));

  return [...items].sort((a, b) => {
    const aIndex = orderMap.get(a.id) ?? Infinity;
    const bIndex = orderMap.get(b.id) ?? Infinity;

    return aIndex - bIndex;
  });
};

const workOrder = [
    "eat-my-beat",
    "blasterchef",
    "80-lvl-3d-metasites",
    "spark-plugin",
    "horror-doors",
    "hanx-101-trivia",
    "adventures-of-pi",
    "sheety-game",
    "soul-surfer",
    "duality"
];

export async function sortWork()
{
    const workEntries = await getCollection("work");
    return sortByCustomOrder(workEntries, workOrder);
}

const testimonialsOrder = [
    "hiddengem-gem-jam",
    "hanx-101-trivia",
    "80-lvl-3d-metasites"
];

export async function sortTestimonials()
{
    const testimonialsEntries = await getCollection("testimonials");
    return sortByCustomOrder(testimonialsEntries, testimonialsOrder);
}