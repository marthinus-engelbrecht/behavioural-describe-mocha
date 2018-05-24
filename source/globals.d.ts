import IContextDefinition = Mocha.IContextDefinition;
import ITestDefinition = Mocha.ITestDefinition;
import ISuite = Mocha.ISuite;
import ITestCallbackContext = Mocha.ITestCallbackContext;
import ITest = Mocha.ITest;
import ISuiteCallbackContext = Mocha.ISuiteCallbackContext;

declare namespace NodeJS {
    export interface Global {
        Given: IContextDefinition;
        When: IContextDefinition;
        And: IContextDefinition;
        UnitUnderTest: IContextDefinition;
        Then: ITestDefinition;
        fGiven: fIContextDefinition;
        fWhen: fIContextDefinition;
        fAnd: fIContextDefinition;
        fUnitUnderTest: fIContextDefinition;
        fThen: fITestDefinition;
        xGiven: xIContextDefinition;
        xWhen: xIContextDefinition;
        xThen: xITestDefinition;
        xAnd: xIContextDefinition;
        xUnitUnderTest: xIContextDefinition;
    }
}

declare const Given: IContextDefinition;
declare const When: IContextDefinition;
declare const And: IContextDefinition;
declare const UnitUnderTest: IContextDefinition;
declare const Then: ITestDefinition;
declare const fGiven: fIContextDefinition;
declare const fWhen: fIContextDefinition;
declare const fAnd: fIContextDefinition;
declare const fUnitUnderTest: fIContextDefinition;
declare const fThen: fITestDefinition;
declare const xGiven: xIContextDefinition;
declare const xWhen: xIContextDefinition;
declare const xThen: xITestDefinition;
declare const xAnd: xIContextDefinition;
declare const xUnitUnderTest: xIContextDefinition;

type xIContextDefinition = (description: string, callback: (this: ISuiteCallbackContext) => void) => void;
type fIContextDefinition = (description: string, callback: (this: ISuiteCallbackContext) => void) => ISuite;
type xITestDefinition = (expectation: string, callback?: (this: ITestCallbackContext, done: MochaDone) => PromiseLike<any> | void) => void;
type fITestDefinition = (expectation: string, callback?: (this: ITestCallbackContext, done: MochaDone) => PromiseLike<any> | void) => ITest;