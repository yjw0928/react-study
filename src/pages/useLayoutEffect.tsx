import { Button } from 'antd';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

const RenderFPS = () => {
    const [state, setState] = useState(1);
    const ref = useRef<any>(null);

    useLayoutEffect(() => {
        console.log('在页面重绘之前执行');
        ref.current.style.width = `${state * 30}px`;
    }, [state]);

    useEffect(() => {
        console.log('在页面重绘之后执行');
    }, [state]);

    return (
        <Button ref={ref} onClick={() => setState(state + 1)}>
            点击{state}
        </Button>
    );
};

export default RenderFPS;
