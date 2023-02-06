import React, { Component, useEffect, useRef } from "react";
import hljs from "highlight.js";
// import "highlight.js/styles/vs2015.css";

const Demo: React.FC = () => {
  const ref = useRef();
  useEffect(() => {
    // try {
    //   hljs.highlightBlock(ref.current);
    // } catch (e) {
    //   console.log(e);
    // }
    hljs.highlightAll();
  }, []);
  return (
    <div>
      这是开始的git
      <pre ref={ref}>
        <code className="language-javascript">
          {`
          import React, { Component, useEffect, useRef } from "react";
          import hljs from "highlight.js";
          import "highlight.js/styles/dark.css";
          const a= 6`}
        </code>
      </pre>
    </div>
  );
};

export default Demo;
