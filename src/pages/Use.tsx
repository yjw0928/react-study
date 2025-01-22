import React, { Suspense, use } from 'react';

const Content = () => {
    const val = use<number>(
        new Promise((resolve) => {
            const start = Date.now();

            while (Date.now() - start < 100) {}
            resolve(2);
        })
    );

    return (
        <div>
            <div> 测试demo</div>
            {val}
        </div>
    );
};

const UseDemo: React.FC = () => {
    return (
        <Suspense fallback={'666666'}>
            <Content />
        </Suspense>
    );
};

export default UseDemo;
