import Sidebar from "./sidebar";

export default async function Page(): Promise<JSX.Element> {
  return (
    <main>
      <h1> SBC Rating </h1>
      <Sidebar />
    </main>
  );
}
