const React = {
    createElement: function (type, props = {}, ...children) {

        return {
            type: type,
            props: {
                ...props,
                children: children.map((child) =>
                    typeof child === 'object' ? child : this.createTextElement(child),
                ),
            }
        }
    },

    createTextElement: function (text) {
        return {
            type: 'TEXT_ELEMENT',
            props: {
                nodeValue: text,
                children: [],
            },
        }
    },

}
function createDom(fiber) {
    const dom =
        fiber.type === 'TEXT_ELEMENT'
            ? document.createTextNode('')
            : document.createElement(fiber.type);

    updateDom(dom, {}, fiber.props);
    return dom;
}

function updateDom(dom, prevProps, nextProps) {
    // 删除旧属性
    Object.keys(prevProps)
        .filter(name => name !== 'children')
        .forEach(name => {
            dom[name] = '';
        });

    // 添加新属性
    Object.keys(nextProps)
        .filter(name => name !== 'children')
        .filter(name => prevProps[name] !== nextProps[name])
        .forEach(name => {
            dom[name] = nextProps[name];
        });

}

let currentRoot = null; // 当前渲染的根
let deletions = null; // 需要删除的节点
let nextUnitOfWork = null; // 下一个工作单元
let wipRoot = null; // 正在工作的 Fiber 树的根

const render = (element, container) => {
    // 当前正在进行的工作根
    wipRoot = {
        dom: container, //渲染目标的 DOM 容器
        props: {
            children: [element], //要渲染的元素（例如 React 元素）
        },
        alternate: currentRoot, //当前渲染的根（如果存在）
    }

    nextUnitOfWork = wipRoot;
    deletions = [];

}

function createFiber(element, parent) {
    return {
        // 节点类型
        type: element.type,
        // 属性
        props: element.props,
        // 关联的 DOM
        dom: null,
        // 父节点
        parent,
        child: null,
        // 子节点
        sibling: null,
        alternate: null, // 对应的前一次 Fiber 节点
        effectTag: null, // 'PLACEMENT', 'UPDATE', 'DELETION'
    }
}


function workLoop(deadline) {
    let shouldYield = false;
    while (nextUnitOfWork && !shouldYield) {
        nextUnitOfWork = performUnitOfWork(nextUnitOfWork);

        shouldYield = deadline.timeRemaining() < 1;
        if (shouldYield) {
            console.log('nextUnitOfWork', nextUnitOfWork)
        }
    }

    if (!nextUnitOfWork && wipRoot) {
        commitRoot();
    }

    requestIdleCallback(workLoop)
}


requestIdleCallback(workLoop)



function performUnitOfWork(fiber) {

    // 创建 dom
    if (!fiber.dom) {
        fiber.dom = createDom(fiber);
    }

    const elements = fiber.props.children;
    // diff算法比较节点
    reconcileChildren(fiber, elements);

    // 找下一个工作单元
    // 找到子节点直接返回
    if (fiber.child) {
        return fiber.child;
    }
    // 找不到子节点就找兄弟
    let nextFiber = fiber;
    while (nextFiber) {
        // 找下一个兄弟节点，找到了就返回
        if (nextFiber.sibling) {
            return nextFiber.sibling;
        }
        // 找不到下一个节点就回到父节点
        nextFiber = nextFiber.parent;
    }
    return null;
}

function reconcileChildren(wipFiber, elements) {
    let index = 0;
    // 旧的 fiber 树
    let oldFiber = wipFiber.alternate && wipFiber.alternate.child;
    let prevSibling = null;
    //为每一个元素生成Fiber节点
    while (index < elements.length || oldFiber != null) {
        const element = elements[index];
        let newFiber = null;
        // 比较类型
        const someType = oldFiber && element && element.type === oldFiber.type;
        // 如果是一样的就复用
        if (someType) {
            newFiber = {
                type: oldFiber.type,
                props: element.props,
                dom: oldFiber.dom,
                parent: wipFiber,
                alternate: oldFiber,
                effectTag: 'UPDATE',
            }
        }
        // 如果节点存在但类型不一样就新增
        if (element && !someType) {
            newFiber = createFiber(element, wipFiber);
            newFiber.effectTag = 'PLACEMENT';
        }
        // 如果旧节点存在但新节点不存在，删除旧节点
        if (oldFiber && !someType) {
            oldFiber.effectTag = 'DELETION';
            deletions.push(oldFiber);
        }
        oldFiber = oldFiber && oldFiber.sibling;
        // 第一个子节点直接插入到父节点的child
        if (index === 0) {
            wipFiber.child = newFiber;
        } else if (element) {
            // 后面的子节点插入到前一个兄弟节点的sibling
            prevSibling.sibling = newFiber;
        }
        // 将当前节点作为上一个兄弟节点进行更新
        prevSibling = newFiber;
        index++
    }
}

function commitRoot() {
    deletions.forEach(commitWork);
    console.log("wipRoot======>", wipRoot)
    commitWork(wipRoot.child || wipRoot.sibling);
    // 将执行完的root更新到currentRoot
    currentRoot = wipRoot;
    wipRoot = null;
}
// 更新单个fiber节点
function commitWork(fiber) {
    if (!fiber) {
        return;
    }

    const domParent = fiber.parent.dom;

    if (fiber.effectTag === 'PLACEMENT' && fiber.dom != null) {
        domParent.appendChild(fiber.dom);
    } else if (fiber.effectTag === 'UPDATE' && fiber.dom != null) {
        updateDom(fiber.dom, fiber.alternate.props, fiber.props);
    } else if (fiber.effectTag === 'DELETION') {
        domParent.removeChild(fiber.dom);
    }

    commitWork(fiber.child);
    commitWork(fiber.sibling);
}

const elements1 = []
for (let i = 0; i < 1000; i++) {
    elements1.push(
        React.createElement('div', { key: i }, i)
    )
}

const elements2 = []
for (let i = 0; i < 1000; i++) {
    elements2.push(
        React.createElement('div', { key: i }, i + 'a')
    )
}

// render(
//     React.createElement('div', {},
//         ...elements1
//     ), document.getElementById('root'))

// setTimeout(() => {
//     render(
//         React.createElement('div', {},
//             ...elements2
//         ), document.getElementById('root'))
// }, 1000)
