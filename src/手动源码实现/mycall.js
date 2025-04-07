Function.prototype.mycall = (thisArg)=>{
    if(typeof this !== "function") {
        throw TypeError('call must be called by a function');
    }

    const context = thisArg || window;

    const fnSymbol = Symbol('fn');
    context[fnSymbol] = this;
    const args = Array.prototype.slice(arguements).slice(1)
    const result = context[fnSymbol](...args);

    delete context[fnSymbol];

    return result;
}