Feature: Create and delete technologies E2E tests

    @takeScreenshotE2E
    @deleteAllTechnology
  Scenario Outline: Create an technology with valid data
  Description: Robot wants to create a new technology with valid data. Robot fills technology title field with value,
  and robot clicks on the Submit button on tech form.
  Expected result: New technology is created and displayed

    Given Robot navigates to the project page
    When Robot clicks on the technologies button from the menu
    And Robot clicks on the create technology button
    And Robot fills technology title field with value: <techTitle>
    And Robot clicks on the Submit button on tech form
    Then Robot check if technology with name <techTitle> is created and displayed

    Examples:
      | techTitle    |
      | technologyJS |


    @takeScreenshotE2E
    @deleteAllTechnology
  Scenario Outline: Try to create a new technology if name already exist - e2e.
  Expected result: App should show an error: Technology title already exists.

    Given Robot create technology with name: <techTitle>, and expect status code <statusCode>
    And Robot navigates to the project page
    When Robot clicks on the technologies button from the menu
    And Robot clicks on the create technology button
    #And Robot clicks on the technology with title <techTitle>
    And Robot fills technology title field with value: <techTitle>
    And Robot clicks on the Submit button on tech form
    Then App should show an error message <message>

    Examples:
      | techTitle    | message                         | statusCode |
      | technologyJS1| Technology title already exists | 200        |


    @takeScreenshotE2E
    @deleteAllTechnology
  Scenario Outline: Try to create a new technology if name consist of <numOfChar> characters - e2e test
    Description: Try to create a new technology if name consist of: 1 character, 31 characters and
    without characters - method: POST.
    Expected results: App should show following errors:
    1. case:  Title needs to be between 2 and 30
    2. case:  Title needs to be between 2 and 30
    3. case:  Title is required

    Given Robot navigates to the technologies page
    When Robot clicks on the technologies button from the menu
    And Robot clicks on the create technology button
    And Robot try to create a tech if name contains <numOfChar> characters
    And Robot clicks on the Submit button on tech form
    Then App should show an error message <message>

    Examples:
      | numOfChar | message                            |
      | 1         | Title needs to be between 2 and 30 |
      | 31        | Title needs to be between 2 and 30 |
      |           | Title is required                  |

  








