"use client";
import clsx from "clsx";
import { BlockquoteCitation } from "@/components/Blockquote/BlockquoteCitation";
import { Blockquote } from "@/components/Blockquote/Blockquote";
import { BlockquoteText } from "@/components/Blockquote/BlockquoteText";
import { BlockquoteFooter } from "@/components/Blockquote/BlockquoteFooter";

export default function Home() {
  return (
    <main>
      <div className={clsx("m-10")}>
        <Blockquote
          variant={"default"}
          inverse={true}
          className={"blockquote_wrapper-od-consumera"}
          styleDefinition={{
            variants: {
              inverse: {
                true: {
                  footer: "p-2 m-24 bg-green-950 text-white",
                  citation: "text-amber-500",
                },
              },
              variant: {
                secondary: {
                  footer: "rounded-full bg-pink-600",
                },
              },
            },
          }}
        >
          <BlockquoteText
            inverse={false}
            className={"blockquote_text-od-consumera"}
          >
            "Cras mattis consectetur purus sit amet fermentum. Etiam porta sem
            malesuada magna mollis euismod. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit"
          </BlockquoteText>
          <BlockquoteFooter className={"blockquote_footer-od-consumera"}>
            <BlockquoteCitation className={"blockquote_citation-od-consumera"}>
              Albert Einstein
            </BlockquoteCitation>
          </BlockquoteFooter>
        </Blockquote>
      </div>
      <div className={clsx("m-10")}>
        <Blockquote>
          <BlockquoteText>
            "Cras mattis consectetur purus sit amet fermentum. Etiam porta sem
            malesuada magna mollis euismod. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit"
          </BlockquoteText>
          <BlockquoteFooter>
            <BlockquoteCitation>Albert Einstein</BlockquoteCitation>
          </BlockquoteFooter>
        </Blockquote>
      </div>
    </main>
  );
}
