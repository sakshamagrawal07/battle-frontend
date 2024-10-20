"use client"

import { Editor } from "@monaco-editor/react";
import { useState } from "react";

export default function Home() {

  const [isHtml, setIsHtml] = useState(true);

  const [htmlCode, setHtmlCode] = useState<string | undefined>("<!-- Write your code here -->");
  const [cssCode, setCssCode] = useState<string | undefined>("/*write your css here*/");

  const onClickHtml = () => { setIsHtml(true) }
  const onClickCss = () => { setIsHtml(false) }

  const handleOnChange = (value:string | undefined) => {isHtml?setHtmlCode(value):setCssCode(value)}

  return (
    <>
      <div className="h-full w-[100vw] p-5 flex">
        <div className="h-full w-full flex flex-col items-start">
          <div>
            <button onClick={onClickHtml}>HTML</button>
            <button onClick={onClickCss}>CSS</button>
          </div>
          <Editor
            key={isHtml ? "1" : "0"}
            className="h-[100%] max-w-[60%]"
            // defaultLanguage="html"
            value={isHtml ? htmlCode : cssCode}
            onChange={handleOnChange}
            language={isHtml ? "html" : "css"}
          />
        </div>
        <div className="flex flex-col">
          <iframe className="h-[350px] aspect-square m-2 bg-blue-700" srcDoc={`${htmlCode}<style>${cssCode}</style>`}/>
          <div className="h-[350px] aspect-square m-2 bg-blue-700"></div>
        </div>
      </div>
    </>
  );
}
