'use stict';

function Route(name, htmlVar, defaultRoute) {
    try {
        if(!name || !htmlVar) {
            throw 'error: name and htmlVar params are mandatories';
        }
        this.constructor(name, htmlVar, defaultRoute);
    } catch (e) {
        console.error(e);
    }
}

Route.prototype = {
    name: undefined,
    htmlVar: undefined,
    default: undefined,
    constructor: function (name, htmlVar, defaultRoute) {
        this.name = name;
        this.htmlVar = htmlVar;
        this.default = defaultRoute;
    },
    isActiveRoute: function (hashedPath) {
        return hashedPath.replace('#', '') === this.name; 
    }
}