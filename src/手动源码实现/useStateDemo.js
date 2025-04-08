let hookIndex = 0;
let currentHook = null;
let curretRenderingFilber = null;

class FilberNode {
    constructor() {
        this.memorizedState = null; // hoos 链表
        this.stateNode = null; // 组件实例
    }
}

class Hook {
    constructor() {
        this.memorizedState = null;// 状态：如 useState 
        this.next = null;
    }
}

class StateHook extends Hook{
    constructor(initialState) {
        super();
        this.memorizedState = initialState;
        this.queue = [];// 状态队列
    }
}

class EffectHook extends Hook {
    constructor(effect,deps) {
        super();
        this.effect = effect; // 回掉函数
        this.deps = deps;
        this.cleanup = null; // 清除函数
    }
}


function useState(initialState) {
    const filber = curretRenderingFilber;
    let hook;
    if(!filber?.memorizedState) {
        hook = new StateHook(initialState);
        filber.memorizedState = hook;
    }else {
        hook = filber.memorizedState;
        for(let i=0;i<hookIndex;i+=1) {
            hook = hook.next;
        }

        if(hook.queue.length>0) {
            let newState = hook.memorizedState;
            for(const action of hook.queue) {
                newState = typeof action === "function"? action(newState) : action;
            }
            hook.memorizedState = newState;
            hook.queue = [];
        }
    }

    const setState = (action)=>{
        hook.queue.push(action);
        // 触发渲染
        scheduleRender();
    }

    hookIndex+=1;
    if(currentHook) {
        currentHook.next = hook;
    }
    // 指针移动
    currentHook = currentHook.next;

    return [hook.memorizedState,setState];
}

const useEffect = (effect,deps)=>{
    const filber = curretRenderingFilber;
    let hook;
    if(!filber?.memorizedState) {
        hook = new EffectHook(effect,deps);
        filber.memorizedState = hook;
    }else {
        hook = filber?.memorizedState;
        for(let i=0;i<hookIndex;i+=1) {
            hook = hook.next;
        }
    }

    if(currentHook) {
        currentHook.next = hook;
        currentHook = currentHook.next;
    }

    const runEffect = ()=>{
        if(hook.cleanup) hook.cleanup();
        hook.cleanup =  hook.effect();
    }

    if(!deps || deps.some((d,i)=> d!==hook.deps?.[i])) {
        runEffect();
        hook.deps = deps;
    }
}

