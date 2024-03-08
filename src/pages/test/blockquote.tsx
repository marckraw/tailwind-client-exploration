import { BlockquoteText } from "@/components/Blockquote/BlockquoteText";
import { BlockquoteFooter } from "@/components/Blockquote/BlockquoteFooter";
import { BlockquoteCitation } from "@/components/Blockquote/BlockquoteCitation";
import { Blockquote } from "@/components/Blockquote/Blockquote";

const BlockquotePage = () => {
  return (
    <div>
      <Blockquote inverse={false} className={"ToJestWrapper"}>
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
  );
};

export default BlockquotePage;
