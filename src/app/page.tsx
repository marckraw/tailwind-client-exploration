import clsx from "clsx";
import { Button } from "@/components/Button/button";
import { BlockquoteCitation } from "@/components/Blockquote/BlockquoteCitation";
import { Blockquote } from "@/components/Blockquote/Blockquote";
import { BlockquoteText } from "@/components/Blockquote/BlockquoteText";
import { BlockquoteFooter } from "@/components/Blockquote/BlockquoteFooter";

export default function Home() {
  const color = "red";
  return (
    <main>
      <div className={clsx("m-10 border-4 border-gray-950 p-12 text-white")}>
        <div className={"flex flex-col gap-6"}>
          <Blockquote className={"ToJestWrapper"}>
            <BlockquoteText className={"zoledzie"}>
              "Cras mattis consectetur purus sit amet fermentum. Etiam porta sem
              malesuada magna mollis euismod. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit"
            </BlockquoteText>
            <BlockquoteFooter className={"Dupsko"}>
              <BlockquoteCitation className={"CitationKurwa"}>
                Albert Einstein
              </BlockquoteCitation>
            </BlockquoteFooter>
          </Blockquote>
        </div>
      </div>
    </main>
  );
}
