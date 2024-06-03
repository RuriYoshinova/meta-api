module.exports = function({ browser, request, client, log, api, utils, Language }) {
    async function evalCode(code, callback) {
        return eval(code);
    }

    async function evalFunction(code, callback) {
        const asyncFunction = new Function('return ' + code);
        return asyncFunction({ browser, request, client, log, api, utils, Language, callback });
    }

    return Object.assign(evalCode, {
        evalCode,
        evalFunction
    })
}