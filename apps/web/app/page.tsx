import Section from "./section";
import { redirect } from 'next/navigation'


export default function Page(): JSX.Element {
  redirect('/sbc-rating')
  return (
    <main>
      <h1> PORTFOLIO </h1>
      <Section />
    </main>
  );
}
