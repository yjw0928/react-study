import { InputNumber } from 'antd';
import React, { memo, useEffect } from 'react';

const Item: React.FC<{ value: number }> = ({ value }) => {
    let startTime = performance.now();
    while (performance.now() - startTime < 3) {}
    useEffect(() => {
        console.log(`Item=======>Effect${value}`);
    }, [value]);
    return <div>{value}</div>;
};

const List: React.FC<{ value: number }> = memo(({ value }) => {
    console.log('List渲染=========>', value);
    const items: React.ReactNode[] = [];
    for (let i = 0; i < 200; i++) {
        items.push(<Item value={value} />);
    }

    useEffect(() => {
        console.log(`List useEffect=========>${value}`);
    }, [value]);

    return (
        <div>
            <span>Effect 会在重新渲染提交到屏幕之后执行执行</span>
            {items}
        </div>
    );
});

const Content = () => {
    const [state, setState] = React.useState(1);
    const deferredState = React.useDeferredValue(state);

    return (
        <div>
            <InputNumber value={state} onChange={(val) => setState(val)} />
            <List
                // value={state}
                value={deferredState} // 延迟渲染
            />
        </div>
    );
};

export default Content;
