Feature: Create and delete technologies API tests

    @attachStatusAndBodyToReporter
    @deleteAllTeams
  Scenario Outline: Create an technology with valid data through an HTTP request
  Description: Robot wants to create a new technology through an HTTP request - method: POST. Then, using method GET,
  robot will check if technology is created.
  Expected result: GET technology request  returns: Status code 200, and created technology object.

    Given Robot navigates to the login page
    When Robot create technology with name: <technologyName>, and expect status code <statusCode>
    Then Robot use GET technology request, and expect status code <statusCode>

    Examples:
      | technologyName | statusCode |
      | technology1    |    200     |


    @attachStatusAndBodyToReporter
    @deleteAllTechnology
  Scenario Outline: Delete an existing technology through an HTTP request
  Description: Robot wants to delete a existing technology through an HTTP request - method: Delete. Then, using method GET,
  robot will check if technology is deleted.
  Expected result: Delete technology returns - Status code 200
  
    Given Robot navigates to the login page
    And Robot create technology with name: <technologyName>, and expect status code <statusCode>
    When Robot delete technology with name: <technologyName> through an HTTP request, and expect status code <statusCode>
    Then Robot use GET technology request, and expect status code <statusCodeFromGet>

    Examples:
      | technologyName | statusCode | statusCodeFromGet |
      | technology2    |    200     |   404             |


    @attachStatusAndBodyToReporter
    @deleteAllTechnology
  Scenario Outline: Try to create a new technology if name already exist
  Description: Robot wants to create a new technology through an HTTP request with name which already
  exist - method: POST.
  Expected result: POST technology returns - Status code 400, and request response
  "technology_title":"Technology title already exists"

    Given Robot navigates to the login page
    And Robot create technology with name: <technologyName>, and expect status code <statusCode>
    When Robot create technology with name: <technologyName>, expect status code <statusCode1>, and response <message>


    Examples:
      | technologyName | statusCode | statusCode1       | message         |
      | technology3    |    200     |   400             | Technology title already exists |


    @attachStatusAndBodyToReporter
    @deleteAllTechnology
  Scenario Outline: Try to create a new technology if name consist of <numOfChar> characters
  Description: Try to create a new technology through an HTTP request if name consist of: 1 character, 31 characters and
  without characters - method: POST.
  Expected results: POST technology returns - Status code 400, and request response
  1. case:  Title needs to be between 2 and 30
  2. case:  Title needs to be between 2 and 30
  3. case:  Title is required
    Given Robot navigates to the login page
    When Robot try to create a tech if name contains <numOfChar> characters, expect status code <statusCode>, and response <message>

    Examples:
    | statusCode | numOfChar | message |
    |    400     |   1       | Title needs to be between 2 and 30 |
    |    400     |   31      | Title needs to be between 2 and 30 |
    |    400     |           | Title is required |









