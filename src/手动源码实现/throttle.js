function throttle(fn,delay) {
    let  prevTime = Date.now();
    const context = this;
    return function() {
        let currentTime =  Date.now();
        if(currentTime - prevTime>delay) {
            const args = arguments;
            fn.apply(context,args);
            prevTime = currentTime;
        }
    }
}