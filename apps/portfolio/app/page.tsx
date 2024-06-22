import { GitPullRequest } from "lucide-react";
import Header from "../components/header";
import { Button } from "@repo/ui"

export default function Page(): JSX.Element {
  return (
    <>
      <Header />
      <main>
        <div>
          I'm Ryan Nguyen a.k.a Binh Nguyen Duc
        </div>
        <Button className="w-full">
          <GitPullRequest className="mr-2 h-4 w-4" /> GitPullRequest
        </Button>
      </main>
    </>

  );
}
