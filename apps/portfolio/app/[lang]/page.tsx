import type { PageWithLocalParam } from 'type';
import { getDictionary } from 'dictionaries';
import { Hero } from '../../components/hero';

export default async function Page({params: {lang}}: PageWithLocalParam) {
  const dictionary = await getDictionary(lang);

  return (
    <main className="min-h-[300vh] bg-gray-500">
      <Hero/>
    </main>
  );
}
