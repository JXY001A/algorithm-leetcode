Function.prototype.mybind = (thisArg)=>{
    if(typeof this !== 'function') {
        throw TypeError('bind must be is a fuction');
    }

    const nop = function() {}
    const args = Array.prototype.slice.call(arguments,1);
    const self = this;
    const bound = ()=>{
        self.apply(
            this instanceof nop ? this : thisArg,
            args.contact(Array.prototype.slice.call(arguments)),
        );
    }

    if(self.prototype) {
        nop.prototype = self.prototype;
    }

    bound.prototype = new nop();

    return bound;
}