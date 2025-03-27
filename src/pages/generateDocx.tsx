import { Button } from 'antd';
import React from 'react';
//@ts-ignore
import htmlDocx from 'html-docx-js/dist/html-docx';

const Demo = () => {
    const generateDocx = () => {
        const s = document.getElementById('content');
        const doc = htmlDocx.asBlob(s.outerHTML) as Blob;
        const a = document.createElement('a');
        a.href = URL.createObjectURL(doc);
        a.download = 'generated_document.docx';
        a.click();
    };

    return (
        <div>
            <div id="content">
                <div style={{ width: '100%', height: '100%', backgroundColor: 'red' }}>1111</div>
            </div>
            <Button onClick={generateDocx}>生成word</Button>
        </div>
    );
};

export default Demo;
