import React, { FC, useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/vs2015.css";

const CodeContain: FC<any> = (props) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <pre>
      <code className="language-javascript">{props.children}</code>
    </pre>
  );
};

export default CodeContain;
