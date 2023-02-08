import React, { Component, useEffect, useRef } from "react";

const Demo: React.FC = () => {
  const ref = useRef();

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
