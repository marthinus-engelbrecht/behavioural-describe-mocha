import toTitleCase = require("title-case");

/// <reference path="globals.d.ts" />

['Given', 'When', 'And', 'UnitUnderTest'].forEach(declareLanguageBlock);

function getDescription(sentence: string) {
    console.log(this);
    return `Then ${sentence}`;
}

global.Then = Object.assign(function (sentence: string, func: (this: ITestCallbackContext, done: MochaDone) => PromiseLike<any> | void) {
    return it(getDescription(sentence), func)
}, {
    only(sentence: string, func: (this: ITestCallbackContext, done: MochaDone) => PromiseLike<any> | void) {
        return it.only(getDescription(sentence), func)
    },
    skip(sentence: string, func: (this: ITestCallbackContext, done: MochaDone) => PromiseLike<any> | void) {
        return it.skip(getDescription(sentence), func)
    },
    timeout(ms: number | string): void {
        it.timeout(ms)
    },

    state: 'failed' as ("failed" | "passed")
});

global.fThen = function (sentence: string, func?: (this: ITestCallbackContext, done: MochaDone) => PromiseLike<any> | void) {
    return it.only(`Then ${sentence}`, func)
};

global.xThen = function (sentence: string, func: (this: ITestCallbackContext, done: MochaDone) => PromiseLike<any> | void) {
    xit(`Then ${sentence}`, func)
};

function declareLanguageBlock(name) {
    function getDescription(sentence: string) {
        if(name === 'UnitUnderTest')
            return `${toTitleCase(name)}: ${sentence}`;
        else
            return `${toTitleCase(name)} ${sentence}`;
    }

    global[name] = Object.assign(function (sentence: string, func: (this: ISuiteCallbackContext) => void) {
        return describe(getDescription(sentence), func)
    }, {
        only(sentence: string, func: (this: ISuiteCallbackContext) => void) {
            return describe.only(getDescription(sentence), func)
        },
        skip(sentence: string, func: (this: ISuiteCallbackContext) => void) {
            return describe.skip(getDescription(sentence), func)
        },
        timeout(ms: number | string): void {
            describe.timeout(ms)
        }
    });

    global['x' + name] = function (sentence: string, func: (this: ISuiteCallbackContext) => void) {
        return xdescribe(getDescription(sentence), func)
    };

    global['f' + name] = function (sentence: string, func: (this: ISuiteCallbackContext) => void) {
        return describe.only(getDescription(sentence), func)
    };
}
