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

        }

        _reject(error:any) {

        }

        then(onFulfilled,onRejected) {
            return new MyPromiseA((onFulfilledNext,onRejectedNext)=>{
                const fulfilled =  (val:any)=>{
                    
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