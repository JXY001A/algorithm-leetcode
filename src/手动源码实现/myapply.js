Function.prototype.myapply = function(thisArg) {
    if(typeof this !== "function") {
        throw TypeError('myapply must be called by a function');
    }

    const context = thisArg || window;
    const fnSymbol = Symbol('fn');
    context[fnSymbol] = this;

    const args = arguments[1] || [];
    const result = context[fnSymbol](...args);

    delete context[fnSymbol];
    
    return result;
}