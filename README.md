# Introduction

Convenience functions for allowing clearer use of given, when, the bdd language when using [Mocha](https://mochajs.org/).

## Usage 

```typescript
Given('I have some pre-configured condition', function(){
    beforeEach(function() {
      setupPreConfiguredCondition();
    })
    
    When('I take some action', function() {
        const resultantBehaviour, expectedBehaviour = 'Dance like a monkey';
        beforeEach(function() {
          resultantBehaviour = takeSomeAction('Please dance like a monkey')
        })
        
      Then('I expect certain behaviour', function() {
        expect(resultantBehaviour).to.equal(expectedBehaviour)
      })
    })
})


function takeSomeAction(request) {
    console.log(request);
    
    return 'Dance like a monkey'
}

function setupPreConfiguredCondition(){
    console.log('The dance floor is ready');
}
```

### Excluding Tests: 

* `xGiven()`/`Given.skip()`
* `xWhen()`/`When.skip()` 
* `xThen`/`Then.skip()` 
* `xAnd`/`And.skip()` 
* `xUnitUnderTest`/`UnitUnderTest.skip()` 

can be used to exclude tests. 

### Focused Tests:

* `fGiven`/`Given.only()` 
* `fWhen`/`When.only()` 
* `fThen`/`Then.only()` 
* `fAnd`/`And.only()` 
* `fUnitUnderTest`/`UnitUnderTest.only()` 

can be used for focusing on a specific set of tests.
