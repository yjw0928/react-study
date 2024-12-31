import Demo1 from './1';
import Demo2 from './3';
import Demo3 from './2';
import { Demo20240801 } from './4';
import Demo4 from './useLayoutEffect';
import Demo5 from './reduxDemo/PageDemo';
import Demo6 from './Use';
import Demo7 from './useDeferredValue';

export const MENUS = [
    {
        key: '/20220829',
        label: 'hook组件渲染流程',
        page: Demo1,
    },
    {
        key: '/20230131',
        label: 'useEffect探索',
        page: Demo2,
    },
    {
        key: '/20240801',
        label: '循环渲染',
        page: Demo3,
    },
    {
        key: '/20240802',
        label: '组件执行顺序',
        page: Demo20240801,
    },
    {
        key: '/20240804',
        label: '页面刷新帧数',
        page: Demo4,
    },
    {
        key: '/20240811',
        label: 'ReduxJS-Toolkit',
        page: Demo5,
    },
    {
        key: '/20241230',
        label: 'use',
        page: Demo6,
    },
    {
        key: '/20241231',
        label: 'useDeferredValue',
        page: Demo7,
    },
];
