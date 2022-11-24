## JEST library 

    This library is Javascript Testing Framework with.
    To install this library, use following command
        - npm install --save-dev jest

    To explore our file to jest, always save our testing file with extension .test.js

### How to write text cases
    Using test and it, we can write test cases. It takes two parameters.
    1. String i.e. name of the test case
    2. callback to assert something

### Describe   
    To combine all similar type of test cases in single block

### Matchers:
    Matchers are used to test values in different ways.
        expect(1).toBe(1)

### Async requests
    To test API requests we have to use async-await

### Setup and tear down
    There might be some operations that we need to perform after and before each test case.
    so for that we can use 
    - beforeEach:
            BeforeEach will execute ahead pf each test case
    - afterEach: 
            Succeeding each test case, afterEach will execute  
    - beforeAll: 
        prior to all test case
        execute once 
    - afterAll
        After all test cases
        execute once

    - In some cases, we want to execute this blocks for some cases only. In this scenario, add these block to specific describe block so that it will be applicable to those test cases only



### Mocks
When we want to test apis which are paid then 