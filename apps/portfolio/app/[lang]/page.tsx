import type { PageWithLocalParam } from 'type';
import { getDictionary } from 'dictionaries';
import { Hero } from '../../components/section/hero';
import { Checkpoint } from '../../components/section/checkpoint';

export default async function Page({params: {lang}}: PageWithLocalParam) {
  const dictionary = await getDictionary(lang);

  return (
    <main className="min-h-[300vh] bg-gray-500">
      <Hero/>
      {/*<Checkpoint />*/}
    </main>
  );
}
