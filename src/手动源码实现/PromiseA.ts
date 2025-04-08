(function () {
    const PENDING:string = 'pending';
    const FULFILLED='fulfilled';
    const REJECTED = 'rejected';

    class MyPromiseA {
        constructor(handel:Function) {
            try {
                handel(this._resolve,this._reject);
            } catch (error) {
                this._reject(error);
            }
        }
        fulfillQueues:Function[]=[];
        rejectQueues: Function[] = [];
        value:any = undefined;
        status:string = PENDING;

        _resolve (val:any) {
            const run = ()=>{
                if(this.status !== PENDING) return;
                this.status = FULFILLED;
                const fulfilled = (value)=>{
                    let cb= this.fulfillQueues.shift();
                    while(cb) {
                        cb(value);
                        cb= this.fulfillQueues.shift();
                    }
                }
                const rejected = (error)=>{
                    let cb= this.rejectQueues.shift();
                    while(cb) {
                        cb(error);
                        cb = this.rejectQueues.shift();
                    }
                }

                if(val instanceof MyPromiseA) {
                    val.then((v)=>{
                        this.value = v;
                        fulfilled(v);
                    },(error)=>{
                        this.value = error;
                        rejected(error);
                    });
                }else {
                    this.value = val;
                    fulfilled(val);
                }
            }
            setTimeout(() => {
                run();
            });
        }

        _reject(error:any) {
            if( this.status !== PENDING) return;
            const run = ()=>{
                this.status = REJECTED; 
                this.value = error;
                let cb = this.rejectQueues.shift();
                while(cb) {
                    cb(error);
                    cb = this.rejectQueues.shift();
                }
            }
            setTimeout(() => {
                run();
            });
        }

        then(onFulfilled,onRejected) {
            const { value,status } = this;
            return new MyPromiseA((resolve,reject)=>{
                const fulfilled =  (val:any)=>{
                    try {
                        const res = onFulfilled(val);
                        if(res instanceof MyPromiseA) {
                            res.then(resolve,reject);
                        }else {
                            resolve(res);
                        }
                    } catch (error) {
                        reject(error);
                    }
                }

                const rejected = (error)=>{
                    try {
                        const res = onRejected(error);
                        if(res instanceof MyPromiseA) {
                            res.then(resolve,reject);
                        }else {
                            reject(res);
                        }
                    } catch (error) {
                        reject(error);
                    }
                }

                switch (status) {
                    case PENDING:
                        this.fulfillQueues.push(fulfilled);
                        this.rejectQueues.push(rejected);
                        break;
                    case FULFILLED:
                        fulfilled(value);
                        break;
                    case REJECTED:
                        rejected(value);
                        break;
                }
                
            });
        }

        catch(onReject) {

        }

        finally(cb) {}

        static resolve(val:any) {
            return new MyPromiseA((resolve,reject)=>{
                resolve(val);
            });
        }

        static reject(val:any) {
            return new MyPromiseA((resolve,reject)=>{
                reject(val);
            });
        }

        static race(pList:MyPromiseA[]) {
            return new MyPromiseA((resolve,reject)=>{
                pList.forEach((pItem,pItemIndex)=>{
                    pItem.then((val:any)=>{
                        resolve(val);
                    },(error)=>{
                        reject(error);
                    });
                });
            });
        }

        static all(pList:MyPromiseA[]) {
            return new MyPromiseA((resolve:any,reject:any)=>{
                let pCount = pList.length;
                const result:any[] = [];
                pList.forEach((pItem,pItemIndex)=>{
                    pItem.then((val)=>{
                        pCount-=1;
                        result[pItemIndex] = val;
                        if(pCount === 0) {
                            resolve(result);
                        }
                    },(error)=>{
                        reject(error);
                    });
                });
            });
        }

    }
})();