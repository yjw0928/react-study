import { Button } from 'antd';
import React, { startTransition, useCallback, useOptimistic, useState, useTransition } from 'react';

const request = async () => {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('');
        }, 1000);
    });
    console.log('request');
    return 777;
};

const Demo = () => {
    const [isPending, transtion] = useTransition();
    const [state, setState] = useState<string[]>(['1']);
    const [optimisticState, updateOptimisticState] = useOptimistic(state, (state, newState) => {
        return [...state, newState];
    });

    const handleClick = useCallback(() => {
        transtion(async () => {
            updateOptimisticState('6666');
            const res = await request();

            transtion(() => {
                setState(['在异步之后被挂起了']);
            });

            // setState(['在异步之后没被过度']);
        });
    }, [updateOptimisticState]);

    return (
        <div>
            {optimisticState.map((v, index) => {
                return <div key={index}>{JSON.stringify(v)}</div>;
            })}

            <Button onClick={handleClick}>点击事件</Button>
        </div>
    );
};

export default Demo;
