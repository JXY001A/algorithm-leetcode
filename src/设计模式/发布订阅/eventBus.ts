class EventEmitter {
    private handlers: Record<string,any[]>;
    constructor() {
        this.handlers = {};
    }

    $on(eventName:string,cb:Function) {
        if(!this.handlers[eventName]) {
            this.handlers[eventName] = [];
        }

        this.handlers[eventName].push(cb);
    }

    $emit(eventName:string,...args:any[]) {
        if(this.handlers[eventName]) {
            const handles = this.handlers[eventName]?.slice();
            handles.forEach((callback)=>{
                callback?.(...args);
            });
        }
    }

    $off(eventName:string,cb:Function) {
        if(this.handlers[eventName]) {
            const handles = this.handlers[eventName];
            const targetIndex = handles.indexOf(cb);
            targetIndex > -1 && handles.splice(targetIndex,1)
        }
    }

    $once(eventName:string,cb:Function) {
        const wrap = (...args:any)=>{
            cb?.(...args);
            this.$off(eventName,cb);
        }
        this.$on(eventName,wrap);
    }
}