import { Button } from 'antd';
import React, { useSyncExternalStore } from 'react';
let count = 0;
let listeners: any[] = [];

const useStorage = (key: string, val: string) => {
    const getSnapshot = () => {
        return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : val;
    };

    const subScribe = (callback: any) => {
        window.addEventListener('storage', () => {
            callback();
        });
        return () => {
            window.removeEventListener('storage', callback);
        };
    };

    const setStorage = (value: any) => {
        localStorage.setItem(key, JSON.stringify(value));
        window.dispatchEvent(new StorageEvent('storage'));
    };

    const value = useSyncExternalStore(subScribe, getSnapshot);

    return [value, setStorage];
};

class ExternalStore {
    constructor() {}

    addCount() {
        count += 1;
        this.emitCount();
    }

    getSnapshot() {
        return count;
    }

    subscribe(l: any) {
        listeners.push(l);
        console.log(l);
        return () => {
            listeners = listeners.filter((listener) => listener !== l);
        };
    }
    emitCount() {
        listeners.forEach((l) => {
            l();
        });
    }
}
const externalStore = new ExternalStore();
const Demo: React.FC = () => {
    const [value, set] = useStorage('count', 'a');
    return (
        <Button
            onClick={() => {
                set('aa');
            }}
        >
            {value}
            增加
        </Button>
    );
};
export default Demo;
