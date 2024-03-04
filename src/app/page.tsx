import clsx from "clsx";
import { Button } from "@/components/Button/button";
import { BlockquoteCitation } from "@/components/Blockquote/BlockquoteCitation";

export default function Home() {
  const color = "red";
  return (
    <main>
      <div className={clsx("m-10 border-4 border-gray-950 p-12 text-white")}>
        <div className={"flex flex-col gap-6"}>
          <div>
            <Button>Clean Button (default to primary)</Button>
          </div>
          <div>
            <Button variant={"primary"}>Clean primary Button</Button>
          </div>
          <div>
            <Button variant={"secondary"}>Clean secondary Button</Button>
          </div>
          <div>
            <Button
              className={"text-pink-500 hover:bg-blue-600 hover:bg-pink-950"}
            >
              Button with passed classNames
            </Button>
          </div>
          <div>
            <Button
              tvaProps={{
                slots: { root: "bg-pink-950 p-8 m-32" },
              }}
            >
              TVAProps Button
            </Button>
          </div>
          <div>
            <Button
              variant={"secondary"}
              tvaProps={{
                slots: {
                  root: "bg-pink-950 p-8 m-32 hover:bg-pink-700 hover:text-gray-200",
                },
                variants: {
                  variant: {
                    secondary: {
                      root: "text-5xl",
                    },
                  },
                },
              }}
            >
              TVAProps Button
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
