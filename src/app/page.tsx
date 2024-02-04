import clsx from "clsx";
import { Button } from "@/components/Button/button";

export default function Home() {
  return (
    <main className={clsx("bg-amber-50")}>
      <div
        className={clsx(
          "m-10 border-4 border-amber-900 bg-amber-600 px-3.5 py-3 text-cyan-200",
        )}
      >
        <p>Some text</p>
        <div className="flex gap-4">
          <Button
            something={true}
            // className={"hover: bg-pink-950 text-pink-500 hover:bg-blue-600"}
          >
            First Button
          </Button>
          <Button something={false} variant={"secondary"}>
            Second Button
          </Button>
        </div>
      </div>
    </main>
  );
}
