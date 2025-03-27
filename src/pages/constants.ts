import Demo1 from './1';
import Demo2 from './3';
import Demo3 from './2';
import { Demo20240801 } from './4';
import Demo4 from './useLayoutEffect';
import Demo5 from './reduxDemo/PageDemo';
import Demo6 from './Use';
import Demo7 from './useDeferredValue';
import Demo8 from './useActionState';
import Demo9 from './useOptimistic';
import Demo10 from './useTransition';
import Demo11 from './useSyncExternalStore';
import { lazy } from 'react';

const Demo12 = lazy(() => import('./ReactLazy'));

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
    {
        key: '/20250108',
        label: 'useActionState',
        page: Demo8,
    },
    {
        key: '/20250109',
        label: 'useOptimistic',
        page: Demo9,
    },
    {
        key: '/20250110',
        label: 'useTransition',
        page: Demo10,
    },
    {
        key: '/20250111',
        label: 'useSyncExternalStore',
        page: Demo11,
    },
    {
        key: '/20250112',
        label: 'react-lazy',
        page: Demo12,
    },
    {
        key: '/20250319',
        label: 'HTML转DOCX',
        page: lazy(() => import('./generateDocx')),
    },
];
