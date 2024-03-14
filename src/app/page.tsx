import clsx from "clsx";
import {BlockquoteCitation} from "@/components/Blockquote/BlockquoteCitation";
import {Blockquote} from "@/components/Blockquote/Blockquote";
import {BlockquoteText} from "@/components/Blockquote/BlockquoteText";
import {BlockquoteFooter} from "@/components/Blockquote/BlockquoteFooter";
import {Provider} from "jotai/react";

export default function Home() {
  return (
    <Provider>
      <main>
        <div className={clsx("m-10")}>
          <h2>Default</h2>
          <Blockquote>
            <BlockquoteText id={"my_id"}>
              Cras mattis consectetur purus sit amet fermentum. Etiam porta sem
              malesuada magna mollis euismod. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit
            </BlockquoteText>
            <BlockquoteFooter>
              <BlockquoteCitation>Albert Einstein</BlockquoteCitation>
            </BlockquoteFooter>
          </Blockquote>
        </div>
        <div className={clsx("m-10")}>
          <h2>Default - Inverse</h2>
          <Blockquote inverse={true}>
            <BlockquoteText>
              Cras mattis consectetur purus sit amet fermentum. Etiam porta sem
              malesuada magna mollis euismod. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit
            </BlockquoteText>
            <BlockquoteFooter>
              <BlockquoteCitation>Albert Einstein</BlockquoteCitation>
            </BlockquoteFooter>
          </Blockquote>
        </div>
        <div className={clsx("m-10")}>
          <h2>Primary</h2>
          <Blockquote variant={"primary"}>
            <BlockquoteText>
              Cras mattis consectetur purus sit amet fermentum. Etiam porta sem
              malesuada magna mollis euismod. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit
            </BlockquoteText>
            <BlockquoteFooter>
              <BlockquoteCitation>Albert Einstein</BlockquoteCitation>
            </BlockquoteFooter>
          </Blockquote>
        </div>
        <div className={clsx("m-10")}>
          <h2>Primary, Inverse</h2>
          <Blockquote variant={"primary"} inverse={true}>
            <BlockquoteText>
              Cras mattis consectetur purus sit amet fermentum. Etiam porta sem
              malesuada magna mollis euismod. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit
            </BlockquoteText>
            <BlockquoteFooter>
              <BlockquoteCitation>Albert Einstein</BlockquoteCitation>
            </BlockquoteFooter>
          </Blockquote>
        </div>
        <div className={clsx("m-10")}>
          <h2>Secondary</h2>
          <Blockquote variant={"secondary"}>
            <BlockquoteText>
              Cras mattis consectetur purus sit amet fermentum. Etiam porta sem
              malesuada magna mollis euismod. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit
            </BlockquoteText>
            <BlockquoteFooter>
              <BlockquoteCitation>Albert Einstein</BlockquoteCitation>
            </BlockquoteFooter>
          </Blockquote>
        </div>
        <div className={clsx("m-10")}>
          <h2>Secondary, Inverse</h2>
          <Blockquote variant={"secondary"} inverse={true}>
            <BlockquoteText>
              Cras mattis consectetur purus sit amet fermentum. Etiam porta sem
              malesuada magna mollis euismod. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit
            </BlockquoteText>
            <BlockquoteFooter>
              <BlockquoteCitation>Albert Einstein</BlockquoteCitation>
            </BlockquoteFooter>
          </Blockquote>
        </div>
        <div className={clsx("m-10")}>
          <h2>Secondary with overwrites for secondary variant footer </h2>
          <Blockquote
            variant={"primary"}
            inverse={true}
            className={"blockquote_wrapper-od-consumera"}
            themeConfig={{
              slots: {
                footer: "rounded-full bg-pink-600 p-6",
                citation: "bg-pink-400",
              },
            }}
          >
            <BlockquoteText className={"blockquote_text-od-consumera"}>
              Cras mattis consectetur purus sit amet fermentum. Etiam porta sem
              malesuada magna mollis euismod. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit
            </BlockquoteText>
            <BlockquoteFooter className={"blockquote_footer-od-consumera"}>
              <BlockquoteCitation className={"blockquote_citation-od-consumera"}>
                Albert Einstein
              </BlockquoteCitation>
            </BlockquoteFooter>
          </Blockquote>
        </div>
      </main>
    </Provider>
  );
}
