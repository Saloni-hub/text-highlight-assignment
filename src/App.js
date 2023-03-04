import React from "react";
import "./App.css";

function App() {
  const text = `When Sebastian Thrun started working on self-driving cars at 
  Google in 2007, few people outside of the company took him seriously. 
  “I can tell you very senior CEOs of major American car companies would shake my hand and turn away because
   I wasn’t worth talking to,” said Thrun, now the co-founder and CEO of online higher education start-up Udacity,
    in an interview with Recode earlier this week.`;
  const Words_to_highlight = [
    { word: "2007", tag: "DATE" },
    { word: "Sebastian Thrun", tag: "PERSON" },
    { word: "GOOGLE ", tag: "ORG" },
    { word: "American", tag: "NORP" },
    { word: "Thrun", tag: "PERSON" },
    { word: "Recode", tag: "ORG" },
    { word: "earlier this week", tag: "DATE" },
  ];
  const rawKeywords = Words_to_highlight.map(({ word }) => word),
    markedText = text.replace(
      new RegExp(rawKeywords.join("|"), "gi"),
      (w) => `|${w}|`
    ),
    textBlocks = markedText
      .split("|")
      .filter((textBlock) => textBlock.length !== 0);
      
  return (
    <>
      <h1>Text Highlight</h1>
      <div className="container">
        <span style={{ lineHeight: "160%" }}>
          {textBlocks.map((textBlock, key) => {
            const tag = (
              Words_to_highlight.find(
                ({ word }) => word.toLowerCase() === textBlock.toLowerCase()
              ) || { tag: null }
            ).tag;
            return (
              <span {...{ key, ...(tag && { tag }) }}>
                {textBlock}
                {tag && <span className="tagLabel">{tag}</span>}
              </span>
            );
          })}
        </span>
      </div>
    </>
  );
}
export default App;
