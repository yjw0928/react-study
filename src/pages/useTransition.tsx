import { Button, Input, List } from 'antd';
import React, { ChangeEvent, ChangeEventHandler, useEffect, useState, useTransition } from 'react';

const Demo: React.FC = () => {
    const [isPending, startTransition] = useTransition();
    const [keyWord, setKeyWord] = useState('');
    const [list, setList] = useState([]);

    const handleSearch = (e: ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        setKeyWord(value);
        fetch('/api/list?keyWord=' + value)
            .then((res) => res.json())
            .then((data) => {
                startTransition(() => {
                    setList(data?.list ?? []);
                });
            });
    };

    return (
        <div>
            <Input onChange={handleSearch} value={keyWord} />

            <List
                dataSource={list}
                renderItem={(item) => {
                    return (
                        <List.Item>
                            <List.Item.Meta title={item.name} description={item.address} />
                        </List.Item>
                    );
                }}
            />
        </div>
    );
};

export default Demo;
