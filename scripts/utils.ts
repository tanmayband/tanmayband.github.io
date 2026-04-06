import { getCollection } from 'astro:content';
import type { iconPaths } from  '../src/components/IconPaths';

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
    "attuner",
    "blasterchef",
    "80-lvl-3d-metasites",
    "horror-doors",
    "hanx-101-trivia",
    "soul-surfer",
    "sheety-game",
    "spark-plugin",
    "adventures-of-pi",
    "duality"
];

export async function sortWork()
{
    const workEntries = await getCollection("work");
    return sortByCustomOrder(workEntries, workOrder);
}

const testimonialsOrder = [
    "80-lvl-3d-metasites",
    "hanx-101-trivia",
    "hiddengem-gem-jam"
];

export async function sortTestimonials()
{
    const testimonialsEntries = await getCollection("testimonials");
    return sortByCustomOrder(testimonialsEntries, testimonialsOrder);
}

/** Icon links to social media — edit these with links to your profiles! */
const contactDetails: { label: string; href: string; icon: keyof typeof iconPaths }[] = [
  { 
    label: 'Email',
    href: 'mailto:tanmayband+hi@gmail.com',
    icon: 'at-logo'
  },
  { 
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/tanmayband/',
    icon: 'linkedin-logo'
  },
  { 
    label: 'itch.io',
    href: 'https://tanbanman.itch.io/',
    icon: 'itch-io-logo'
  },
  { 
    label: 'GitHub',
    href: 'https://github.com/tanmayband',
    icon: 'github-logo'
  },
  // { 
  // label: 'YouTube',
  // href: 'https://www.youtube.com/@me/',
  // icon: 'youtube-logo'
  // }
];

export default contactDetails;