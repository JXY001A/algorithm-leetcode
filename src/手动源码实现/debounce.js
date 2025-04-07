function debounce (fn,wait) {
    let timeOut;
    const context = this;
    return function () {
        const args = arguments;
        if(timeOut) clearTimeout(timeOut);
        timeOut = setTimeout(() => {
            fn.appply(context,args);
        }, wait);
    }
}