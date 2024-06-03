module.exports = function({ browser, request, client, log, api, utils, Language }) {
    return async function(listAPI, callback) {
        if (!callback || !Function.isFunction(callback)) callback = utils.makeCallback();
        if (!listAPI) return callback(Language('addAPI', 'passAList'));
        if (!Object.isObject(listAPI)) return callback(Language('addAPI', 'needAnObject'));
        Object.entries(listAPI).forEach(([key, value]) => {
            if (!Function.isFunction(value)) return callback(Language('addAPI', 'wrongFormat', utils.getType(value)));
            api[key] = value({ browser, request, client, log, api, utils, Language });
        })
        return callback(null, api);
    }
}