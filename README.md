## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## The Assets folder contains the screenshots of unit testing and integration testing 
Please refer TESTING SCREENSHOTS.docs

## The unit testing file which contains the spec is named as - 
login.component.spec.ts

## The end to end  testing main files which contains the test are under e2e folder with name as - 
base.po.ts, mainPage.e2e-spec.ts

## Description of project
The project basically contains a login component which on successful redirection will navigate to 
dashboard component, and covers the unit testing and integration testing for it

The app component will incude a router-outlet, the project initially navigate to login component and
then via loginservice it will check whether the user is authenticated or not.

Unit testing for it will contain a LoginMockService into login spec, the mock service will be under 
src - app - tests folder with name as login.mock.service.ts

Integration testing for it will be under e2e folder and all the files will be in src folder under that.



