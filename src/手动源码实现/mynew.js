function myNew() {
    const Constractor = arguments[0];
    const args = Array.prototype.slice.call(arguments,1);

    const newObj = {};
    newObj.__proto__ = Constractor.prototype;

    const ref = Constractor.apply(newObj,args);

    return ref && typeof ref === "object" ? ref : newObj;
}