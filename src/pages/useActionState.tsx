import { Button, Form } from 'antd';
import React, { useActionState } from 'react';

const func1 = (pre: string, queryData: Record<string, any>): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('数据返回了');
        }, 3000);
    });
};

const Demo1 = () => {
    const [state, action, loading] = useActionState<string>(func1 as any);

    return (
        <div>
            <form action={action}>
                <button type="submit">请求数据</button>
                {loading ? <div>加载中....</div> : <div>{state}</div>}
            </form>
        </div>
    );
};

export default Demo1;
