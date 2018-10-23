export function bindAll(context,arrFunc){
    arrFunc.forEach(item => {
        context[item] = context[item].bind(context);
    });
}